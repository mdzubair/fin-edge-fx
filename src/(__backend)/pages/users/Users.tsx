import { useDispatch, useSelector } from "react-redux";
import { deleteUser, resetPassword, updateUserStatus, userList } from "../../../redux/slice/user";
import type { AppDispatch, RootState } from "../../../redux/store";
import { useEffect } from "react";

import { getStatusBadge } from "../../../helpers";
import { Link } from "react-router-dom";
import { IMG_URL } from "../../../api/default-data";
import toast from "react-hot-toast";


function Users() {
  
  const dispatch = useDispatch<AppDispatch>();

  const { users, loading } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(userList());
  }, [dispatch]);

  const getNextStatus = (status: number) => {
    switch (status) {
      case 0:
        return 1; // Verify
      case 1:
        return 2; // Block
      case 2:
        return 1; // Unblock
      default:
        return 1;
    }
  };

  const changeUserStatus = async (
    userId: string,
    status: number
  ) => {
    try {
      await dispatch(
        updateUserStatus({ userId, status })
      ).unwrap();

      await dispatch(userList()).unwrap();

      toast.success("User status updated successfully");
    } catch (error: any) {
      toast.error(
        error?.message || "Failed to update user status"
      );
      console.error(error);
    }
  };

  const handleResetPassword = async ( userId: string) => {
     const password = Math.random().toString(36).slice(-8);  
    const result = await dispatch(resetPassword({userId, password}));
    
    if (resetPassword.fulfilled.match(result)) {
       await navigator.clipboard.writeText(password);
    toast.success("Password reset successfully and copied to clipboard");
    } else {
      toast.error(result.payload as string);
    }
};


const handleDeleteUser = async ( userId: string) => {
    try {
      await dispatch(deleteUser(userId)).unwrap();
      await dispatch(userList()).unwrap();
      toast.success("User deleted successfully");
    } catch (error: any) {
      toast.error(error?.message || "Failed to delete");
    }
};

  // if (loading) {
  //   return (
  //     <div className="text-center py-5">
  //       <div className="spinner-border" role="status" />
  //     </div>
  //   );
  // }

  return (
    <div className="card">
    
      <div className="card-header d-flex justify-content-between align-items-center">
          <h5 className="card-title mb-0">Users</h5>
          <span className="badge bg-primary">Total: {users?.length || 0}</span>
      </div>


      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle text-nowrap">
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Wallet</th>
                <th>Status</th>
                <th>Actions</th>
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

              {!loading && users?.length > 0 && (
                users.map((user: any, index: number) => (
                  <tr key={user._id}>
                    <td>
                      <strong>{index + 1}</strong>
                    </td>

                    <td>
                      <img
                        src={
                          user.profile
                            ? `${IMG_URL}profile/${user.profile}`
                            : `${IMG_URL}profile/avatar.png`
                        }
                        alt={user.firstName}
                        className="rounded-circle"
                        width="32"
                        height="32"
                        style={{ objectFit: "cover" }}
                      />
                    </td>

                    <td>
                      {user.firstName} {user.lastName}
                    </td>

                    <td>{user.email}</td>

                    <td>{user.phone || "-"}</td>

                    <td>${Number(user.wallet || 0).toFixed(2)}</td>

                    <td>{getStatusBadge(user.status)}</td>

                    <td>
                      <div className="d-flex flex-wrap gap-1">
                        {/* Verify / Block / Unblock */}
                        <button className={`btn btn-sm ${ user.status === 1 ? "btn-outline-danger" : user.status === 2 ? "btn-outline-success" : "btn-outline-warning" }`} title={   user.status === 1 ? "Block User" : user.status === 2 ? "Unblock User"  : "Verify User"
                          } onClick={() =>
                            changeUserStatus(
                              user._id,
                              getNextStatus(user.status)
                            )
                          }
                        >
                          <i
                            className={`fas ${
                              user.status === 1
                                ? "fa-user-lock"
                                : user.status === 2
                                ? "fa-unlock"
                                : "fa-user-check"
                            }`}
                          />
                        </button>

                        {/* View Profile */}
                        <Link
                          className="btn btn-sm btn-outline-primary"
                          title="View Profile"
                          to={`/admin/user/${user._id}`}
                        >
                          <i className="fas fa-eye" />
                        </Link>

                        {/* Withdraw */}
                        <Link
                          className="btn btn-sm btn-outline-secondary"
                          title="Withdraw"
                          to={`/admin/withdraw/${user._id}`}
                        >
                          <i className="fas fa-money-bill-wave" />
                        </Link>

                        {/* Settlement */}
                        <Link
                          className="btn btn-sm btn-outline-success"
                          title="Settlement"
                          to={`/admin/trade-settlements/${user._id}`}
                        >
                          <i className="fas fa-handshake" />
                        </Link>
                        </div>
                        <div className="d-flex flex-wrap gap-1">
                        {/* Deposit Receipt */}
                        <Link
                          className="btn btn-sm btn-outline-info"
                          title="Deposit Receipt"
                          to={`/admin/deposit-funds/${user._id}`}
                        >
                          <i className="fas fa-receipt" />
                        </Link>

                        {/* Generate Password */}
                        <Link
                          className="btn btn-sm btn-outline-info"
                          title="Generate App Password"
                          to={`/admin/meta-app-password/${user._id}`}
                        >
                          <i className="fas fa-key" />
                        </Link>

                        <button className="btn btn-sm btn-outline-warning" title="Reset and Copy Password" onClick={() =>  handleResetPassword(user._id)}> 
                          <i className="fas fa-redo-alt" />
                        </button>

                        {/* Delete User */}
                        <button className="btn btn-sm btn-outline-danger" title="Delete User" onClick={()=>handleDeleteUser(user._id)}>
                          <i className="fas fa-trash-alt" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
              
              
              {!loading && users?.length === 0 && (
                <tr>
                  <td colSpan={8} className="text-center py-4">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;