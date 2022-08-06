

export const Encabezado = () => {
  return (
    <header>
        

        <div className="introduccion container justify-content-center">
            <p className="text-center">¡Bienvenido a mi portfolio! 🍜</p>
            <h1 className="text-center introduccion__titulo">Hola, soy Alan Fránquez. <span className="fw-bold">Desarollador Web y diseñador UX/UI</span></h1>
            <p className="introduccion__detalles text-center">Soy apasionado por la tecnología, diseño y el aprendizaje. Constantemente estoy aprendiendo cosas nuevas para brindar mis servicios, me dedico principalmente a la creación de paginas web y a todo el campo que involucra el campo de la experiencia de usuario, desde el research hasta el maquetado final.</p>

            <div className="d-flex mt-5 introduccion_redes">
              <a href="https://github.com/AlanFranquez" target='_blank'>
                <div className="mx-2 introduccion__redes_logos">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#7C73E6" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                  </svg>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/alanfranquez/">
                <div className="mx-2 introduccion__redes_logos">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#7C73E6" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <line x1="8" y1="11" x2="8" y2="16" />
                    <line x1="8" y1="8" x2="8" y2="8.01" />
                    <line x1="12" y1="16" x2="12" y2="11" />
                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                  </svg>
                </div>
              </a>
              <div className="mx-2 introduccion__redes_logos">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#7C73E6" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <polyline points="3 7 12 13 21 7" />
                  </svg>
              </div>
              
              
            </div>
        </div>


    </header>
  )
}
