export default class PagesService {
  
  constructor(Page) {

    this.Page = Page;

  }

  getPageIds() {

    const pageIds = this.Page.find().then(pages => pages.map(page => page.id));

    return pageIds;

  }
}