//ASSETS
import './Button.css'
import Arrow from '../../assets/arrow.svg'

function Button({ arrow, buttonStyle, loading, children, ...props }) {
    return(
        <button className={`button ${buttonStyle}`} {...props}>
            {children} {arrow && <img src={Arrow} />}
        </button>
    )
}

export default Button