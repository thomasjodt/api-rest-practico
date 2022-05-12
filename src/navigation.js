trendingBtn.addEventListener('click', () => location.hash = 'trends')
arrowBtn.addEventListener('click', () => {
  history.back()
})
searchFormBtn.addEventListener('click', () => location.hash = `search=${searchFormInput.value}`
)


window.addEventListener('load', navigator, false)
window.addEventListener('hashchange', navigator, false)

function navigator() {

  location.hash.startsWith('#trends')     ?  trendsPage()       :
  location.hash.startsWith('#search=')    ?  searchPage()       :
  location.hash.startsWith('#movie=')     ?  movieDetailsPage() :
  location.hash.startsWith('#category=')  ?  categoriesPage()   :
  homePage()

  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
}

function homePage() {
  console.log('Home!!')

  headerSection.classList.remove('header-container--long')
  headerSection.style.background = ''
  arrowBtn.classList.add('inactive')
  arrowBtn.classList.remove('header-arrow--white')
  headerCategoryTitle.classList.add('inactive')
  headerTitle.classList.remove('inactive')
  searchForm.classList.remove('inactive')

  trendingPreviewSection.classList.remove('inactive')
  categoriesPreviewSection.classList.remove('inactive')
  genericSection.classList.add('inactive')
  movieDetailSection.classList.add('inactive')

  getTrendingMoviesPreview()
  getCategoriesPreview()
}
function categoriesPage() {
  console.log('Categories!!!')

  headerSection.classList.remove('header-container--long')
  // headerSection.style.background = ''
  arrowBtn.classList.remove('inactive')
  arrowBtn.classList.remove('header-arrow--white')
  headerCategoryTitle.classList.remove('inactive')
  headerTitle.classList.add('inactive')
  searchForm.classList.add('inactive')

  trendingPreviewSection.classList.add('inactive')
  categoriesPreviewSection.classList.add('inactive')
  genericSection.classList.remove('inactive')
  movieDetailSection.classList.add('inactive')

  const [ _, categoryData ] = location.hash.split('=')
  const [id, name] = categoryData.split('-')
  const newName = decodeURI(name)
  headerCategoryTitle.innerText = newName

  getMoviesByCategory(id)

}
function trendsPage() {
  console.log('Trends!!')

  headerSection.classList.remove('header-container--long')
  // headerSection.style.background = ''
  arrowBtn.classList.remove('inactive')
  arrowBtn.classList.remove('header-arrow--white')
  headerCategoryTitle.classList.remove('inactive')
  headerTitle.classList.add('inactive')
  searchForm.classList.add('inactive')

  trendingPreviewSection.classList.add('inactive')
  categoriesPreviewSection.classList.add('inactive')
  genericSection.classList.remove('inactive')
  movieDetailSection.classList.add('inactive')

  headerCategoryTitle.innerText = 'Trending'
  getTrendingMovies()
}
function searchPage() {
  console.log('Search!!!')

  headerSection.classList.remove('header-container--long')
  // headerSection.style.background = ''
  arrowBtn.classList.remove('inactive')
  arrowBtn.classList.remove('header-arrow--white')
  headerCategoryTitle.classList.add('inactive')
  headerTitle.classList.add('inactive')
  searchForm.classList.remove('inactive')

  trendingPreviewSection.classList.add('inactive')
  categoriesPreviewSection.classList.add('inactive')
  genericSection.classList.remove('inactive')
  movieDetailSection.classList.add('inactive')

  const [_, query] = location.hash.split('=')
  getMoviesBySearch(query)


}
function movieDetailsPage() {
  console.log('Movie Details!!!')

  headerSection.classList.add('header-container--long')
  // headerSection.style.background = ''
  arrowBtn.classList.remove('inactive')
  arrowBtn.classList.add('header-arrow--white')
  headerCategoryTitle.classList.add('inactive')
  headerTitle.classList.add('inactive')
  searchForm.classList.add('inactive')

  trendingPreviewSection.classList.add('inactive')
  categoriesPreviewSection.classList.add('inactive')
  genericSection.classList.add('inactive')
  movieDetailSection.classList.remove('inactive')

  const [_, movieId] = location.hash.split('=')
  getMovieById(movieId)

}