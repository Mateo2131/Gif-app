import ListOfGifs from '@/components/ListOfGifs/ListOfGifs'
import Spinner from '@/components/Spinner/Spinner'
import UseGifs from '@/hooks/useGifs'

function SearchResults({ params }) {
  const { keyword } = params
  const { loading, gifs , setPage } = UseGifs({ keyword })

  const handleNextPage = () => setPage(prevPage => prevPage + 1)

  return (
    <>
      {loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}
      <button onClick={handleNextPage}>Get next Page</button>
    </>
  )
}

export default SearchResults
