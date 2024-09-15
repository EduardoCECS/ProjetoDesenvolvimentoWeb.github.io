console.log('JavaScript carregado com sucesso.');

window.onload = function() {
  console.log("Window loaded");

function formatCPF(value) {
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    return value;
}

function handleCPFInput(event) {
    const input = event.target;
    input.value = formatCPF(input.value);
}

document.getElementById('iconesenha').addEventListener('click', function() {
  const passwordField = document.getElementById('senha');
  const eyeIcon = document.getElementById('iconesenha');
  if (passwordField.type === 'password') {
    passwordField.type = 'text';
    eyeIcon.src = 'img/olho.webp';
  } else {
    passwordField.type = 'password';
    eyeIcon.src = 'img/olho.webp'; 
  }
});