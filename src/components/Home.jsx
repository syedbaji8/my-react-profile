import { Link, Outlet } from "react-router-dom";
import ProfileOverview from "./ProfileOverview";
import { useEffect, useState, useRef } from "react";
import Navigationdetails from "./Navigationdetails";

export default function Home() {
    const [profileData, setProfileData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); // error
    const Homeref = useRef();
    const Aboutref = useRef();
    const Experienceref = useRef();
    const Portfolioref = useRef();
    const Contactref = useRef();
    const Skillsref = useRef();
    const Adminref = useRef();

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
    return (
        <>
            <div className="theme-chosen">
                <main className="resume-wrapper w-full h-screen px-10 py-0 flex place-items-center">
                    <section className="resume-column-wrapper w-full h-[calc(100vh-100px)] flex flex-wrap flex-row rounded-4xl dark">
                        <ProfileOverview />
                        <div className="resume-column-2 resume__details h-full w-[70%]">
                            <div className="resume__container w-full px-3 py-0 bg-[#222] rounded-4xl h-full [scrollbar-width:none] [scrollbar-color:gray_transparent] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-blue-500/60 [&::-webkit-scrollbar-track]:bg-transparent overflow-y-scroll snap-y snap-mandatory">
                                <Outlet context={
                                    {
                                        profileData,
                                        loading,
                                        error,
                                        Homeref,
                                        Aboutref,
                                        Experienceref,
                                        Portfolioref,
                                        Contactref,
                                        Adminref,
                                        Skillsref
                                    }
                                } />
                            </div>
                        </div>
                        <div className="resume-column-3 resume__navigation h-full w-[10%] py-8 px-0 text-center">
                            {/* <Link to={'/about'}>About</Link> */}
                            <Navigationdetails gotothePage={gotothePage} activeSection={activeSection} />
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}