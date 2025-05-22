'use client';
import { useEffect } from 'react';

// Componente que testa a conexão com o backend Quarkus ao ser montado
export default function TestaQuarkus() {
  useEffect(() => {
    // Função assíncrona para chamar o backend Quarkus
    const callBackend = async () => {
      try {
        // Faz uma requisição GET para o backend Quarkus em http://localhost:8080
        await fetch('http://localhost:8080');
        // Se quiser tratar a resposta, faça aqui
      } catch /*(error)*/ {
        // Se quiser tratar o erro, faça aqui
      }
    };
    // Chama a função assim que o componente é montado
    callBackend();
  }, []);

  // Não renderiza nada na tela
  return null;
}