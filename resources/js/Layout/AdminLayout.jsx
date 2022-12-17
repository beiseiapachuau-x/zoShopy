import Button from "../Widgets/Button";
import NavBar from "../Widgets/NavBar";

export default function AdminLayout({ children }) {
    return (
        <>
            <NavBar>
                <Button btnName="Home" route={route("home.index")} />
                <Button btnName="Admin" route={route("admin")} />
                <Button btnName="User" route={route("admin.user")} />
                <Button btnName="Product" route={route("product.index")} />
            </NavBar>
            {children}
        </>
    );
}
