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
| Name     | Description                             |
|----------|-----------------------------------------|
| riverUrl | Contains the URL to the RapidMQ server. |
| SECRET   | Contains the JWT secret.                |