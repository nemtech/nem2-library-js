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





/**
* The MosaicMetaDTO model module.
* @module model/MosaicMetaDTO
* @version 0.7.15
*/
export default class MosaicMetaDTO {
    /**
    * Constructs a new <code>MosaicMetaDTO</code>.
    * @alias module:model/MosaicMetaDTO
    * @class
    * @param id {String} 
    */

    constructor(id) {
        



        this['id'] = id;

        
    }

    /**
    * Constructs a <code>MosaicMetaDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/MosaicMetaDTO} obj Optional instance to populate.
    * @return {module:model/MosaicMetaDTO} The populated <code>MosaicMetaDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MosaicMetaDTO();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} id
    */
    id = undefined;








}


