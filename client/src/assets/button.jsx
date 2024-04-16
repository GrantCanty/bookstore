import '../styles/button.css'

const Button = (props) => {
    return(
        <button className={props.text.toLowerCase()} onClick={ props.click } >
            {props.text}
        </button>
    )
}

export default Button;