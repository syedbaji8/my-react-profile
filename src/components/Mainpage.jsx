import { useOutletContext } from "react-router-dom";
// import imagepaths from "../imagepaths";
export default function Mainpage() {
    const { profileData: { name, position }, loading, error, Homeref } = useOutletContext();
    return (
        <>
            <article id="Home" className="first-page w-full h-full flex place-items-center justify-center py-10 snap-start" ref={Homeref}>
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
        </>
    )
}