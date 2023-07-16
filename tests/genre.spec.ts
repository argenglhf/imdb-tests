import { test } from '@playwright/test'
import { MainPage } from '../pages/main.page.ts'
import { GenrePage } from '../pages/genre.page.ts'

test.describe('genres', () => {
  let mainPage: MainPage
  let genrePage: GenrePage

  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page)
    genrePage = new GenrePage(page)
    await mainPage.goto()
    await mainPage.clickHeaderMenu()
    await mainPage.clickHeaderMenuItem('Browse Movies by Genre')
    await page.waitForNavigation()
  })

  test('select movie genre', async () => {
    await genrePage.clickGenreItemMovie('Action')
    await genrePage.assertResultsPage('Action')
  })

  test('select tv genre', async () => {
    await genrePage.clickGenreItemTv('Action')
    await genrePage.assertResultsPage('Action')
  })
})