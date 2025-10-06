import { useEffect, useReducer, useRef } from "react";
import { Link } from "react-router-dom";
// import imagepaths from "../imagepaths";
import { useOutletContext } from "react-router-dom";
import About from "./About";
import Xperience from "./Xperience";
import Skills from "./Skills";
import Works from "./Works";
import Contact from "./Contact";
import Mainpage from "./Mainpage";
import Navigationdetails from "./Navigationdetails";
export default function Pagewrapper() {
    const { gotothePage, activeSection } = useOutletContext();
    const mobileMenuRef = useRef();
    const mobileNavigationRef = useRef();
    const [menutogstate, menutoggleDispactch] = useReducer(mentoggleReducerFn, false);
    function mentoggleReducerFn(prevState, action) {
        if (action.type === 'toggle') {
            console.log(prevState)
            return prevState = !prevState;
        }
        if (action.type === 'close') {
            return prevState = false;
        }
    }
    useEffect(() => {
        const onMouseDown = (event) => {

            if (event.button === 0) {
                // Skip handling if the menu button or its children are clicked
                if (mobileMenuRef.current && mobileMenuRef.current.contains(event.target)) {
                    return;
                }
                if (mobileNavigationRef.current && mobileNavigationRef.current.contains(event.target)) {
                    return;
                }
                menutoggleDispactch({ type: 'close', payload: 'toggle' })
            }
        };
        document.addEventListener("mousedown", onMouseDown);
        return () => {
            document.removeEventListener("mousedown", onMouseDown);
        };
    }, []);

    return (
        <>
            <div className="mobile-menu absolute top-6 left-4 text-black lg:hidden" onClick={() => menutoggleDispactch({ type: 'toggle', payload: 'toggle' })} ref={mobileMenuRef}>
                <i className={`fa-regular ${menutogstate ? 'fa-times' : 'fa-bars'}`}></i>
            </div>
            <Mainpage menutoggleDispactch={menutoggleDispactch} menutogstate={menutogstate} />
            <About />
            <Xperience />
            <Skills />
            <Works />
            <Contact />
            {
                menutogstate &&
                <div className="mobile-navigation absolute left-0 top-30 h-auto w-auto flex flex-col items-ceter justify-start lg:hidden" ref={mobileNavigationRef}>
                    <Navigationdetails gotothePage={gotothePage} activeSection={activeSection} />
                </div>
            }
        </>
    )
}