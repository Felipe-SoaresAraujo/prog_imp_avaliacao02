function microondas_menu(alimento, tempo){
    let pipoca = 10;
    let macarrao = 8;
    let carne = 15;
    let feijao = 12;
    let brigadeiro = 8;

}
    
function validarTempo(tempo, tempoPadrao){
    if(tempo >= tempoPadrao * 3){
        console.log('Kabumm!')
    } else if(tempo >= tempoPadrao * 2){
        console.log('Comida queimou!') 
    } else if(tempo < tempoPadrao){
        console.log('Tempo insuficiente')
    } else {
        console.log('Prato pronto, bom apetite! :D')
    }
}


function microondas_menu(comida, tempo){
    switch (key) {
        case pipoca:
            validarTempo(tempo, pipoca);  
            break;
        case macarrao:
            validarTempo(tempo, macarrao);
            break;
        case carne:
            validarTempo(tempo, carne)
            break;
        case feijao:
            validarTempo(tempo, feijao)
            break;
        case brigadeiro:
            validarTempo(tempo, brigadeiro)
            break;
    
        default:
            console.log("Prato inexistente!")
            break;
    }
}