import ListOfGifs from '@/components/ListOfGifs/ListOfGifs'
import Spinner from '@/components/Spinner/Spinner'
import UseGifs from '@/hooks/useGifs'

function SearchResults({ params }) {
  const { keyword } = params
  const { loading, gifs } = UseGifs({ keyword })

  return <>{loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}</>
}

export default SearchResults
