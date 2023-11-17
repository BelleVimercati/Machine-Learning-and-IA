function derivada(n) { //ajusta o peso para um valor mais proximo do ideal (descida do gradiente)
  return n * (1 - n);
}

function executar() {
  $("#linhas").html("");
 
  //variaveis de influência na rede neural
  var input = $("#entrada").val(); //entrada -> dentritos
  var target = $("#busca").val(); //busca -> desejo
  var epochs = $("#epocas").val(); //vezes que o algoritmo é executado 
  var weight = Math.random(); //valor randomico entre 0 e 1 peso -> sinal elétrico

  var lines = '';
  for(let i=1; i<=epochs; i++) {
    var output = Math.tanh(input * weight); //retorna a tangente  hiperbolica, é ela que sera usada como função de aproximação (função ativação)
    console.log('weight: ' +  weight);
    console.log('output: ' + output)

    var error = target - output;
    console.log('target: ' + target);
    console.log('output: ' + output);
    console.log(target - output);
    //Retropopagação -> atualizar os pesos
    weight += input * derivada(error); //atualizando os pesos


    //criando as tabela no html
    lines += 
    "<tr>" + 
        "<td>" + i + "</td>" + 
        "<td>" + zeros(Math.abs(error.toFixed(4))) + "</td>" + //caso o javascript não de conta de fixar a quantidade de casas decimais corretamente a nossa função faz isso, isso porque o js é assincrono
        "<td>" + output.toFixed(8) + "</td>" + 
    "</tr>";
  }

  $('#linhas').html(lines);


  $('#desc_entrada').text('entrada '+ input);
  $('#desc_busca').text('busca '+ target);
  $('#desc_epocas').text('epocas '+ epochs);

}


  function zeros(n){
    if(n == 0) {
      return '0.0000'; //só retorna a string com casas decimais certinho
    }else{
      var str = n.toString().trim(); //converte para string sem espaços
      var length = str.length; //pega o tamanho de str
      var dif = 6 - length; //confere se a variável possui 4 casas decimais
      if(dif > 0){ //acrescenta zeros para ter 4 casas decimais
        for(let i=0; i < dif; i++){ //let fica apenas dentro do for
          str += '0';
      }
    }
    n = str; //variável recebe a string
    return n;
  }
}

