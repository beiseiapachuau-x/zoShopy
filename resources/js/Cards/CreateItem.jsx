export default function CreateItem({
    data,
    handleChange,
    handleSubmit,
    processing,
    progress,
}) {
    return (
        <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className="m-6 p-8 px-10 font-comf bg-cyan-200 rounded-md shadow-i"
        >
            <ul>
                <li className="my-2">
                    <label
                        htmlFor="category"
                        className="block text-xl font-semibold"
                    >
                        Category:
                    </label>
                    <select
                        id="category"
                        value={data.category}
                        className="w-96 p-1 rounded-md border border-gray-400 focus:outline-none"
                        onChange={handleChange.category}
                        required
                    >
                        <option value=""></option>
                        <option value="Computers">Computers</option>
                        <option value="Laptops">Laptops</option>
                        <option value="Printers">Printers</option>
                        <option value="Monitors">Monitors</option>
                        <option value="Keyboards">Keyboards</option>
                        <option value="Mouse">Mouse</option>
                    </select>
                </li>
                <li>
                    <label
                        htmlFor="image"
                        className="block text-xl font-semibold"
                    >
                        Image:
                    </label>
                    <input
                        type="file"
                        id="image"
                        accept="image/.*"
                        onChange={handleChange.image}
                    />
                </li>
                <li className="my-2">
                    <label
                        htmlFor="name"
                        className="block text-xl font-semibold"
                    >
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={data.name}
                        className="w-96 p-1 rounded-md border border-gray-400 focus:outline-none"
                        onChange={handleChange.name}
                        required
                    />
                </li>
                <li className="my-2">
                    <label
                        htmlFor="price"
                        className="block text-xl font-semibold"
                    >
                        Price:
                    </label>
                    <input
                        type="number"
                        id="price"
                        value={data.price}
                        className="w-96 p-1 rounded-md border border-gray-400 focus:outline-none"
                        onChange={handleChange.price}
                        required
                    />
                </li>
                <li className="my-2">
                    <label
                        htmlFor="item_brand"
                        className="block text-xl font-semibold"
                    >
                        Brand:
                    </label>
                    <input
                        type="text"
                        id="item_brand"
                        value={data.brand}
                        className="w-96 p-1 rounded-md border border-gray-400 focus:outline-none"
                        onChange={handleChange.brand}
                        required
                    />
                </li>
                <li className="my-2">
                    <label
                        htmlFor="description"
                        className="block text-xl font-semibold"
                    >
                        Description:
                    </label>
                    <textarea
                        id="description"
                        value={data.description}
                        className="w-96 h-36 p-2 rounded-md border border-gray-400 focus:outline-none resize-none"
                        onChange={handleChange.description}
                    ></textarea>
                </li>
                <li className="m-4 text-center">
                    <button
                        type="submit"
                        className="px-4 py-2 text-xl text-white font-semibold bg-blue-600 rounded-full"
                        disabled={processing}
                    >
                        upload
                    </button>
                </li>
                <li>
                    {progress && (
                        <progress
                            className="w-full"
                            value={progress.percentage}
                            max="100"
                        >
                            {progress.percentage}%
                        </progress>
                    )}
                </li>
            </ul>
        </form>
    );
}
