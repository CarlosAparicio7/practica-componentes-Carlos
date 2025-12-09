import Etiqueta from "@/components/Etiqueta";

export default function ListaCursos() {
    return <>
        <div className="max-w-5xl mx-auto px-4">
            <header className="mb-8 flex items-center justify-between gap-4">
                <div>
                <h1 className="text-3xl font-bold">Catálogo de cursos</h1>
                <p className="text-slate-600 text-sm">
                    Lista de cursos disponibles.
                </p>
                </div>
                <button className="px-4 py-2 rounded-md bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700">
                Nuevo curso
                </button>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                

                <Etiqueta titulo={"React desde cero"} descripcion={"Aprende los fundamentos de React, componentes, props y estado."} precio={49.99} label={"Popular"}></Etiqueta>
                
                <Etiqueta titulo={"Tailwind CSS práctico"} descripcion={"Utiliza utilidades de Tailwind para maquetar interfaces rápidas."} precio={39.99} label={"Nuevo"}></Etiqueta>

                <Etiqueta titulo={"JavaScript avanzado"} descripcion={"Profundiza en asincronía, closures y patrones de diseño."} precio={59.99} label={"Intermedio"}></Etiqueta>


            </div>
        </div>
    </>
}