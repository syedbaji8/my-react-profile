import { useOutletContext } from "react-router-dom";

export default function About() {
    const { profileData: { aboutDescription, mobile, email, address, education }, Aboutref } = useOutletContext();
    return (
        <>
            <article id="About" className="second-page w-full h-full flex place-items-start justify-center py-10 snap-start" ref={Aboutref}>
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
        </>
    )
}