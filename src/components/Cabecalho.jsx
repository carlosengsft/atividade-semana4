import { CiHeart } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import '../styles/cabecalho.css'
import Logo from '../assets/wootech.svg'
import Avatar from '../assets/avatar.svg'
import login from '../assets/login.png'
import cadastro from '../assets/cadastro.png'

export const Cabecalho = () =>{
  return(
    <>
       <header className='cabecalho'>
            <div className='avatar'>
                <img src={Avatar} alt="Avatar Woow Tech" />
            </div>
            <section className='nav-top'>
                <ul className='nav-items top'>
                    <a href="#"><li>Nossa loja</li></a>
                    <a href="#"><li>Tenha sua loja</li></a>
                    <a href="#"><li>Regulamentos</li></a>
                    <a href="#"><li>Acessibilidade</li></a>
                    <a href="#"><li>Segurança & Privacidade</li></a>
                    <a href="#"><li>Atencimento</li></a>
                    <a href="#"><li>Meus pedidos</li></a>
                </ul>
            </section>
            <section className='nav-items nav-center'>
                <div><img src={Logo} alt="Logo Woow Tech" /></div>
                    <div className="container-busca">
                    <form className="form-busca">
                        <input className="btn-texto" type="text" name="busca" placeholder="Busca no WoowTech"/>
                        <div><button className="btn-busca" type="submit"></button></div>
                    </form>
                    </div>

                <div className="login-cadastrar">
                    <div className="login">
                        <img src={login} alt="Login" />
                        <a href="#">login</a>
                        
                    </div>
                    <div className='cadastrar'>
                        <img src={cadastro} alt="Cadastro" />
                         <a href="#">cadastrar</a>
                    </div>
                    
                </div>
                <div>
                    <a href="#">Ofertas na região</a>
                </div>
                <div>
                    <div className="icons-react">
                        <div>
                            <CiHeart size={30}/>
                        </div>
                        <div>
                            <IoBagHandleOutline size={30}/>
                        </div>               
                    </div>
                </div>
            </section>
            <section className='nav-bottom'>
                <ul className='nav-items bottom'>
                    <a href="#"><li>Oferta do Dia</li></a>
                    <a href="#"><li>Celulares</li></a>
                    <a href="#"><li>Computadores</li></a>
                    <a href="#"><li>Tv e Video</li></a>
                    <a href="#"><li>Saldão</li></a>
                    <a href="#"><li>Cartões</li></a>
                </ul>
            </section>
       </header>
    </>
  )
}
