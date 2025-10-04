import { } from "react";
import { Link } from "react-router-dom";
import imagepaths from "../imagepaths";

import { useOutletContext } from "react-router-dom";
export default function Maindetails() {
    const { profileData: { name, position, aboutDescription, mobile, email, address, education, experience, skillSet }, loading, error, Homeref, Aboutref, Experienceref, Portfolioref, Contactref, Skillsref, Adminref } = useOutletContext();

    return (
        <>
            <article className="first-page w-full h-full flex place-items-center justify-center py-10" ref={Homeref}>
                {loading && <p className="text-blue-500">Loading...</p>}
                {error && <p className="text-red-500">Error: {error}</p>}
                {
                    !loading && !error &&
                    <div className="w-full text-center flex flex-col gap-y-3">
                        <h4 className="text-center text-xl">Hello! I am</h4>
                        <h1 className="text-4xl font-bold">{name}</h1>
                        <h4 className="text-xl">{position}</h4>
                    </div>
                }
            </article>
            <article className="second-page w-full h-full flex place-items-start justify-center py-10" ref={Aboutref}>
                <div className="w-full flex flex-row flex-wrap px-8">
                    <h2 className="text-3xl font-semibold w-full border-b border-white/15 pb-2 mb-4">About Me</h2>
                    <p className="p-0 mb-2 text-md">
                        {aboutDescription}
                    </p>
                    <div className="contact-details w-full flex flex-row flex-wrap place-items-center justify-between mb-8">
                        <div className="w-1/3">
                            <label>Phone</label>
                            <p className="font-semibold">{mobile}</p>
                        </div>
                        <div className="w-1/3">
                            <label>Email</label>
                            <p className="font-semibold">{email}</p>
                        </div>
                        <div className="w-1/3">
                            <label>Address</label>
                            <p className="font-semibold">{address}</p>
                        </div>
                    </div>
                    <h4 className="text-xl font-bold w-full mt-5 mb-8">My Education</h4>
                    <div className="w-full flex flex-row flex-wrap align-items-start justify-content-between timeline-education timeline-second-style">
                        <div className="w-full p-0">
                            {
                                education?.length > 0 ? education.map((item, index) => {
                                    const { dateTo, college, course, where } = item;
                                    return (
                                        <div key={index} className="timeline-item clearfix">
                                            <div className="left-part">
                                                <h5 className="item-period text-xl font-medium">{dateTo}</h5>
                                                <span className="item-company">{college}</span>
                                            </div>
                                            <div className="divider"></div>
                                            <div className="right-part">
                                                <h4 className="item-title text-xl font-medium">{course}</h4>
                                                <p>{college}, {where}</p>
                                            </div>
                                        </div>
                                    )
                                }) : "No data found"
                            }
                        </div>
                    </div>
                </div>
            </article>
            <article className="flex flex-col lg:flex-row flex-wrap h-full place-items-start justify-center py-10" ref={Experienceref}>
                <div className="w-full flex flex-row flex-wrap px-8">
                    <h2 className="text-3xl font-semibold w-full border-b border-white/15 pb-2 mb-4">My Experience</h2>
                    {/* <!-- Left Column --> */}
                    <div className="w-full lg:w-[100%] column1 left-column">
                        <div className="w-full timeline-second-style timeline-education">
                            {
                                experience?.length > 0 ? experience.map((item, index) => {
                                    const { dateFrom, dateTo, company, role, responsibility, where } = item;
                                    return (
                                        <div key={index} className="timeline-item clearfix">
                                            <div className="left-part">
                                                <h5 className="item-period text-xl font-medium">{dateFrom} - {dateTo}</h5>
                                                <span className="item-company">{company}</span>
                                            </div>
                                            <div className="divider"></div>
                                            <div className="right-part">
                                                <h4 className="item-title text-xl font-medium">{role}</h4>
                                                <p className="text-sm">{responsibility}, {where}</p>
                                            </div>
                                        </div>
                                    )
                                }) : "No data found"
                            }
                        </div>
                    </div>
                </div>
            </article>
            <article className="flex flex-col lg:flex-row flex-wrap h-full place-items-start justify-center py-10" ref={Skillsref}>
                <div className="w-full flex flex-row flex-wrap px-8">
                    <h2 className="text-3xl font-semibold w-full border-b border-white/15 pb-2 mb-4">My Skills</h2>
                    {/* <!-- Right Column --> */}
                    <div className="w-full lg:w-[100%] column2 right-column">
                        <div className="w-full">
                            {
                                skillSet?.length > 0 ? skillSet.map((item, index) => {
                                    const { groupTitle, skills } = item;
                                    return (
                                        <div key={index} className="col-lg-12 p-0 skill-set">
                                            <div className="col-lg-12 p-0 mb-4">
                                                <h3>{groupTitle}</h3>
                                            </div>
                                            <div className="skills-info skills-second-style">
                                                {
                                                    skills.length > 0 ? skills.map((skillitem, index) => {
                                                        const { name, percentage } = skillitem;
                                                        return (
                                                            <>
                                                                <div key={index} className="skill clearfix">
                                                                    <h4>{name}</h4>
                                                                    <div className="skill-value">{percentage}%</div>
                                                                </div>
                                                                <div className="skill-container skill-1">
                                                                    <div className="skill-percentage" style={{ 'width': `${percentage}%` }}></div>
                                                                </div>
                                                            </>
                                                        )
                                                    }) : "No data found"
                                                }
                                            </div>
                                        </div>
                                    )
                                }) : "No data found"
                            }
                        </div>
                    </div>
                </div>
            </article>
            <article className="flex flex-col lg:flex-row flex-wrap h-full place-items-start justify-center py-10 overflow-hidden" ref={Portfolioref}>
                <div className="w-full flex flex-row flex-wrap px-8">
                    <h2 className="text-3xl font-semibold w-full border-b border-white/15 pb-2 mb-4">My Works</h2>
                    <div className="w-full flex flex-row flex-wrap column1">
                        <div className="w-1/5 px-1">
                            <div className="w-full">
                                <Link to={'https://www.ammaphysiotherapy.in/'} target="_blank">
                                    <img src={imagepaths.ammaphysiotherapy} alt="" className="w-full h-fit" />
                                </Link>
                            </div>
                        </div>
                        <div className="w-1/5 px-1">
                            <div className="w-full">
                                <Link to={'https://www.ammaphysiotherapy.in/'} target="_blank">
                                    <img src={imagepaths.myearth} alt="" className="w-full h-fit" />
                                </Link>
                            </div>
                        </div>
                        <div className="w-1/5 px-1">
                            <div className="w-full">
                                <Link to={'https://www.ammaphysiotherapy.in/'} target="_blank">
                                    <img src={imagepaths.homeclearance} alt="" className="w-full h-fit" />
                                </Link>

                            </div>
                        </div>
                        <div className="w-1/5 px-1">
                            <div className="w-full">
                                <Link to={'https://www.ammaphysiotherapy.in/'} target="_blank">
                                    <img src={imagepaths.prathima} alt="" className="w-full h-fit" />
                                </Link>
                            </div>
                        </div>
                        <div className="w-1/5 px-1">
                            <div className="w-full">
                                <Link to={'https://www.ammaphysiotherapy.in/'} target="_blank">
                                    <img src={imagepaths.livayur} alt="" className="w-full h-fit" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article className="flex flex-col lg:flex-row flex-wrap h-full place-items-start justify-center py-10" ref={Contactref}>
                <div className="w-full flex flex-row flex-wrap px-8">
                    <h2 className="text-3xl font-semibold w-full border-b border-white/15 pb-2 mb-4">My Contacts</h2>
                    {/* <!-- Left Column --> */}
                    <div className="w-full lg:w-1/2 column1 left-column">
                        <div className="w-full"></div>
                    </div>
                    {/* <!-- Right Column --> */}
                    <div className="w-full lg:w-1/2 column2 right-column">
                        <div className="w-full"></div>
                    </div>
                </div>
            </article>
        </>
    )
}