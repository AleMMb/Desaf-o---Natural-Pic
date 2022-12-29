import "./styles.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import MyContext from "./context"
import Navbar from "./components/Navbar"
import Home from "./views/Home"
import Favoritos from "./views/Favoritos"

export default function App() {
  const endpoint = "/fotos.json"
  const [imagenes, setImagenes] = useState([])  


 async function getPhotos() {
  try{ const response = await fetch (endpoint)
       const data = await response.json()
       let dataImagenesParaUsar = data.photos.map((imagen) => ({
        id: imagen.id,
        size: imagen.src.large,
        descripcion: imagen.alt,
        creator: imagen.photographer,
        favorito: imagen.liked
      }));
      setImagenes(dataImagenesParaUsar)
 } catch (e) {
      alert(e.message)
    }
 }

  useEffect(() => {
    getPhotos()
  }, [])
 

  return (
    <div className="App">
      <MyContext.Provider value = {{imagenes, setImagenes }}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  )
}
