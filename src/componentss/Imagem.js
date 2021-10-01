import React, {useState} from "react";
import Imagem from './imagens/Tlou2.jpg'
import Imagem2 from './imagens/Horizon.jpg'
import Imagem3 from './imagens/MonsterHunter.jpg'
import Imagem4 from './imagens/Uncharted.jpg'
import Imagem5 from './imagens/Gow.jpg'
import Imagem6 from './imagens/Readdead.jpg'
import Imagem7 from './imagens/Witcher.jpg'
import Imagem8 from './imagens/Valorant.jpg'
import Imagem9 from './imagens/Cod.jpg'
import Modal from 'react-modal';
import service from '../service'

Modal.setAppElement('#root')


function ImagensTelaPrincipal() {

    const [modalIsOpen, setmodalIsOpen] = useState(false);

    const list = service.games();
    

    return (
        <div className="row" id="game-selected">
            {/* <div className="col-xs-6 col-md-4">
                <h4>The last of US II</h4>
                <a href="#" className="thumbnail" onClick={() => setmodalIsOpen(true)}>
                    <img className="img-fluid img-thumbnail" src={Imagem}/>
                </a>
                <Modal isOpen={modalIsOpen} onRequestClose={() => setmodalIsOpen(false)} 
                style={
                    {
                        overlay: {
                            background: 'grey'
                        },
                        content: {
                            color: 'orange',
                            margin: 'auto'
                        }
                    }
                }>
                    <div className="">
                        <h1 class="text-muted">The last of Us II</h1>
                        <p class="pt-3 pb-5">O estúdio Naughty Dog tinha uma grande responsabilidade na criação de The Last of Us, e ao final ela conseguiu proporcionar o que todos esperavam e mais um pouco. A vingança desenrola diversos eventos que se juntam perfeitamente antes de perderem totalmente o controle. The Last of Us: Part II possui um enredo inacreditável e consegue trazer mais significado ainda para o jogo original, possuindo uma excelente narrativa e personagens bem desenvolvidos. Além disto, a jogabilidade foi elevada para outro nível, apresentando grandes ambientes com uma IA surpreendente e combates impressionantes. The Last of Us: Part II é incrivelmente bom e é um dos melhores ja feitos para PS4.</p>
                        <button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal2" onClick={() => setmodalIsOpen(false)}>Close</button>
                    </div>
                </Modal>
            </div> */}
            {
                    list.map((item) => {
                        const names = item.name.map((name) => {
                            return name;
                        })
                        return (
                            <div className="row">
                                {
                                    item.src.map((src, i) => {
                                        return (
                                            <div className="col-xs-6 col-md-4">
                                                <h4 className="pt-3">{[names[i]]}</h4>
                                                <a className="thumbnail">
                                                    <img className="img-fluid img-thumbnail" src={src}></img>
                                                </a>
                                            </div>

                                            // talvez de para passar o modal dentro da div e só chamar as info do pop em uma array igual acima
                                        )
                                    })
                                }
                            </div>
                        )             
                    })
                }
        </div>            
     );
}

export default ImagensTelaPrincipal;
