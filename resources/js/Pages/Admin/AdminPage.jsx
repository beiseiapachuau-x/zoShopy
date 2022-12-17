import { Link, Head } from "@inertiajs/inertia-react";

import AdminLayout from "../../Layout/AdminLayout";

import { BiUser } from "react-icons/bi";
import { GiCargoCrate, GiMoneyStack } from "react-icons/gi";
import { GrDeliver } from "react-icons/gr";
import { GoIssueOpened } from "react-icons/go";
import { RiLockPasswordFill } from "react-icons/ri";

export default function AdminPage() {
    document.body.style.overflow = "unset";

    return (
        <>
            <Head title="Admin" />
            <AdminLayout>
                <div className="pt-[4.5rem] h-screen text-center bg-admin bg-no-repeat bg-cover">
                    <div className="pt-20 inline-grid grid-cols-3 gap-6">
                        <Link
                            href={route("admin.user")}
                            className="relative w-60 h-60 bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg cursor-pointer"
                        >
                            <BiUser
                                className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                size={80}
                            />
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-md">
                                User(s)
                            </div>
                        </Link>
                        <Link
                            href={route("product.index")}
                            className="relative w-60 h-60 bg-white bg-opacity-40 backdrop-blur-md rounded drop-shadow-lg cursor-pointer"
                        >
                            <GiCargoCrate
                                className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                size={80}
                            />
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-md">
                                Product(s)
                            </div>
                        </Link>
                        <div className="relative w-60 h-60 bg-white bg-opacity-50 backdrop-blur-xl rounded drop-shadow-lg cursor-pointer">
                            <GrDeliver
                                className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                size={80}
                            />
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-md">
                                Order(s)
                            </div>
                        </div>
                        <div className="relative w-60 h-60 bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg cursor-pointer">
                            <GiMoneyStack
                                className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                size={80}
                            />
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-md">
                                Revenue
                            </div>
                        </div>
                        <div className="relative w-60 h-60 bg-white bg-opacity-40 backdrop-blur-md rounded drop-shadow-lg cursor-pointer">
                            <GoIssueOpened
                                className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                size={80}
                            />
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-md">
                                Issues(s)
                            </div>
                        </div>
                        <div className="relative w-60 h-60 bg-white bg-opacity-50 backdrop-blur-xl rounded drop-shadow-lg cursor-pointer">
                            <RiLockPasswordFill
                                className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                size={80}
                            />
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-md">
                                Change Password
                            </div>
                        </div>
                    </div>
                </div>
            </AdminLayout>
        </>
    );
}
