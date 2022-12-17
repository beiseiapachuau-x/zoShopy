import { Head } from "@inertiajs/inertia-react";

import AuthButton from "../Widgets/AuthButton";
import Button from "../Widgets/Button";
import OrderButton from "../Widgets/OrderButton";
import CartButton from "../Widgets/CartButton";
import DropdownButton from "../Widgets/DropdownButton";
import NavBar from "../Widgets/NavBar";
import SearchButton from "../Widgets/SearchButton";

export default function UserLayout({ children, auth, cart, order, setPopup }) {
    const dropdown_options = [
        "Communication",
        "Dangerous",
        "Mountain",
        "Elephant",
        "Carnivorous",
    ];

    return (
        <>
            <NavBar>
                <DropdownButton
                    btnName="Categories"
                    options={dropdown_options}
                />
                <Button btnName="Home" route={route("home.index")} />
                <Button btnName="About" />
                <Button btnName="Contact" route={route("contact")} />
                <SearchButton />
                <CartButton cart={cart} auth={auth} />
                <OrderButton order={order} auth={auth} />
                <AuthButton setPopup={setPopup} auth={auth} />
            </NavBar>
            {children}
        </>
    );
}
