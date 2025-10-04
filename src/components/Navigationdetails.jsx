import { Link } from "react-router-dom";

export default function Navigationdetails({ gotothePage }) {
    const navarray = ['Home', 'About me', 'Experience', 'Skill set', 'My Works', 'Contact']
    return (
        <>
            {
                navarray.map((navname) =>
                    <button
                        className="bg-[#444]-100 border rounded-full px-4 py-2 whitespace-nowrap text-sm mb-14 cursor-pointer shadow-[2px_4px_0px_black]"
                        onClick={() => gotothePage(navname)}>
                        {navname}
                    </button>)
            }
        </>
    )
}