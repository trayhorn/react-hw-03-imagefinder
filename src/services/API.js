function fetchImages(query, pages) {
  return fetch( `https://pixabay.com/api/?q=${query}&page=${pages}&key=29734383-6ec437d7a0c5df52cef54a0f9&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response => response.json())
}


export default fetchImages;