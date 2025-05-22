import Chatbot from "../../components/chatbot";
import TestaQuarkus from "../../components/TestaQuarkus";
import { ResetarSenhaForm } from './ResetarSenhaForm';
export default function Inicio() {
  return (
    <div className="min-h-screen bg-gray-300 flex flex-col items-center justify-center">
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Bem-vindos ao Metrobot</h1>
        <p className="text-lg">Metrobot é criado para facilitar a vida dos usuários do metrô de São Paulo.</p>
      </section>

      {/* Chatbot centralizado abaixo do texto */}
      <Chatbot />
      <ResetarSenha />
      <TestaQuarkus />
    </div>
  );
}
