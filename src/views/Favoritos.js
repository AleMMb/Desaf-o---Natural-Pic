import { useContext } from 'react'
import MyContext from '../context'



export default function Favoritos() {

  const { imagenes } = useContext(MyContext)

  return (
    <div className="favoritos">
      <h1>Fotos favoritas</h1>
      <div className="galeria-favoritos">
        {imagenes.filter((e) => e.liked).map((e) => (
          <img key={e.id} src={e.size}></img>
        ))}
      </div>
    </div>
  );
}
