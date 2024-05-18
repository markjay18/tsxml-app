import React, { useEffect } from "react"
import ProjectHeader from "../projectComponents/ProjectHeader"
import PuppeteerContent from "../projectComponents/PuppeteerContent"
import Footer from "../components/Footer"

const PuppeteerDocs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
        <div><ProjectHeader /></div>
        <div><PuppeteerContent /></div>
        <div><Footer /></div>
        </>
    )
}

export default PuppeteerDocs;