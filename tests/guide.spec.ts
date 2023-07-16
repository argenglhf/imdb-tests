import { test } from '@playwright/test'
import { MainPage } from '../pages/main.page.ts'
import { GuidePage } from '../pages/guide.page.ts'

test.describe('what to watch', () => {
  let mainPage: MainPage
  let guidePage: GuidePage

  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page)
    guidePage = new GuidePage(page)
    await mainPage.goto()
    await mainPage.clickHeaderMenu()
    await mainPage.clickHeaderMenuItem('What to Watch')
    await page.waitForNavigation()
  })

  test('most popular', async () => {
    await guidePage.clickCategoryTab('MOST POPULAR')
    await guidePage.clickMovieTitle()
    await guidePage.assertMovieTitle()
  })

  test('fan favorites', async () => {
    await guidePage.clickCategoryTab('FAN FAVORITES')
    await guidePage.clickMovieTitle()
    await guidePage.assertMovieTitle()
  })
})