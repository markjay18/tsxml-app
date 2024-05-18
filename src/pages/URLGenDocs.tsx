import React, { useEffect } from "react"
import ProjectHeader from "../projectComponents/ProjectHeader"
import URLGenContent from "../projectComponents/URLGenContent"
import Footer from "../components/Footer"

const URLGenDocs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
        <div><ProjectHeader /></div>
        <div><URLGenContent /></div>
        <div><Footer /></div>
        </>
    )
}

export default URLGenDocs;