type Props = {
    titulo: string;
    descripcion: string;
    color: "Verde" | "Naranja" | "Azul"
}

export default function Mensaje({titulo, descripcion, color}: Props) {

    let colorRecuadro:string = "";
    let colorPunto:string = "";
    let colorTexto1:string = "";
    let colorTexto2:string = "";

    if(color === 'Verde') {
        colorRecuadro ="flex items-start gap-3 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2";
        colorPunto = "mt-1 h-2 w-2 rounded-full bg-emerald-500";
        colorTexto1 = "text-sm text-emerald-900";
        colorTexto2 = "text-xs text-emerald-700 mt-1";
    }else if(color === 'Naranja') {
        colorRecuadro = "flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2";
        colorPunto = "mt-1 h-2 w-2 rounded-full bg-amber-500";
        colorTexto1 = "text-sm text-amber-900";
        colorTexto2 = "text-xs text-amber-700 mt-1";
    }else if(color === 'Azul') {
        colorRecuadro = "flex items-start gap-3 rounded-lg border border-sky-200 bg-sky-50 px-3 py-2";
        colorPunto = "mt-1 h-2 w-2 rounded-full bg-sky-500";
        colorTexto1 = "text-sm text-sky-900";
        colorTexto2 = "text-xs text-sky-700 mt-1";
    }

    return <div className={colorRecuadro}>
        <div className={colorPunto}></div>
        <div className="flex-1">
            <p className={colorTexto1}>
            {titulo}
            </p>
            <p className={colorTexto2}>
            {descripcion}
            </p>
        </div>
    </div>
}