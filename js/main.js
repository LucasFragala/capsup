let ul = document.querySelector('nav .ul');

function openMenu(){
    ul.classList.add('open');
}

function closeMenu(){
    ul.classList.remove('open');
}

function enviarMensagemWhatsApp() {
    var numeroTelefone = "+5516992924468"; 
    var mensagem = "Olá! Gostaria de entrar em contato.";
    var url = "https://api.whatsapp.com/send?phone=" + encodeURIComponent(numeroTelefone) + "&text=" + encodeURIComponent(mensagem);
    window.open(url);
}

function enviarFormWhatsApp() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var assunto = document.getElementById("assunto").value;
    var mensagem = document.getElementById("mensagem").value;

    var numeroTelefone = "+5516992924468";

    var mensagemWhatsApp = "Nome: " + nome + "<br>";
    mensagemWhatsApp += "Email: " + email + "<br>";
    mensagemWhatsApp += "Assunto: " + assunto + "<br>";
    mensagemWhatsApp += "Mensagem: " + mensagem;

    var url = "https://api.whatsapp.com/send?phone=" + encodeURIComponent(numeroTelefone) + "&text=" + encodeURIComponent(mensagemWhatsApp);

    window.open(url);
}