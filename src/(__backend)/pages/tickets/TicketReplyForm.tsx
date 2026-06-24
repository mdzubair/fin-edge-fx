import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "../../../redux/store";
import {
  getTicket,
  replyTicket,
  closeTicket,
} from "../../../redux/slice/ticket";
import { getTicketReplies } from "../../../redux/slice/ticket-replies";

interface ReplyFormData {
  message: string;
}

interface TicketReply {
  _id: string;
  message: string;
  createdAt: string;
  userType?: number;
  userId?: {
    firstName?: string;
    userType?: number;
  };
}

export default function TicketReplyForm() {
  const { tokenId } = useParams<{ tokenId: string }>();

  const dispatch = useDispatch<AppDispatch>();

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const prevCount = useRef(0);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const { ticket, loading } = useSelector(
    (state: RootState) => state.ticket
  );

  const { replies } = useSelector(
    (state: RootState) => state.ticketReply
  );

  const { user } = useSelector((state: RootState) => state.auth);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReplyFormData>({
    defaultValues: { message: "" },
  });

  /* ---------------- LOAD DATA ---------------- */
  const loadData = useCallback(async () => {
    if (!tokenId) return;

    await Promise.all([
      dispatch(getTicket(tokenId)),
      dispatch(getTicketReplies(tokenId)),
    ]);
  }, [dispatch, tokenId]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  /* ---------------- POLLING (NO WEBSOCKET) ---------------- */
  useEffect(() => {
    if (!tokenId || ticket?.status === "closed") return;

    const interval = setInterval(() => {
      dispatch(getTicketReplies(tokenId));
    }, 5000);

    return () => clearInterval(interval);
  }, [dispatch, tokenId, ticket?.status]);

  /* ---------------- AUTO SCROLL ---------------- */
  useEffect(() => {
    if (!replies?.length) return;

    const isFirstLoad = prevCount.current === 0;
    const hasNew = replies.length > prevCount.current;

    if (isFirstLoad || hasNew) {
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }

    prevCount.current = replies.length;
  }, [replies]);

  /* ---------------- SEND REPLY ---------------- */
  const onSubmit = async (data: ReplyFormData) => {
    if (!tokenId || !user?._id) return;

    const message = data.message.trim();
    if (!message) return;

    try {
      setIsSubmitting(true);

      await dispatch(
        replyTicket({
          replyData: {
            ticketId: tokenId,
            userId: user._id,
            message,
          },
        })
      ).unwrap();

      reset();

      await dispatch(getTicketReplies(tokenId));
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ---------------- CLOSE TICKET ---------------- */
  const handleCloseTicket = async () => {
    if (!tokenId) return;

    if (!window.confirm("Close this ticket?")) return;

    try {
      setIsClosing(true);

      await dispatch(closeTicket(tokenId)).unwrap();
      await dispatch(getTicket(tokenId));
    } catch (err) {
      console.error(err);
    } finally {
      setIsClosing(false);
    }
  };
// console.log(ticket.status);

  /* ---------------- UI ---------------- */
  return (
    <div className="container-fluid py-4">
      <div
        style={{
          background: "#222e3c",
          borderRadius: "24px",
          height: "600px",
          display: "flex",
          flexDirection: "column",
          border: "1px solid #34495e",
          overflow: "hidden",
        }}
      >
        {/* HEADER */}
        <div
          className="d-flex justify-content-between align-items-center px-4 py-3"
          style={{
            background: "#1b2430",
            borderBottom: "1px solid #34495e",
          }}
        >
          <div>
            <div className="d-flex align-items-center gap-2">
              <h5 className="mb-0 text-muted">
                #{ticket?.token}
              </h5>

              {/* <span
                className={`badge ${
                  ticket?.status === "closed"
                    ? "text-danger border border-danger"
                    : "text-success border border-success"
                }`}
              >
                {ticket?.status}
              </span> */}
            </div>

            <small style={{ color: "#94a3b8" }}>
              {ticket?.subject}
            </small>
          </div>
          <div className="btn-group">
              <Link to="/admin/help-and-support" className="btn btn-outline-primary">
              Back
            </Link>
            {ticket?.status == "0"? (
              <button onClick={handleCloseTicket} disabled={isClosing} className="btn btn-outline-success">
                {isClosing ? "Closing..." : "Close Ticket"}
              </button>
            ):(
              <button className="btn btn-outline-danger">
                Closed
              </button>
            )}
          </div>
        </div>

        {/* MESSAGES */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "24px",
            background:
              "linear-gradient(180deg,#222e3c,#1f2937)",
          }}
        >
          {loading && !replies?.length ? (
            <div className="text-center text-light mt-5">
              Loading...
            </div>
          ) : replies?.length ? (
            replies.map((reply: TicketReply) => {
              const isSupport =
                reply.userType === 1;

              return (
                <div
                  key={reply._id}
                  className={`d-flex mb-3 ${
                    isSupport
                      ? "justify-content-end"
                      : "justify-content-start"
                  }`}
                >
                  <div style={{ maxWidth: "70%", marginLeft: reply?.userId?.userType === 1 ? "50px" : "0px", }}>
                    <div
                      className="small mb-1"
                      style={{
                        color: isSupport
                          ? "#60a5fa"
                          : "#94a3b8",
                      }}
                    >
                      {isSupport
                        ? "Support"
                        : reply.userId?.firstName ||
                          "Customer"}
                    </div>

                    <div
                      style={{
                        background: isSupport
                          ? "linear-gradient(135deg,#4f8cff,#2563eb)"
                          : "#2d3b4d",
                        color: "#fff",
                        padding: "12px 16px",
                        borderRadius: isSupport
                          ? "18px 18px 4px 18px"
                          : "18px 18px 18px 4px",
                        border: isSupport
                          ? "none"
                          : "1px solid #3d5268",
                        wordBreak: "break-word",
                      }}
                    >
                      {reply.message}
                    </div>

                    <div
                      className="small mt-1"
                      style={{ color: "#94a3b8" }}
                    >
                      {new Date(
                        reply.createdAt
                      ).toLocaleString()}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center text-light mt-5">
              No messages yet
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* FOOTER */}
        <div
          style={{
            background: "#1b2430",
            borderTop: "1px solid #34495e",
            padding: "16px",
          }}
        >
          {ticket?.status === "closed" && (
            <div
              className="mb-3 px-3 py-2"
              style={{
                background: "rgba(239,68,68,.15)",
                border: "1px solid rgba(239,68,68,.3)",
                color: "#f87171",
                borderRadius: "10px",
              }}
            >
              Ticket is closed. Replies disabled.
            </div>
          )}
        {ticket?.status == "0"&& (
          <form onSubmit={handleSubmit(onSubmit)}>
            <textarea
              rows={3}
              disabled={ticket?.status === "closed"}
              placeholder="Type your reply..."
              className={`form-control ${
                errors.message ? "is-invalid" : ""
              }`}
              style={{
                background: "#293849",
                border: "1px solid #3d5268",
                color: "#fff",
                borderRadius: "14px",
                resize: "none",
                padding: "14px",
              }}
              {...register("message", {
                required:
                  "Reply message is required",
                validate: (v) =>
                  v.trim().length > 0 ||
                  "Reply message is required",
              })}
            />

            {errors.message && (
              <small className="text-danger d-block mt-2">
                {errors.message.message}
              </small>
            )}

            <div className="d-flex justify-content-end mt-3">
              <button
                type="submit"
                disabled={
                  isSubmitting ||
                  ticket?.status === "closed"
                }
                className="btn btn-outline-primary"
               
              >
                {isSubmitting
                  ? "Sending..."
                  : "Send Message"}
              </button>
            </div>
          </form>
        )}
        </div>
      </div>
    </div>
  );
}