import { BookBuyLink } from "./BookBuyLink"

export class Book {
  public title = ''
  public rank = 0
  public publisher = ''
  public author = ''
  public primaryIsbn10 = ''
  public primaryIsbn13 = ''
  public image = ''


  public buyLinks: BookBuyLink[] = []

  constructor(data: any = {}) {
    this.title = data.title
    this.rank = data.rank || 0
    this.publisher = data.publisher
    this.primaryIsbn10 = data.primaryIsbn10
    this.primaryIsbn13 = data.primaryIsbn13
    this.image = data.image

    if (data.buyLinks) {
      for (const buyLink of data.buyLinks) {
        this.buyLinks.push(new BookBuyLink(buyLink))
      }
    }
  }
}