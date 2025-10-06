import { useOutletContext } from "react-router-dom";
export default function Skills() {
    const { profileData: { skillSet }, loading, error, Skillsref } = useOutletContext();
    return (
        <>
            <article id="Skills" className="flex flex-col lg:flex-row flex-wrap lg:h-full place-items-start justify-center py-10 lg:snap-start" ref={Skillsref}>
                {loading && <p className="text-blue-500">Loading...</p>}
                {error && <p className="text-red-500">Error: {error}</p>}
                {!loading && !error &&
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
                                                <div className="skills-info skills-second-style grid lg:grid-cols-2 gap-x-14">
                                                    {
                                                        skills.length > 0 ? skills.map((skillitem, index) => {
                                                            const { name, percentage } = skillitem;
                                                            return (
                                                                <>
                                                                    <div className="single-skill-wrap w-full">
                                                                        <div key={index} className="skill clearfix">
                                                                            <h4>{name}</h4>
                                                                            <div className="skill-value">{percentage}%</div>
                                                                        </div>
                                                                        <div className="skill-container skill-1">
                                                                            <div className="skill-percentage" style={{ 'width': `${percentage}%` }}></div>
                                                                        </div>
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
                }
            </article>
        </>
    )
}