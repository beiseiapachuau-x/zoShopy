import { useState, useEffect } from "react";
import { Link } from "@inertiajs/inertia-react";

import { MdFavorite } from "react-icons/md";

export default function ItemLogin({ product, onCarts, setPopup, setItemData }) {
	const [cart, setCart] = useState(false);

	useEffect(() => {
		if (onCarts != 0) {
			onCarts.forEach((onCart) => {
				if (onCart.product_id === product.id) {
					setCart(true);
				}
			});
		}
	}, [onCarts]);

	const handlePopup = () => {
		setItemData({
			category: product.category,
			image: product.image,
			name: product.name,
			brand: product.brand,
			price: product.price,
			description: product.description,
		});
		setPopup("isCard");
	};

	return (
		<div className='inline-block relative bg-white rounded-md shadow-i'>
			{cart ? null : (
				<Link
					href={route("cart.store")}
					method='post'
					as='button'
					data={{ product_id: product.id }}
					className='absolute -top-2 -left-2 p-2 font-extrabold text-white bg-green-800 rounded-full delay-75 duration-300 ease-out hover:shadow-nb'
				>
					<MdFavorite size={20} />
				</Link>
			)}
			<div onClick={handlePopup} className='inline-flex m-2 w-48 h-60 bg-white rounded-md cursor-pointer'>
				<img src={product.image} alt='' className='object-scale-down' />
			</div>
			<div className='m-2 mt-1 mb-3 text-center'>
				<h3 className='text-xl uppercase font-kan font-semibold'>{product.name}</h3>
				<span>
					<span className='text-xl font-semibold'>₹</span> {product.price}
				</span>

				<Link
					href={route("order.store")}
					method='post'
					as='button'
					data={{ product_id: product.id }}
					className='block px-2 py-0 m-auto text-md font-comf bg-yellow-400 ring-1 rounded-xl'
				>
					BUY NOW
				</Link>
			</div>
		</div>
	);
}
