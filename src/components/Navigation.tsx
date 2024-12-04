import Link from 'next/link'

const Navigation = (): JSX.Element => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <Link href="/" className="text-2xl font-bold text-red-600">
          Sabor Moderno
        </Link>
        <div className="space-x-6">
          <Link href="/menu" className="hover:text-red-600 transition">Menú</Link>
          <Link href="/reservaciones" className="hover:text-red-600 transition">Reservaciones</Link>
          <Link href="/nosotros" className="hover:text-red-600 transition">Nosotros</Link>
          <Link href="/contacto" className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation