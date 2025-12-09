import Boton from "./Boton";

type Props = {
    titulo: string;
    descripcion: string;
    precio: number;
    label: 'Popular' | 'Nuevo' | 'Intermedio';
}

export default function Etiqueta({titulo, descripcion, label, precio}: Props) {

    let labelTipo:string = "";

    if(label === 'Popular') {
        labelTipo ="px-2 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700";
    }else if(label === 'Nuevo') {
        labelTipo = "px-2 py-1 text-xs font-semibold rounded-full bg-sky-100 text-sky-700";
    }else if(label === 'Intermedio') {
        labelTipo = "px-2 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-700";
    }

    let colorVerde:string = "";

    colorVerde = "px-4 py-2 rounded-md bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700";

    return <article className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 flex flex-col">
        <div className="flex items-start justify-between mb-3">
            <h2 className="text-lg font-semibold">{titulo}</h2>
            <span className={labelTipo}>
              {label}
            </span>
        </div>
        <p className="text-sm text-slate-600 mb-4">
            {descripcion}
        </p>
        <div className="mt-auto flex items-center justify-between">
            <span className="text-base font-bold text-slate-900">{precio} €</span>
            <Boton titulo="Ver detalles" tipo="primary" handleOnClick={(evt)=>{
                evt.preventDefault();
                alert("Aqui puede ver los detalles");
            }}/>
        </div>
    </article>

}