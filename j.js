console.log('JavaScript carregado com sucesso.');

function handleCredentialResponse(response) {
  console.log("Encoded JWT ID token: " + response.credential);
}

window.onload = function() {
  console.log("Window loaded");

if (!google || !google.accounts || !google.accounts.id) {
  console.error("Google accounts ID not loaded.");
  return;
}

google.accounts.id.initialize({
  client_id: "1011092350451-uae6dichhsaf92ptqces58bnmfup756e.apps.googleusercontent.com",
  callback: handleCredentialResponse
});

console.log("Google Sign-In initialized");

const buttonDiv = document.getElementById('buttonDiv');
if (buttonDiv) {
  google.accounts.id.renderButton(
    buttonDiv,
    { theme: "outline", size: "large" }
  );
  console.log("Button rendered");
} else {
  console.error("Elemento com o ID 'buttonDiv' não encontrado.");
}

google.accounts.id.prompt((notification) => {
  if (notification.getSkippedReason() === 'tap_outside') {
      google.accounts.id.prompt();
    }
  }); 
};
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
