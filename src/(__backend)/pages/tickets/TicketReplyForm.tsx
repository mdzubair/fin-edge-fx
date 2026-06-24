// import { useCallback, useEffect, useRef, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";

// import type { AppDispatch, RootState } from "../../../redux/store";
// import {
//   getTicket,
//   replyTicket,
//   closeTicket,
// } from "../../../redux/slice/ticket";
// import { getTicketReplies } from "../../../redux/slice/ticket-replies";

// interface ReplyFormData {
//   message: string;
// }

// export default function TicketReplyForm() {
//   const { tokenId } = useParams<{ tokenId: string }>();

//   const dispatch = useDispatch<AppDispatch>();

//   const messagesEndRef = useRef<HTMLDivElement>(null);
//   const prevReplyCount = useRef<number>(0);

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isClosing, setIsClosing] = useState(false);

//   const { ticket, loading } = useSelector(
//     (state: RootState) => state.ticket
//   );

//   const { replies } = useSelector(
//     (state: RootState) => state.tickeReply
//   );

//   const { user } = useSelector(
//     (state: RootState) => state.auth
//   );

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm<ReplyFormData>({
//     defaultValues: {
//       message: "",
//     },
//   });

//   const loadData = useCallback(async () => {
//     if (!tokenId) return;

//     try {
//       await Promise.all([
//         dispatch(getTicket(tokenId)),
//         dispatch(getTicketReplies(tokenId)),
//       ]);
//     } catch (error) {
//       console.error(error);
//     }
//   }, [dispatch, tokenId]);

//   useEffect(() => {
//     loadData();
//   }, [loadData]);

//   /**
//    * Fetch replies every second
//    */
//   useEffect(() => {
//     if (!tokenId) return;

//     const interval = setInterval(() => {
//       dispatch(getTicketReplies(tokenId));
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [dispatch, tokenId]);

//   /**
//    * Auto scroll only when new messages arrive
//    */
//   useEffect(() => {
//     if ((replies?.length || 0) > prevReplyCount.current) {
//       messagesEndRef.current?.scrollIntoView({
//         behavior: "smooth",
//       });
//     }

//     prevReplyCount.current = replies?.length || 0;
//   }, [replies]);

//   const onSubmit = async (data: ReplyFormData) => {
//     if (!tokenId || !user?._id) return;

//     const message = data.message.trim();

//     if (!message) return;

//     try {
//       setIsSubmitting(true);

//       await dispatch(
//         replyTicket({
//           replyData: {
//             ticketId: tokenId,
//             userId: user._id,
//             message,
//           },
//         })
//       ).unwrap();

//       reset();

//       dispatch(getTicketReplies(tokenId));
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleCloseTicket = async () => {
//     if (!tokenId) return;

//     const confirmed = window.confirm(
//       "Are you sure you want to close this ticket?"
//     );

//     if (!confirmed) return;

//     try {
//       setIsClosing(true);

//       await dispatch(closeTicket(tokenId)).unwrap();

//       await dispatch(getTicket(tokenId));

//     } catch (error) {
//       console.error(error);
//     } finally {
//       setIsClosing(false);
//     }
//   };

//   return (
//     <div className="container-fluid py-4">
//       <div
//         className="shadow-lg"
//         style={{
//           background: "#222e3c",
//           borderRadius: "24px",
//           overflow: "hidden",
//           height: "88vh",
//           border: "1px solid #34495e",
//         }}
//       >
//         {/* Header */}
//         <div
//           className="d-flex justify-content-between align-items-center px-4 py-3"
//           style={{
//             background: "#1b2430",
//             borderBottom: "1px solid #34495e",
//           }}
//         >
//           <div>
//             <div className="d-flex align-items-center gap-2">
//               <h5 className="fw-bold text-muted mb-0">
//                 #{ticket?.token}
//               </h5>

//               <span
//                 className={`badge rounded-pill ${
//                   ticket?.status === "closed"
//                     ? "border border-danger text-danger"
//                     : "border border-success text-success"
//                 }`}
//               >
//                 {ticket?.status === "closed"
//                   ? "Closed"
//                   : "Open"}
//               </span>
//             </div>

//             <small className="text-muted">
//               {ticket?.subject}
//             </small>
//           </div>

//           <div className="d-flex align-items-center gap-3">
//             {ticket?.status !== "closed" && (
//               <button
//                 onClick={handleCloseTicket}
//                 disabled={isClosing}
//                 className="btn btn-danger"
//               >
//                 {isClosing ? (
//                   <>
//                     <span className="spinner-border spinner-border-sm me-2" />
//                     Closing...
//                   </>
//                 ) : (
//                   "Close Ticket"
//                 )}
//               </button>
//             )}

//             <div className="text-end">
//               <div
//                 className="fw-semibold"
//                 style={{
//                   color: "#f8fafc",
//                 }}
//               >
//                 Support Chat
//               </div>

//               <small
//                 style={{
//                   color: "#94a3b8",
//                 }}
//               >
//                 Conversation
//               </small>
//             </div>
//           </div>
//         </div>

//         {/* Messages */}
//         <div
//           style={{
//             height: "calc(88vh - 180px)",
//             overflowY: "auto",
//             padding: "24px",
//             background:
//               "linear-gradient(180deg,#222e3c 0%,#1f2937 100%)",
//           }}
//         >
//           {loading ? (
//             <div className="h-100 d-flex justify-content-center align-items-center">
//               <div className="text-center">
//                 <div className="spinner-border text-primary mb-3" />
//                 <div style={{ color: "#94a3b8" }}>
//                   Loading conversation...
//                 </div>
//               </div>
//             </div>
//           ) : replies?.length ? (
//             replies.map((reply: any) => {
//               const isSupport =
//                 reply?.userId?.userType === 1 ||
//                 reply?.userType === 1;

//               return (
//                 <div
//                   key={reply._id}
//                   className={`d-flex mb-4 ${
//                     isSupport
//                       ? "justify-content-end"
//                       : "justify-content-start"
//                   }`}
//                 >
//                   <div
//                     style={{
//                       maxWidth: "75%",
//                     }}
//                   >
//                     <div
//                       className={`small fw-semibold mb-1 ${
//                         isSupport ? "text-end" : ""
//                       }`}
//                       style={{
//                         color: isSupport
//                           ? "#60a5fa"
//                           : "#94a3b8",
//                       }}
//                     >
//                       {isSupport
//                         ? "Support Team"
//                         : reply?.userId?.firstName ||
//                           "Customer"}
//                     </div>

//                     <div
//                       style={{
//                         background: isSupport
//                           ? "linear-gradient(135deg,#4f8cff,#2563eb)"
//                           : "#2d3b4d",
//                         color: "#fff",
//                         border: isSupport
//                           ? "none"
//                           : "1px solid #3d5268",
//                         borderRadius: isSupport
//                           ? "20px 20px 4px 20px"
//                           : "20px 20px 20px 4px",
//                         padding: "12px 18px",
//                         wordBreak: "break-word",
//                         boxShadow: isSupport
//                           ? "0 8px 25px rgba(37,99,235,.25)"
//                           : "none",
//                       }}
//                     >
//                       {reply.message}
//                     </div>

//                     <div
//                       className={`small mt-1 ${
//                         isSupport ? "text-end" : ""
//                       }`}
//                       style={{
//                         color: "#94a3b8",
//                       }}
//                     >
//                       {new Date(
//                         reply.createdAt
//                       ).toLocaleString()}
//                     </div>
//                   </div>
//                 </div>
//               );
//             })
//           ) : (
//             <div className="h-100 d-flex flex-column justify-content-center align-items-center">
//               <div
//                 style={{
//                   fontSize: "70px",
//                 }}
//               >
//                 💬
//               </div>

//               <h4
//                 className="mt-3"
//                 style={{
//                   color: "#f8fafc",
//                 }}
//               >
//                 No Replies Yet
//               </h4>

//               <p
//                 style={{
//                   color: "#94a3b8",
//                 }}
//               >
//                 Start the conversation below.
//               </p>
//             </div>
//           )}

//           <div ref={messagesEndRef} />
//         </div>

//         {/* Footer */}
//         <div
//           style={{
//             background: "#1b2430",
//             borderTop: "1px solid #34495e",
//             padding: "18px",
//           }}
//         >
//           {ticket?.status === "closed" && (
//             <div
//               className="alert alert-danger mb-3"
//               role="alert"
//             >
//               This ticket has been closed. No further
//               replies can be added.
//             </div>
//           )}

//           <form onSubmit={handleSubmit(onSubmit)}>
//   <div>
//     <textarea
//       rows={3}
//       disabled={ticket?.status === "closed"}
//       placeholder={
//         ticket?.status === "closed"
//           ? "This ticket is closed"
//           : "Type your reply..."
//       }
//       className={`form-control ${
//         errors.message ? "is-invalid" : ""
//       }`}
//       style={{
//         background:
//           ticket?.status === "closed"
//             ? "#1f2937"
//             : "#293849",
//         border: "1px solid #3d5268",
//         color: "#fff",
//         borderRadius: "18px",
//         resize: "none",
//         padding: "16px",
//         minHeight: "100px",
//       }}
//       {...register("message", {
//         required: "Reply message is required",
//         validate: (value) =>
//           value.trim().length > 0 ||
//           "Reply message is required",
//       })}
//     />

//     {errors.message && (
//       <small className="text-danger mt-2 d-block">
//         {errors.message.message}
//       </small>
//     )}

//     {ticket?.status === "closed" && (
//       <div
//         className="mt-2"
//         style={{
//           color: "#f59e0b",
//           fontSize: "14px",
//         }}
//       >
//         🔒 This ticket has been closed. Replies are disabled.
//       </div>
//     )}

//     <div className="d-flex justify-content-end mt-3">
//       <button
//         type="submit"
//         disabled={
//           isSubmitting ||
//           ticket?.status === "closed"
//         }
//         className="btn d-flex align-items-center fw-semibold"
//         style={{
//           minWidth: "180px",
//           height: "48px",
//           border: "none",
//           borderRadius: "14px",
//           background:
//             ticket?.status === "closed"
//               ? "#374151"
//               : "linear-gradient(135deg,#4f8cff,#2563eb)",
//           color: "#fff",
//           boxShadow:
//             ticket?.status === "closed"
//               ? "none"
//               : "0 8px 20px rgba(37,99,235,.30)",
//         }}
//       >
//         {isSubmitting ? (
//           <>
//             <span className="spinner-border spinner-border-sm me-2" />
//             Sending...
//           </>
//         ) : (
//           <>
//             <i className="bi bi-send-fill me-2"></i>
//             Send Message
//           </>
//         )}
//       </button>
//     </div>
//   </div>
// </form>
//         </div>
//       </div>
//     </div>
//   );
// }



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
    (state: RootState) => state.tickeReply
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