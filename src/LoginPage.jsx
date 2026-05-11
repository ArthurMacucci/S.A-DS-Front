function LoginPage({ onSwitch }) {
  return (
    <main className="auth-page">
      <section className="auth-card">
        <div className="brand-area">
          <div className="brand-logo">LOGO</div>
          <p className="brand-text">Bem-vindo de volta! Faça login para continuar.</p>
        </div>

        <form className="auth-form">
          <label className="field-label">
            Email
            <input className="field-input" type="email" placeholder="seu@email.com" required />
          </label>

          <label className="field-label">
            Senha
            <input className="field-input" type="password" placeholder="••••••••" required />
          </label>

          <button className="primary-button" type="submit">
            Entrar
          </button>
        </form>

        <div className="auth-footer">
          <span>Não tem conta?</span>
          <button className="text-button" type="button" onClick={onSwitch}>
            Cadastre-se
          </button>
        </div>
      </section>
    </main>
  )
}

export default LoginPage
