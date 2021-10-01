

const service = {
    games(){
        const names= ['The Last of US II','Horizon Zero Dawn', 'Monster Hunter World: Iceborne', 'Uncharted 4: A Thiefs End', 'God of War 4', 'Read Dead Redemption 2',
        'The Witcher 3 - Wild Hunt', 'Valorant', 'Call of Duty: Warzone']

        const srcs=['https://images3.alphacoders.com/106/thumb-1920-1065466.png',
        'https://www.oficinadanet.com.br/imagens/post/33095/750xNxos-10-melhores-jogos-para-ps4-01.jpg.pagespeed.ic.4c70166c1d.jpg',
        'https://www.oficinadanet.com.br/imagens/post/33095/750xNxos-10-melhores-jogos-para-ps4-02.jpg.pagespeed.ic.d49a0ca4d5.jpg',
        'https://www.oficinadanet.com.br/imagens/post/33095/750xNxos-10-melhores-jogos-para-ps4-03.jpg.pagespeed.ic.c332ec6206.jpg',
        'https://www.oficinadanet.com.br/imagens/post/33095/750xNxos-10-melhores-jogos-para-ps4-10.jpg.pagespeed.ic.fa72065eb2.jpg',
        'https://www.oficinadanet.com.br/imagens/post/33095/750xNxos-10-melhores-jogos-para-ps4-07.jpg.pagespeed.ic.d2f42ba9fd.jpg',
        'https://www.oficinadanet.com.br/imagens/post/33095/750xNxos-10-melhores-jogos-para-ps4-08.jpg.pagespeed.ic.ff208aa63e.jpg',
        'https://images6.alphacoders.com/107/thumb-1920-1072679.jpg',
        'https://wallpaperaccess.com/full/2314739.jpg'];

        let list= [
            {
                name: names,
                src: srcs,
            }
        ];
        return list;
    }

}

export default service;