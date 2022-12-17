import logo from "../../icon/logo.png";

export default function NavBar({ children }) {
    return (
        <nav className="inline-block sticky top-0 w-full z-40 bg-gray-700 shadow-n">
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="w-10 h-10 m-4 mr-20" />
                {children}
            </div>
        </nav>
    );
}
