export default function ResetarSenha() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Senha redefinida com sucesso!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Resetar Senha</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
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

          {/* Campo de nova senha */}
          <div>
            <label htmlFor="novaSenha" className="block text-sm font-medium text-gray-700">
              Nova Senha
            </label>
            <input
              type="password"
              id="novaSenha"
              name="novaSenha"
              placeholder="Digite sua nova senha"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Botão de redefinir senha */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Redefinir Senha
          </button>
        </form>

        {/* Link para voltar ao login */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Lembrou sua senha?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Faça login
          </a>
        </p>
      </div>
    </div>
  );
}