import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
    url: 'http://localhost:8180/',
    realm: 'fido2',
    clientId: 'fido2'
});

try {
    const authenticated = await keycloak.init();
    console.log(`User is ${authenticated ? 'authenticated' : 'not authenticated'}`);
} catch (error) {
    console.error('Failed to initialize adapter:', error);
}


keycloak.init({
    onLoad: 'login-required',
    silentCheckSsoRedirectUri: `${location.origin}/silent-check-sso.html`
});

async function fetchUsers() {
    const response = await fetch('/api/users', {
        headers: {
            accept: 'application/json',
            authorization: `Bearer ${keycloak.token}`
        }
    });

    return response.json();
}