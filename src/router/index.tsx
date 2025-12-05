import GaleriaBotones from "@/pages/GaleriaBotones";
import ListaCursos from "@/pages/ListaCursos";
import {createBrowserRouter} from "react-router-dom";



export const router = createBrowserRouter([
//      {path: "*", element: <PageNotFound />},
      {path: "/", element: <GaleriaBotones/>},
      {path: "/listaCursos", element: <ListaCursos/>}
]);