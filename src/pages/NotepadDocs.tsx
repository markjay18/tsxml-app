import React, { useEffect } from "react"
import ProjectHeader from "../projectComponents/ProjectHeader"
import NotepadContent from "../projectComponents/NotepadContent"
import Footer from "../components/Footer"

const NotepadDocs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
        <div><ProjectHeader /></div>
        <div><NotepadContent /></div>
        <div><Footer /></div>
        </>
    )
}

export default NotepadDocs;