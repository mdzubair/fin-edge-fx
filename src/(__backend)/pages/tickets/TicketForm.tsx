import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import type { AppDispatch, RootState } from "../../../redux/store";
import { createTicketSchema } from "../../../validators";
import { createTicket, getTickets } from "../../../redux/slice/ticket";

interface Props {
    userId: string;
}

interface TicketFormData {
    userId: string;
    // token: string;
    subject: string;
    message: string;
}

function TicketForm({ userId }: Props) {
    const dispatch = useDispatch<AppDispatch>();

    const { loading } = useSelector(
        (state: RootState) => state.ticket
    );

    const {
        register,
        handleSubmit,
        reset,
        // setValue,
        formState: { errors },
    } = useForm<TicketFormData>({
        resolver: yupResolver(createTicketSchema) as any,
        defaultValues: {
            userId,
            // token: "",
            subject: "",
            message: "",
        },
    });

    // const generateTicket = () => {
    //     const chars =
    //         "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";

    //     let token = "";

    //     for (let i = 0; i < 10; i++) {
    //         token += chars.charAt(
    //             Math.floor(Math.random() * chars.length)
    //         );
    //     }

    //     setValue("token", token, {
    //         shouldValidate: true,
    //     });
    // };

    const onSubmit = async (data: TicketFormData) => {
        try {
            const payload = {
                ...data,
                userId,
            };

            await dispatch(createTicket(payload)).unwrap();

            await dispatch(
                getTickets({
                    userId,
                    status: 0,
                })
            ).unwrap();

            toast.success("Ticket added successfully");

            reset({
                userId,
                // token: "",
                subject: "",
                message: "",
            });
        } catch (error: any) {
            toast.error(
                error?.message ||
                    error ||
                    "Failed to add ticket"
            );
        }
    };

    return (
        <div className="card shadow-sm border-0 mb-4">
            <div className="card-header">
                <h5 className="mb-0">Add Ticket</h5>
            </div>

            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row g-3">
                        {/* Ticket */}
                        {/* <div className="col-md-6">
                            <label className="form-label">
                                Token
                            </label>

                            <div className="input-group">
                                <input
                                    type="text"
                                    placeholder="token"
                                    className={`form-control ${
                                        errors.token
                                            ? "is-invalid"
                                            : ""
                                    }`}
                                    {...register("token")}
                                />

                                <button
                                    type="button"
                                    className="btn btn-outline-primary"
                                    onClick={generateTicket}
                                >
                                    Generate
                                </button>
                            </div>

                            {errors.token && (
                                <div className="invalid-feedback d-block">
                                    {errors.token.message}
                                </div>
                            )}
                        </div> */}

                        {/* Subject */}
                        <div className="col-md-12">
                            <label className="form-label">
                                Subject
                            </label>

                            <input
                                type="text"
                                placeholder="Subject"
                                className={`form-control ${
                                    errors.subject
                                        ? "is-invalid"
                                        : ""
                                }`}
                                {...register("subject")}
                            />

                            <div className="invalid-feedback">
                                {errors.subject?.message}
                            </div>
                        </div>

                        {/* Message */}
                        <div className="col-md-12">
                            <label className="form-label">
                                Message
                            </label>

                            <textarea
                                rows={4}
                                placeholder="Additional information..."
                                className={`form-control ${
                                    errors.message
                                        ? "is-invalid"
                                        : ""
                                }`}
                                {...register("message")}
                            />

                            <div className="invalid-feedback">
                                {errors.message?.message}
                            </div>
                        </div>

                        {/* Submit */}
                        <div className="col-md-12 text-end">
                            <button
                                type="submit"
                                disabled={loading}
                                className="btn btn-outline-primary"
                            >
                                {loading ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm me-2" />
                                        Saving...
                                    </>
                                ) : (
                                    "Add Ticket"
                                )}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TicketForm;