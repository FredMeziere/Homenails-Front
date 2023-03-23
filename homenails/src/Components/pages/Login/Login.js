function Login() {
  return (
    <div className="Login">
      <h1>Login</h1>
      <div className="login-container">
        <p>Vous n'avez pas encore de compte ? Cliquez <a href="/signup">ici</a></p>
        <p>Sinon, connectez-vous ici :</p>
        <form method="post">
          <input type="text" placeholder="Votre email..." />
          <input type="password" placeholder="Votre mot de passe..." />
          <button>Se connecter</button>
        </form>
      </div>
    </div>
  )
}

export default Login;