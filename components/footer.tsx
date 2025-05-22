import Image from 'next/image';

// Componente de rodapé do site
export default async function Footer () {
  return (
    // Elemento <footer> com classes Tailwind para estilo e layout
    <footer className="styles.footer bg-gray-200 padding-50 text-center height-50 flex justify-center items-center">
      {/* Logo ou imagem do rodapé */}
      <Image src="/images/footer.png" alt="footer" width={80} height={50} />
      {/* Texto de direitos autorais */}
      <p>© 2025 Metrobot. Todos os direitos reservados.</p>
    </footer>
  );
}