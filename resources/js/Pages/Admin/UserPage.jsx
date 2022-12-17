import { Head } from "@inertiajs/inertia-react";

import AdminLayout from "../../Layout/AdminLayout";

export default function UserPage({ users }) {
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
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => {
                                    return (
                                        <tr key={user.key}>
                                            <td className="px-5 py-5 bg-white text-sm">
                                                <div className="flex items-center">
                                                    <div className="ml-3">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            {user.username}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-5 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {user.email}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {user.phone}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {user.created_at}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {user.updated_at}
                                                </p>
                                            </td>
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
