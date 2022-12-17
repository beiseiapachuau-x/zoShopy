import { Link, Head } from "@inertiajs/inertia-react";
import { MdDelete } from "react-icons/md";

import UserLayout from "../../Layout/UserLayout";

export default function CartPage({ carts, auth, order }) {
    let showCart = true;

    if (carts.length === 0) {
        showCart = false;
    }
    return (
        <>
            <Head title="Cart" />
            <UserLayout auth={auth} order={order}>
                {showCart ? (
                    <div className="p-4 text-center">
                        <div className="inline-flex flex-col">
                            {carts.map((cart) => {
                                return (
                                    <div
                                        key={cart.id}
                                        className=" relative my-8 inline-flex flex-row bg-white rounded-md shadow-i"
                                    >
                                        <Link
                                            href={route("cart.delete", cart.id)}
                                            method="delete"
                                            as="button"
                                            className="absolute -top-2 -left-2 p-2 text-white bg-red-700 rounded-full delay-75 duration-300 ease-out hover:shadow-nb"
                                        >
                                            <MdDelete size={20} />
                                        </Link>

                                        <div className="inline-flex m-2 w-48 h-48 bg-white rounded-md">
                                            <img
                                                src={
                                                    "http://localhost:8000/storage/" +
                                                    cart.product.image
                                                }
                                                alt=""
                                                className="object-scale-down"
                                            />
                                        </div>
                                        <div className="m-2 w-80 bg-white text-left">
                                            <div className="font-bold text-2xl mb-1 uppercase">
                                                {cart.product.name}
                                            </div>
                                            <div className="text-xl mb-2">
                                                {cart.product.category}
                                            </div>
                                            <div className="text-xl mb-2">
                                                {cart.product.brand}
                                            </div>
                                            <div className="text-xl mb-2">
                                                ₹ {cart.product.price}
                                            </div>
                                        </div>
                                        <Link
                                            href={route("cart.order", cart.id)}
                                            method="post"
                                            as="button"
                                            className="absolute -bottom-4 left-1/2 -translate-x-1/2 m-auto p-2 text-md font-bold font-comf bg-yellow-400 ring-1 rounded-2xl shadow-i cursor-pointer"
                                        >
                                            ORDER
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ) : (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl text-blue-500">
                        EMPTY
                    </div>
                )}
            </UserLayout>
        </>
    );
}
