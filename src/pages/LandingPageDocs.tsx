import React, { useEffect } from "react"
import ProjectHeader from "../projectComponents/ProjectHeader"
import LandingPageContent from "../projectComponents/LandingPageContent"
import Footer from "../components/Footer"

const LandingPageDocs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
        <div><ProjectHeader /></div>
        <div><LandingPageContent /></div>
        <div><Footer /></div>
        </>
    )
} 

export default LandingPageDocs;