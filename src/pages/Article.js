import { Image } from "react-bootstrap";
import NewsTitleBlock from "../components/NewsTitleBlock";
import NewsText from "../components/NewsText";

function Article() {
    return (
        <>
            <NewsTitleBlock />
            <div className="text-center">
                <Image
                    src='Octocat.png'
                    width="700"
                    fluid
                />
            </div>
            <NewsText />
        </>
    )
}

export default Article;