import { Button, Image } from "react-bootstrap";
import NewsTitleBlock from "../components/NewsTitleBlock";
import NewsText from "../components/NewsText";
import { useParams } from "react-router-dom";

function Article(props) {
    const {id} = useParams()
    const article = props.news[id]

    return (
        <>
            <NewsTitleBlock title={article.title}/>
            <div className="text-center">
                <Image
                    src={article.image}
                    width="700"
                    fluid
                    rounded
                />
            </div>
            <NewsText content={article.content}/>
            <div className="text-center">
            <Button onClick={() => { window.location.href = article.url }}>Get More Info</Button>
            </div>
        </>
    )
}

export default Article;