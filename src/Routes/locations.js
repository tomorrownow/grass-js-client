/*
 * Filename: locations.js
 * Project: OpenPlains
 * File Created: Friday August 19th 2022
 * Author: Corey White (smortopahri@gmail.com)
 * Maintainer: Corey White
 * -----
 * Last Modified: Tue Sep 13 2022
 * Modified By: Corey White
 * -----
 * License: GPLv3
 * 
 * Copyright (c) 2022 TomorrowNow
 * 
 * TomorrowNow is an open-source geospatial participartory modeling platform
 * to enable stakeholder engagment in socio-environmental decision-makeing.
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 * 
 */

/**
 * Locations module.
 * @module
 */


import { RESPONSESTRINGS } from "../strings"
import { ProcessResponseModel } from "../Models/ProcessResponseModel";
import { LocationsListResponseModel } from "../Models/LocationsListResponseModel";
import { SimpleResponseModel } from "../Models/SimpleResponseModel";
import { ApiRequest } from "./utils";
import opClient from "../Models/Client";

const client = opClient;
const API_HOST = client.host;
const LOCATION_ROUTES = (locationName=undefined) => {
    return locationName ? `${API_HOST}/g/locations/${locationName}` : `${API_HOST}/g/locations`
}

const INFO_ROUTES = (locationName) => `${LOCATION_ROUTES(locationName)}/info`

const LOCATION_ERROR_RESPONSE = RESPONSESTRINGS.errorRepsonse.location;

/**
 * Get a list of all available locations that are located in the GRASS database and the user has access to. Minimum required user role: user.
 * Route: /locations/
 * @function
 * @param {Object} [options={}] - Optional request parameters set to fetch.
 * @return {Promise<LocationsListResponseModel|SimpleResponseModel>}
 */
const getLocations = (async (options={}) => {
    return new ApiRequest({
        url: new URL(LOCATION_ROUTES()),
        successResponseClass: LocationsListResponseModel, 
        errorResponseClass: SimpleResponseModel, 
        errorString: LOCATION_ERROR_RESPONSE.getLocations[client.language], 
        options:options
    }).getRequest()
})


/**
 * Create a new location based on EPSG code in the user database. Minimum required user role: user.
 * Route: /locations/{location_name}/
 * @function
 * @async
 * @param {string} locationName - The locations name
 * @param {string|number} epsg - A EPSG code  
 * @param {Object} [options={}] - Optional request parameters set to fetch.
 * @return {Promise<ProcessResponseModel>}
 */
const createLocation = (async (locationName, epsg, options={}) => {
    return new ApiRequest({
        url: new URL(LOCATION_ROUTES(locationName)),
        successResponseClass: ProcessResponseModel, 
        errorResponseClass: ProcessResponseModel, 
        errorString: LOCATION_ERROR_RESPONSE.createLocation[client.language], 
        options: {
            body: JSON.stringify({epsg}),
            ...options
        }
    }).postRequest()
})


 /**
  * Delete an existing location and everything inside from the user database. Minimum required user role: user.
  * Route: /locations/{location_name}/
  * @function
  * @async
  * @param {string} locationName - The locations name
  * @param {Object} [options={}] - Optional request parameters set to fetch.
  * @return {Promise<SimpleResponseModel>} 
  */
const deleteLocation = (async (locationName, options={}) => {
    return new ApiRequest({
        url: new URL(LOCATION_ROUTES(locationName)),
        successResponseClass: SimpleResponseModel, 
        errorResponseClass: SimpleResponseModel, 
        errorString: LOCATION_ERROR_RESPONSE.deleteLocation[client.language], 
        options
    }).deleteRequest()
})

/**
 * Get the location projection and current computational region of the PERMANENT mapset. Minimum required user role: user.
 * Route: /locations/{location_name}/info
 * @function
 * @async
 * @param {string} locationName - The locations name
 * @param {Object} [options={}] - Optional request parameters set to fetch.
 * @return {Promise<ProcessResponseModel|SimpleResponseModel>}
 * 
 */   
const getLocation = (async (locationName, options={}) => {
    return new ApiRequest({
        url: new URL(INFO_ROUTES(locationName)),
        successResponseClass: ProcessResponseModel, 
        errorResponseClass: SimpleResponseModel, 
        errorString: LOCATION_ERROR_RESPONSE.getLocation[client.language], 
        options
    }).getRequest()
})


 const Locations = {
    getLocations,
    createLocation,
    deleteLocation,
    getLocation
}

export default Locations