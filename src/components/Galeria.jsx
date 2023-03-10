import "../assets/css/galeria.css"
import Heart from "./Heart"
import { useContext} from "react"
import MyContext from "../context"


function Galeria() {
  const { imagenes, setImagenes} = useContext(MyContext)
  

  
  const favoritos = (id) => {
    const imagenesIndex = imagenes.findIndex((e) => e.id === id);
    imagenes[imagenesIndex].liked = !imagenes[imagenesIndex].liked
    setImagenes([...imagenes])
    console.log(imagenes)

  }


  return (
    <div className="galeria grid-columns-5 p-3">
       {imagenes.map((e) => (
        <div className="galeria-img" onClick={() => favoritos(e.id)} key={e.id} style={{ backgroundImage: `url(${e.size})`, backgroundSize:`cover` }} >
          <p> {e.descripcion} </p>
          <Heart filled={e.liked}/>
        </div>
      ))}
    </div>
  );
}
export default Galeria
