# MeliItemsApp

Angular version 11.1.1. Angular Universal (SSR). Backend Node - Epress

## Instalación de dependencias

`npm install`.

## Entorno de desarrollo

`npm run dev:ssr`. (levata cliente SSR con servidor node) `http://localhost:4200/`.

## Unit tests

`ng test --watch-false`.

## Unit tests + code coverage

`ng test --watch-false --code-coverage`
`cd coverage/`
`http-server -c-1 .` (`npm i http-server -g` si no estaba instalado anteriormente).

## E2E Testing

`ng serve` (levanta sólo el cliente). `http://localhost:4200/`.
`npm run cypress:open`.

## E2E Testing + generación de reporte de e2e y vidoes.

`ng serve`. (levanta sólo el cliente) `http://localhost:4200/`.
`npm run cypress:run` (genera videos de los tets en cypress/videos ).

## Build

`npm run build:ssr && npm run serve:ssr`. (levata build cliente SSR con servidor node) `http://localhost:4000/`.


