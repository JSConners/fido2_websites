# passkeys
docker run --name mykeycloak -p 8443:8443 \
        -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin \
        mykeycloak \
        start --optimized



        docker run --name mykeycloak -p 8080:8080 \
        -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin \
        quay.io/keycloak/keycloak:latest \
        start-dev



# Realm Setup
In the KeyCloak admin setup, select the realm you want to modify. 

Click `Authentication` then click the `Policies` tab. Next click on `Webauthn Passwordless Policy`. 

For hardware token or passkey specific information, see below.
## Hardware Tokens
Set the following: 

Authenticator Attachment: Cross platform
Require resident key: no
User verification requirement: Required

A QR code will immediately show up for passkeys on a mobile device. 
## Passkeys

Set the following: 

Authenticator Attachment: Cross platform
Require resident key: Yes
User verification requirement: Required

A QR code will immediately show up for passkeys on a mobile device. 