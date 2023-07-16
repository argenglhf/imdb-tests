import { Page } from "@playwright/test";

export class MainPage {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  // locators
  headerMenu = () => this.page.getByRole('button').getByText('Menu')
  headerMenuItem = (headerMenuItemValue) => this.page.getByRole('presentation').getByText(headerMenuItemValue)

  // actions
  async goto() {
    await this.page.goto('https://www.imdb.com')
  }

  async clickHeaderMenu() {
    await this.headerMenu().click()
  }

  async clickHeaderMenuItem(headerMenuItemValue) {
    await this.headerMenuItem(headerMenuItemValue).click()
  }
}