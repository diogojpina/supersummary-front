export class BookList {
  public name = ''
  public displayName = ''
  public slug = ''
  public oldestPublishedDate = new Date()
  public newestPublishedDate = new Date()
  public updated = ''

  constructor (data: any = {}) {
    this.name = data.name
    this.displayName = data.displayName
    this.slug = data.slug
    this.oldestPublishedDate = new Date(data.oldestPublishedDate)
    this.newestPublishedDate = new Date(data.newestPublishedDate)
    this.updated = data.updated
  }
}