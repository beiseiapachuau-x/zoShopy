import { useState } from "react";
import { Head } from "@inertiajs/inertia-react";

import Item from "../Widgets/Item";
import ItemLogin from "../Widgets/ItemLogin";
import SideBar from "../Widgets/SideBar";
import UserLayout from "../Layout/UserLayout";

import ItemCard from "../Cards/ItemCard";
import Login from "../Cards/Login";
import Register from "../Cards/Register";

export default function Home({ products, auth, cart, order, onCarts }) {
    const [popup, setPopup] = useState("none");
    const [itemData, setItemData] = useState({
        category: "",
        image: "",
        name: "",
        brand: "",
        price: "",
        description: "",
    });

    if (popup === "none") {
        document.body.style.overflow = "unset";
    } else {
        if (typeof window != "undefined" && window.document) {
            document.body.style.overflow = "hidden";
        }
    }

    const renderSwitch = (popup) => {
        switch (popup) {
            case "none":
                break;
            case "isLogin":
                return <Login setPopup={setPopup} />;
            case "isRegister":
                return <Register setPopup={setPopup} />;
            case "isCard":
                return <ItemCard itemData={itemData} setPopup={setPopup} />;
        }
    };
    return (
        <>
            <Head title="Home" />
            <UserLayout
                auth={auth}
                cart={cart}
                order={order}
                setPopup={setPopup}
            >
                <div className="flex">
                    <SideBar />
                    <div className="p-4 grid grid-cols-7 grid-rows-6 gap-x-4 gap-y-8">
                        {auth
                            ? products.map((product) => {
                                  return (
                                      <ItemLogin
                                          key={product.id}
                                          product={product}
                                          onCarts={onCarts}
                                          setPopup={setPopup}
                                          setItemData={setItemData}
                                      />
                                  );
                              })
                            : products.map((product) => {
                                  return (
                                      <Item
                                          key={product.id}
                                          product={product}
                                          setPopup={setPopup}
                                          setItemData={setItemData}
                                      />
                                  );
                              })}
                    </div>
                </div>
                {renderSwitch(popup)}
            </UserLayout>
        </>
    );
}
