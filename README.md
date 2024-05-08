# passkeys

## Starting the service

This should build and then run the service. 

```sh
sudo docker compose build && docker compose up
```

Some linux distros use a separate docker compose package, so the command may look like this: 
```sh
sudo docker-compose build && docker-compose up
```

After the first time running this command, you should only need to run to start the server. 

```sh
sudo docker compose up #docker-compose up
```


Web interface: `localhost:8080`
Keycloak: `localhost:8180`



## Keycloak changes

Go to the keycloak server and use the credentials below to login. 

```
user: admin
pw: admin
```

### Everything below this is notes James made for himself. 




```
docker run --name mykeycloak -p 8443:8443 \ -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin \ mykeycloak \ start --optimized

docker run --name mykeycloak -p 8080:8080 \ -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin \ quay.io/keycloak/keycloak:latest \ start-dev
```


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