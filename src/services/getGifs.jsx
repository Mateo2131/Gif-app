import API_KEY from '../secret'

export default function GetGifs({keyword = 'morty'} = {}) {
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}=${keyword}&limit=10&offset=0&rating=g&lang=en`
    return fetch(URL)
        .then((res) => res.json())
        .then((res) => {
            const { data } = res
            const gifs = data.map(image => {
                const { images, title, id } = image
                const { url } = images.downsized_medium
                return { url, title, id }
            })
            return gifs
        })
}