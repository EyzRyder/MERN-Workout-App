import { NavLink, Outlet } from "react-router-dom";

export default function EnterUserLayout() {
    return (
        <div className="flex flex-col items-center">
            <nav className="flex flex-row justify-center gap-8 my-8 mx-0">
                <NavLink className="NavLink" to="login">Log in</NavLink>
                <NavLink className="NavLink" to="signup">Sign Up</NavLink>
            </nav>
            <Outlet />
        </div>

    );
} 
