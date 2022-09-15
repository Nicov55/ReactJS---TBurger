import React from 'react'

const Nosotros = () => {
  return (
      <div class="d-flex nosotros">
        <div class="mr-auto p-2">
          <h1 className="display-4">Nosotros</h1>
          <p className="maintext">T-BURGER es una hamburguesería que se toma en serio las hamburguesas, creada y manejada por un verdadero fanático de las hamburguesas. Tanto el pan y la carne como cada uno de los ingredientes que usamos, fue pensado y diseñado para el rol que cumple en el producto final.
          <br />
          <br />
          Nuestro objetivo principal es ofrecer un producto único y de alta calidad a un precio competitivo.
          </p>
          <h1 className="display-4">Ubicacion</h1>
          <p className="maintext">Nos encontramos en la localidad de Ituzaingó, Zona Oeste del Gran Buenos Aires. A metros de la estación de trenes, en la calle X 123
          <br />
          <br />
          Ofrecemos delivery tanto particular como por las plataformas mas utilizadas. Además contamos con el servicio "take away" en caso de querer  retirar en el local
          </p>
        </div>
        <div class="p-1">
            <iframe className="ubi" title='test' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52500.4451582548!2d-58.7064268661385!3d-34.67293702995373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbf5f948a3587%3A0xbcc7022470009127!2sPlaza%2020%20De%20Febrero!5e0!3m2!1ses!2sar!4v1658934816208!5m2!1ses!2sar" width="450" height="450" loading="lazy"></iframe>
        </div>
      </div>
  )
}

export default Nosotros