# (In Development) grass-js-client

[![build](https://github.com/tomorrownow/grass-js-client/actions/workflows/node.js.yml/badge.svg)](https://github.com/tomorrownow/grass-js-client/actions/workflows/node.js.yml)

A JavaScript REST API client for django-actinia or Actinia REST APIs.

## Getting Started

grass-js-client works with [django-actinia](https://github.com/tomorrownow/django-actinia) and [Actinia 4.2.1](https://github.com/mundialis/actinia_core).

## Documentation

[https://tomorrownow.github.io/grass-js-client/](https://tomorrownow.github.io/grass-js-client/)

### Install (Coming Soon)

```bash
npm install grass-js-client
```

### Configuration

Set your api settings in `src/settings.js`

```js
{
    "API_HOST": "http://localhost:8005/savana",
    "API_SOURCE": ["actinia", "openplains"],
    "ACTINIA_VERSION": "4.2.1",
    "LANGUAGE": "en",
    "APP_NAME": "OpenPlains",
    "APP_ICON": "",
    "PLUGINS": [
        {
            "name": "actinia_statistic_plugin",
            "version": "0.2.0"
        },
        {
            "name": "actinia_satellite_plugin",
            "version": "0.1.0"
        },
        {
            "name": "actinia_metadata_plugin",
            "version": "1.0.2"
        },
        {
            "name": "actinia_module_plugin",
            "version": "2.3.1"
        },
        {
            "name": "actinia_stac_plugin",
            "version": "0.1.0"
        },
        {
            "name": "actinia_tiling_plugin",
            "version": "1.0.0"
        },
        {
            "name": "actinia_api",
            "version": "3.3.0"
        }
    ]
}
```

Make requests to the API...

```js
import Grass from "Grass";

// Get a list of avaliable locations
let response = await Grass.routes.Locations.getLocations()

// Get info about a location
let info = await Grass.routes.Locations.getLocation('nc_spm_08')

```

More documentation to come...

### Contribute

Set up your node environment and install dependencies

```bash
nvm use
npm install
```

#### Testing

Run Jest test using the following commnad.

```bash
npm run test
```

#### Build

Run Jest test using the following commnad.

```bash
npm run build
```

#### Docs

Run JSDocs to build docs into the `/docs` directory

```bash
npm run docs
```
