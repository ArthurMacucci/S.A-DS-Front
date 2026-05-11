function SignupPage({ onSwitch }) {
  return (
    <main className="auth-page">
      <section className="auth-card">
        <div className="brand-area">
          <div className="brand-logo">LOGO</div>
          <p className="brand-text">Crie sua conta e comece agora mesmo.</p>
        </div>

        <form className="auth-form">
          <label className="field-label">
            Nome
            <input className="field-input" type="text" placeholder="Seu nome" required />
          </label>

          <label className="field-label">
            Email
            <input className="field-input" type="email" placeholder="seu@email.com" required />
          </label>

          <label className="field-label">
            Senha
            <input className="field-input" type="password" placeholder="••••••••" required />
          </label>

          <label className="field-label">
            Confirmar senha
            <input className="field-input" type="password" placeholder="••••••••" required />
          </label>

          <button className="primary-button" type="submit">
            Cadastrar
          </button>
        </form>

        <div className="auth-footer">
          <span>Já tem uma conta?</span>
          <button className="text-button" type="button" onClick={onSwitch}>
            Faça login
          </button>
        </div>
      </section>
    </main>
  )
}

export default SignupPage
