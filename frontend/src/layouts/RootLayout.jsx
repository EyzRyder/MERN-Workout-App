import { Link, NavLink, Outlet } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogOut } from '../hooks/useLogOut'


export default function RootLayout() {
    const { logout } = useLogOut();
    const { user } = useAuthContext();

    const handleClick = () => {
        logout()
    }
    return (
        <div className="w-screen min-h-screen" >
            <header className="bg-[#fff]">
                <div className="m-0 py-3 px-5 flex items-center justify-between">
                    <Link to='/' className="text-3xl font-bold text-[#333]">Workout</Link>

                    <nav className="flex items-center">
                        {user && (
                            <div className="flex flex-col flex-1">
                            <span>{user.email}</span>
                            <button className="bg-[#fff] text-primary border-2 border-solid border-primary py-2 px-3 rounded cursor-pointer text-base ml-3" onClick={handleClick}>Log out</button>
                            </div>
                        )}
                        {!user && (
                            <div>
                            <Link to="/user/login" className="ml-3">Login</Link>
                            </div>
                        )}
                    </nav>
                </div>
            </header>

            <main className="p-5 m-0">
                <Outlet />
            </main>
        </div>

    );
} 
