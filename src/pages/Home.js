import { useLocation } from "react-router-dom";
import BreakingNewsheader from "../components/BreakingNewsHeader";
import HeaderNews from "../components/HeaderNews";
import NewsCardGrid from "../components/NewsCardGrid";
import NewsArticleSchema from "../models/NewsArticleSchema";
import axios from "axios";
import Query from "../models/Query";
import { useEffect, useState } from "react";
import { getApiKey } from "../utils/Utils";

function Home(props) {

    const [news, setNews] = useState([])
    const location = useLocation()
    var pathname = location.pathname
    if(pathname.length === 1)
    {
        pathname = "/general"
    }
    const keyword = pathname.substring(1)

    useEffect(()=>{
        loadData()
    }, [])

    const loadData = () => axios.get("https://gnews.io/api/v4/search", {
        params: new Query(getApiKey(), keyword)
    })
    .then(response => {
        if(response.status === 200) {
            setNews(
                response.data.articles.map(
                    (article) => new NewsArticleSchema(
                        article.title,
                        article.description,
                        article.content,
                        article.url,
                        article.image,
                        article.publishedAt,
                        article.source
                    )
                )
            )
            props.newsSetter(response.data.articles.map(
                (article) => new NewsArticleSchema(
                    article.title,
                    article.description,
                    article.content,
                    article.url,
                    article.image,
                    article.publishedAt,
                    article.source
                )
            ))
        }
    })

    return (
        <>
            <HeaderNews headerNews={news[0]} />
            <BreakingNewsheader headlines={news.map((news) => news.title)} />
            <NewsCardGrid news={news} />
        </>
    )
}

export default Home;