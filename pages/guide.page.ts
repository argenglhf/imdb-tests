import { Page, expect } from "@playwright/test";

export class GuidePage {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  // locators
  categoryTab = (categoryTabValue) => this.page.getByRole('tab').getByText(categoryTabValue)
  movieTitle = () => this.page.getByTestId('title').first()

  // actions
  async clickCategoryTab(categoryTabValue) {
    await this.categoryTab(categoryTabValue).click()
  }

  async clickMovieTitle() {
    await this.movieTitle().click()
  }

  async assertMovieTitle() {
    await expect(this.page).toHaveURL(/title/)
  }
}