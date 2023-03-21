import { NavLink } from 'react-router-dom'

function Error () {
  return(
    <section className="error">
      <p className="errorNumber">404</p>
      <p className="errorTitle">Oups, la page que vous demandez n'existe pas...</p>
      <NavLink className="errorLink" to="/">Retourner sur la page d'accueil</NavLink>
    </section>
  )
  }
  
  export default Error;