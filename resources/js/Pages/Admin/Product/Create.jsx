import { useState, useEffect } from "react";
import { useForm, Head } from "@inertiajs/inertia-react";

import CreateItem from "../../../Cards/CreateItem";
import ItemCardDemo from "../../../Cards/ItemCardDemo";
import ItemDemo from "../../../Cards/ItemDemo";

import AdminLayout from "../../../Layout/AdminLayout";

export default function Create() {
    const { data, setData, post, processing, progress } = useForm({
        category: "",
        image: "",
        name: "",
        price: "",
        brand: "",
        description: "",
    });

    const [preview, setPreview] = useState();

    useEffect(() => {
        if (!data.image) {
            setPreview(null);
            return;
        }
        const objectUrl = URL.createObjectURL(data.image);
        setPreview(objectUrl);

        return () => URL.revokeObjectURL(objectUrl);
    }, [data.image]);

    const handleChange = {
        category: (e) => setData("category", e.target.value),
        image: (e) => setData("image", e.target.files[0]),
        name: (e) => setData("name", e.target.value),
        price: (e) => setData("price", e.target.value),
        brand: (e) => setData("brand", e.target.value),
        description: (e) => setData("description", e.target.value),
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("product.store"));
    };
    console.log(data.image);

    return (
        <>
            <Head title="Admin" />
            <AdminLayout>
                <div className="pt-10 flex justify-center items-center">
                    <CreateItem
                        data={data}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        processing={processing}
                        progress={progress}
                    />
                    <ItemDemo
                        name={data.name}
                        image={preview}
                        price={data.price}
                    />
                    <ItemCardDemo
                        image={preview}
                        name={data.name}
                        category={data.category}
                        brand={data.brand}
                        price={data.price}
                        description={data.description}
                    />
                </div>
            </AdminLayout>
        </>
    );
}
