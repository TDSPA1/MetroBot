import Chatbot from "../../../components/chatbot";

// Página inicial do Metrobot
export default function Inicio () {
  return (
    // Container principal com layout em coluna e fundo cinza claro
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Conteúdo principal da página */}
      <main className="flex-grow p-8">
        {/* Caixa centralizada com título e descrição */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Título principal */}
          <h1 className="text-4xl font-bold mb-6">Bem-vindo ao Metrobot</h1>
          {/* Descrição do sistema */}
          <p className="text-lg mb-8">
            Este é o Metrobot, criado para facilitar a vida dos usuários do metrô de São Paulo.
          </p>
          {/* Caixa de funcionalidades */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Funcionalidades</h2>
            {/* Lista de funcionalidades do sistema */}
            <ul className="list-disc list-inside text-left space-y-2">
              <li>Informações em tempo real sobre o metrô.</li>
              <li>Planejamento de rotas.</li>
              <li>Chatbot para tirar dúvidas.</li>
            </ul>
          </div>
        </div>
      </main>

      {/* Chatbot fixado e centralizado na tela */}
      <div className="fixed inset-1 flex items-center justify-center">
        <Chatbot />
      </div>
    </div>
  );
}