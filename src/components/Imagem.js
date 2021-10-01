import React, { useState } from "react";
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
                                            <h4 className="p-3">{[names[i]]}</h4>
                                            <div className="pb-5">
                                                <a className="thumbnail">
                                                    <img className="img-fluid img-thumbnail" src={src}></img>
                                                </a>
                                            </div>
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
