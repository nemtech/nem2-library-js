/**
 * Catapult REST API Reference
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 0.7.15
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import SourceDTO from './SourceDTO';

/**
 * The ResolutionEntryDTO model module.
 * @module model/ResolutionEntryDTO
 * @version 0.7.15
 */
class ResolutionEntryDTO {
    /**
     * Constructs a new <code>ResolutionEntryDTO</code>.
     * @alias module:model/ResolutionEntryDTO
     * @param source {module:model/SourceDTO} 
     * @param resolved {Array.<Number>} 
     */
    constructor(source, resolved) { 
        
        ResolutionEntryDTO.initialize(this, source, resolved);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, source, resolved) { 
        obj['source'] = source;
        obj['resolved'] = resolved;
    }

    /**
     * Constructs a <code>ResolutionEntryDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResolutionEntryDTO} obj Optional instance to populate.
     * @return {module:model/ResolutionEntryDTO} The populated <code>ResolutionEntryDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResolutionEntryDTO();

            if (data.hasOwnProperty('source')) {
                obj['source'] = SourceDTO.constructFromObject(data['source']);
            }
            if (data.hasOwnProperty('resolved')) {
                obj['resolved'] = ApiClient.convertToType(data['resolved'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/SourceDTO} source
 */
ResolutionEntryDTO.prototype['source'] = undefined;

/**
 * @member {Array.<Number>} resolved
 */
ResolutionEntryDTO.prototype['resolved'] = undefined;






export default ResolutionEntryDTO;

