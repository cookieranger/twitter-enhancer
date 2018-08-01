class Tweet {
  constructor({ id, author, content, hashtags, img_url, title, created_at }) {
    this.id = id;
    this.author = author;
    this.content = content;
    this.hashtags = hashtags;
    this.img_url = img_url;
    this.title = title;
    this.created_at = created_at;
  }
}
export default Tweet;
