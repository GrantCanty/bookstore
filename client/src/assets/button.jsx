import '../styles/button.css'

const Button = (props) => {
    return(
        <button disabled={props.disabled} className={!props.disabled ? props.text.toLowerCase() : props.text.toLowerCase() + ' disabled' } onClick={ props.click } >
            {props.text}
        </button>
    )
}

export default Button;