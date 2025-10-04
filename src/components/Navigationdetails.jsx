import { Link } from "react-router-dom";

export default function Navigationdetails({ gotothePage, activeSection }) {
    const navarray = [
        { pagename: 'Home', icon: 'fa-duotone fa-solid fa-house-heart' },
        { pagename: 'About', icon: 'fa-duotone fa-solid fa-address-card' },
        { pagename: 'Xperience', icon: 'fa-duotone fa-solid fa-timeline-arrow' },
        { pagename: 'Skills', icon: 'fa-duotone fa-solid fa-laptop-code' },
        { pagename: 'Works', icon: 'fa-duotone fa-solid fa-ballot-check' },
        { pagename: 'Contact', icon: 'fa-duotone fa-solid fa-address-book' }

    ]
    return (
        <>
            {
                navarray.map((navitem) =>
                    <button
                        className={`border rounded-full px-4 py-2 whitespace-nowrap text-sm mb-14 cursor-pointer shadow-[2px_4px_0px_black] ${activeSection === navitem.pagename ? "bg-[#222] text-white" : "bg-[#444]-100 text-white"} flex items-center gap-2`}
                        onClick={() => gotothePage(navitem.pagename)}>
                        <i className={navitem.icon}></i>
                        {navitem.pagename}
                    </button>)
            }
        </>
    )
}