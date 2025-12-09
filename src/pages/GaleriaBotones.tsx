import Boton from "@/components/Boton";


export default function GaleriaBotones() {
    return <>
        <body className="min-h-screen bg-slate-100 flex items-center justify-center"></body>
            <div className="bg-white shadow-lg rounded-xl p-6 max-w-3xl w-full space-y-6">
                <h1 className="text-2xl font-bold">Galería de botones</h1>


                <section className="space-y-3">
                    <h2 className="font-semibold">Botones primarios</h2>
                    <div className="flex flex-wrap gap-3">
                        <Boton titulo="Guardar cambios" tipo="primary" handleOnClick={(evt)=>{
                            evt.preventDefault();
                            alert("Has guardado los cambios");
                        }}/>

                        <Boton titulo="Crear cuenta" tipo="primary" handleOnClick={(evt)=>{
                            evt.preventDefault();
                            alert("Su cuenta ha sido creada");
                        }}/>

                        <Boton titulo="Botón ancho completo" tipo="primary" handleOnClick={(evt)=>{
                            evt.preventDefault();
                            alert("Aqui tiene más ancho y completo el boton");
                        }}/>
                    </div>
                </section>


                <section className="space-y-3">
                    <h2 className="font-semibold">Botones secundarios</h2>
                    <div className="flex flex-wrap gap-3">
                        <Boton titulo="Cancelar" tipo="secundary" handleOnClick={(evt)=>{
                            evt.preventDefault();
                            alert("Ha sido cancelado");
                        }}/>

                        <Boton titulo="Ver detalles" tipo="secundary" handleOnClick={(evt)=>{
                            evt.preventDefault();
                            alert("Aqui puede ver los detalles");
                        }}/>
                    </div>
                </section>


                <section className="space-y-3">
                    <h2 className="font-semibold">Botones de peligro</h2>
                    <div className="flex flex-wrap gap-3">

                        <Boton titulo="Eliminar" tipo="danger" handleOnClick={(evt)=>{
                            evt.preventDefault();
                            alert("Ha eliminado correctamente");
                        }}/>

                        <Boton titulo="Borrar cuenta" tipo="danger" handleOnClick={(evt)=>{
                            evt.preventDefault();
                            alert("Ha borrado la cuenta correctamente");
                        }}/>
                    </div>
                </section>
            </div>
    </>
}