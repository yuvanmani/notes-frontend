import { useState } from "react"
import "./NavBar.css"
import { Link } from "react-router";

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
                            <li>
                                <Link to="/" className="font-semibold text-md hover:text-yellow-400 lg:text-lg lg:font-normal">Home</Link>
                            </li>
                            <li>
                                <Link to="/register" className="font-semibold text-md hover:text-yellow-400 lg:text-lg lg:font-normal">Register</Link>
                            </li>
                            <li>
                                <Link to="/login" className="font-semibold text-md hover:text-yellow-400 lg:text-lg lg:font-normal" >Login</Link>
                            </li>

                        </ul>
                        <button className="md:hidden text-3xl text-white hover:text-yellow-400" onClick={handleMenu}>&#9776;</button>
                    </div>
                    {
                        isMenuOpen &&
                        <ul className="bg-gradient-to-bl from-gray-400 to-gray-800 text-white shadow-md md:hidden absolute top-16 left-150 w-full p-4">
                            <li className="mb-2">
                                <Link to="/" className="text-md font-semibold hover:text-yellow-400" onClick={closeMenu}>Home</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/register" className="text-md font-semibold hover:text-yellow-400" onClick={closeMenu}>Register</Link>
                            </li>
                            <li className="mb-1">
                                <Link to="/login" className="text-md font-semibold hover:text-yellow-400" onClick={closeMenu}>Login</Link>
                            </li>
                        </ul>
                    }
                </nav>
            </div>

            {
                user &&
                <div>
                    <nav className="bg-gray-800 md:bg-gradient-to-bl from-gray-500 to-gray-800 text-white shadow-md fixed top-0 left-0 w-full z-50">
                        <div className="container mx-auto px-6 py-4 flex justify-around items-center">
                            <p className="text-2xl text-white md:text-2xl font-semibold"><span className="text-3xl">M</span><span
                                className="text-sm font-thin" id="font">(ake your own)</span> - <span className="text-3xl">N</span>otes</p>
                            <ul className="hidden md:flex space-x-6">
                                <li>
                                    <button className="font-semibold text-md hover:text-yellow-400">Home</button>
                                </li>
                                <li>
                                    <button className="font-semibold text-md hover:text-yellow-400">Add New</button>
                                </li>
                                <li>
                                    <button className="font-semibold text-md hover:text-yellow-400" >Logout</button>
                                </li>
                                <li>
                                    <p className="font-semibold text-md hover:text-yellow-400" >example@email.com</p>
                                </li>

                            </ul>
                            <button className="md:hidden text-3xl text-white hover:text-yellow-400" onClick={handleMenu}>&#9776;</button>
                        </div>
                        {
                            isMenuOpen &&
                            <ul className="bg-gradient-to-bl from-gray-400 to-gray-800 text-white shadow-md md:hidden absolute top-16 left-150 w-full p-4">
                                <li>
                                    <button className="text-md font-semibold mb-2 hover:text-yellow-400" onClick={closeMenu}>Home</button>
                                </li>
                                <li>
                                    <button className="text-md font-semibold mb-2 hover:text-yellow-400">Add New</button>
                                </li>
                                <li>
                                    <button className="text-md font-semibold mb-2 hover:text-yellow-400">Logout</button>
                                </li>
                                <li>
                                    <p className="font-semibold text-md hover:text-yellow-400" >example@email.com</p>
                                </li>
                            </ul>
                        }
                    </nav>
                </div>
            }
        </div>
    )
}

export default NavBar