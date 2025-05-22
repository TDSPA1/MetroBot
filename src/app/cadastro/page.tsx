"use client";

// Componente de página de cadastro de usuário
export default function Cadastro() {
  // Função chamada ao enviar o formulário
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Impede o recarregamento da página
    alert("Cadastro realizado com sucesso!"); // Mostra alerta de sucesso
  };

  return (
    // Container centralizado com fundo cinza claro
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Caixa branca centralizada com sombra e bordas arredondadas */}
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        {/* Título da página */}
        <h1 className="text-2xl font-bold text-center mb-6">Cadastro</h1>
        {/* Formulário de cadastro */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Campo de nome */}
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Digite seu nome"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

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
            <label htmlFor="senha" className="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Digite sua senha"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Campo de data de nascimento */}
          <div>
            <label htmlFor="dataNascimento" className="block text-sm font-medium text-gray-700">
              Data de Nascimento
            </label>
            <input
              type="date"
              id="dataNascimento"
              name="dataNascimento"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Campo de CPF */}
          <div>
            <label htmlFor="cpf" className="block text-sm font-medium text-gray-700">
              CPF
            </label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              placeholder="Digite seu CPF"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              required
              pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" // Validação de formato de CPF
              title="Digite o CPF no formato 000.000.000-00"
            />
          </div>

          {/* Botão de cadastro */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Cadastrar
          </button>
        </form>

        {/* Link para login */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Já tem uma conta?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Faça login
          </a>
        </p>
      </div>
    </div>
  );
}