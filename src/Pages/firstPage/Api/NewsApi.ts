import {  IRepo, Title, Url, UrlToImage } from "./Type"

interface Response {
    articles: IRepo,
    url: Url,
    title: Title,
    urlToImage: UrlToImage
}


export const fetchNews = async (): Promise <Response> => {
    const res = await fetch(`https://newsapi.org/v2/everything?qInTitle=('save world')&apiKey=b472d02265aa4e4884eeb448dfc2983e`)
    const data = await res.json()
    console.log(data.articles)
    return (data.articles[1])
  }