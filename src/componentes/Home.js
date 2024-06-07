function Home() {
    return (
      <div className="Home">

        <section className="hero">
          <h1>Garantindo o seu êxtase, 
            Lupanar ideal para o seu patamar. </h1>
          <div className="btn-group">
          <a href="form"><button className="btn-filled-dark"><span className="material-symbols-outlined">Conecte-se</span></button></a>
          </div>
        </section>


        <section>
          <h2>Serviços</h2>
          <ul className="services">
            <li className="card-large card-dark card-wide" id="serv-groom">
              <div className="card-image"></div>
              <ul>
                <span className="subtitle">Suítes</span>
                <li><a href="#">Os nossos quartos possuem conforto e acomodidade que você merece. A partir de R$99,90</a></li>
                <a href="suites"><button className="btn-filled-dark"><span className="material-symbols-outlined">Adquira agora!</span></button></a>
              </ul>

            </li>
            <li className="card-large card-dark card-wide" id="serv-board">
              <div className="card-image"></div>
              <ul>
                
                <span className="subtitle">Aperitivos e Bebidas</span>
                <li><a href="#">Dos mais diversos pensados de acordo com as suas preferências individuais, oferecendo as recomendações mais acessíveis.</a></li>
                <a href="cardapio"><button className="btn-filled-dark"><span className="material-symbols-outlined">Saiba mais</span></button></a>
              </ul>
            </li>
          </ul>
          
  
          </section>
      </div>
    );
  }
  
  export default Home;
  
  
