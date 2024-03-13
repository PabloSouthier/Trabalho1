document.addEventListener("DOMContentLoaded", function () {
  
  // Função para gerar uma senha
  function generatePassword() {
    
    var length = document.getElementById("length").value;
    
    // Faz a checagem das variáveis
    var minuscula = document.getElementById("lowercase").checked;
    var maiuscula = document.getElementById("uppercase").checked;
    var numeros = document.getElementById("numbers").checked;
    var simbolos = document.getElementById("symbols").checked;

    //Define o caracter
    var charset = "";
    
    // Arrays
    if (minuscula) charset += "abcdefghijklmnopqrstuvwxyz";
    if (maiuscula) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numeros) charset += "0123456789";
    if (simbolos) charset += "!@#$%^&*()-_+=";

    // Verifica se algum caracter foi selecionado
    if (charset === "") {
      alert("Selecione pelo menos uma opção para a senha.");
      return; 
    }

    // Verifica se o tamanho da senha está correto
    if (length < 4 || length > 30) {
      alert("O comprimento da senha deve estar entre 4 e 30 caracteres.");
      return; 
    }

    // Gera a senha
    var password = "";
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }

    // Exibe a senha 
    document.getElementById("output").innerText = password;

    // Força da senha
    var forcaSenha = "";
    if (length >= 4 && length <= 8) {
      forcaSenha = "Fraca";
    } else if (length >= 9 && length <= 12) {
      forcaSenha = "Média";
    } else if (length >= 13 && length <= 30) {
      forcaSenha = "Forte";
    }
    document.getElementById("forcaSenha").innerText = "Força da senha: " + forcaSenha;
  }

  // Função para copiar a senha para a área de transferência
  function copyPassword() {
    var password = document.getElementById("output").innerText;

    // Cria um elemento de entrada temporário para copiar a senha
    var tempInput = document.createElement("input");
    tempInput.value = password;
    document.body.appendChild(tempInput);
    tempInput.select();

    // Executa o comando de cópia
    document.execCommand("copy");

    // Remove o comando de entrada temporário
    document.body.removeChild(tempInput);
    alert("Senha copiada para a área de transferência!");
  }

  // Adiciona eventlistener nos botão Gerar senha e Copiar senha
  document.getElementById("generate").addEventListener("click", generatePassword);
  document.getElementById("copy").addEventListener("click", copyPassword);
});