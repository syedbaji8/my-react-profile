import imagepaths from "../imagepaths"
export default function ProfileOverview() {
    return (
        <>
            <div className="resume-column-1 resume__profile h-full w-full lg:w-[20%] hidden lg:block">
                <div className="w-full px-3 pt-10 pb-10">
                    <div className="person-details mb-3 flex items-center justify-center">
                        <figure className='text-center'>
                            <span className='rounded-full block w-45 h-45 overflow-hidden mb-3'>
                                <img src={imagepaths['propic']} alt="" />
                            </span>
                            <figcaption className='person-name poppins-bold text-2xl mb-0'>Syed Baji Shaik</figcaption>
                            <figcaption className='person-role'>Front-end Developer</figcaption>
                        </figure>
                    </div>
                    <div className="person-social mb-4 text-center flex flex-wrap flex-row justify-center">
                        <a className="social-icon mx-5" target="_blank" href="https://www.facebook.com"><i className="fa-brands fa-linkedin-in"></i></a>
                        <a className="social-icon mx-5" target="_blank" href="https://www.twitter.com"><i className="fa-brands fa-twitter"></i></a>
                        <a className="social-icon mx-5" target="_blank" href="https://www.linkedin.com"><i className="fa-brands fa-facebook-f"></i></a>
                    </div>
                    <div className="person-resume-download mb-3 text-center">
                        <a className="btn border px-4 py-1 rounded" target="_blank" href="https://www.heroku.com/uploads/myresume.pdf">Download CV</a>
                    </div>
                    {/* <div className="person-social mb-3">sdsd</div> */}
                </div>
            </div>
        </>
    )
}