import React, { useEffect } from "react"
import ProjectHeader from "../projectComponents/ProjectHeader"
import SwiperContent from "../projectComponents/SwiperContent"
import Footer from "../components/Footer"

const SwiperDocs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
        <div><ProjectHeader /></div>
        <div><SwiperContent /></div>
        <div><Footer /></div>
        </>
    )
}

export default SwiperDocs;