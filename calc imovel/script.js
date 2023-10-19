
calcularImovel = () => {
    let m2 =3000;
    preco = 0;
    let metragem = parseFloat(window.prompt('Digite a metragem do imovel:'));
    let quartos = parseFloat(window.prompt('Digite o numero de quartos:'))
    switch(quartos) {
        case 1: 
        preco = metragem * m2;
        break;
        case 2:
        preco = metragem * (m2 * 1.2);
        break;
        case 3:
        preco = metragem * (m2 * 1.5);
        break;
        default:
        alert(`Não está disponivel ${quartos} quartos, somente 3!`)
    }
    console.log(`O preco do imovel ficou avaliado em ${preco.toFixed(2)}`);
}
calcularImovel();