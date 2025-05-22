export default async function handler(req, res) {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ reply: "Mensagem vazia recebida." });
  }

  // Expressão regular que captura depois de "em", "do", "da", "de", "para"
  const cidadeRegex = /(?:em|do|da|de|para)\s+([a-z\s]+)/i;
  const match = message.match(cidadeRegex);
  const cidade = match ? match[1].trim().toLowerCase() : null;

  if (!cidade) {
    return res.status(200).json({ reply: "Não consegui identificar a cidade mencionada." });
  }

  try {
    const apiKey = process.env.OPENWEATHER_API_KEY; // Defina no .env
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cidade)}&units=metric&lang=pt_br&appid=${apiKey}`;

    const weatherRes = await fetch(url);
    const data = await weatherRes.json();

    console.log("Resposta da API do tempo:", data);

    if (data.cod !== 200) {
      return res.status(200).json({ reply: `Não consegui encontrar a cidade "${cidade}".` });
    }

    const descricao = data.weather[0].description;
    const temperatura = data.main.temp;
    const resposta = `A previsão para ${cidade} é de ${descricao}, com temperatura de ${temperatura.toFixed(1)}°C.`;

    res.status(200).json({ reply: resposta });
  } catch (error) {
    console.error("Erro ao buscar previsão do tempo:", error);
    res.status(500).json({ reply: "Erro ao consultar a previsão do tempo." });
  }
}
