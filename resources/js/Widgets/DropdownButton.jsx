import { Link } from "@inertiajs/inertia-react";

import { BiDownArrow, BiUpArrow } from "react-icons/bi";

export default function DropdownButton({ btnName }) {
    return (
        <div className="group relative inline-block m-4 ml-0">
            <div className="p-1 min-w-btn font-comf text-md text-cyan-300 text-center bg-gray-800 border border-cyan-300 rounded-full cursor-pointer delay-75 duration-300 ease-in hover:bg-cyan-300 hover:text-slate-900">
                {btnName}
                <span className="p-1 pr-4">
                    <span className="absolute delay-75 duration-200 group-hover:invisible group-hover:opacity-0">
                        <BiDownArrow
                            style={{
                                display: "inline",
                                color: "rgb(103.232,249)",
                            }}
                        />
                    </span>
                    <span className="absolute invisible opacity-0 delay-75 duration-200 group-hover:visible group-hover:opacity-100">
                        <BiUpArrow
                            style={{
                                display: "inline",
                                color: "rgb(31,41,55)",
                            }}
                        />
                    </span>
                </span>
                <div className="absolute invisible opacity-0 mt-4 bg-gray-800 border border-cyan-300 rounded-md delay-75 duration-300 ease-in group-hover:visible group-hover:opacity-100">
                    <Link
                        href={route("home.category", "Computers")}
                        className="block p-1 pr-8 font-comf text-left text-md text-cyan-300 rounded-md hover:bg-cyan-300 hover:text-slate-900"
                    >
                        Computers
                    </Link>
                    <Link
                        href={route("home.category", "Laptops")}
                        className="block p-1 pr-8 font-comf text-left text-md text-cyan-300 rounded-md hover:bg-cyan-300 hover:text-slate-900"
                    >
                        Laptops
                    </Link>
                    <Link
                        href={route("home.category", "Printers")}
                        className="block p-1 pr-8 font-comf text-left text-md text-cyan-300 rounded-md hover:bg-cyan-300 hover:text-slate-900"
                    >
                        Printers
                    </Link>
                    <Link
                        href={route("home.category", "Monitors")}
                        className="block p-1 pr-8 font-comf text-left text-md text-cyan-300 rounded-md hover:bg-cyan-300 hover:text-slate-900"
                    >
                        Monitors
                    </Link>
                    <Link
                        href={route("home.category", "Keyboards")}
                        className="block p-1 pr-8 font-comf text-left text-md text-cyan-300 rounded-md hover:bg-cyan-300 hover:text-slate-900"
                    >
                        Keyboards
                    </Link>
                    <Link
                        href={route("home.category", "Mouse")}
                        className="block p-1 pr-8 font-comf text-left text-md text-cyan-300 rounded-md hover:bg-cyan-300 hover:text-slate-900"
                    >
                        Mouse
                    </Link>
                </div>
            </div>
        </div>
    );
}
