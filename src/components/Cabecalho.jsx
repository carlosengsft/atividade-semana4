import { CiHeart } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import '../styles/cabecalho.css'
import Logo from '../assets/wootech.svg'
import Avatar from '../assets/avatar.svg'

export const Cabecalho = () =>{
  return(
    <>
       <header className='cabecalho'>
            <div className='avatar'>
                <img src={Avatar} alt="Avatar Woow Tech" />
            </div>
            <section className='nav-top'>
                <ul className='nav-items top'>
                    <li><a href="#"></a>Nossa loja</li>
                    <li><a href="#"></a>Tenha sua loja</li>
                    <li><a href="#"></a>Regulamentos</li>
                    <li><a href="#"></a>Acessibilidade</li>
                    <li><a href="#"></a>Segurança & Privacidade</li>
                    <li><a href="#"></a>Atencimento</li>
                    <li><a href="#"></a>Compre pelo telefone:xx xxxxx-xxxx</li>
                    <li><a href="#"></a>Meus pedidos</li>
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

                <div>
                    <p>Bem vindo</p>
                    <p>Entre ou Cadastre-se</p>
                </div>
                <div>
                    <img src="" alt="" />
                    <p>Ofertas na região</p>
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
                    <li>Oferta do Dia</li>
                    <li>Celulares</li>
                    <li>Compuadores</li>
                    <li>Tv e Video</li>
                    <li>Saldao</li>
                    <li>Cartões</li>
                </ul>
            </section>
       </header>
    </>
  )
}
