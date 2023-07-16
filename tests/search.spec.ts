import { test } from '@playwright/test'
import { MainPage } from '../pages/main.page.ts'
import { SearchPage } from '../pages/search.page.ts'

test.describe('search', () => {
  let mainPage: MainPage
  let searchPage: SearchPage

  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page)
    searchPage = new SearchPage(page)
    await mainPage.goto()
  })

  test('search nolan', async () => {
    await searchPage.performSearch('nolan')
    await searchPage.assertSearch('Christopher Nolan')
  })

  test('search dune', async () => {
    await searchPage.performSearch('dune')
    await searchPage.assertSearch('Dune')
  })
})