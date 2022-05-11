const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: { 'Content-Type': 'application/json;charset=utf-8' },
  params: { 'api_key': API_KEY }
})

async function getTrendingMoviesPreview() {
  try {
    const { data }  = await api('/trending/movie/day')
    const movies    = data.results

    trendingMoviesPreviewList.innerHTML = ''

    movies.forEach(movie => {

      const movieContainer = document.createElement('div')
      movieContainer.classList.add('movie-container')

      const movieImg = document.createElement('img')
      movieImg.classList.add('movie-img')
      movieImg.setAttribute('alt', movie.title)
      movieImg.setAttribute('src', `https://image.tmdb.org/t/p/w300${movie.poster_path}`)

      movieContainer.appendChild(movieImg)
      trendingMoviesPreviewList.appendChild(movieContainer)

    })
  }
  catch (error) { console.error('Error: ', error) }
}
async function getCategoriesPreview() {
  try {
    const { data }    = await api('/genre/movie/list')
    const categories  = data.genres

    categoriesPreviewList.innerHTML = ''

    categories.forEach(categorie => {

      const categoryContainer = document.createElement('div')
      categoryContainer.classList.add('category-container')

      const categoryTitle = document.createElement('h3')
      categoryTitle.classList.add('category-title')
      categoryTitle.setAttribute('id', `id${categorie.id}`)
      categoryTitle.innerText = categorie.name

      categoryContainer.appendChild(categoryTitle)
      categoriesPreviewList.appendChild(categoryContainer)

    })
  }
  catch (error) { console.error('Error: ', error) }
}