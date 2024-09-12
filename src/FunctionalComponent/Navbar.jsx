import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar(props) {

    let [search, setSearch] = useState("")

    let navigate=useNavigate()

    function postData(e) {
        e.preventDefault()
        navigate("/?q=" + search)
        setSearch("")
    }


    return (
        <nav className="navbar navbar-expand-lg background ">
            <div className="container-fluid ">
                <a className="navbar-brand text-light" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item ">
                            <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/?q=Politics" >Politics</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/?q=Science" >Science</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/?q=Sports" >Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/?q=Entertainment" >Entertainment</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link text-light dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Others
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/?q=Football" >Football</Link></li>
                                <li><Link className="dropdown-item" to="/?q=Technology" >Technology</Link></li>

                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link text-light dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Language
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <button className='dropdown-item' onClick={() => props.changeLanguage("hi")} >Hindi</button>

                                </li>
                                <li>
                                    <button className='dropdown-item' onClick={() => props.changeLanguage("en")}>English</button>

                                </li>
                            </ul>
                        </li>

                    </ul>
                    <form className="d-flex" onSubmit={(e) => postData(e)}>
                        <input className="form-control me-2" type="search" name="search" id='search' onChange={(e) => setSearch(e.target.value)} value={search} placeholder="Search" aria-label="Search" />

                        <button className="btn btn-outline-primary text-light" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )

}
