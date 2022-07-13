var authGoogleButton = document.getElementById('authGoogleButton');
var logOutButton = document.getElementById('logout')
var displayName = document.getElementById('displayName')

// Displays
var displayName = document.getElementById('displayName');

// Autenticar com Google
authGoogleButton.addEventListener('click', function () {
    // Providers
    var provider = new firebase.auth.GoogleAuthProvider();
    signIn(provider);
});

// Logout
logOutButton.addEventListener('click', function () {
    firebase
        .auth()
        .signOut()
        .then(function () {
            displayName.innerText = 'Você não está autenticado';
            alert('Você se deslogou');
        }, function (error) {
            console.error(error);
        });
});

// Autenticar com Google
authGoogleButton.addEventListener('click', function () {
    // Providers
    var provider = new firebase.auth.GoogleAuthProvider();
    signIn(provider);
});

function signIn(provider) {
    firebase.auth()
        .signInWithRedirect(provider)
        .then(function (result) {
            console.log(result);
            var token = result.credential.accessToken;
            displayName.innerText = 'Bem vindo, ' + result.user.displayName;
            cookieStore.set("user", JSON.stringify(result.user))
        }).catch(function (error) {
            console.log(error);
            alert('Falha na autenticação');
        });
}