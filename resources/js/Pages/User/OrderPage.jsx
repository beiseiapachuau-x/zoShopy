import { Link, Head } from "@inertiajs/inertia-react";
import { MdDelete } from "react-icons/md";

import UserLayout from "../../Layout/UserLayout";

export default function OrderPage({ orders, auth, cart }) {
    let showOrder = true;

    if (orders.length === 0) {
        showOrder = false;
    }
    return (
        <>
            <Head title="Order" />
            <UserLayout auth={auth} cart={cart}>
                {showOrder ? (
                    <div className="p-4 text-center">
                        <div className="inline-flex flex-col">
                            {orders.map((order) => {
                                return (
                                    <div
                                        key={order.id}
                                        className=" relative my-8 inline-flex flex-row bg-white rounded-md shadow-i"
                                    >
                                        <Link
                                            href={route(
                                                "order.delete",
                                                order.id
                                            )}
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
                                                    order.product.image
                                                }
                                                alt=""
                                                className="object-scale-down"
                                            />
                                        </div>
                                        <div className="m-2 w-80 bg-white text-left">
                                            <div className="font-bold text-2xl mb-1 uppercase">
                                                {order.product.name}
                                            </div>
                                            <div className="text-xl mb-2">
                                                {order.product.category}
                                            </div>
                                            <div className="text-xl mb-2">
                                                {order.product.brand}
                                            </div>
                                            <div className="text-xl mb-2">
                                                ₹ {order.product.price}
                                            </div>
                                        </div>
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
