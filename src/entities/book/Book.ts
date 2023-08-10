export class Book {
  public title = ''
  public rank = 0
  public publisher = ''

  constructor(data: any) {
    this.title = data.title
    this.rank = data.rank || 0
    this.publisher = data.publisher
  }
}