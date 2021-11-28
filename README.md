# fsr-status-api
ExpressJS API to communicate with a Raspberry PI Zero and represents the status of the Fachschaftsraum [open,closed].

# Tests

Simple test suite is added

`npm test`

# Docker

https://hub.docker.com/r/roscha444/fsr-status-api

### environment variables:
API_SECRET=12345

### run
docker run -d -p 80:80 -e API_SECRET=404 roscha444/fsr-status-api

# Deploy

Commits to the master branch triggers a automatic build.

Automatic build can be found here:
https://fsr-api.dev.fs-matheinfo.de
