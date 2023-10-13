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
 * Initializes Keycloak, then run callback. This will prompt you to login.
 *
 * @param onAuthenticatedCallback
 */
// async function init() {
//   try {
//     authenticated = await keycloak.init({ onLoad: 'check-sso' })
//     console.log(authenticated)
//   } catch (error) {
//     console.error("Keycloak init failed")
//     console.error(error)
//   }
// };
async function init(onInitCallback) {
  try {
    authenticated = await keycloak.init({ onLoad: 'check-sso' })
    console.log(authenticated)
    onInitCallback()
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
    await keycloak.updateToken(480);
    return keycloak;
  } catch (error) {
    console.error('Failed to refresh token');
    console.error(error);
  }
}

async function login(){
  initStore(store);
  try {
    await keycloak.login();
    console.log(authenticated);
  }catch (error) {
    console.error('Failed to refresh token');
    console.error(error);
  }
}

const KeycloakService = {
  CallInit: init,
  CallInitStore: initStore,
  CallLogout: logout,
  CallTokenRefresh: refreshToken, 
  CallLogin: login
};

export default KeycloakService;