import Modal from 'react-modal';
import service from '../service'

Modal.setAppElement('#root')


function ImagensTelaPrincipal() {

    // const [modalIsOpen, setmodalIsOpen] = useState(false);

    const list = service.games();
    const src = localStorage.getItem('src');
    const name = localStorage.getItem('name');
    const index = localStorage.getItem('index');

    return (
        <div className="row" id="game-selected">
            {
                list.map((item) => {
                    const names = item.name.map((name) => {
                        return name;
                    })
                    return (
                        <div className="row" id="game">
                            {
                                item.src.map((src, i) => {
                                    return (
                                        <div className="col-xs-6 col-md-4">
                                            <h4 className="p-3">{[names[i]]}</h4>
                                            <div className="pb-5">
                                                <a className="thumbnail">
                                                    <img onClick={service.onclickImg} name={[names[i]]} id={i} className="img-fluid img-thumbnail" src={src}></img>
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
            <div id="sobre" hidden>
                <h4 className="p-3">{name}</h4>
                <img className="img-fluid img-thumbnail" src={src} />
                <h4 className="p-3">Sobre</h4>
                <p>LEIAAAAAA:
                    Inserir texto no service e depois recuperar com o index, para imagem trocar em tempo de execução precisa implmentar
                    o router para que ele atualize a pagina ai sim vai atualizar a imagem em tela quando clicar, enquanto não fizer isso
                    quando clicar a imagem ainda vai se manter a mesma a não ser que selecione uma imagem duas vezes seguidas, recarregando
                    clicando recarregando e clicando
                </p>
            </div>
        </div>
    );
}

export default ImagensTelaPrincipal;
