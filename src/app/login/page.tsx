export default function Login() {
  return (
    // Container centralizado com fundo cinza claro
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Caixa branca centralizada com sombra e bordas arredondadas */}
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        {/* Título da página */}
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        {/* Formulário de login */}
        <form className="space-y-4">
          {/* Campo de e-mail */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu e-mail"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Campo de senha */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Digite sua senha"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Link para recuperar senha */}
          <div className="text-right">
            <a href="/login/recuperar_senha" className="text-sm text-blue-500 hover:underline">
              Esqueceu sua senha?
            </a>
          </div>

          {/* Botão de login */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Entrar
          </button>
        </form>

        {/* Link para cadastro */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Não tem uma conta?{" "}
          <a href="/cadastro" className="text-blue-500 hover:underline">
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
}