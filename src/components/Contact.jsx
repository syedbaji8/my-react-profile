// import { useOutletContext } from "react-router-dom";
// import imagepaths from "../imagepaths";
export default function Contact({info: {profileData: { mobile, email, address }, loading, error, Contactref}}) {
    return (
        <>
            {loading && <p className="text-blue-500">Loading...</p>}
            {error && <p className="text-red-500">Error: {error}</p>}
            <article id="Contact" className="flex flex-col lg:flex-row flex-wrap lg:h-full place-items-start justify-center py-10 lg:snap-start" ref={Contactref}>
                {!loading && !error &&
                    <div className="w-full flex flex-row flex-wrap px-3 lg:px-8">
                        <h2 className="text-2xl font-medium w-full border-b border-white/15 pb-2 mb-4">My Contacts</h2>
                        {/* <!-- Left Column --> */}
                        <div className="w-full lg:w-full column1 left-column contact-page">
                            <div className="flex flex-col flex-wrap items-start justify-start lg:flex-row lg:justify-center">
                                {/* Mobile */}
                                <div className="w-full lg:w-1/3 lg:pl-0 mb-7">
                                    <div className="w-full py-0 px-2 flex justify-center mb-0 lg:mb-4">
                                        <div className="w-full box py-3">
                                            <a href="tel:7338324752">
                                                <p className="m-0 text-center">
                                                    <label className="font-bold">
                                                        <i className="fa fa-mobile text-[30px]"></i>
                                                    </label>
                                                    <br className="hidden lg:block" />
                                                    <br />
                                                    +91 - {mobile}
                                                </p>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="w-full lg:w-1/3 lg:pl-0 mb-7">
                                    <div className="w-full py-0 px-2 flex justify-center mb-0 lg:mb-4">
                                        <div className="w-full box py-3">
                                            <a href="mailto:syedbaji8@gmail.com">
                                                <p className="m-0 text-center">
                                                    <label className="font-bold">
                                                        <i className="fa fa-envelope text-[30px]"></i>
                                                    </label>
                                                    <br className="hidden lg:block" />
                                                    <br />
                                                    {email}
                                                </p>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="w-full lg:w-1/3 lg:pl-0 mb-7">
                                    <div className="w-full py-0 px-2 flex justify-center mb-0 lg:mb-4">
                                        <div className="w-full box py-3">
                                            <p className="m-0 text-center">
                                                <label className="font-bold">
                                                    <i className="fa fa-map-marker text-[30px]"></i>
                                                </label>
                                                <br className="hidden lg:block" />
                                                <br />
                                                {address}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Freelance availability */}
                                <div className="w-full lg:pl-0">
                                    <div className="w-full py-0 px-2 flex items-center justify-center">
                                        <div className="w-full box py-3">
                                            <p className="m-0 text-center">
                                                <label className="font-bold">
                                                    <i className="fa fa-check-circle text-[30px]"></i>
                                                </label>
                                                <br className="hidden lg:block" />
                                                <br />
                                                Available for Freelance
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </article>

        </>
    )
}