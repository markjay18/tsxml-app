import React, { useEffect } from "react"
import ProjectHeader from "../projectComponents/ProjectHeader"
import TimeContent from "../projectComponents/TimeContent"
import Footer from "../components/Footer"

const TimeDocs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
        <div><ProjectHeader /></div>
        <div><TimeContent /></div>
        <div><Footer /></div>
        </>
    )
}

export default TimeDocs;