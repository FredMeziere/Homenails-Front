import { NavLink } from "react-router-dom";

function Menu({titre, link}) {
    return(
        <NavLink to={link} className="menuLink">
            {titre}
        </NavLink>
    )
}

export default Menu