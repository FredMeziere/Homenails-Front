function Contact() {
  return (
    <div className="Contact">
      <div className="contact-container">
        <h1>Formulaire de contact</h1>
        <form method="post">
          <input type="text" placeholder="Votre prénom..." />
          <input type="text" placeholder="Votre nom..." />
          <input type="tel" placeholder="Votre téléphone..." />
          <input type="email" placeholder="Votre email..." />
          <textarea placeholder="Votre message..." />
          <button>Envoyer</button>
        </form>
      </div>

      <div className="infos-container">
        <div className="logo" />
        <div>
          <h2>Claire Vanlerberghe</h2>
          <div>
          <p>79 rue du feretra</p>
          <p>31400 Toulouse</p>
          </div>
          <div>
          <p>vanlerberghe24@gmail.com</p>
          <p>06.07.42.78.05</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;