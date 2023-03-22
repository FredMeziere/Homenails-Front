import AboutImg from '../../../images/goldmarble.png'

function About() {
  return (
    <div className="About">
      <h1>A propos</h1>
      <div className="about-container">
        <img src={AboutImg} alt="A propos" />
        <div>
          <p>
            Homenails a été créée en 2021 avec pour objectif de proposer une solution innovante et pratique pour les femmes qui n'ont pas le temps, la possibilité ou le budget de faire leurs ongles en institut. Nous sommes spécialisés dans la vente de press on nails, faux-ongles réalisés à la main.
          </p>
          <p>
            Notre mission est de rendre la beauté des ongles accessible à tous, en offrant des produits de qualité professionnelle à des prix abordables. Nous sommes fiers de proposer une large gamme de designs pour répondre à tous les goûts et toutes les occasions, du quotidien aux événements spéciaux.
          </p>
          <p>
            Nous sommes à l'écoute de nos clients et nous nous engageons à offrir un service clientèle irréprochable.
          </p>
          <p>
            Nous sommes ravis de vous accueillir sur notre site et nous espérons que vous trouverez les produits qui vous conviennent pour sublimer vos ongles.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;