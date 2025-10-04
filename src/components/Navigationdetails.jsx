import { Link } from "react-router-dom";

export default function Navigationdetails({ gotothePage, activeSection }) {
    const navarray = ['Home', 'About', 'Experience', 'Skills', 'Works', 'Contact']
    return (
        <>
            {
                navarray.map((navname) =>
                    <button
                        className={`bg-[#444]-100 border rounded-full px-4 py-2 whitespace-nowrap text-sm mb-14 cursor-pointer shadow-[2px_4px_0px_black] ${activeSection === navname ? "bg-gray-200 text-black" : "bg-gray-800 text-white" }`}
                        onClick={() => gotothePage(navname)}>
                        {navname}
                    </button>)
            }
        </>
    )
}