class NewsArticleSchema {
    constructor(title, description, content, url, image, publishedAt, source) {
        this.title = title
        this.description = description
        this.content = content
        this.url = url
        this.image = image
        this.publishedAt = publishedAt
        this.source = source
    }
}

export default NewsArticleSchema;