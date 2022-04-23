var listadePecas = ["Moto", "Amortecedor", "Freio", "Cambio", "Disco de Freio", "Radiador"]

if (listadePecas.length < 10){
    console.log("É possivel cadastrar mais peças")
}else{
    console.log("Não tem mais espaço")
}


let peso = 50;

if(peso < 100){
    console.log("A peça deve pesar no minimo 100g")
}else{
    console.log("Peça possui o peso adequado")
}


let NomePeca = "Radiador"

if(NomePeca.length > 3){
    console.log("Nome de peça está adequado para cadastro")
}else if (NomePeca ==0){
    console.log("Nome da peça não pode estar vazio")
}else{
    console.log("O nome deve ter mais de 3 caracteres, digite um nome adequado")
}