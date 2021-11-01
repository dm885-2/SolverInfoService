# Microservice-template
A template for a generic microservice, which already have most stuff setup needed for a generic service.
- RapidMQ, Verify JWT token.
- JEST testing.
- NPM scripts.

## Commands
Start service (Starts `./src/index.js`)
```
npm run start
```

Run tests
```
npm run test
```

## Enviroment variables
**riverUrl** contains the URL to the RapidMQ server.
**SECRET** contains the JWT secret.