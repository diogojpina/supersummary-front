import NytApiClient from "../clients/NytApiClient";
import { BookList } from "../../entities";

const client = new NytApiClient()

export class BookService {
  public static async getBestSellersList(): Promise<BookList[]> {
    const apiKey = process.env.REACT_APP_NYT_API_KEY
    const response = await client.DoRequest('GET', `/lists/names.json?api-key=${apiKey}`)  

    console.log('response', response)

    const bookLists: BookList[] = []
    for (const list of response.results) {
      const bookList = new BookList({
        name: list.list_name,
        displayName: list.display_name,
        slug: list.list_name_encoded,
        oldPublishedDate: list.oldest_published_date,
        newPublishedDate: response.newest_published_date,
        updated: list.updated,
      })
      bookLists.push(bookList)
    }

    return bookLists
  }
}