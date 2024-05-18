import React, { useEffect } from "react"
import ProjectHeader from "../projectComponents/ProjectHeader"
import QuizContent from "../projectComponents/QuizContent"
import Footer from "../components/Footer"

const QuizDocs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
        <div><ProjectHeader /></div>
        <div><QuizContent /></div>
        <div><Footer /></div>
        </>
    )
}

export default QuizDocs;