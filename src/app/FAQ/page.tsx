"use client";

export default function FAQ() {
  const faqs = [
    {
      question: "Quais são os horários de funcionamento do metrô de São Paulo?",
      answer: "O metrô de São Paulo funciona das 4h40 às 00h30 de domingo a sexta-feira, e das 4h40 à 00h30 aos sábados.",
    },
    {
      question: "Como posso recarregar meu Bilhete Único?",
      answer: "Você pode recarregar seu Bilhete Único em terminais de autoatendimento nas estações, em aplicativos como Ponto Certo e RecargaPay, ou em estabelecimentos credenciados.",
    },
    {
      question: "Quais linhas são operadas pela CCR no metrô de São Paulo?",
      answer: "A CCR opera as linhas 4-Amarela e 5-Lilás do metrô de São Paulo.",
    },
    {
      question: "É permitido levar bicicletas no metrô?",
      answer: "Sim, é permitido levar bicicletas no metrô de São Paulo fora dos horários de pico: de segunda a sexta-feira, das 20h30 até o fechamento, e aos finais de semana e feriados durante todo o horário de funcionamento.",
    },
    {
      question: "Como posso relatar um incidente ou problema no metrô?",
      answer: "Você pode relatar incidentes diretamente ao atendimento ao cliente nas estações ou pelo telefone 0800-770-7722.",
    },
    {
      question: "O metrô de São Paulo possui acessibilidade para pessoas com deficiência?",
      answer: "Sim, todas as estações do metrô possuem acessibilidade, incluindo elevadores, rampas e sinalização tátil.",
    },
    {
      question: "Quais são as tarifas do metrô de São Paulo?",
      answer: "A tarifa padrão do metrô de São Paulo é de R$ 4,40. Tarifas podem variar para integrações com ônibus.",
    },
    {
      question: "É permitido levar animais no metrô?",
      answer: "Sim, animais de pequeno porte podem ser transportados no metrô, desde que estejam em caixas de transporte apropriadas.",
    },
    {
      question: "Como posso saber o tempo de espera do próximo trem?",
      answer: "Você pode verificar o tempo de espera nos painéis eletrônicos das estações ou no aplicativo oficial do metrô de São Paulo.",
    },
    {
      question: "O metrô de São Paulo possui Wi-Fi gratuito?",
      answer: "Sim, algumas estações e linhas do metrô oferecem Wi-Fi gratuito para os passageiros.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Perguntas Frequentes (FAQ)</h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-4">
              <h2 className="text-lg font-semibold text-blue-600">{faq.question}</h2>
              <p className="text-gray-700 mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}