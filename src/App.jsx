import { Route } from 'wouter'
import Home from './pages/home/Home'
import SearchResults from './pages/searchResults/SearchResults'
import Detail from './pages/detail/Detail'
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext'
import './App.css'

function App() {
  return (
    <StaticContext.Provider value={{ name: 'mate2131'}}>
      <div className='App'>
        <GifsContextProvider>
        <Route 
          path='/search/:keyword' 
          component={SearchResults} 
        />
        <Route 
          path='/' 
          component={Home} 
        />
        <Route 
          path='/gif/:id' 
          component={Detail} 
        />
        </GifsContextProvider>
      </div>
    </StaticContext.Provider>
  )
}

export default App
