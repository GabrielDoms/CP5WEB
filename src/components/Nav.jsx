import {} from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Nav() {
/*Hook- useNavgite*/
  const navigate = useNavigate();

  /*criando a função para limpar a sessão e voltar para o home */
  const handleLogout = async ()=>{
    sessionStorage.removeItem('userData');
    sessionStorage.removeItem('senhaData');
    alert("saindo da sessão");
    navigate('/');
  }

  return (
    <>
      <header>
        <h2>La Fiesta Saborosa </h2>
        <nav className='navegacao'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/produtos">Produtos</Link>
            </li>
            <li>
              <Link to="sobre">Sobre</Link>
            </li>
            {/* <li>
              <Link to="/cadastrar/produto">Cadastrar Produto</Link>
            </li> */}
            <li>
              <Link to="/login">LOGIN</Link>
            </li>
            <button onClick={handleLogout} >Logout</button>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default Nav;
