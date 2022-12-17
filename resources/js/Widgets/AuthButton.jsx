import { Link } from "@inertiajs/inertia-react";
import { FaKey, FaLock } from "react-icons/fa";

export default function AuthButton({ setPopup, auth }) {
	return (
		<div className='inline-block m-4 ml-0'>
			{auth ? (
				<Link
					href={route("logout")}
					method='post'
					as='button'
					className='block opacity-60 p-2 text-white bg-red-600 rounded-full delay-75 duration-300 ease-out hover:opacity-100 hover:shadow-nb'
				>
					<FaLock size={24} />
				</Link>
			) : (
				<div
					onClick={() => setPopup("isLogin")}
					className='block opacity-60 p-2 text-white bg-blue-600 rounded-full delay-75 duration-300 ease-out hover:opacity-100 hover:shadow-nb'
				>
					<FaKey size={24} />
				</div>
			)}
		</div>
	);
}
