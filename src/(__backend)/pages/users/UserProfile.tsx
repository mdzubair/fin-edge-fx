import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import type { AppDispatch, RootState } from "../../../redux/store";
import { getUserById, updateUserAccount } from "../../../redux/slice/user";
import { IMG_URL } from "../../../api/default-data";
import toast from "react-hot-toast";
// import { updateUserAccount } from "../../../redux/slice/user";

function UserProfile() {
  const { userId } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const { user, loading } = useSelector(
    (state: RootState) => state.users
  );

  const [formData, setFormData] = useState({
    accType: "Standard",
    leverage: "1000:1",
  });

  useEffect(() => {
    if (userId) {
      dispatch(getUserById(userId));
    }
  }, [dispatch, userId]);

  useEffect(() => {
    if (user) {
      setFormData({
        accType: user.accType || "Standard",
        leverage: user.leverage || "1000:1",
      });
    }
  }, [user]);

  const handleAccountChange = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value,};
    setFormData(updatedData);
    console.log(updatedData);
    if (!userId) return;
    const result = await dispatch(updateUserAccount({ userId, data: updatedData,}));
    if (updateUserAccount.fulfilled.match(result)) {
      toast.success("Profile updated successfully");
    } else {
      toast.error(result.payload as string);
    }
  };

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

                {/* Account Type */}

                <div className="col-md-4">
                  <label className="fw-bold">Account Type</label>

                  <select
                    className="form-select"
                    name="accType"
                    value={formData.accType}
                    onChange={handleAccountChange}
                  >
                    <option value="Standard">Standard</option>
                    <option value="RAW Spread">RAW Spread</option>
                    <option value="MT 4">MT 4</option>
                    <option value="MT 5">MT 5</option>
                    <option value="Raw Spread MT 5">
                      Raw Spread MT 5
                    </option>
                  </select>
                </div>

                {/* Leverage */}

                <div className="col-md-4">
                  <label className="fw-bold">Leverage</label>

                  <select
                    className="form-select"
                    name="leverage"
                    value={formData.leverage}
                    onChange={handleAccountChange}
                  >
                    <option value="1000:1">1000:1</option>
                    <option value="888:1">888:1</option>
                    <option value="500:1">500:1</option>
                    <option value="400:1">400:1</option>
                    <option value="300:1">300:1</option>
                    <option value="200:1">200:1</option>
                    <option value="100:1">100:1</option>
                    <option value="66:1">66:1</option>
                    <option value="50:1">50:1</option>
                    <option value="25:1">25:1</option>
                    <option value="20:1">20:1</option>
                    <option value="15:1">15:1</option>
                  </select>
                </div>

                <div className="col-md-4">
                  <label className="fw-bold">Address</label>
                  <p>
                    {user.city || "-"} {user.state || "-"}{" "}
                    {user.country || "-"}
                  </p>
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
                      <span className="badge rounded-pill border border-danger text-danger">
                        Blocked
                      </span>
                    )}
                  </p>
                </div>

                <div className="col-md-4">
                  <label className="fw-bold">Created At</label>

                  <p>
                    {user.createdAt &&
                      new Date(user.createdAt).toLocaleString(
                        "en-IN",
                        {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        }
                      )}
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