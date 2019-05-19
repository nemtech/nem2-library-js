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
* The BlockMetaDTO model module.
* @module model/BlockMetaDTO
* @version 0.7.15
*/
export default class BlockMetaDTO {
    /**
    * Constructs a new <code>BlockMetaDTO</code>.
    * @alias module:model/BlockMetaDTO
    * @class
    * @param hash {String} 
    * @param generationHash {String} 
    * @param subCacheMerkleRoots {Array.<String>} 
    * @param totalFee {module:model/UInt64DTO} 
    * @param numTransactions {Number} 
    */

    constructor(hash, generationHash, subCacheMerkleRoots, totalFee, numTransactions) {
        



        this['hash'] = hash;this['generationHash'] = generationHash;this['subCacheMerkleRoots'] = subCacheMerkleRoots;this['totalFee'] = totalFee;this['numTransactions'] = numTransactions;

        
    }

    /**
    * Constructs a <code>BlockMetaDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/BlockMetaDTO} obj Optional instance to populate.
    * @return {module:model/BlockMetaDTO} The populated <code>BlockMetaDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BlockMetaDTO();

            
            
            

            if (data.hasOwnProperty('hash')) {
                obj['hash'] = ApiClient.convertToType(data['hash'], 'String');
            }
            if (data.hasOwnProperty('generationHash')) {
                obj['generationHash'] = ApiClient.convertToType(data['generationHash'], 'String');
            }
            if (data.hasOwnProperty('subCacheMerkleRoots')) {
                obj['subCacheMerkleRoots'] = ApiClient.convertToType(data['subCacheMerkleRoots'], ['String']);
            }
            if (data.hasOwnProperty('totalFee')) {
                obj['totalFee'] = UInt64DTO.constructFromObject(data['totalFee']);
            }
            if (data.hasOwnProperty('numTransactions')) {
                obj['numTransactions'] = ApiClient.convertToType(data['numTransactions'], 'Number');
            }
            if (data.hasOwnProperty('numStatements')) {
                obj['numStatements'] = ApiClient.convertToType(data['numStatements'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {String} hash
    */
    hash = undefined;
    /**
    * @member {String} generationHash
    */
    generationHash = undefined;
    /**
    * @member {Array.<String>} subCacheMerkleRoots
    */
    subCacheMerkleRoots = undefined;
    /**
    * @member {module:model/UInt64DTO} totalFee
    */
    totalFee = undefined;
    /**
    * @member {Number} numTransactions
    */
    numTransactions = undefined;
    /**
    * @member {Number} numStatements
    */
    numStatements = undefined;








}


