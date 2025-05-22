import Image from "next/image";

export default function Sobre() {
  const integrantes = [
    {
      nome: "Fábio H S Eduardo",
      rm: "RM560416",
      foto: "/images/fabio.png",
      github: "https://github.com/fabioeduu",
      linkedin: "https://www.linkedin.com/in/fabio-eduardo-0b151a324",
    },
    {
      nome: "Gabriel Wu Castro",
      rm: "RM560210",
      foto: "/images/wu.png",
      github: "https://github.com/Wugabriel",
      linkedin: "https://www.linkedin.com/in/gabriel-wu-castro-4155b2330/",
    },
    {
      nome: "Renato Kenji Sugaki",
      rm: "RM559810",
      foto: "/images/kenji.png",
      github: "https://github.com/renatosgk",
      linkedin: "https://www.linkedin.com/in/renato-kenji-2643982a4",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Sobre o Projeto</h1>

      {/* Texto sobre o MetroBot */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 mb-12">
        <p className="text-gray-700 leading-relaxed">
          O MetroBot é um assistente virtual para oferecer respostas rápidas e precisas aos passageiros. Ele fornece informações sobre horários, rotas, tarifas e atualizações de serviço. O MetroBot também conta com uma seção de FAQ para tirar dúvidas frequentes de forma prática e eficiente. Disponível 24/7, o assistente visa tornar a experiência de viagem mais ágil e informada, reforçando o compromisso da CCR Metrô São Paulo com a modernização e o atendimento de qualidade.
        </p>
      </div>

      {/* Seção de integrantes */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Integrantes do Grupo</h2>
        <ul className="space-y-6">
          {integrantes.map((integrante, index) => (
            <li
              key={index}
              className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm"
            >
              {/* Foto do integrante */}
              <div className="w-16 h-16 rounded-full overflow-hidden mr-6">
                <Image
                  src={integrante.foto}
                  alt={`Foto de ${integrante.nome}`}
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              {/* Nome, RM e Links */}
              <div>
                <span className="block text-lg font-medium">{integrante.nome}</span>
                <span className="text-gray-500">{integrante.rm}</span>
                <div className="flex space-x-6 mt-2">
                  <a
                    href={integrante.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    GitHub
                  </a>
                  <a
                    href={integrante.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}