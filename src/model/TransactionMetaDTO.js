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
import UInt64DTO from './UInt64DTO';





/**
* The TransactionMetaDTO model module.
* @module model/TransactionMetaDTO
* @version 0.7.15
*/
export default class TransactionMetaDTO {
    /**
    * Constructs a new <code>TransactionMetaDTO</code>.
    * @alias module:model/TransactionMetaDTO
    * @class
    * @param height {module:model/UInt64DTO} 
    * @param hash {String} 
    * @param merkleComponentHash {String} 
    * @param index {Number} 
    * @param id {String} 
    */

    constructor(height, hash, merkleComponentHash, index, id) {
        



        this['height'] = height;this['hash'] = hash;this['merkleComponentHash'] = merkleComponentHash;this['index'] = index;this['id'] = id;

        
    }

    /**
    * Constructs a <code>TransactionMetaDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/TransactionMetaDTO} obj Optional instance to populate.
    * @return {module:model/TransactionMetaDTO} The populated <code>TransactionMetaDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionMetaDTO();

            
            
            

            if (data.hasOwnProperty('height')) {
                obj['height'] = UInt64DTO.constructFromObject(data['height']);
            }
            if (data.hasOwnProperty('hash')) {
                obj['hash'] = ApiClient.convertToType(data['hash'], 'String');
            }
            if (data.hasOwnProperty('merkleComponentHash')) {
                obj['merkleComponentHash'] = ApiClient.convertToType(data['merkleComponentHash'], 'String');
            }
            if (data.hasOwnProperty('index')) {
                obj['index'] = ApiClient.convertToType(data['index'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {module:model/UInt64DTO} height
    */
    height = undefined;
    /**
    * @member {String} hash
    */
    hash = undefined;
    /**
    * @member {String} merkleComponentHash
    */
    merkleComponentHash = undefined;
    /**
    * @member {Number} index
    */
    index = undefined;
    /**
    * @member {String} id
    */
    id = undefined;








}


