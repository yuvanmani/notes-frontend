import { useState } from "react"
import "./NavBar.css"
import { Link } from "react-router";

const getNavigation = (user) => {
    if (!user) {
        return [
            { name: 'Home', href: '/' },
            { name: 'Register', href: '/register' },
            { name: 'Login', href: '/login' }
        ]
    } else if (user) {
        return [
            { name: "Dashboard", href: "/dashboard" },
            { name: "Add New", href: "/dashboard/create" },
            { name: "Logout", href: "/dashboard/logout" }
        ]
    }
}

const NavBar = ({ user }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const closeMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div>
            <div>
                <nav className="bg-gray-800 md:bg-gradient-to-bl from-gray-500 to-gray-800 text-white shadow-md fixed top-0 left-0 w-full z-50">
                    <div className="container mx-auto px-6 py-4 flex xl:justify-evenly justify-around items-center">
                        <p className="text-2xl text-white md:text-2xl font-semibold"><span className="text-3xl">M</span><span
                            className="text-sm font-thin" id="font">(ake your own)</span> - <span className="text-3xl">N</span>otes</p>
                        <ul className="hidden md:flex space-x-6">
                            {
                                getNavigation(user).map((item) => (
                                    <li key={item.name} className="font-semibold text-md hover:text-yellow-400 lg:text-lg lg:font-normal">
                                        <Link to={item.href}>{item.name}</Link>
                                    </li>
                                ))
                            }
                            {
                                user && (
                                    <p>{user.email}</p>
                                )
                            }
                        </ul>
                        <button className="md:hidden text-3xl text-white hover:text-yellow-400" onClick={handleMenu}>&#9776;</button>
                    </div>
                    {
                        isMenuOpen &&
                        <ul className="bg-gradient-to-bl from-gray-400 to-gray-800 text-white shadow-md md:hidden absolute top-16 left-150 w-full p-4">
                            {
                                getNavigation(user).map((item) => (
                                    <li key={item.name}
                                        className="text-md font-semibold hover:text-yellow-400 mb-2" onClick={closeMenu}>
                                        <Link to={item.href}>{item.name}</Link>
                                    </li>
                                ))
                            }
                            {
                                user && (
                                    <p>{user.email}</p>
                                )
                            }
                        </ul>
                    }
                </nav>
            </div>

        </div>
    )
}

export default NavBar