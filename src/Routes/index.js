/*
 * Filename: index.js
 * Project: OpenPlains
 * File Created: Friday August 19th 2022
 * Author: Corey White (smortopahri@gmail.com)
 * Maintainer: Corey White
 * -----
 * Last Modified: Mon Sep 12 2022
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

import Locations from "./locations"
import Mapsets from "./mapsets"
import Modules from "./modules"
import Layers from "./layers"
/**
 * Routes module.
 * @module Routes
 */

/**
 * Routes Module Object containing 
 * @namespace
 * @type {Object}
 */
const Routes = {
    /**
     * Refer to this by {@link Routes."Locations"}.
     */
    Locations,
    /**
     * Refer to this by {@link Routes."Mapsets"}.
     */
    Mapsets,
    /**
     * Refer to this by {@link Routes."Layers"}.
     */
    Layers,
    /**
     * Refer to this by {@link Routes."Modules"}.
     */
    Modules
}

export default Routes