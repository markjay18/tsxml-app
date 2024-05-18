import React, { useEffect } from "react"
import ProjectHeader from "../projectComponents/ProjectHeader"
import SlotContent from "../projectComponents/SlotContent"
import Footer from "../components/Footer"

const SlotDocs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
        <div><ProjectHeader /></div>
        <div><SlotContent /></div>
        <div><Footer /></div>
        </>
    )
}

export default SlotDocs;