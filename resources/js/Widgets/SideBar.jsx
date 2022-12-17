import { BsPinAngle } from "react-icons/bs";

export default function SideBar() {
	return (
		<div className='sticky top-[4.5rem] py-2 w-[21.857rem] h-screen bg-gray-700 shadow-s'>
			<div className='m-2 mr-4 p-2 bg-gray-800 rounded-md shadow-sb cursor-pointer duration-100 ease-in hover:shadow-sbh'>
				<BsPinAngle
					style={{
						display: "inline",
						fontSize: 14,
						color: "white",
					}}
				/>
				<span className='text-mg font-comf m-2 text-stone-300'>Best Sellers</span>
			</div>
			<div className='m-2 mr-4 p-2 bg-gray-800 rounded-md shadow-sb cursor-pointer duration-100 ease-in hover:shadow-sbh'>
				<BsPinAngle
					style={{
						display: "inline",
						fontSize: 14,
						color: "white",
					}}
				/>
				<span className='text-mg font-comf m-2 text-stone-300'>New Releases</span>
			</div>
			<div className='m-2 mr-4 p-2 bg-gray-800 rounded-md shadow-sb cursor-pointer duration-100 ease-in hover:shadow-sbh'>
				<BsPinAngle
					style={{
						display: "inline",
						fontSize: 14,
						color: "white",
					}}
				/>
				<span className='text-mg font-comf m-2 text-stone-300'>MZshop Prime</span>
			</div>
			<div className='m-2 mr-4 p-2 bg-gray-800 rounded-md shadow-sb cursor-pointer duration-100 ease-in hover:shadow-sbh'>
				<BsPinAngle
					style={{
						display: "inline",
						fontSize: 14,
						color: "white",
					}}
				/>
				<span className='text-mg font-comf m-2 text-stone-300'>Gift Card</span>
			</div>
			<div className='m-2 mr-4 p-2 bg-gray-800 rounded-md shadow-sb cursor-pointer duration-100 ease-in hover:shadow-sbh'>
				<BsPinAngle
					style={{
						display: "inline",
						fontSize: 14,
						color: "white",
					}}
				/>
				<span className='text-mg font-comf m-2 text-stone-300'>Selected</span>
			</div>
			<div className='m-2 mr-4 p-2 bg-gray-800 rounded-md shadow-sb cursor-pointer duration-100 ease-in hover:shadow-sbh'>
				<BsPinAngle
					style={{
						display: "inline",
						fontSize: 14,
						color: "white",
					}}
				/>
				<span className='text-mg font-comf m-2 text-stone-300'>Wholesale</span>
			</div>
		</div>
	);
}
