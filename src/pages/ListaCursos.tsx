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
                <article className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 flex flex-col">
                <div className="flex items-start justify-between mb-3">
                    <h2 className="text-lg font-semibold">React desde cero</h2>
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700">
                        Popular
                        </span>
                </div>
                <p className="text-sm text-slate-600 mb-4">
                    Aprende los fundamentos de React, componentes, props y estado.
                </p>
                <div className="mt-auto flex items-center justify-between">
                    <span className="text-base font-bold text-slate-900">49,99 €</span>
                    <button className="px-3 py-2 rounded-md bg-blue-600 text-white text-xs font-medium hover:bg-blue-700">
                    Ver detalles
                    </button>
                </div>
                </article>

                <article className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 flex flex-col">
                <div className="flex items-start justify-between mb-3">
                    <h2 className="text-lg font-semibold">Tailwind CSS práctico</h2>
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-sky-100 text-sky-700">
                        Nuevo
                        </span>
                </div>
                <p className="text-sm text-slate-600 mb-4">
                    Utiliza utilidades de Tailwind para maquetar interfaces rápidas.
                </p>
                <div className="mt-auto flex items-center justify-between">
                    <span className="text-base font-bold text-slate-900">39,99 €</span>
                    <button className="px-3 py-2 rounded-md bg-blue-600 text-white text-xs font-medium hover:bg-blue-700">
                    Ver detalles
                    </button>
                </div>
                </article>

                <article className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 flex flex-col">
                <div className="flex items-start justify-between mb-3">
                    <h2 className="text-lg font-semibold">JavaScript avanzado</h2>
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-700">
                        Intermedio
                        </span>
                </div>
                <p className="text-sm text-slate-600 mb-4">
                    Profundiza en asincronía, closures y patrones de diseño.
                </p>
                <div className="mt-auto flex items-center justify-between">
                    <span className="text-base font-bold text-slate-900">59,99 €</span>
                    <button className="px-3 py-2 rounded-md bg-blue-600 text-white text-xs font-medium hover:bg-blue-700">
                    Ver detalles
                    </button>
                </div>
                </article>
            </div>
        </div>
    </>
}