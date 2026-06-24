import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import type { AppDispatch, RootState } from "../../../redux/store";
import { getUserById } from "../../../redux/slice/user";
import { IMG_URL } from "../../../api/default-data";

function UserProfile() {
  const { userId } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const { user, loading } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    if (userId) {
      dispatch(getUserById(userId));
    }
  }, [dispatch, userId]);

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border" role="status" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="alert alert-danger">
        User not found.
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h4 className="mb-0">User Profile</h4>

          <Link
            to="/admin/users"
            className="btn btn-secondary btn-sm"
          >
            Back
          </Link>
        </div>

        <div className="card-body">
          <div className="row">
            <div className="col-md-3 text-center">
              <img
                src={
                  user.profile
                    ? `${IMG_URL}profile/${user.profile}`
                    : "/assets/img/avatar.png"
                }
                alt={user.firstName}
                className="img-fluid rounded-circle border"
                style={{
                  width: "180px",
                  height: "180px",
                  objectFit: "cover",
                }}
              />
            </div>

            <div className="col-md-9">
              <div className="row g-3">
                <div className="col-md-4">
                  <label className="fw-bold">First Name</label>
                  <p>{user.firstName}</p>
                </div>

                <div className="col-md-4">
                  <label className="fw-bold">Last Name</label>
                  <p>{user.lastName}</p>
                </div>

                <div className="col-md-4">
                  <label className="fw-bold">Email</label>
                  <p>{user.email}</p>
                </div>
                <div className="col-md-4">
                  <label className="fw-bold">Username</label>
                  <p>{user.username}</p>
                </div>

                <div className="col-md-4">
                  <label className="fw-bold">App Username</label>
                  <p>{user.app_username}</p>
                </div>

                <div className="col-md-4">
                  <label className="fw-bold">App Password</label>
                  <p>{user.app_password}</p>
                </div>

                <div className="col-md-4">
                  <label className="fw-bold">DOB</label>
                  <p>
                    {user.dob
                      ? new Date(user.dob).toLocaleDateString("en-IN", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })
                      : "-"}
                  </p>
                </div>

                <div className="col-md-4">
                  <label className="fw-bold">Phone</label>
                  <p>{user.phone || "-"}</p>
                </div>

                <div className="col-md-4">
                  <label className="fw-bold">Wallet Balance</label>
                  <p>${Number(user.wallet || 0).toFixed(2)}</p>
                </div>

                <div className="col-md-4">
                  <label className="fw-bold">Account Type</label>
                  <p><span className="badge rounded-pill border border-success text-success">{user.accType}</span></p>                  
                </div>

                <div className="col-md-4">
                  <label className="fw-bold">Address</label>
                  <p>{user.city || "-"} {user.state || "-"} {user.country || "-"} </p>
                </div>


                <div className="col-md-4">
                  <label className="fw-bold">Status</label>
                  <p>                   
                    {user.status === 1 && (
                      <span className="badge rounded-pill border border-success text-success">
                        Active
                      </span>
                    )}
                    {user.status === 2 && (
                      <span className="badge rounded-pill border border-success text-success">
                        Blocked
                      </span>
                    )}
                  </p>
                </div>

                

                <div className="col-md-4">
                  <label className="fw-bold">Created At</label>
                  <p>
                    {user.createdAt && new Date(user.createdAt).toLocaleString("en-IN", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;