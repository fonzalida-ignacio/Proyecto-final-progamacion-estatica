function guardarUsuario() {
    var usuario = document.getElementById('usernameInput').value;
    localStorage.setItem('username', usuario);
    window.location.href = 'aindex.html';
  }
  
  function mostrarUsuario() {
    var nombreUsuario = localStorage.getItem('username');
    var spanNombreUsuario = document.getElementById('nombreUsuario');
    if (nombreUsuario) {
      spanNombreUsuario.textContent = nombreUsuario;
    } else {
      spanNombreUsuario.textContent = 'Ingrese Usuario';
    }
  }
  
  mostrarUsuario();
  