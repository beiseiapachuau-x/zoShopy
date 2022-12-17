import { Link } from "@inertiajs/inertia-react";

export default function Button({ btnName, route }) {
    return (
        <div className="inline-block m-4 ml-0">
            <Link
                href={route}
                className="block p-1 min-w-btn font-comf text-md text-cyan-300 text-center bg-gray-800 border border-cyan-300 rounded-full delay-75 duration-300 ease-in hover:bg-cyan-300 hover:text-slate-900"
            >
                {btnName}
            </Link>
        </div>
    );
}
