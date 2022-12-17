import { useForm } from "@inertiajs/inertia-react";

import { createPortal } from "react-dom";
import { AiFillCloseCircle } from "react-icons/ai";

export default function Login({ setPopup }) {
	const { data, setData, post, processing } = useForm({
		name: "",
		password: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		post(route("login"));
	};

	return createPortal(
		<div className='fixed inset-0 z-50 backdrop-blur-md'>
			<div className='inline-block relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
				<button onClick={() => setPopup("none")} className='absolute top-1 right-1 text-black hover:animate-spinx'>
					<AiFillCloseCircle size={40} />
				</button>
				<form
					onSubmit={handleSubmit}
					autoComplete='off'
					className='inline-block p-10 m-4 font-comf bg-stone-400 rounded-3xl shadow-i'
				>
					<ul>
						<li className='text-center'>
							<span className='text-slate-800 text-3xl font-extrabold'>Login</span>
						</li>
						<li className='mt-4'>
							<label htmlFor='login_name' className='block'>
								Name
							</label>
							<input
								type='text'
								value={data.name}
								id='name'
								className='w-80 p-2 bg-stone-300 rounded-xl focus:outline-none focus:bg-white'
								onChange={(e) => setData("name", e.target.value)}
							/>
						</li>
						<li className='mt-4'>
							<label htmlFor='login_password' className='block'>
								Password
							</label>
							<input
								type='password'
								value={data.password}
								id='login_password'
								className='w-80 p-2 bg-stone-300 rounded-xl focus:outline-none focus:bg-white'
								onChange={(e) => setData("password", e.target.value)}
							/>
						</li>
						<li className='mt-4 text-center'>
							<button
								type='submit'
								className='px-4 py-2 text-xl text-white font-semibold bg-blue-600 rounded-full'
								disabled={processing}
							>
								Login
							</button>
						</li>
						<li className='mt-4 text-center'>
							<button
								onClick={() => setPopup("isRegister")}
								className='px-4 py-2 text-xl text-white font-semibold bg-green-600 rounded-full'
							>
								Create new account
							</button>
						</li>
					</ul>
				</form>
			</div>
		</div>,
		document.getElementById("pop")
	);
}
