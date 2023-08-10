export class BookBuyLink {
  public name = ''
  public url = ''

  constructor (data: any) {
    this.name = data.name
    this.url = data.url
  }
}