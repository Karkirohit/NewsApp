import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {

    constructor() {
        super()
        this.state = {
            search: ""
        }
    }

    postData(e) {
        e.preventDefault()
        this.props.changeSearch(this.state.search)
        this.setState({ search: "" })
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg background sticky-top ">
                <div className="container-fluid ">
                    <a className="navbar-brand text-light" href="/">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <NavLink className="nav-link active text-light" aria-current="page" to="/" onClick={() => this.props.changeSearch("")} >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light" to="/Politics" onClick={() => this.props.changeSearch("")}>Politics</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light" to="/Science" onClick={() => this.props.changeSearch("")}>Science</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light" to="/Sports" onClick={() => this.props.changeSearch("")}>Sports</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light" to="/Entertainment" onClick={() => this.props.changeSearch("")}>Entertainment</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-light dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Others
                                </a>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to="/Football" onClick={() => this.props.changeSearch("")}>Football</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/Technology" onClick={() => this.props.changeSearch("")}>Technology</NavLink></li>

                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-light dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Language
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <button className='dropdown-item' onClick={() => this.props.changeLanguage("hi")} >Hindi</button>

                                    </li>
                                    <li>
                                        <button className='dropdown-item' onClick={() => this.props.changeLanguage("en")}>English</button>

                                    </li>
                                </ul>
                            </li>

                        </ul>
                        <form className="d-flex" onSubmit={(e) => this.postData(e)}>
                            <input className="form-control me-2" type="search" name="search" id='search' onChange={(e) => this.setState({ search: e.target.value })} value={this.state.search} placeholder="Search" aria-label="Search" />

                            <button className="btn btn-outline-primary text-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}
