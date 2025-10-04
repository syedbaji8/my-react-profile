import { Link } from "react-router-dom";

export default function Navigationdetails({ gotothePage, activeSection }) {
    const navarray = ['Home', 'About', 'Experience', 'Skills', 'Works', 'Contact']
    return (
        <>
            {
                navarray.map((navname) =>
                    <button
                        className={`border rounded-full px-4 py-2 whitespace-nowrap text-sm mb-14 cursor-pointer shadow-[2px_4px_0px_black] ${activeSection === navname ? "bg-[#222] text-white" : "bg-[#444]-100 text-white" }`}
                        onClick={() => gotothePage(navname)}>
                        {navname}
                    </button>)
            }
        </>
    )
}