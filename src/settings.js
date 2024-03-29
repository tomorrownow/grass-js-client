const SETTINGS = {
    "API_HOST": "http://localhost:8005/savana",
    "API_SOURCE": "OpenPlains", // Optional (Actinia, OpenPlains=default)
    "ACTINIA_VERSION": "4.2.1",
    "LANGUAGE": "en",
    "APP_NAME": "OpenPlains",
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

export { SETTINGS }