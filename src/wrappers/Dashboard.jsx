import { Navigate, Outlet, useLocation } from "react-router";
import NavBar from "../components/NavBar";
import { useLoaderData } from "react-router"
import UserProfile from "../components/UserProfile"

const Dashboard = () => {

    const location = useLocation();

    const dashboardRoute = location.pathname === "/dashboard";

    const user = useLoaderData();

    if (!user) {
        return <Navigate to="/login" replace />
    }

    return (
        <>
            <NavBar user={user} />
            {dashboardRoute && <UserProfile />}
            <Outlet />
        </>
    )
}

export default Dashboard