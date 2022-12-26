import { Link, NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
    return (

        <div className="w-screen h-screen" >
            <header className="bg-[#fff]">
                <div className="m-0 py-3 px-5 flex items-center justify-between">
                    <Link to='/' className="text-3xl font-bold text-[#333]">Workout</Link>
{/* 
                    <div className="">
                        <NavLink to="/" className="text-[#333]">HOME</NavLink>
                    </div> */}
                </div>
            </header>

            <main className="p-5 m-0">
                <Outlet />
            </main>
        </div>

    );
} 
