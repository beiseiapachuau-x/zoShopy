import { useForm, Head } from "@inertiajs/inertia-react";

import AdminLayout from "../../../Layout/AdminLayout";

import CreateItem from "../../../Cards/CreateItem";
import ItemCardDemo from "../../../Cards/ItemCardDemo";
import ItemDemo from "../../../Cards/ItemDemo";

export default function Edit({
    id,
    category,
    image,
    name,
    price,
    brand,
    description,
}) {
    const { data, setData, put, processing } = useForm({
        category: category,
        image: image,
        name: name,
        price: price,
        brand: brand,
        description: description,
    });

    const handleChange = {
        category: (e) => setData("category", e.target.value),
        name: (e) => setData("name", e.target.value),
        price: (e) => setData("price", e.target.value),
        brand: (e) => setData("brand", e.target.value),
        description: (e) => setData("description", e.target.value),
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("product.update", id));
    };

    return (
        <>
            <Head title="Admin" />
            <AdminLayout>
                <section className="flex pt-20 items-center justify-center">
                    <CreateItem
                        data={data}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        processing={processing}
                    />
                    <ItemDemo
                        name={data.name}
                        image={data.image}
                        price={data.price}
                    />
                    <ItemCardDemo
                        image={data.image}
                        name={data.name}
                        category={data.category}
                        brand={data.brand}
                        price={data.price}
                        description={data.description}
                    />
                </section>
            </AdminLayout>
        </>
    );
}
