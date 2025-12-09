import GaleriaBotones from "@/pages/GaleriaBotones";
import ListaCursos from "@/pages/ListaCursos";
import PanelNotificaciones from "@/pages/PanelNotificaciones";
import { createBrowserRouter } from "react-router-dom";



export const router = createBrowserRouter([
//      {path: "*", element: <PageNotFound />},
      {path: "/", element: <GaleriaBotones/>},
      {path: "/listaCursos", element: <ListaCursos/>},
      {path: "/panelNotificaciones", element: <PanelNotificaciones/>}
]);