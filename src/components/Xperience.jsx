import { useOutletContext } from "react-router-dom";

export default function Xperience() {
    const { profileData: { experience }, loading, error, Experienceref } = useOutletContext();
    return (
        <>
            <article id="Xperience" className="flex flex-col lg:flex-row flex-wrap lg:h-full place-items-start justify-center py-10 lg:snap-start" ref={Experienceref}>
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
                                            <div key={index} className="timeline-item clearfix grid grid-cols-1 lg:grid-cols-[40%_60%] gap-10 justify-left lg:justify-between">
                                                <div className="left-part text-left lg:text-right">
                                                    <h5 className="item-period text-xl font-medium text-left lg:text-right">{dateFrom} - {dateTo}</h5>
                                                    <span className="item-company text-left lg:text-right">{company}</span>
                                                </div>
                                                <div className="divider invisible lg:visible lg:inline-block left-[42.2%]"></div>
                                                <div className="right-part">
                                                    <h4 className="item-title text-xl font-medium">{role}</h4>
                                                    <p className="text-sm">{responsibility}, {where}</p>
                                                </div>
                                                <div className="clear-fix clearfix"></div>
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