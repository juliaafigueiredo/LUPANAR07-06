import '../compohome/navv.css'

function Navbar (){
return (

<nav>
  <div id="logo">
  <img src={require('../assets/logo.png')} alt="" />
  </div>

  <ul className="navigation-menu">
    <li><a href="/">Início</a></li>
    <li><a href="/suites">Suítes</a></li>
    <li><a href="/cardapio">Cardápio</a></li>
    <li><a href="/saibamais">Saiba mais</a></li>

  </ul>
</nav>


);
}

export default Navbar;
  