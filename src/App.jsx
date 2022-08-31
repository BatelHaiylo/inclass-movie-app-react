import Router from './Router.component'
import Header from './components/featurs/header/Header.components'
import Footer from './components/featurs/footer/Footer.component'
import {BrowserRouter} from "react-router-dom"
import './App.css'

export default function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Router/>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}