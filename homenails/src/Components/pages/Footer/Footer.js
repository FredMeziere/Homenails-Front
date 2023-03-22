import logoFooter from "../../../logoSansFond/déclinaisonFooter.png"
import Button from "../../Button/Button";

function Footer () {
    return(
      <section className="footer">
        <img className="footerIMG" src={logoFooter} alt="Déclinaison du logo pour le footer" />
        <form className="footerNeswletter">
          <p>Abonnez-vous à notre newsletter :</p>
          <input type="text" placeholder="Votre email..." />
          <Button titre="S'abonner" link="/" />  
          
        </form>
        
      </section>
    )
  }
  
  export default Footer;