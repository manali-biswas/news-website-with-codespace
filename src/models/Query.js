class Query {
    constructor(apikey, q, lang="en", max=9, sortBy="publishedAt", search_in="title,description,content") {
        this.apikey = apikey
        this.q = q // compulsory string keyword - topic
        this.lang = lang // 2 letter lang code string
        this.in = search_in // either "title" or "description" or "content"
        this.max = max // 1-100, max articles in a page
        this.sortBy = sortBy // relevancy, publishedAt
    }
}

export default Query