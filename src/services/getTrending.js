import {API_KEY, API_URL} from '@/secret'

const fromApiResponseToGifs = apiResponse => {
  const { data = [] } = apiResponse
  return data
}

export default function getTrending() {
  const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`

  return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
}