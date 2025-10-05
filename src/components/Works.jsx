import { useOutletContext, Link } from "react-router-dom";
import imagepaths from "../imagepaths";

export default function Works() {
    const { profileData: { works }, loading, error, Portfolioref } = useOutletContext();
    return (
        <>
            <article id="Works" className="flex flex-col lg:flex-row flex-wrap h-full place-items-start justify-center py-10 overflow-hidden snap-start" ref={Portfolioref}>
                {loading && <p className="text-blue-500">Loading...</p>}
                {error && <p className="text-red-500">Error: {error}</p>}
                {!loading && !error &&
                    <div className="w-full flex flex-row flex-wrap px-8 h-full overflow-hidden">
                        <h2 className="text-3xl font-semibold w-full border-b border-white/15 pb-2 mb-4">My Works</h2>
                        <div className="w-full flex flex-row flex-wrap column1">
                            {
                                works?.map((work, index) => <div key={index} className="w-1/5 px-1">
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