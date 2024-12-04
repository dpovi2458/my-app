import Link from 'next/link'

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto grid md:grid-cols-3 gap-8 px-4">
        <div>
          <h3 className="text-xl font-semibold mb-4">Sabor Moderno</h3>
          <p className="text-gray-400">Experiencia gastronómica contemporánea en el corazón de la ciudad</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Horarios</h4>
          <p>Martes a Sábado: 18:00 - 23:00</p>
          <p>Domingo: 12:00 - 16:00</p>
          <p>Lunes: Cerrado</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contacto</h4>
          <p>Teléfono: +54 (11) 4567-8901</p>
          <p>Email: reservas@sabormoderno.com</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer