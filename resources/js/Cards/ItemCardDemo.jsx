export default function ItemCardDemo({ image, name, category, brand, price, description }) {
	return (
		<div className='relative inline-block m-4 font-comf bg-white rounded-3xl shadow-i'>
			<div className='inline-flex m-2 w-80 h-80 bg-white rounded-md cursor-pointer'>
				<img className='object-scale-down m-auto rounded-xl' src={image} alt='' />
			</div>
			<div className='w-80 px-6 py-4 overflow-hidden'>
				<div className='font-bold text-2xl mb-2 uppercase'>{name}</div>
				<div className='font-semibold text-xl mb-2'>{category}</div>
				<div className='font-semibold text-xl mb-2'>{brand}</div>
				<div className='font-semibold text-xl mb-2'>₹ {price}</div>
				<blockquote className='text-gray-700 text-base'>{description}</blockquote>
			</div>
		</div>
	);
}
