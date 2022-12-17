import { createPortal } from "react-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import { useForm } from "@inertiajs/inertia-react";

export default function Register({ setPopup }) {
	const { data, setData, post, processing } = useForm({
		name: "",
		phone: "",
		email: "",
		password: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		post(route("register"));
	};
	return createPortal(
		<div className='fixed inset-0 z-50 backdrop-blur-md'>
			<div className='inline-block relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
				<button onClick={() => setPopup("none")} className='absolute top-1 right-1 text-black hover:animate-spinx'>
					<AiFillCloseCircle size={40} />
				</button>
				<form
					autoComplete='off'
					onSubmit={handleSubmit}
					className='inline-block p-10 m-4 font-comf bg-stone-400 rounded-3xl shadow-i'
				>
					<ul>
						<li className='text-center'>
							<span className='text-slate-800 text-3xl font-extrabold'>Register</span>
						</li>
						<li className='mt-4'>
							<label htmlFor='name' className='block'>
								Name
							</label>
							<input
								type='register_text'
								value={data.name}
								id='register_name'
								onChange={(e) => setData("name", e.target.value)}
								className='w-80 p-2 bg-stone-300 rounded-xl focus:outline-none focus:bg-white'
								required
							/>
						</li>
						<li className='mt-4'>
							<label htmlFor='register_phone' className='block'>
								Mobile number
							</label>
							<input
								type='tel'
								value={data.phone}
								id='register_phone'
								onChange={(e) => setData("phone", e.target.value)}
								className='w-80 p-2 bg-stone-300 rounded-xl focus:outline-none focus:bg-white'
								required
							/>
						</li>
						<li className='mt-4'>
							<label htmlFor='register_email' className='block'>
								Email
							</label>
							<input
								type='email'
								value={data.email}
								id='register_email'
								onChange={(e) => setData("email", e.target.value)}
								className='w-80 p-2 bg-stone-300 rounded-xl focus:outline-none focus:bg-white'
								required
							/>
						</li>
						<li className='mt-4'>
							<label htmlFor='register_password' className='block'>
								Password
							</label>
							<input
								type='password'
								value={data.password}
								id='register_password'
								onChange={(e) => setData("password", e.target.value)}
								className='w-80 p-2 bg-stone-300 rounded-xl focus:outline-none focus:bg-white'
								required
							/>
						</li>
						<li className='mt-4 text-center'>
							<button
								type='submit'
								disabled={processing}
								className='px-4 py-2 text-xl text-white font-semibold bg-blue-600 rounded-full'
							>
								Submit
							</button>
						</li>
					</ul>
				</form>
			</div>
		</div>,
		document.getElementById("pop")
	);
}
