import { Page, expect } from "@playwright/test";

export class GenrePage {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  // locators
  genreItemMovie = (genreItemValue) => this.page.getByRole('button').getByText(genreItemValue).nth(0)
  genreItemTv = (genreItemValue) => this.page.getByRole('button').getByText(genreItemValue).nth(1)

  // actions
  async clickGenreItemMovie(genreItemValue) {
    await this.genreItemMovie(genreItemValue).click()
  }

  async clickGenreItemTv(genreItemValue) {
    await this.genreItemTv(genreItemValue).click()
  }

  async assertResultsPage(genreResultValue) {
    const currentUrl = await this.page.url();
    expect(currentUrl).toContain(genreResultValue);
  }
}