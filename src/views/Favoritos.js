import { useContext } from 'react'
import MyContext from '../context'



export default function Favoritos() {

  const { imagenes } = useContext(MyContext)

  let cantImagenesFavoritas = (imagenes.filter((e) => e.liked)).length
  console.log (cantImagenesFavoritas)

  return (
    <div className="favoritos">
      <h1>Fotos favoritas</h1>
      <div className="galeria-favoritos">
        {cantImagenesFavoritas != 0 ? imagenes.filter((e) => e.liked).map((e) => (
          <div key={e.id}>
          <img src={e.size}></img>
          <p> Photography taken by: {e.creator} </p> </div>
        )) : `No has seleccionado fotografías favoritas`}
      </div>
    </div>
  );
}
