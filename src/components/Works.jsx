import { Link } from "react-router-dom";
import imagepaths from "../imagepaths";

export default function Works({info: {profileData: { works }, loading, error, Portfolioref}}) {
    return (
        <>
            <article id="Works" className="flex flex-col lg:flex-row lg:h-full flex-wrap place-items-start justify-center py-10 lg:snap-start" ref={Portfolioref}>
                {loading && <p className="text-blue-500">Loading...</p>}
                {error && <p className="text-red-500">Error: {error}</p>}
                {!loading && !error &&
                    <div className="w-full flex flex-row flex-wrap px-3 lg:px-8">
                        <h2 className="text-2xl font-medium w-full border-b border-white/15 pb-2 mb-4">My Works</h2>
                        <div className="w-full flex flex-row flex-wrap column1">
                            {
                                works?.map((work, index) =>
                                    <div key={index} className="w-full md:w-1/2 lg:w-1/5 px-1 h-35 overflow-hidden mb-3">
                                        <div className="w-full">
                                            <Link to={work.hrefLink} target="_blank">
                                                <img src={imagepaths[work.imageSrcUrl]} alt="" className="w-full h-fit" />
                                            </Link>
                                        </div>
                                    </div>)
                            }
                        </div>
                    </div>
                }
            </article>
        </>
    )
}