import Keycloak from 'keycloak-js';

const options = {
  url: 'http://localhost:8180',
  clientId: 'fido2',
  realm: 'fido2'
}

const keycloak = new Keycloak(options);
let authenticated;
let store = null;

/**
 * Initializes Keycloak, then run callback.
 *
 * @param onAuthenticatedCallback
 */
async function init() {
  try {
    authenticated = await keycloak.init({ onload: 'login-required', checkLoginIframe:false })
    // onInitCallback()
  } catch (error) {
    console.error("Keycloak init failed")
    console.error(error)
  }
};

/**
 * Initializes store with Keycloak user data
 *
 */
async function initStore(storeInstance) {
  try {
    store = storeInstance
    store.initOauth(keycloak)

    // Show alert if user is not authenticated
    // if (!authenticated) { alert("not authenticated") }
  } catch (error) {
    console.error("Keycloak init failed")
    console.error(error)
  }
};


/**
 * Logout user
 */
function logout(url) {
  keycloak.logout({ redirectUri: url });
}

/**
 * Refreshes token
 */
async function refreshToken() {
  try {
    await keycloak.updateToken(30);
    return keycloak;
  } catch (error) {
    console.error('Failed to refresh token');
    console.error(error);
  }
}

const KeycloakService = {
  CallInit: init,
  CallInitStore: initStore,
  CallLogout: logout,
  CallTokenRefresh: refreshToken
}

export default KeycloakService;