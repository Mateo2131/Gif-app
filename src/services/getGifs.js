import API_KEY from '@/secret'

async function GetGifs({ keyword = 'morty' } = {}) {
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}=${keyword}&limit=20&offset=0&rating=g&lang=en`
  const res = await fetch(URL)
  const res_2 = await res.json()
  const { data } = res_2
  const gifs = data.map(image => {
    const { images, title, id } = image
    const { url } = images.downsized_medium
    return { url, title, id }
  })
  return gifs
}

export default GetGifs