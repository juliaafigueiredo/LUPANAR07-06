import '../compohome/saibam.css';

function Saibamais() {
    return (
        <section className="mais">

        <div className='qmsomos'>
            <h1>Quem somos</h1> <br></br>
            <p>O Lupanar é um oásis de relaxamento e bem-estar localizado no coração de Salvador.</p>
            <p>O nosso objetivo é proporcionar aos nossos clientes uma experiência única e rejuvenescedora por meio de massagens terapêuticas e tratamentos corporais.</p>
        </div>

        <div className='missao'>
            <p>Acreditamos que o cuidado com o corpo e a mente é essencial para uma vida saudável e equilibrada. 
            Nossa missão é oferecer um refúgio tranquilo onde os clientes possam escapar do estresse do dia a dia e se reconectar consigo mesmos.</p>.
        </div>

        <div className='loc'>
            <h1>Estamos localizados em:</h1>
            <div className='foto'>
            <img src={require('../assets/mapa.png')} width="200" height="200" />
            </div>
        
        </div>

        </section>
      
);
}
export default Saibamais;

