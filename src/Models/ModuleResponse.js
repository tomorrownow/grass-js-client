/*
 * Filename: ModuleResponse.js
 * Project: OpenPlains
 * File Created: Tuesday September 6th 2022
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

import { ModuleParameterResponse } from "./ModuleParameterResponse";

/**
 * Class that defines the response schema for a GRASS or Actinia module.
 */
 export class ModuleResponse {
    /**
     * Create ProcessLog instance
     * @param {Object}
     * @param {String} id Unique identifier of the process.
     * @param {String} description Detailed description to fully explain the entity.
     * @param {String} [summary=undefined] A short summary of what the process does.
     * @param {String[]} [categories=undefined] A list of categories. GRASS GIS addons have the category \"grass-module\" and the actinia core modules are identified with \"actinia-module\"
     * @param {ModuleParameterResponse[]} [parameters=undefined] The return code of the executable
     * @param {ModuleParameterResponse[]} [returns=[]] The runtime of the executable in seconds
     * @param {ModuleParameterResponse} [import_descr=undefined] The size of the mapset in bytes
     * @param {ModuleParameterResponse} [export_descr=undefined] Export parameters to export returned data from this process
     */
    constructor({id, description, summary=undefined, categories=undefined, parameters=undefined, returns=[], import_descr=undefined, "export": export_descr=undefined}) {
        this.id = id;
        this.summary = summary;
        this.description = description;
        this.categories = categories;
        this.parameters = parameters ? parameters.map(p=> new ModuleParameterResponse({...p})) : parameters;
        this.returns = returns.map(p=> new ModuleParameterResponse({...p})); // ModuleParameter is the same as actinias ModuleReturns class
        if (import_descr) {
            this.import_descr = import_descr.length ? import_descr.map(p=> new ModuleParameterResponse({...p})) : import_descr; // ModuleParameter is the same as actinias ModuleImportDescription class
        }
        if (export_descr) {
            this.export_descr = export_descr.length ? export_descr.map(p=> new ModuleParameterResponse({...p})) : export_descr; // ModuleParameter is the same as actinias ModuleExportDescription class
        }
    }

}

