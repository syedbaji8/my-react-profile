import { Link } from "react-router-dom";

export default function Navigationdetails({gotothePage}) {
    return (
        <>
            <button
                className="bg-[#444]-100 border rounded-full px-4 py-2 whitespace-nowrap text-sm mb-14 cursor-pointer shadow-[2px_4px_0px_black]"
                onClick={() => gotothePage('Home')}>Home</button>
            <button
                className="bg-[#444]-100 border rounded-full px-4 py-2 whitespace-nowrap text-sm mb-14 cursor-pointer shadow-[2px_4px_0px_black]"
                onClick={() => gotothePage('About')}>About Me</button>
            <button
                className="bg-[#444]-100 border rounded-full px-4 py-2 whitespace-nowrap text-sm mb-14 cursor-pointer shadow-[2px_4px_0px_black]"
                onClick={() => gotothePage('Experience')}>Experience</button>
            <button
                className="bg-[#444]-100 border rounded-full px-4 py-2 whitespace-nowrap text-sm mb-14 cursor-pointer shadow-[2px_4px_0px_black]"
                onClick={() => gotothePage('Portfolio')}>My Works</button>
            <button
                className="bg-[#444]-100 border rounded-full px-4 py-2 whitespace-nowrap text-sm mb-14 cursor-pointer shadow-[2px_4px_0px_black]"
                onClick={() => gotothePage('Contact')}>Contact</button>
        </>
    )
}