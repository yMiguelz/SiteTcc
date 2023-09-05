document.addEventListener("DOMContentLoaded", function () {
  const contatoForm = document.getElementById("contatoForm");

  contatoForm.contact;

  addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Aqui você pode adicionar código para realizar ações com os dados, se necessário

    // Por enquanto, vamos apenas exibir um alerta com os valores dos campos
    alert(`Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`);

    // Limpar os campos após o envio
    contatoForm.contatoForm;

    reset();
  });
});


