type Props = {
    titulo: string
    tipo: 'primary' | 'secundary' | 'danger';
    handleOnClick?: React.MouseEventHandler<HTMLButtonElement>;
}



export default function Boton(props:Props) {
    
    let tipoColor:string = "";

    if(props.tipo === 'primary') {
        tipoColor ="px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700";
    }else if(props.tipo === 'secundary') {
        tipoColor = "px-4 py-2 rounded-md border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-50";
    }else if(props.tipo === 'danger') {
        tipoColor = "px-4 py-2 rounded-md bg-red-600 text-white text-sm font-medium hover:bg-red-700";
    }
    
    return <button onClick={props.handleOnClick} className={tipoColor}>{props.titulo}</button>
}

