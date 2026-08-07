const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <path fill="currentColor" d="M16 3a12.5 12.5 0 0 0-10.8 18.8L3.4 28.6l7-1.8A12.5 12.5 0 1 0 16 3Zm0 22.7c-2 0-3.9-.6-5.5-1.6l-.4-.2-4.1 1.1 1.1-4-.3-.4A10.2 10.2 0 1 1 16 25.7Zm5.6-7.6c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.7.1-1.9-.9-3.1-1.7-4.4-3.9-.3-.6.3-.5.9-1.7.1-.2.1-.4 0-.6l-1-2.5c-.3-.6-.6-.5-.9-.5h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.5c.2.2 2.4 3.7 5.9 5.2 2.2.9 3.1 1 4.2.8.7-.1 1.8-.7 2.1-1.5.3-.7.3-1.4.2-1.5-.2-.3-.5-.4-.8-.5Z" />
  </svg>
);

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Pájaro Azul, inicio">
          <span className="bird-mark"><img src="/pajaro-azul-bird.png" alt="" /></span>
          <span><strong>Pájaro Azul</strong><small>Charcutería artesanal</small></span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#historia">Nuestra historia</a>
          <a href="#legado">El legado</a>
          <a href="#galeria">Galería</a>
          <a href="#proceso">Cómo lo hacemos</a>
        </nav>
        <a className="nav-cta" href="#contacto">Hacé tu pedido</a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-shade" />
        <div className="hero-content reveal">
          <p className="eyebrow">HECHO EN FAMILIA · MAR DEL PLATA</p>
          <h1>El sabor de lo<br /><em>hecho en casa.</em></h1>
          <p className="hero-copy">Bondiolas artesanales elaboradas con tiempo, dedicación y una receta familiar que pasa de mano en mano.</p>
          <div className="hero-actions">
            <a className="primary-button" href="#productos">Conocé nuestras bondiolas <span>→</span></a>
            <a className="text-link" href="#historia">Nuestra historia</a>
          </div>
        </div>
        <div className="hero-stamp" aria-label="Elaboración artesanal">
          <span>DESDE NUESTRA COCINA</span><b>100%</b><small>ARTESANAL</small>
        </div>
        <a className="scroll-cue" href="#historia" aria-label="Bajar a nuestra historia">↓</a>
      </section>

      <section className="story section" id="historia">
        <div className="section-kicker"><span>01</span> NUESTRA ESENCIA</div>
        <div className="story-grid">
          <div>
            <h2>Una receta familiar.<br />Un sabor que <em>se comparte.</em></h2>
          </div>
          <div className="story-text">
            <p>En Pájaro Azul creemos que las cosas buenas necesitan tiempo. Por eso cada bondiola se prepara de manera artesanal, respetando los procesos y cuidando cada detalle.</p>
            <p>Somos una familia que transformó una receta de casa en una forma de reunir personas alrededor de la mesa.</p>
            <div className="values">
              <div><strong>Tiempo</strong><span>Sin apuros ni atajos</span></div>
              <div><strong>Origen</strong><span>Ingredientes seleccionados</span></div>
              <div><strong>Familia</strong><span>Hecho por nuestras manos</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="legacy section" id="legado">
        <div className="legacy-ornament" aria-hidden="true"><span />◆<span /></div>
        <p className="section-kicker centered"><span>02</span> BONDIOLA ARTESANAL CURADA</p>
        <h2>Hay sabores que sobreviven<br />al paso de los <em>años.</em></h2>
        <div className="legacy-copy">
          <p>Sabores que habitan en cuadernos de hojas amarillentas, en galpones perfumados por la sal y las especias, en el recuerdo de quienes aprendieron que las cosas buenas no se apuran.</p>
          <p>En la finca <strong>Pájaro Azul</strong>, ubicada en las secas tierras de Mendoza, al pie de la cordillera, nació hace generaciones un oficio silencioso: el arte de esperar. Esperar que el aire haga su trabajo, que el tiempo deje su huella y que cada pieza alcance, lentamente, su mejor expresión.</p>
          <p>Muchos años después, ese legado emprendió su viaje hasta Mar del Plata.</p>
          <p>En Pájaro Azul volvemos a encender esa vieja llama. Rescatamos una tradición que parecía dormida entre recuerdos y la llevamos nuevamente a la mesa, respetando cada paso, cada pausa y cada enseñanza heredada.</p>
          <p className="legacy-closing">Porque una bondiola artesanal no se fabrica.<br />Se cura con paciencia, se cuida con respeto<br />y se comparte con orgullo.</p>
        </div>
        <div className="legacy-signature"><strong>Pájaro Azul</strong><span>Donde el tiempo vuelve a tener sabor</span></div>
        <div className="legacy-ornament bottom" aria-hidden="true"><span />◆<span /></div>
      </section>

      <section className="products section" id="productos">
        <div className="section-heading">
          <div className="section-kicker"><span>03</span> NUESTROS PRODUCTOS</div>
          <h2>Elegí tu <em>favorita.</em></h2>
          <p>Distintos sabores, la misma elaboración artesanal.</p>
        </div>
        <div className="product-grid">
          <article className="product-card classic">
            <div className="product-number">01</div><div className="product-art">Clásica</div>
            <div className="product-info"><h3>Bondiola Clásica</h3><p>Equilibrada, suave y especiada. La receta que dio origen a todo.</p><span>Ideal para picadas y sandwiches</span></div>
          </article>
          <article className="product-card pepper">
            <div className="product-number">02</div><div className="product-art">Pimienta</div>
            <div className="product-info"><h3>Bondiola a la Pimienta</h3><p>Aromática e intensa, con una delicada cobertura de pimienta negra.</p><span>Para quienes buscan más carácter</span></div>
          </article>
          <article className="product-card herbs">
            <div className="product-number">03</div><div className="product-art">Hierbas</div>
            <div className="product-info"><h3>Bondiola a las Hierbas</h3><p>Fresca y perfumada, con notas de campo en cada corte.</p><span>Una opción diferente y sutil</span></div>
          </article>
        </div>
      </section>

      <section className="gallery section" id="galeria">
        <div className="gallery-heading">
          <div className="section-kicker"><span>04</span> DE CERCA</div>
          <h2>Hecha para<br /><em>compartir.</em></h2>
          <p>Imágenes reales de nuestras bondiolas y escenas inspiradas en la mesa familiar de Pájaro Azul.</p>
        </div>
        <div className="gallery-grid">
          <figure className="gallery-wide"><img src="/gallery-picnic-wide.webp" alt="Picada artesanal Pájaro Azul servida sobre el césped" loading="lazy" /><figcaption>Una mesa al aire libre</figcaption></figure>
          <figure className="gallery-tall"><img src="/gallery-bondiola-board.webp" alt="Bondiola artesanal entera y cortada sobre una tabla de madera" loading="lazy" /><figcaption>El corte, en su punto justo</figcaption></figure>
          <figure><img src="/gallery-bondiola-close.webp" alt="Primer plano de bondiola curada y sus fetas" loading="lazy" /><figcaption>Textura y sabor</figcaption></figure>
          <figure><img src="/gallery-ai-kitchen.webp" alt="Bondiola artesanal en una cocina de campo" loading="lazy" /><figcaption>De la cocina familiar</figcaption></figure>
          <figure className="gallery-tall"><img src="/gallery-ai-golden-hour.webp" alt="Bondiola artesanal servida al atardecer en el campo" loading="lazy" /><figcaption>Tiempo de compartir</figcaption></figure>
        </div>
      </section>

      <section className="process section" id="proceso">
        <div className="process-title">
          <div className="section-kicker light"><span>05</span> EL PROCESO</div>
          <h2>La paciencia también<br />es un <em>ingrediente.</em></h2>
        </div>
        <ol className="process-steps">
          <li><b>01</b><div><strong>Selección de carne</strong><span>Contamos con proveedores certificados que garantizan la calidad y sanidad de nuestro producto desde el inicio.</span></div></li>
          <li><b>02</b><div><strong>Curado artesanal</strong><span>Sin acelerantes ni aditivos. Solo sal marina y nuestra mezcla seleccionada de especias.</span></div></li>
          <li><b>03</b><div><strong>Tiempo de maduración</strong><span>Respetamos la maduración natural e individual de cada pieza para lograr el sabor y aroma que la caracteriza.</span></div></li>
          <li><b>04</b><div><strong>Control de calidad</strong><span>Realizamos un seguimiento de la evolución de cada pieza para asegurar que cumple con nuestros estándares.</span></div></li>
          <li><b>05</b><div><strong>Listo para disfrutar</strong><span>Cuando la pieza alcanza el sabor y aroma que nos caracteriza, es etiquetada con el sello familiar de Pájaro Azul y está lista para que puedas compartirla en tu mesa.</span></div></li>
        </ol>
      </section>

      <section className="contact section" id="contacto">
        <p className="eyebrow">DE NUESTRA FAMILIA A TU MESA</p>
        <h2>¿Preparamos<br />la próxima <em>picada?</em></h2>
        <p>Consultanos sabores, tamaños y disponibilidad. Te respondemos personalmente.</p>
        <a className="primary-button dark" href="https://wa.me/542236689837?text=Hola%20P%C3%A1jaro%20Azul%2C%20quisiera%20consultar%20por%20las%20bondiolas" target="_blank" rel="noreferrer"><WhatsAppIcon /> Escribinos por WhatsApp</a>
      </section>

      <footer>
        <div className="brand footer-brand"><span className="bird-mark"><img src="/pajaro-azul-bird.png" alt="" /></span><span><strong>Pájaro Azul</strong><small>Charcutería artesanal</small></span></div>
        <p>Hecho en familia, con tiempo y dedicación.</p>
        <div><a href="#inicio">Volver arriba ↑</a><span>© 2026 Pájaro Azul</span></div>
      </footer>

      <a className="whatsapp-float" href="https://wa.me/542236689837?text=Hola%20P%C3%A1jaro%20Azul%2C%20quisiera%20consultar%20por%20las%20bondiolas" target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp al +54 223 668-9837"><WhatsAppIcon /></a>
    </main>
  );
}
