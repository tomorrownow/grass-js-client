/*
 * Filename: RasterInfoResponseModel.js
 * Project: OpenPlains
 * File Created: Thursday September 8th 2022
 * Author: Corey White (smortopahri@gmail.com)
 * Maintainer: Corey White
 * -----
 * Last Modified: Thu Sep 08 2022
 * Modified By: Corey White
 * -----
 * License: GPLv3
 * 
 * Copyright (c) 2022 OpenPlains
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

import { ProcessResponseModel } from "./ProcessResponseModel";
import { RasterInfoModel } from "./RasterInfoModel";

/**
 * Response schema for raster map layer information.
 * @class
 * @param {RasterInfoModel} processResults - Raster map layer information
 */
export class RasterInfoResponseModel extends ProcessResponseModel {
    constructor({status, user_id, resource_id, accept_timestamp, accept_datetime, timestamp, time_delta, datetime, process_log=null, process_chain_list=null, process_results=null, progress=null, message=null, exception=null, http_code = null, urls = null, api_info = null}) {
        super({status, user_id, resource_id, accept_timestamp, accept_datetime, timestamp, time_delta, datetime, process_log, process_chain_list, progress, message, exception, http_code, urls, api_info})
        this.processResults = (process_results instanceof Object) ? new RasterInfoModel({...process_results}) : {}
    }
}