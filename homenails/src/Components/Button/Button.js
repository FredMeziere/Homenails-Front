import { NavLink } from 'react-router-dom'

function Button({titre, link}) {
    return(
        <NavLink to={link} className="buttonLink">
            <button className="button" type='button'>{titre}</button>
        </NavLink>
    )
}

export default Button;