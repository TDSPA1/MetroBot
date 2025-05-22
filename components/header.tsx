import Link from "next/link";
import Image from "next/image";

// Componente de cabeçalho do site
export default function Header() {
  return (
    // Elemento <header> com cor de fundo, padding e sombra usando Tailwind
    <header className="bg-gray-200 p-4 shadow-md">
      {/* Barra de navegação centralizada e espaçada */}
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo do Metrobot com link para a página inicial */}
        <Link href="/" className="flex items-center" aria-label="Ir para a página inicial">
          <Image src="/images/metrobot.png" alt="Logo do Metrobot" width={110} height={50} />
        </Link>

        {/* Links de navegação */}
        <div className="flex items-center space-x-4">
          {/* Link para a página inicial */}
          <Link href="/" className="text-blue-500 hover:underline font-bold" aria-label="Ir para a página inicial">
            Inicio
          </Link>
          {/* Link para a página de perguntas frequentes */}
          <Link href="/FAQ" className="text-blue-500 hover:underline font-bold" aria-label="Ir para a página de perguntas frequentes">
            FAQ
          </Link>
          {/* Link para a página Sobre */}
          <Link href="/sobre" className="text-blue-500 hover:underline font-bold" aria-label="Ir para a página Sobre">
            Sobre
          </Link>
          {/* Link para a página de login */}
          <Link href="/login" className="text-blue-500 hover:underline font-bold" aria-label="Ir para a página de login">
            Login
          </Link>
          {/* Link para a página de cadastro */}
          <Link href="/cadastro" className="text-green-800 hover:underline font-bold" aria-label="Ir para a página de cadastro">
            Cadastro
          </Link>
        </div>
      </nav>
    </header>
  );
}