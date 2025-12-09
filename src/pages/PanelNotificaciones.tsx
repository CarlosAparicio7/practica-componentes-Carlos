import Mensaje from "@/components/Mensaje";


export default function PanelNotificaciones() {
    return <>
        <div className="min-h-screen bg-slate-100 flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-xl p-6 max-w-xl w-full">
            <h1 className="text-2xl font-bold mb-4">Notificaciones</h1>

                <div className="space-y-3">

                    <Mensaje titulo={"Cambios guardados correctamente."} descripcion={"Hace 2 minutos"} color={"Verde"}></Mensaje>

                    <Mensaje titulo={"Tienes tareas pendientes por revisar."} descripcion={"Hace 10 minutos"} color={"Naranja"}></Mensaje>

                    <Mensaje titulo={"Nuevo mensaje del profesor en el foro."} descripcion={"Hace 30 minutos"} color={"Azul"}></Mensaje>
                    

                </div>
            </div>
        </div>
    </>
}