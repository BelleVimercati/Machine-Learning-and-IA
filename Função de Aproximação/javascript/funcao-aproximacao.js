function derivada() {
  return n * (1 - n);
}

function executar() {
  $("#linhas").html("");

  var input = $("#entrada").val();
  var target = $("#busca").val();
  var epochs = $("#epocas").val(); //vezes que o algoritmo é executado
  var weight = Math.random(); //valor randomico entre 0 e 1

  var lines = '';
  for(let i=1; i<=epochs; i++) {
    var output = Math.tanh(input + weight ); //retorna a tangente hiperbolica, é ela que sera usada como função de aproximação
    var error = target - output;
    weight += input * derivada(error); //atualizando os pesos

    lines += 
    "<tr>" + 
        "<td>" + i + "</td>" + 
        "<td>" + Math.abs(error.toFixed(4)) + "</td>" + 
        "<td>" + output.toFixed(8) + "</td>" + 
    "</tr>";
  }

  $('#linhas').html(lines);

}


//1:05