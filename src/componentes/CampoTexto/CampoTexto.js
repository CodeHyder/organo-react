
import './CampoTexto.css'

const CampoTexto = (props) => {

//    let valor = ''

//    const [valor, setValor] = useState('')

    const aoDigitar = (evento) => {
        //setValor(evento.target.value)
        //console.log(valor)
        props.aoAlterado(evento.target.value)
    }
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )
}

export default CampoTexto