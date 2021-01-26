# Meli Items App

Angular version 11.1.1. Angular Universal (SSR). Backend Node/Epress (Typescript)

## Instalación de dependencias

`npm install`.

## Entorno de desarrollo SSR

`npm run dev:ssr`. (levanta cliente SSR con servidor node) `http://localhost:4200/`.

## Unit tests

`ng test`.

## Unit tests + code coverage

`ng test --watch=false --code-coverage`
`cd coverage/meli-items-app/`
`http-server -c-1 .` `http://localhost:8080/` (`npm i http-server -g` si no está instalado http-server).

## E2E Testing

`ng serve` (levanta sólo el cliente). `http://localhost:4200/`.
`npm run cypress:open`.

## E2E Testing + generación de reporte de e2e y videos.

`ng serve`. (levanta sólo el cliente) `http://localhost:4200/`.
`npm run cypress:run` (genera videos de los tests e2e en cypress/videos ).

## Build SSR

`npm run build:ssr && npm run serve:ssr`. (levanta build cliente SSR con servidor node) `http://localhost:4000/`.
