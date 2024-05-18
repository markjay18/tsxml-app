import React, { useEffect } from 'react';
import ProjectHeader from "../projectComponents/ProjectHeader"
import LotteryContent from "../projectComponents/LotteryContent"
import Footer from "../components/Footer"

const LotteryDocs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
        <div><ProjectHeader /></div>
        <div><LotteryContent /></div>
        <div><Footer /></div>
        </>
    )
}

export default LotteryDocs;