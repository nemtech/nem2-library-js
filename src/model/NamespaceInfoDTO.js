/*
 * Copyright 2019 NEM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Catapult REST API Reference
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.7.15
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';
import NamespaceDTO from './NamespaceDTO';
import NamespaceMetaDTO from './NamespaceMetaDTO';





/**
* The NamespaceInfoDTO model module.
* @module model/NamespaceInfoDTO
* @version 0.7.15
*/
export default class NamespaceInfoDTO {
    /**
    * Constructs a new <code>NamespaceInfoDTO</code>.
    * @alias module:model/NamespaceInfoDTO
    * @class
    * @param meta {module:model/NamespaceMetaDTO} 
    * @param namespace {module:model/NamespaceDTO} 
    */

    constructor(meta, namespace) {
        

        
        

        this['meta'] = meta;this['namespace'] = namespace;

        
    }

    /**
    * Constructs a <code>NamespaceInfoDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NamespaceInfoDTO} obj Optional instance to populate.
    * @return {module:model/NamespaceInfoDTO} The populated <code>NamespaceInfoDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NamespaceInfoDTO();

            
            
            

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = NamespaceMetaDTO.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('namespace')) {
                obj['namespace'] = NamespaceDTO.constructFromObject(data['namespace']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/NamespaceMetaDTO} meta
    */
    meta = undefined;
    /**
    * @member {module:model/NamespaceDTO} namespace
    */
    namespace = undefined;








}


