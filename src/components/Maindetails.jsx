// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import imagepaths from "../imagepaths";
// import { useOutletContext } from "react-router-dom";
import About from "./About";
import Xperience from "./Xperience";
import Skills from "./Skills";
import Works from "./Works";
import Contact from "./Contact";
import Mainpage from "./Mainpage";
export default function Maindetails() {
    // const { profileData: { name, position }, loading, error, Homeref } = useOutletContext();
    return (
        <>
            <Mainpage />
            <About />
            <Xperience />
            <Skills />
            <Works />
            <Contact />
        </>
    )
}