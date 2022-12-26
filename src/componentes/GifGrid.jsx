import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ categoria }) => {
const {images, isLoading} = useFetchGifs(categoria);


  return (
    <>
      <h3>{categoria}</h3>
      {
        isLoading && <h2>Cargando...</h2>
      }
      <div className="card-grid">
        {images.map(
          (img) => (
            <GifGridItem key={img.id} image={img}/>
          )
        )}
      </div>
    </>
  );
};
