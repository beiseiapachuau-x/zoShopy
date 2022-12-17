import { createPortal } from "react-dom";

import { AiFillCloseCircle } from "react-icons/ai";

export default function ItemCard({ itemData, setPopup }) {
	return createPortal(
		<div className='fixed inset-0 z-50 backdrop-blur-sm'>
			<div className='inline-block relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
				<button onClick={() => setPopup("none")} className='absolute top-1 right-1 text-black hover:animate-spinx'>
					<AiFillCloseCircle size={40} />
				</button>
				<div className='inline-block m-4 font-comf bg-white rounded-3xl shadow-i'>
					<div className='inline-flex m-2 w-80 h-80 bg-white rounded-md cursor-pointer'>
						<img className='object-scale-down m-auto rounded-xl' src={itemData.image} alt='' />
					</div>
					<div className='px-6 py-4 w-80 text-left'>
						<div className='font-bold text-2xl mb-2 uppercase'>{itemData.name}</div>
						<div className='font-semibold text-xl mb-2'>{itemData.category}</div>
						<div className='font-semibold text-xl mb-2'>{itemData.brand}</div>
						<div className='font-semibold text-xl mb-2'>₹ {itemData.price}</div>
						<blockquote className=' text-gray-700 text-base'>{itemData.description}</blockquote>
					</div>
				</div>
			</div>
		</div>,
		document.getElementById("pop")
	);
}
