# app-front

--Explain the role of your app in 1/2 sentences--

## Installation

prerequisites: [Lerna](https://lernajs.io/) and [Yarn](https://yarnpkg.com/en/) (as global)

```bash
nvm i
npm install --global lerna
lerna bootstrap
```
## Mac
```bash
brew install yarn
```

## Linux
```bash
sudo apt-get update && sudo apt-get install yarn
```
## Architecture

With every webapp built on the Skwirrel stack there is a client and a server to the client. The client only communicates with its server. The server can communicate with Skwirrel services as necessary, for example porte as the entry point to all sub-services

## Run in dev mode

```bash
lerna run start:dev --stream
```

This will start the front-end with it's own server which will proxy `/api/*` requests on the backend.

## Run in production

```bash
lerna run start
```

In production mode the backend serves the static assets itself

## Environment variables

Variable name | Description  | Default
------------- | ------------ | -------------
CLIENT_PATH | The path to the React code | 'client/build'
ENABLE_CHANGE_ORIGIN_PROXY | Changes the origin of the host header to the target URL | false
LOGGER_LEVEL | The logging level to show | 'info'
LOGSTASH_HOST | The logging server, sends logs to central location if set | ''
LOGSTASH_PORT | The logging server port | 5002
METRICS_HOST | The metrics server, if set sends the metrics to a central machine | 'metrics.skwirrel.fr'
PORTE_API_URL | The Porte micro service for relaying commands from the UI to Skwirrel | ''
PORTE_TIMEOUT | Timeout on any http commands in milli seconds | 10000
