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
import NetworkTypeEnum from './NetworkTypeEnum';
import UInt64DTO from './UInt64DTO';





/**
* The BlockDTO model module.
* @module model/BlockDTO
* @version 0.7.15
*/
export default class BlockDTO {
    /**
    * Constructs a new <code>BlockDTO</code>.
    * @alias module:model/BlockDTO
    * @class
    * @param signature {String} The signature of the block. The signature was generated by the signer and can be used to validate tha the entity data was not modified by a node. 
    * @param signer {String} The public key of the block harvester formatted as hexadecimal.
    * @param version {module:model/NetworkTypeEnum} 
    * @param type {Number} The block type: * 0x8043 (32835 decimal) - Nemesis block. * 0x8143 (33091 decimal) - Regular block. 
    * @param height {module:model/UInt64DTO} 
    * @param timestamp {module:model/UInt64DTO} 
    * @param difficulty {module:model/UInt64DTO} 
    * @param feeMultiplier {Number} The fee multiplier applied to transactions contained in block.
    * @param previousBlockHash {String} The hash of the previous block.
    * @param blockTransactionsHash {String} The transactions included in a block are hashed forming a merkle tree. The root of the tree summarizes them. 
    * @param blockReceiptsHash {String} The collection of receipts  are hashed into a merkle tree and linked to a block. The block header stores the root hash. 
    * @param stateHash {String} For each block, the state of the blockchain is stored in RocksDB, forming a patricia tree. The root of the tree summarizes the state of the blockchain for the given block. 
    * @param beneficiary {String} The public key of the optional beneficiary designated by harvester.
    */

    constructor(signature, signer, version, type, height, timestamp, difficulty, feeMultiplier, previousBlockHash, blockTransactionsHash, blockReceiptsHash, stateHash, beneficiary) {
        

        
        

        this['signature'] = signature;this['signer'] = signer;this['version'] = version;this['type'] = type;this['height'] = height;this['timestamp'] = timestamp;this['difficulty'] = difficulty;this['feeMultiplier'] = feeMultiplier;this['previousBlockHash'] = previousBlockHash;this['blockTransactionsHash'] = blockTransactionsHash;this['blockReceiptsHash'] = blockReceiptsHash;this['stateHash'] = stateHash;this['beneficiary'] = beneficiary;

        
    }

    /**
    * Constructs a <code>BlockDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/BlockDTO} obj Optional instance to populate.
    * @return {module:model/BlockDTO} The populated <code>BlockDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BlockDTO();

            
            
            

            if (data.hasOwnProperty('signature')) {
                obj['signature'] = ApiClient.convertToType(data['signature'], 'String');
            }
            if (data.hasOwnProperty('signer')) {
                obj['signer'] = ApiClient.convertToType(data['signer'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = NetworkTypeEnum.constructFromObject(data['version']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'Number');
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = UInt64DTO.constructFromObject(data['height']);
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = UInt64DTO.constructFromObject(data['timestamp']);
            }
            if (data.hasOwnProperty('difficulty')) {
                obj['difficulty'] = UInt64DTO.constructFromObject(data['difficulty']);
            }
            if (data.hasOwnProperty('feeMultiplier')) {
                obj['feeMultiplier'] = ApiClient.convertToType(data['feeMultiplier'], 'Number');
            }
            if (data.hasOwnProperty('previousBlockHash')) {
                obj['previousBlockHash'] = ApiClient.convertToType(data['previousBlockHash'], 'String');
            }
            if (data.hasOwnProperty('blockTransactionsHash')) {
                obj['blockTransactionsHash'] = ApiClient.convertToType(data['blockTransactionsHash'], 'String');
            }
            if (data.hasOwnProperty('blockReceiptsHash')) {
                obj['blockReceiptsHash'] = ApiClient.convertToType(data['blockReceiptsHash'], 'String');
            }
            if (data.hasOwnProperty('stateHash')) {
                obj['stateHash'] = ApiClient.convertToType(data['stateHash'], 'String');
            }
            if (data.hasOwnProperty('beneficiary')) {
                obj['beneficiary'] = ApiClient.convertToType(data['beneficiary'], 'String');
            }
        }
        return obj;
    }

    /**
    * The signature of the block. The signature was generated by the signer and can be used to validate tha the entity data was not modified by a node. 
    * @member {String} signature
    */
    signature = undefined;
    /**
    * The public key of the block harvester formatted as hexadecimal.
    * @member {String} signer
    */
    signer = undefined;
    /**
    * @member {module:model/NetworkTypeEnum} version
    */
    version = undefined;
    /**
    * The block type: * 0x8043 (32835 decimal) - Nemesis block. * 0x8143 (33091 decimal) - Regular block. 
    * @member {Number} type
    */
    type = undefined;
    /**
    * @member {module:model/UInt64DTO} height
    */
    height = undefined;
    /**
    * @member {module:model/UInt64DTO} timestamp
    */
    timestamp = undefined;
    /**
    * @member {module:model/UInt64DTO} difficulty
    */
    difficulty = undefined;
    /**
    * The fee multiplier applied to transactions contained in block.
    * @member {Number} feeMultiplier
    */
    feeMultiplier = undefined;
    /**
    * The hash of the previous block.
    * @member {String} previousBlockHash
    */
    previousBlockHash = undefined;
    /**
    * The transactions included in a block are hashed forming a merkle tree. The root of the tree summarizes them. 
    * @member {String} blockTransactionsHash
    */
    blockTransactionsHash = undefined;
    /**
    * The collection of receipts  are hashed into a merkle tree and linked to a block. The block header stores the root hash. 
    * @member {String} blockReceiptsHash
    */
    blockReceiptsHash = undefined;
    /**
    * For each block, the state of the blockchain is stored in RocksDB, forming a patricia tree. The root of the tree summarizes the state of the blockchain for the given block. 
    * @member {String} stateHash
    */
    stateHash = undefined;
    /**
    * The public key of the optional beneficiary designated by harvester.
    * @member {String} beneficiary
    */
    beneficiary = undefined;








}

