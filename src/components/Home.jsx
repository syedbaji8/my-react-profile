import { Link, Outlet } from "react-router-dom";
import ProfileOverview from "./ProfileOverview";
import { useEffect, useState, useRef, useReducer } from "react";
import Navigationdetails from "./Navigationdetails";
import Mainpage from "./Mainpage";
import About from "./About";
import Xperience from "./Xperience";
import Skills from "./Skills";
import Works from "./Works";
import Contact from "./Contact";

export default function Home() {
    const [profileData, setProfileData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); // error
    const Homeref = useRef();
    const Aboutref = useRef();
    const Experienceref = useRef();
    const Portfolioref = useRef();
    const Contactref = useRef();
    const Skillsref = useRef();
    const Adminref = useRef();
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

    const [activeSection, setActiveSection] = useState("Home");
    // const [pagename, dispatchFn] = useReducer(gotoReducerFn, 'Home');
    // function gotoReducerFn(type, action){
    //     if(type === 'Home'){
    //         console.log('do something', pagename)
    //     }
    // }
    const gotothePage = (navname) => {
        document.getElementById(navname).scrollIntoView({ behavior: "smooth" })
        // const parent = event.target.parentElement;
        // // remove 'active' class from all siblings
        // Array.from(parent.children).forEach(child => {
        //     child.classList.remove('active');
        // });
        // // add 'active' to the clicked one
        // event.target.classList.add('active');

        // switch (page) {
        //     case 'Home':
        //         Homeref.current?.scrollIntoView({ behavior: "smooth" });
        //         break;
        //     case 'About me':
        //         Aboutref.current?.scrollIntoView({ behavior: "smooth" });
        //         break;
        //     case 'Experience':
        //         Experienceref.current?.scrollIntoView({ behavior: "smooth" });
        //         break;
        //     case 'Skill set':
        //         Skillsref.current?.scrollIntoView({ behavior: "smooth" });
        //         break;
        //     case 'My Works':
        //         Portfolioref.current?.scrollIntoView({ behavior: "smooth" });
        //         break;
        //     case 'Contact':
        //         Contactref.current?.scrollIntoView({ behavior: "smooth" });
        //         break;
        //     default:
        //         Adminref.current?.scrollIntoView({ behavior: "smooth" });
        // }
    }
    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                const myresponse = await fetch('https://api.jsonbin.io/v3/b/68db8eadd0ea881f40901047/latest?meta=false', {
                    headers: {
                        'X-Master-Key': '$2a$10$7.8KGKCEKOE9Ig5sY60uiuhTnigs28Qgn2BiBomdoTPsnz4A92lsm',
                        'X-Access-Key': '$2a$10$oF5gz6q5aKmTSCmw0PUr1OORBLEQN7/fHAhGZzIeLGjiyJwbWcjay'
                    }
                });
                if (!myresponse.ok) {
                    throw new Error("Something gone wrong!"); // handle bad responses
                }
                const data = await myresponse.json();
                console.log(data);
                const singlePerson = data.filter((person) => {
                    return person.userId === 'syedbaji8';
                })
                setProfileData(singlePerson[0].profileData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll("article");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 } // triggers when 50% of section is visible
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);
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
            <div className="theme-chosen">
                <main className="resume-wrapper w-full h-screen px-10 py-0 flex place-items-center">
                    <section className="resume-column-wrapper w-full h-[calc(100vh-100px)] flex flex-wrap flex-row rounded-4xl dark">
                        <ProfileOverview />
                        <div className="resume-column-2 resume__details h-full w-full lg:w-[68%]">
                            <div className="resume__container w-full px-3 py-0 bg-[#222] rounded-4xl h-full [scrollbar-width:none] [scrollbar-color:gray_transparent] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-blue-500/60 [&::-webkit-scrollbar-track]:bg-transparent overflow-y-scroll snap-y lg:snap-mandatory">
                                <div className="mobile-menu absolute top-6 left-4 text-black lg:hidden" onClick={() => menutoggleDispactch({ type: 'toggle', payload: 'toggle' })} ref={mobileMenuRef}>
                                    <i className={`fa-regular ${menutogstate ? 'fa-times' : 'fa-bars'}`}></i>
                                </div>
                                <Mainpage info={{ profileData, loading, error, Homeref }} />
                                <About info={{ profileData, loading, error, Aboutref }} />
                                <Xperience info={{ profileData, loading, error, Experienceref }} />
                                <Skills info={{ profileData, loading, error, Skillsref }} />
                                <Works info={{ profileData, loading, error, Portfolioref }} />
                                <Contact info={{ profileData, loading, error, Contactref }} />
                                {
                                    menutogstate &&
                                    <div className="mobile-navigation absolute left-0 top-30 h-auto w-auto flex flex-col items-ceter justify-start lg:hidden" ref={mobileNavigationRef}>
                                        <Navigationdetails gotothePage={gotothePage} activeSection={activeSection} />
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="resume-column-3 resume__navigation w-auto lg:w-[12%] py-8 px-0 text-center hidden lg:flex flex-wrap items-center justify-center">
                            <Navigationdetails gotothePage={gotothePage} activeSection={activeSection} />
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}