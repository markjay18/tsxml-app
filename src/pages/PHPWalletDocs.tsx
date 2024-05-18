
import React, { useEffect } from "react"
import ProjectHeader from "../projectComponents/ProjectHeader"
import PHPWalletContent from "../projectComponents/PHPWalletContent"
import Footer from "../components/Footer"

const PHPWalletDocs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
        <div><ProjectHeader /></div>
        <div><PHPWalletContent /></div>
        <div><Footer /></div>
        </>
    )
}

export default PHPWalletDocs;