import React, { useEffect } from "react"
import ProjectHeader from "../projectComponents/ProjectHeader"
import CrawlingContent from "../projectComponents/CrawlingContent"
import Footer from "../components/Footer"

const CrawlingDocs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
        <div><ProjectHeader /></div>
        <div><CrawlingContent /></div>
        <div><Footer /></div>
        </>
    )
}

export default CrawlingDocs;