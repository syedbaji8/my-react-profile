import { useOutletContext } from "react-router-dom";

export default function About() {
    const { profileData: { aboutDescription, mobile, email, address, education }, Aboutref } = useOutletContext();
    return (
        <>
            <article id="About" className="second-page w-full lg:h-full flex place-items-start justify-center py-10 lg:snap-start mb-10" ref={Aboutref}>
                <div className="w-full flex flex-row flex-wrap px-8">
                    <h2 className="text-3xl font-semibold w-full border-b border-white/15 pb-2 mb-4">About Me</h2>
                    <p className="p-0 mb-2 text-md">
                        {aboutDescription}
                    </p>
                    <div className="contact-details w-full flex lg:flex-row flex-col flex-wrap place-items-start lg:place-items-center justify-start lg:justify-between mb-8">
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
                                        <div key={index} className="timeline-item clearfix grid grid-cols-1 lg:grid-cols-[40%_60%] gap-10 justify-left lg:justify-between">
                                            <div className="left-part text-left lg:text-right">
                                                <h5 className="item-period text-xl font-medium text-left lg:text-right">{dateTo}</h5>
                                                <span className="item-company w-full text-left lg:text-right">{college}</span>
                                            </div>
                                            <div className="divider invisible lg:visible lg:inline-block left-[42.2%]"></div>
                                            <div className="right-part">
                                                <h4 className="item-title text-xl font-medium">{course}</h4>
                                                <p>{college}, {where}</p>
                                            </div>
                                            <div className="clear-fix clearfix"></div>
                                        </div>
                                    )
                                }) : "No data found"
                            }
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}