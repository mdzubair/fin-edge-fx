export const getStatusBadge = (status?: number) => {
    switch (status) {
        case 1:
            return (
                <span className="badge rounded-pill bg-success">
                    Active
                </span>
            );

        case 2:
            return (
                <span className="badge rounded-pill bg-danger">
                    Blocked
                </span>
            );

        case 3:
            return (
                <span className="badge rounded-pill bg-warning text-dark">
                    Unverified
                </span>
            );

        default:
            return (
                <span className="badge rounded-pill bg-secondary">
                    Unknown
                </span>
            );
    }
};