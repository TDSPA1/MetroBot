'use client';
import { useEffect } from 'react';

export default function TestaQuarkus() {
  useEffect(() => {
    const callBackend = async () => {
      try {
        await fetch('http://localhost:8080');
        // Se quiser tratar a resposta, faça aqui
      } catch /*(error)*/ {
        // Se quiser tratar o erro, faça aqui
      }
    };
    callBackend();
  }, []);

  return null;
}