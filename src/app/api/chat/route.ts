import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const message = body.message;

    // Verifica se é uma pergunta sobre o clima
    const match = message.match(/(?:tempo|clima|previs[aã]o).*em\s+([a-zA-Z\s]+)/i);

    if (match) {
      const cidade = encodeURIComponent(match[1].trim());

      const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric&lang=pt_br`);

      const rawData = await weatherRes.text();
      console.log('Resposta da API do tempo:', rawData); // Para debug

      const weatherData = JSON.parse(rawData);

      if (weatherData.cod !== 200) {
        return NextResponse.json({ response: `Não consegui encontrar a cidade "${match[1]}".` });
      }

      const temp = weatherData.main.temp;
      const desc = weatherData.weather[0].description;

      return NextResponse.json({
        response: `A previsão para ${match[1]} é de ${desc}, com temperatura de ${temp}°C.`,
      });
    }

    // Se não for previsão do tempo, usa a OpenAI
    const resposta = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'Você é um assistente sobre metrô.' },
          { role: 'user', content: message },
        ],
      }),
    });

    const data = await resposta.json();

    const botReply = data.choices?.[0]?.message?.content || 'Sem resposta.';
    return NextResponse.json({ response: botReply });

  } catch (error) {
    console.error('Erro ao chamar o backend:', error);
    return NextResponse.json({ error: 'Erro interno no servidor.' }, { status: 500 });
  }
}

