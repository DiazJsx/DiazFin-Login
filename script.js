 // Theme Toggle
 const themeToggle = document.getElementById('themeToggle');
 const moonIcon = document.getElementById('moonIcon');
 const sunIcon = document.getElementById('sunIcon');
 let isDarkMode = false;

 function toggleTheme() {
     isDarkMode = !isDarkMode;
     document.body.classList.toggle('dark');
     moonIcon.style.display = isDarkMode ? 'none' : 'block';
     sunIcon.style.display = isDarkMode ? 'block' : 'none';
 }

 themeToggle.addEventListener('click', toggleTheme);

 // Form Handling
 const loginForm = document.getElementById('loginForm');
 loginForm.addEventListener('submit', function(e) {
     e.preventDefault();
     const email = document.getElementById('email').value;
     const password = document.getElementById('password').value;
     console.log('Login attempt:', { email, password });
     // Aquí normalmente enviarías los datos al servidor para autenticación
     alert('Intento de inicio de sesión registrado. En una aplicación real, esto se enviaría al servidor.');
 });