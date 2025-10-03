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
    const Adminref = useRef();
    // const [pagename, dispatchFn] = useReducer(gotoReducerFn, 'Home');
    // function gotoReducerFn(type, action){
    //     if(type === 'Home'){
    //         console.log('do something', pagename)
    //     }
    // }
    const gotothePage = (page) => {
        switch (page) {
            case 'Home':
                Homeref.current?.scrollIntoView({ behavior: "smooth" });
                break;
            case 'About':
                Aboutref.current?.scrollIntoView({ behavior: "smooth" });
                break;
            case 'Experience':
                Experienceref.current?.scrollIntoView({ behavior: "smooth" });
                break;
            case 'Portfolio':
                Portfolioref.current?.scrollIntoView({ behavior: "smooth" });
                break;
            case 'Contact':
                Contactref.current?.scrollIntoView({ behavior: "smooth" });
                break;
            default:
                Adminref.current?.scrollIntoView({ behavior: "smooth" });
        }
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
    return (
        <>
            <div className="theme-chosen">
                <main className="resume-wrapper w-full h-screen px-10 py-0 flex place-items-center">
                    <section className="resume-column-wrapper w-full h-[calc(100vh-100px)] flex flex-wrap flex-row rounded-4xl dark">
                        <ProfileOverview />
                        <div className="resume-column-2 resume__details h-full w-[70%]">
                            <div className="resume__container w-full px-3 py-0 bg-[#222] rounded-4xl h-full overflow-y-auto [scrollbar-width:none] [scrollbar-color:gray_transparent] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-blue-500/60 [&::-webkit-scrollbar-track]:bg-transparent">
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
                                        Adminref
                                    }
                                } />
                            </div>
                        </div>
                        <div className="resume-column-3 resume__navigation h-full w-[10%] py-8 px-0 text-center">
                            {/* <Link to={'/about'}>About</Link> */}
                            <Navigationdetails gotothePage={gotothePage} />
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}