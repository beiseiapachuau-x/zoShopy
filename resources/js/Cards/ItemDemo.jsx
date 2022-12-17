import { MdFavorite } from "react-icons/md";

export default function ItemDemo({ name, image, price }) {
    return (
        <div>
            <div className="relative inline-block bg-white rounded-md shadow-i">
                <button className="absolute -top-2 -left-2 p-2 font-extrabold text-white bg-green-800 rounded-full delay-75 duration-300 ease-out hover:shadow-nb">
                    <MdFavorite size={20} />
                </button>

                <div className="inline-flex m-2 w-48 h-60 bg-white rounded-md cursor-pointer">
                    <img
                        src={image}
                        alt=""
                        className="object-scale-down m-auto rounded-xl"
                    />
                </div>
                <div className="w-48 m-2 mt-1 mb-3 text-center overflow-hidden">
                    <h3 className="text-xl uppercase font-kan font-semibold">
                        {name}
                    </h3>
                    <div>
                        <span className="text-xl font-semibold">₹</span>
                        {price}
                    </div>

                    <button className="block px-2 py-0 m-auto text-md font-comf bg-yellow-400 ring-1 rounded-xl">
                        BUY NOW
                    </button>
                </div>
            </div>
        </div>
    );
}
