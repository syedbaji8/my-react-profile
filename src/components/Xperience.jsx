import { useOutletContext } from "react-router-dom";

export default function Xperience() {
    const { profileData: { experience }, loading, error, Experienceref } = useOutletContext();
    return (
        <>
            <article id="Xperience" className="flex flex-col lg:flex-row flex-wrap h-full place-items-start justify-center py-10 snap-start" ref={Experienceref}>
                {loading && <p className="text-blue-500">Loading...</p>}
                {error && <p className="text-red-500">Error: {error}</p>}
                {!loading && !error &&
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
                    </div>}
            </article>
        </>
    )
}