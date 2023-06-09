import Button from "../../Button/Button";
import Menu from "../../Menu/Menu";
import Logo from "../../../logoSansFond/logoPrincipale.png"

function Header () {
    return(
      <section className="header">
        <img src={Logo} alt="logo homenails" />
        <Menu titre="Accueil" link="/" />
        <Menu titre="Boutique" link="/shop" />
        <Menu titre="Contact" link="/contact" />
        <Menu titre="A propos" link="/about" />
        <Button titre="S'inscrire" link="/signup" />
      </section>
    )
  }
  
  export default Header;