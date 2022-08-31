import {Home,Movies,MoviesData,PageNotFound} from './components/index'
import {Routes,Route} from 'react-router-dom'
import MovieProvider from './components/contex/MoviesProvider.component'

export default function Router(){
    return(
        <Routes>
            <Route path='Home' element={<Home/>}/>
            <Route path='Movies' element={
                <MovieProvider>
                <Movies/>
                </MovieProvider>}/>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    )
}