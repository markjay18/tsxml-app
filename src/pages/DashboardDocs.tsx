import React, { useEffect } from "react"
import ProjectHeader from "../projectComponents/ProjectHeader"
import DashboardContent from "../projectComponents/DashboardContent"
import Footer from "../components/Footer"

const DashboardDocs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
        <div><ProjectHeader /></div>
        <div><DashboardContent /></div>
        <div><Footer /></div>
        </>
    )
}

export default DashboardDocs;