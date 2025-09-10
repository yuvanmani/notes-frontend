import { Navigate, Outlet, useLoaderData } from "react-router"
import NavBar from "../components/NavBar"

const Layout = () => {

    const user = useLoaderData();

    if (user) {
        return <Navigate to="/dashboard" />
    }

    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}

export default Layout