// import { Link } from "@inertiajs/inertia-react";
// import { useState } from "react";

import { BsSearch } from "react-icons/bs";

export default function SearchButton() {
	// const [data, setData] = useState({
	//     search: "",
	// });

	return (
		<div className='inline-flex m-4 ml-auto justify-center'>
			<input
				type='search'
				// value={data.search}
				placeholder='Search'
				className='p-2 pl-4 w-96 text-md font-comf placeholder:italic bg-stone-300 rounded-tl-full rounded-bl-full focus:bg-white focus:outline-none'
				// onChange={(e) => setData({ search: e.target.value })}
			/>
			<button className='px-4 py-2 bg-orange-500 rounded-tr-full rounded-br-full shadow-sb'>
				<BsSearch size={20} />
			</button>
		</div>
	);
}
