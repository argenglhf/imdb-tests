import { Page, expect } from "@playwright/test";

export class SearchPage {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  // locators
  headerSearch = () => this.page.getByLabel('Search IMDb')
  searchResult = (searchResultValue) => this.page.getByTestId('find-results-section-name').getByRole('button', { name: searchResultValue }).first()

  // actions
  async performSearch(searchValue) {
    await this.headerSearch().fill(searchValue)
    await this.headerSearch().press('Enter')
  }

  async assertSearch(searchResultValue) {
    await expect(this.searchResult(searchResultValue)).toBeVisible()
  }
}