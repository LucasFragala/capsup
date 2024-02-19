let ul = document.querySelector('nav .ul');

function openMenu(){
    ul.classList.add('open');
}

function closeMenu(){
    ul.classList.remove('open');
}

function enviarMensagemWhatsApp() {
    // Número de telefone para o qual você deseja enviar a mensagem
    var numeroTelefone = "+5516992924468"; // Substitua pelo seu número de telefone com o código do país

    // Mensagem que você deseja enviar
    var mensagem = "Olá! Gostaria de entrar em contato.";

    // Monta a URL do WhatsApp com o número de telefone e a mensagem
    var url = "https://api.whatsapp.com/send?phone=" + encodeURIComponent(numeroTelefone) + "&text=" + encodeURIComponent(mensagem);

    // Abre a URL no navegador
    window.open(url);
}

function enviarFormWhatsApp() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var assunto = document.getElementById("assunto").value;
    var mensagem = document.getElementById("mensagem").value;

    // Número de telefone para o qual você deseja enviar a mensagem
    var numeroTelefone = "+5516992924468"; // Substitua pelo seu número de telefone com o código do país

    // Monta a mensagem com as informações do formulário
    var mensagemWhatsApp = "Nome: " + nome + "%0A";
    mensagemWhatsApp += "Email: " + email + "%0A";
    mensagemWhatsApp += "Assunto: " + assunto + "%0A";
    mensagemWhatsApp += "Mensagem: " + mensagem;

    // Monta a URL do WhatsApp com o número de telefone e a mensagem
    var url = "https://api.whatsapp.com/send?phone=" + encodeURIComponent(numeroTelefone) + "&text=" + encodeURIComponent(mensagemWhatsApp);

    // Abre a URL no navegador
    window.open(url);
}