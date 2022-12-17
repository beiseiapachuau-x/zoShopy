import { Link, Head } from "@inertiajs/inertia-react";

import AdminLayout from "../../Layout/AdminLayout";

export default function AdminProductPage({ products }) {
    return (
        <>
            <Head title="Admin" />
            <AdminLayout>
                <div className="m-6">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Email
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Phone
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Created at
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Updated at
                                    </th>

                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                                    <th className=" py-3 border-b-2 border-gray-200 bg-gray-100">
                                        <Link
                                            href={route("product.create")}
                                            className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded"
                                        >
                                            Create Product
                                        </Link>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product) => {
                                    return (
                                        <tr key={product.key}>
                                            <td className="px-5 py-5 bg-white text-sm">
                                                <div className="flex items-center">
                                                    <div className="ml-3">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            {product.name}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-5 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {product.category}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    ₹ {product.price}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {product.created_at}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {product.updated_at}
                                                </p>
                                            </td>

                                            <td className="px-5 bg-white">
                                                <Link
                                                    href={route(
                                                        "product.edit",
                                                        product.key
                                                    )}
                                                    className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
                                                >
                                                    Edit
                                                </Link>
                                            </td>
                                            <td className="py-5 bg-white">
                                                <Link
                                                    href={route(
                                                        "product.delete",
                                                        product.key
                                                    )}
                                                    method="delete"
                                                    as="button"
                                                    className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
                                                >
                                                    Delete
                                                </Link>
                                            </td>
                                            <td className="bg-white"></td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </AdminLayout>
        </>
    );
}
