import logoFooter from "../../../logoSansFond/déclinaisonFooter.png"
import Button from "../../Button/Button";
import Menu from "../../Menu/Menu"

function Footer () {
    return(
      <section className="footer">
        <img className="footerIMG" src={logoFooter} alt="Déclinaison du logo pour le footer" />
        <form className="footerNeswletter">
          <p>Abonnez-vous à notre newsletter :</p>
          <input type="text" placeholder="Votre email..." />
          <Button titre="S'abonner" link="/" />  
        </form>
        <div className="footerMenu">
          <Menu titre="CGV" link="/cgv" />
          <Menu titre="Mentions légales" link="/legacy" />
          <Menu titre="A propos" link="/about" />
          <Menu titre="Politique de confidentialité" link="/privacy" />
        </div>
        
      </section>
    )
  }
  
  export default Footer;