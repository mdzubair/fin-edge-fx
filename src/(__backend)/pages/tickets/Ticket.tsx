import { useDispatch, useSelector } from "react-redux";
import TicketForm from "./TicketForm";
import type { AppDispatch, RootState } from "../../../redux/store";
import { useCallback, useEffect, useState } from "react";
import { getTickets } from "../../../redux/slice/ticket";
import { Link, useParams } from "react-router-dom";
import toast from "react-hot-toast";

function Ticket() {
    const { userId } = useParams<{ userId: string }>();
    const auth = useSelector((state: RootState) => state.auth);
    const paramUserId = auth?.user?.userType === 1 ? userId ?? "0" : auth?.user?._id?.toString() ?? "0";
    const dispatch = useDispatch<AppDispatch>();
    const { tickets, loading } = useSelector((state: RootState) => state.ticket);
    const [statusFilter, setStatusFilter] = useState(0);
    const fetchTickets = useCallback(
        async (userId: string, status: number) => {
            try {
                await dispatch( getTickets({ userId, status,})).unwrap();
            } catch (error: any) {
                toast.error(error || "Failed to fetch tickets");
            }
        },
        [dispatch]
    );

    useEffect(() => {
        fetchTickets(paramUserId, statusFilter);
    }, [fetchTickets, paramUserId, statusFilter]);

    const handleFilterChange = ( status: number) => { setStatusFilter(status);  };
    const renderStatus = (status: string) => {
        switch (status) {
            case "1":
                return (
                <span className="badge rounded-pill border border-success text-success">
                    Closed
                </span>
                );

            default:
                return (
                <span className="badge rounded-pill border border-warning text-warning">
                    Open
                </span>
                );
        }
    };

// console.log(tickets);


    return(
        <>
         {auth && auth?.user?.userType==0 && <TicketForm userId={auth && auth.user._id}/>}
        <div className="card mt-4 shadow-sm border-0">
            <div className="card-header d-flex justify-content-between align-items-center flex-wrap gap-2">
                <h5 className="mb-0">Tickets</h5>

                <div className="btn-group">
                    <button type="button" className={`btn btn-sm ${statusFilter ==0 ? "btn-warning" : "btn-outline-warning" }`}  onClick={() => handleFilterChange(0)}>
                    Open
                    </button>
                    <button type="button" className={`btn btn-sm ${ statusFilter === 1 ? "btn-success" : "btn-outline-success"}`} onClick={() => handleFilterChange(1) }>
                    Closed
                    </button>
                </div>
            </div>

            <div className="card-body">
            <div className="table-responsive">
                <table className="table table-hover align-middle">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Token</th>
                    <th>Subject</th>
                    <th>Message</th>
                    <th>Status</th>
                    <th>Date</th>
                    <td>Action</td>
                    </tr>
                </thead>

                <tbody>
                    {loading && (
                    <tr>
                        <td
                        colSpan={8}
                        className="text-center py-4"
                        >
                        <div className="spinner-border spinner-border-sm me-2" />
                        Loading...
                        </td>
                    </tr>
                    )}

                    {!loading &&  tickets?.map(( ticket: any, index: number) => (
                        <tr key={ticket._id}>
                            <td>{index + 1}</td>

                            <td>
                            {
                                ticket?.userId
                                ?.firstName
                            }{" "}
                            {
                                ticket?.userId
                                ?.lastName
                            }
                            </td>

                            
                            <td> {ticket.token} </td> 
                            <td> {ticket.subject} </td>  
                            <td> {ticket.message}</td>
                            

                            <td>
                            {renderStatus(
                                ticket.status
                            )}
                            </td>

                            <td>
                            {new Date(
                                ticket.createdAt
                            ).toLocaleString(
                                "en-IN",
                                {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                                hour: "2-digit",
                                minute:
                                    "2-digit",
                                }
                            )}
                            </td>
                            <td>
                                <Link to={`/admin/v-ticket/${ticket._id}`} className="btn btn-sm btn-outline-primary">
                                    View
                                </Link>
                              
                        </td>
                        </tr>
                        )
                    )}

                    {!loading &&
                    tickets?.length ===
                        0 && (
                        <tr>
                        <td
                            colSpan={8}
                            className="text-center text-muted py-4"
                        >
                            No tickets found
                        </td>
                        </tr>
                    )}
                </tbody>
                </table>
            </div>
            </div>
        </div>
        </>
    )
}

export default Ticket;