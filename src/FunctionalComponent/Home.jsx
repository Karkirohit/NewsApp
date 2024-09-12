import React, { useEffect, useState } from 'react'
import Item from './Item'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useLocation } from 'react-router-dom'


export default function Home(props) {

    let [totalResults, setTotalResults] = useState(0)
    let [articles, setArticles] = useState([])
    let [page, setPage] = useState(1)
    let [q, setQ] = useState("")

    let location = useLocation().search
    let query = new URLSearchParams(location)

    async function getApiData() {

        let response = await fetch(`https://newsapi.org/v2/everything?q=${q ? q : "All"}&pageSize=24&page=1&sortBy=publishedAt&language=${props.language}&apiKey=af61d8a70d454870a99c695ab1d46c2d`)

        if (response !== undefined)
            response = await response.json()
        console.log(response);

        setTotalResults(response.totalResults)
        setArticles(response.articles.filter((x) => x.title !== "[Removed]"))

    }

    let fetchData = async () => {
        setPage(page + 1)
        let response = await fetch(`https://newsapi.org/v2/everything?q=${q ? q : "All"}&pageSize=24&page=${page}&sortBy=publishedAt&language=${props.language}&apiKey=af61d8a70d454870a99c695ab1d46c2d`)
        response = await response.json()

        if(response.articles)
        setArticles(articles.concat(response.articles.filter((x) => x.title !== "[Removed")))

    }

    useEffect(() => {
        getApiData()
    }, [props.language,q])

    useEffect(() => {
        setQ(query.get("q"))
        
    }, [location])
    return (
        <div className="container-fluid my-2">
            <h5 className="background text-center text-light p-2 my-2 rounded-2 text-capatilized">{q ? q : "All"} News Articles </h5>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchData}
                hasMore={articles.length < totalResults}
                loader={<div className='my-3 text-center'>
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>}
            >
                <div className="row">
                    {
                        articles?.map((item, index) => {
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
