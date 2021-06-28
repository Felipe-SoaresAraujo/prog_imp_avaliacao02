// definido o objeto microondas_menu com as opções de preparo
let microondas_menu = { 
    pipoca: 10,
    macarrao:  8,
    carne:  15,
    feijao: 12,
    brigadeiro: 8

};
    
let{pipoca, macarrao, carne, feijao, brigadeiro} = microondas_menu;


// criada a função para validar o tempo e exibir mensagem para o usuário
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


function microondas_user(comida, tempo){
    switch (comida) {
        case 'pipoca':
            validarTempo(tempo, pipoca);  
            break;
        case 'macarrao':
            validarTempo(tempo, macarrao);
            break;
        case 'carne':
            validarTempo(tempo, carne)
            break;
        case 'feijao':
            validarTempo(tempo, feijao)
            break;
        case 'brigadeiro':
            validarTempo(tempo, brigadeiro)
            break;
    
        default:
            console.log("Prato inexistente!")
            break;
    }
}

microondas_user('feijao', 2); 
