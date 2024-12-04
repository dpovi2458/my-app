import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  const featuredDishes = [
    {
      name: 'Risotto de Trufa',
      image: '/images/menu/risotto.jpg', 
      description: 'Cremoso risotto con trufa negra y parmesano'
    },
    {
      name: 'Salmón a la Parrilla',
      image: '/images/menu/salmon.jpg',
      description: 'Salmón fresco con vegetales de temporada'
    },
    {
      name: 'Postre de Chocolate',
      image: '/images/menu/chocolate.jpg',
      description: 'Mousse de chocolate belga con frutos rojos'
    }
  ]

  return (
    <div className="container mx-auto px-4">
      <section className="hero text-center py-16">
        <h1 className="text-5xl font-bold mb-6 text-gray-900">
          Sabor Moderno Restaurante
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Experiencia culinaria contemporánea que fusiona tradición y vanguardia
        </p>
        <div className="flex justify-center space-x-4">
          <Link 
            href="/menu" 
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
          >
            Ver Menú
          </Link>
          <Link 
            href="/reservaciones" 
            className="border-2 border-red-600 text-red-600 px-6 py-3 rounded-lg hover:bg-red-700 hover:text-white transition"
          >
            Reservar Mesa
          </Link>
        </div>
      </section>

      <section className="featured-dishes py-16">
        <h2 className="text-3xl font-semibold text-center mb-10">Platos Destacados</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredDishes.map((dish, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
                <p className="text-gray-600">{dish.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}