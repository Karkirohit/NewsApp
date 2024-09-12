import React, { useState } from 'react'
import Navbar from './Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Footer'
import Home from './Home';




export default function App() {

    let [language, setLanguage] = useState("hi")


    function changeLanguage(input) {
        setLanguage(input)
    }
    return (
        <>
            <BrowserRouter>
                <Navbar changeLanguage={changeLanguage} />
                <Routes>
                    <Route path='' element={<Home language={language} />}></Route>
                    <Route path='/*' element={<Home language={language} />}></Route>
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    )

}
