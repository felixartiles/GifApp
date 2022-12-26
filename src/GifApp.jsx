import { useState } from "react";
import { AddCategory } from "./componentes/AddCategory";
import { GifGrid } from "./componentes/gifGrid";


export const GifApp = () => {
  const [categorias, setCategorias] = useState(["perro"]);

  const agregarCategoria = (nuevaCategoria) => {
    if (categorias.includes(nuevaCategoria)) {
      alert(nuevaCategoria + " ya existe");
      return;
    }
    setCategorias([nuevaCategoria, ...categorias]);
  };
  return (
    <>
      <h1>Gif App</h1>

      {/* Input */}
      <AddCategory
        //   setCategorias={setCategorias}
        onNewCategory={(event) => agregarCategoria(event)}
      />
      <small>Pulse enter para buscar</small>
      {/* Listado */}
        {categorias.map((categoria) => (
          <GifGrid key={categoria} categoria={categoria} />
        ))}
    
     </>
  );
};
