function Signup() {
  return (
    <div className="Signup">
      <h1>Inscription</h1>
      <div className="signup-container">
        <p>Vous avez déjà un compte ? Cliquez <a href="/login">ici</a></p>
        <p>Sinon, créez le votre maintenant :</p>

        <form method="post">
          <select>
            <option selected disabled>Vous êtes...</option>
            <option value="madame">Madame</option>
            <option value="monsieur">Monsieur</option>
          </select>

          <input type="text" placeholder="Votre nom..." />
          <input type="text" placeholder="Votre prénom..." />
          <input type="text" placeholder="Votre date de naissance..." />
          <input type="text" placeholder="Votre email..." />
          <input type="text" placeholder="Confirmation email..." />
          <input type="password" placeholder="Votre mot de passe..." />
          <input type="password" placeholder="Confirmation mot de passe..." />

          <button>S'inscrire</button>
        </form>
      </div>
    </div>
  )
}

export default Signup;