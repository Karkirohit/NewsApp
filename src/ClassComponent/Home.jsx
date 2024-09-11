import React, { Component } from 'react'
import Item from './Item'
import InfiniteScroll from 'react-infinite-scroll-component'


export default class Home extends Component {

    constructor() {
        super()
        this.state = {
            totalResults: 0,
            articles: [],
            page: 1
        }
    }

    async getApiData() {
        
        let response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search ? this.props.search : this.props.q}&pageSize=24&page=1&sortBy=publishedAt&language=${this.props.language}&apiKey=af61d8a70d454870a99c695ab1d46c2d`)

        if(response!==undefined)
        response = await response.json()
        console.log(response);

        this.setState({
            totalResults: response.totalResults,
            articles: response.articles.filter((x) => x.title !== "[Removed]")
        })

    }

    fetchData = async () => {
        this.setState({ page: this.state.page + 1 })
        let response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search ? this.props.search : this.props.q}&pageSize=24&page=${this.state.page}&sortBy=publishedAt&language=${this.props.language}&apiKey=af61d8a70d454870a99c695ab1d46c2d`)
        response = await response.json()
        if (response.articles) {
            this.setState({
                articles: this.state.articles.concat(response.articles.filter((x) => x.title !== "[Removed"))
            })
        }
    }

    componentDidMount() {
        this.getApiData()
    }

    componentDidUpdate(oldProps) {
        if (oldProps !== this.props)
            this.getApiData()
    }

    render() {
        return (
            <div className="container-fluid my-2">
                <h5 className="background text-center text-light p-2 my-2 rounded-2 text-capatilized">{this.props.search ? this.props.search : this.props.q} News Articles </h5>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchData}
                    hasMore={this.state.articles.length < this.state.totalResults}
                    loader={<div className='my-3 text-center'>
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>}
                >
                    <div className="row">
                        {
                            this.state.articles?.map((item, index) => {
                                return <Item

                                    key={index}
                                    source={item.source.name}
                                    title={item.title}
                                    description={item.description}
                                    url={item.url}
                                    pic={item.urlToImage}
                                    date={item.publishedAt}

                                />
                            })
                        }
                    </div>
                </InfiniteScroll>
            </div>
        )
    }
}
