import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import type { AppDispatch, RootState } from "../../../redux/store";
import {
  deleteOfferById,
  offerList,
  updateOfferStatus,
} from "../../../redux/slice/offer";

import OfferForm from "./OfferForm";

function Offer() {
  const dispatch = useDispatch<AppDispatch>();

  const { offers, loading } = useSelector(
    (state: RootState) => state.offer
  );

  useEffect(() => {
    dispatch(offerList());
  }, [dispatch]);

  const getNextStatus = (status: number) => {
    switch (status) {
      case 0:
        return 1; // Pending -> Active
      case 1:
        return 2; // Active -> Inactive
      case 2:
        return 1; // Inactive -> Active
      default:
        return 1;
    }
  };

  const changeOfferStatus = async (
    offerId: string,
    status: number
  ) => {
    try {
      await dispatch(
        updateOfferStatus({
          userId: offerId,
          status,
        })
      ).unwrap();

      await dispatch(offerList()).unwrap();

      toast.success("Offer status updated successfully");
    } catch (error: any) {
      toast.error(
        error?.message || "Failed to update offer status"
      );
    }
  };

  const deleteOffer = async (offerId: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this offer?"
    );

    if (!confirmDelete) return;

    try {
      await dispatch(deleteOfferById(offerId)).unwrap();

      await dispatch(offerList()).unwrap();

      toast.success("Offer deleted successfully");
    } catch (error: any) {
      toast.error(
        error?.message || "Failed to delete offer"
      );
    }
  };

  return (
    <>
      <OfferForm />

      <div className="card mt-4 shadow-sm">
        <div className="card-header">
          <h5 className="mb-0">Offer List</h5>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped table-hover align-middle">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Offer Note</th>
                  <th>Amount</th>
                  <th>Users</th>
                  <th>Status</th>
                  <th style={{width:"120px"}}>Offer Date</th>
                  <th style={{width:"120px"}}>Action</th>
                </tr>
              </thead>

              <tbody>
                {loading && (
                  <tr>
                    <td colSpan={7} className="text-center py-4">
                      <div
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                      />
                      Loading...
                    </td>
                  </tr>
                )}

                {!loading &&
                  offers?.length > 0 &&
                  offers.map((offer: any, index: number) => {
                    const isExpired =
                      offer.offerDate &&
                      new Date(offer.offerDate) < new Date();

                    return (
                      <tr key={offer._id}>
                        <td>{index + 1}</td>

                        <td>{offer.offerNote}</td>

                        <td>
                          $
                          {Number(
                            offer.amount || 0
                          ).toFixed(2)}
                        </td>

                        <td>
                          {offer.applyTo === "all" ? (
                            <span className="badge border border-success text-success">
                              All Users
                            </span>
                          ) : (
                            <span className="badge border border-primary text-primary">
                              {offer.userId?.length || 0} Users
                            </span>
                          )}
                        </td>

                        <td>
                          {offer.status === 1 ? (
                            <span className="badge border border-success text-success">
                              Active
                            </span>
                          ) : offer.status === 2 ? (
                            <span className="badge border border-danger text-danger">
                              Inactive
                            </span>
                          ) : (
                            <span className="badge border border-warning text-warning">
                              Pending
                            </span>
                          )}

                          {isExpired && (
                            <span className="badge bg-danger ms-2">
                              Expired
                            </span>
                          )}
                        </td>

                        <td>
                          {offer.offerDate
                            ? new Date(
                                offer.offerDate
                              ).toLocaleDateString()
                            : "-"}
                        </td>

                        <td>
                          <div className="d-flex gap-2">
                            <button
                              type="button"
                              className={`btn btn-sm ${
                                offer.status === 1
                                  ? "btn-outline-danger"
                                  : offer.status === 2
                                  ? "btn-outline-success"
                                  : "btn-outline-warning"
                              }`}
                              title={
                                offer.status === 1
                                  ? "Deactivate Offer"
                                  : offer.status === 2
                                  ? "Activate Offer"
                                  : "Verify Offer"
                              }
                              onClick={() =>
                                changeOfferStatus(
                                  offer._id,
                                  getNextStatus(
                                    offer.status
                                  )
                                )
                              }
                            >
                              <i
                                className={`fas ${
                                  offer.status === 1
                                    ? "fa-ban"
                                    : offer.status === 2
                                    ? "fa-check"
                                    : "fa-clock"
                                }`}
                              />
                            </button>

                            <button
                              type="button"
                              className="btn btn-sm btn-outline-danger"
                              title="Delete Offer"
                              onClick={() =>
                                deleteOffer(
                                  offer._id
                                )
                              }
                            >
                              <i className="fas fa-trash-alt" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}

                {!loading &&
                  offers?.length === 0 && (
                    <tr>
                      <td
                        colSpan={7}
                        className="text-center py-4 text-muted"
                      >
                        No offers found
                      </td>
                    </tr>
                  )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Offer;