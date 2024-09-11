import React, { Component } from 'react'
import Navbar from './Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Footer'
import Home from './Home';




export default class App extends Component {


    constructor() {
        super()
        this.state = {
            language: "hi",
            search: ""
        }
        this.changeLanguage = this.changeLanguage.bind(this)
        this.changeSearch = this.changeSearch.bind(this)
    }

    changeLanguage(input) {
        this.setState({ language: input })
    }

    changeSearch(input) {
        this.setState({ search: input })
    }

    render() {
        return (
            <>
                <BrowserRouter>
                    <Navbar changeSearch={this.changeSearch} changeLanguage={this.changeLanguage} />
                    {/* <HeadLine /> */}
                    <Routes>
                        <Route path='' element={<Home search={this.state.search} language={this.state.language} q="All" />}></Route>
                        <Route path='/Sports' element={<Home search={this.state.search} language={this.state.language} q="Sports" />}></Route>
                        <Route path='/Cricket' element={<Home search={this.state.search} language={this.state.language} q="Cricket" />}></Route>
                        <Route path='/Football' element={<Home search={this.state.search} language={this.state.language} q="Football" />}></Route>
                        <Route path='/Politics' element={<Home search={this.state.search} language={this.state.language} q="Politics" />}></Route>
                        <Route path='/Entertainment' element={<Home search={this.state.search} language={this.state.language} q="Entertainment" />}></Route>
                        <Route path='/Technology' element={<Home search={this.state.search} language={this.state.language} q="Technology" />}></Route>
                        <Route path='/Science' element={<Home search={this.state.search} language={this.state.language} q="Science" />}></Route>
                    </Routes>
                </BrowserRouter>
                <Footer />
            </>
        )
    }
}
