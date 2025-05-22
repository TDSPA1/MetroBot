'use client';
import { useState } from "react";

export default function Chatbot() {
  // Estado para armazenar as mensagens do chat
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([
    { role: "bot", text: "Bem-vindo! Como posso ajudar você hoje?" },
  ]);
  // Estado para controlar o valor do input do usuário
  const [input, setInput] = useState("");

  // Lista de perguntas frequentes (FAQ) e respostas automáticas
  const faq = [
    {
      question: "Quais são os horários de funcionamento do metrô?",
      keywords: ["horários", "funcionamento", "metrô"],
      answer:
        "O metrô de São Paulo funciona das 4h40 às 00h30 de domingo a sexta-feira, e das 4h40 à 00h30 aos sábados.",
    },
    {
      question: "Como posso recarregar meu Bilhete Único?",
      keywords: ["recarregar", "bilhete único"],
      answer:
        "Você pode recarregar seu Bilhete Único em terminais de autoatendimento nas estações, em aplicativos como Ponto Certo e RecargaPay, ou em estabelecimentos credenciados.",
    },
    {
      question: "Quais linhas são operadas pela CCR no metrô de São Paulo?",
      keywords: ["linhas", "CCR", "metrô"],
      answer:
        "A CCR opera as linhas 4-Amarela e 5-Lilás do metrô de São Paulo.",
    },
    {
      question: "É permitido levar bicicletas no metrô?",
      keywords: ["bicicletas", "metrô"],
      answer:
        "Sim, é permitido levar bicicletas no metrô de São Paulo fora dos horários de pico: de segunda a sexta-feira, das 20h30 até o fechamento, e aos finais de semana e feriados durante todo o horário de funcionamento.",
    },
    {
      question: "Como posso relatar um incidente ou problema no metrô?",
      keywords: ["relatar", "incidente", "problema"],
      answer:
        "Você pode relatar incidentes diretamente ao atendimento ao cliente nas estações ou pelo telefone 0800-770-7722.",
    },
    {
      question: "O metrô de São Paulo possui acessibilidade para pessoas com deficiência?",
      keywords: ["acessibilidade", "deficiência"],
      answer:
        "Sim, todas as estações do metrô possuem acessibilidade, incluindo elevadores, rampas e sinalização tátil.",
    },
    {
      question: "Quais são as tarifas do metrô de São Paulo?",
      keywords: ["tarifas", "metrô"],
      answer:
        "A tarifa padrão do metrô de São Paulo é de R$ 5,00. Tarifas podem variar para integrações com ônibus.",
    },
    {
      question: "É permitido levar animais no metrô?",
      keywords: ["animais", "metrô"],
      answer:
        "Sim, animais de pequeno porte podem ser transportados no metrô, desde que estejam em caixas de transporte apropriadas.",
    },
    {
      question: "Como posso saber o tempo de espera do próximo trem?",
      keywords: ["tempo de espera", "próximo trem"],
      answer:
        "Você pode verificar o tempo de espera nos painéis eletrônicos das estações ou no aplicativo oficial do metrô de São Paulo.",
    },
    {
      question: "O metrô de São Paulo possui Wi-Fi gratuito?",
      keywords: ["Wi-Fi", "gratuito"],
      answer:
        "Sim, algumas estações e linhas do metrô oferecem Wi-Fi gratuito para os passageiros.",
    },
  ];

  // Função chamada ao enviar uma mensagem
  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim().toLowerCase();
    // Adiciona a mensagem do usuário ao chat
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);

    // Procura resposta automática no FAQ
    const faqResponse = faq.find((item) =>
      item.keywords.some((keyword) => userMessage.includes(keyword))
    );

    if (faqResponse) {
      // Se encontrou resposta no FAQ, adiciona ao chat
      setMessages((prev) => [...prev, { role: "bot", text: faqResponse.answer }]);
    } else {
      // Se não encontrou no FAQ, faz requisição ao backend (/api/chat)
      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: userMessage }),
        });

        if (!response.ok) {
          throw new Error("Erro ao chamar o backend");
        }

        const data = await response.json();
        // Adiciona resposta do backend ao chat
        setMessages((prev) => [
          ...prev,
          { role: "bot", text: data.response || "Desculpe, não consegui encontrar uma resposta." },
        ]);
      } catch (error) {
        // Em caso de erro na requisição, mostra mensagem de erro
        console.error("Erro ao chamar o backend:", error);
        setMessages((prev) => [
          ...prev,
          { role: "bot", text: "Desculpe, ocorreu um erro ao processar sua pergunta." },
        ]);
      }
    }

    // Limpa o campo de input
    setInput("");
  };

  // Permite enviar mensagem ao pressionar Enter
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSend();
    }
  };

  // Renderização do componente
  return (
    <div
      className="relative p-6 bg-white-100 shadow-md rounded-lg w-full max-w-2xl"
      style={{
        backgroundImage: "url('/pexels.jpg')", // Imagem de fundo
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative">
        <h2 className="text-2xl text-white font-bold text-center mb-4">
          MetroBot Assistente Virtual
        </h2>
        {/* Área de exibição das mensagens */}
        <div className="h-96 min-h-[384px] overflow-y-auto border p-4 rounded-lg mb-4 bg-white bg-opacity-90">
          {messages.map((msg, index) => (
            <p
              key={index}
              className={`text-sm mb-2 p-2 rounded-lg ${
                msg.role === "bot"
                  ? "bg-blue-100 text-blue-500 font-semibold"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              <strong>{msg.role === "bot" ? "MetroBot" : "Você"}:</strong> {msg.text}
            </p>
          ))}
        </div>
        {/* Campo de input e botão de envio */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Digite sua mensagem..."
            className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button
            onClick={handleSend}
            className={`bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-600 ${
              !input.trim() ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={!input.trim()}
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}