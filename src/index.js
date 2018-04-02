/*
 * Copyright 2018 NEM
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
 * NIS2 API
 * This document defines all the nis2 api routes and behaviour
 *
 * OpenAPI spec version: 1.0.0
 * Contact: guillemchain@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import AccountDTO from './model/AccountDTO';
import AccountIds from './model/AccountIds';
import AccountInfoDTO from './model/AccountInfoDTO';
import AccountMetaDTO from './model/AccountMetaDTO';
import AnnounceTransactionInfoDTO from './model/AnnounceTransactionInfoDTO';
import BlockDTO from './model/BlockDTO';
import BlockInfoDTO from './model/BlockInfoDTO';
import BlockMetaDTO from './model/BlockMetaDTO';
import BlockchainScoreDTO from './model/BlockchainScoreDTO';
import BlockchainStorageInfoDTO from './model/BlockchainStorageInfoDTO';
import HeightDTO from './model/HeightDTO';
import MosaicDTO from './model/MosaicDTO';
import MosaicDefinitionDTO from './model/MosaicDefinitionDTO';
import MosaicIds from './model/MosaicIds';
import MosaicInfoDTO from './model/MosaicInfoDTO';
import MosaicNameDTO from './model/MosaicNameDTO';
import MosaicPropertiesDTO from './model/MosaicPropertiesDTO';
import Multisig from './model/Multisig';
import MultisigAccountGraphInfoDTO from './model/MultisigAccountGraphInfoDTO';
import MultisigAccountInfoDTO from './model/MultisigAccountInfoDTO';
import NamespaceDTO from './model/NamespaceDTO';
import NamespaceIds from './model/NamespaceIds';
import NamespaceInfoDTO from './model/NamespaceInfoDTO';
import NamespaceMosaicMetaDTO from './model/NamespaceMosaicMetaDTO';
import NamespaceNameDTO from './model/NamespaceNameDTO';
import TransactionHashes from './model/TransactionHashes';
import TransactionIds from './model/TransactionIds';
import TransactionPayload from './model/TransactionPayload';
import TransactionStatusDTO from './model/TransactionStatusDTO';
import UInt64DTO from './model/UInt64DTO';
import AccountRoutesApi from './api/AccountRoutesApi';
import BlockchainRoutesApi from './api/BlockchainRoutesApi';
import LockRoutesApi from './api/LockRoutesApi';
import MosaicRoutesApi from './api/MosaicRoutesApi';
import NamespaceRoutesApi from './api/NamespaceRoutesApi';
import TransactionRoutesApi from './api/TransactionRoutesApi';
import NetworkRoutesApi from './api/NetworkRoutesApi';
import BlockListener from './listeners/BlockListener';
import ConfirmedTransactionsListener from './listeners/ConfirmedTransactionsListener';
import PartialTransactionsListener from './listeners/PartialTransactionsListener';
import TransactionStatusListener from './listeners/TransactionStatusListener';
import UnconfirmedTransactionsListener from './listeners/UnconfirmedTransactionsListener';
import Schema from './schema/Schema';
import CosignatureTransaction from './transactions/CosignatureTransaction';
import AggregateTransaction from './transactions/AggregateTransaction';
import HashLockTransaction from './transactions/HashLockTransaction';
import deadline from './transactions/Deadline';
import MosaicCreationTransaction from './transactions/MosaicCreationTransaction';
import MosaicSupplyChangeTransaction from './transactions/MosaicSupplyChangeTransaction';
import MultisigModificationTransaction from './transactions/MultisigModificationTransaction';
import NamespaceCreationTransaction from './transactions/NamespaceCreationTransaction';
import SecretLockTransaction from './transactions/SecretLockTransaction';
import SecretProofTransaction from './transactions/SecretProofTransaction';
import TransferTransaction from './transactions/TransferTransaction';
import VerifiableTransaction from './transactions/VerifiableTransaction';
import VerifiableTransactionBuilder from './transactions/VerificableTransactionBuilder';
import * as KeyPair from './crypto/keyPair';
import crypto from './crypto/crypto';
import nacl_catapult from './crypto/nacl_catapult';
import sha3Hasher from './crypto/sha3Hasher';
import convert from './coders/convert';
import IdGenerator from './coders/idGenerator';
import uint64 from './coders/uint64';
import address from './coders/address';
import { mosaicId, namespaceId, subnamespaceNamespaceId, subnamespaceParentId } from './transactions/NamespaceMosaicId';


/**
 * This_document_defines_all_the_nis2_api_routes_and_behaviour.<br>
 * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
 * <p>
 * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
 * <pre>
 * var Nis2Api = require('index'); // See note below*.
 * var xxxSvc = new Nis2Api.XxxApi(); // Allocate the API class we're going to use.
 * var yyyModel = new Nis2Api.Yyy(); // Construct a model instance.
 * yyyModel.someProperty = 'someValue';
 * ...
 * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
 * ...
 * </pre>
 * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
 * and put the application logic within the callback function.</em>
 * </p>
 * <p>
 * A non-AMD browser application (discouraged) might do something like this:
 * <pre>
 * var xxxSvc = new Nis2Api.XxxApi(); // Allocate the API class we're going to use.
 * var yyy = new Nis2Api.Yyy(); // Construct a model instance.
 * yyyModel.someProperty = 'someValue';
 * ...
 * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
 * ...
 * </pre>
 * </p>
 * @module index
 * @version 1.0.0
 */
export {
	/**
	 * The ApiClient constructor.
	 * @property {module:ApiClient}
	 */
		ApiClient,

	/**
	 * The AccountDTO model constructor.
	 * @property {module:model/AccountDTO}
	 */
		AccountDTO,

	/**
	 * The AccountIds model constructor.
	 * @property {module:model/AccountIds}
	 */
		AccountIds,

	/**
	 * The AccountInfoDTO model constructor.
	 * @property {module:model/AccountInfoDTO}
	 */
		AccountInfoDTO,

	/**
	 * The AccountMetaDTO model constructor.
	 * @property {module:model/AccountMetaDTO}
	 */
		AccountMetaDTO,

	/**
	 * The AnnounceTransactionInfoDTO model constructor.
	 * @property {module:model/AnnounceTransactionInfoDTO}
	 */
		AnnounceTransactionInfoDTO,

	/**
	 * The BlockDTO model constructor.
	 * @property {module:model/BlockDTO}
	 */
		BlockDTO,

	/**
	 * The BlockInfoDTO model constructor.
	 * @property {module:model/BlockInfoDTO}
	 */
		BlockInfoDTO,

	/**
	 * The BlockMetaDTO model constructor.
	 * @property {module:model/BlockMetaDTO}
	 */
		BlockMetaDTO,

	/**
	 * The BlockchainScoreDTO model constructor.
	 * @property {module:model/BlockchainScoreDTO}
	 */
		BlockchainScoreDTO,

	/**
	 * The BlockchainStorageInfoDTO model constructor.
	 * @property {module:model/BlockchainStorageInfoDTO}
	 */
		BlockchainStorageInfoDTO,

	/**
	 * The HeightDTO model constructor.
	 * @property {module:model/HeightDTO}
	 */
		HeightDTO,

	/**
	 * The MosaicDTO model constructor.
	 * @property {module:model/MosaicDTO}
	 */
		MosaicDTO,

	/**
	 * The MosaicDefinitionDTO model constructor.
	 * @property {module:model/MosaicDefinitionDTO}
	 */
		MosaicDefinitionDTO,

	/**
	 * The MosaicIds model constructor.
	 * @property {module:model/MosaicIds}
	 */
		MosaicIds,

	/**
	 * The MosaicInfoDTO model constructor.
	 * @property {module:model/MosaicInfoDTO}
	 */
		MosaicInfoDTO,

	/**
	 * The MosaicNameDTO model constructor.
	 * @property {module:model/MosaicNameDTO}
	 */
		MosaicNameDTO,

	/**
	 * The MosaicPropertiesDTO model constructor.
	 * @property {module:model/MosaicPropertiesDTO}
	 */
		MosaicPropertiesDTO,

	/**
	 * The Multisig model constructor.
	 * @property {module:model/Multisig}
	 */
		Multisig,

	/**
	 * The MultisigAccountGraphInfoDTO model constructor.
	 * @property {module:model/MultisigAccountGraphInfoDTO}
	 */
		MultisigAccountGraphInfoDTO,

	/**
	 * The MultisigAccountInfoDTO model constructor.
	 * @property {module:model/MultisigAccountInfoDTO}
	 */
		MultisigAccountInfoDTO,

	/**
	 * The NamespaceDTO model constructor.
	 * @property {module:model/NamespaceDTO}
	 */
		NamespaceDTO,

	/**
	 * The NamespaceIds model constructor.
	 * @property {module:model/NamespaceIds}
	 */
		NamespaceIds,

	/**
	 * The NamespaceInfoDTO model constructor.
	 * @property {module:model/NamespaceInfoDTO}
	 */
		NamespaceInfoDTO,

	/**
	 * The NamespaceMosaicMetaDTO model constructor.
	 * @property {module:model/NamespaceMosaicMetaDTO}
	 */
		NamespaceMosaicMetaDTO,

	/**
	 * The NamespaceNameDTO model constructor.
	 * @property {module:model/NamespaceNameDTO}
	 */
		NamespaceNameDTO,

	/**
	 * The TransactionHashes model constructor.
	 * @property {module:model/TransactionHashes}
	 */
		TransactionHashes,

	/**
	 * The TransactionIds model constructor.
	 * @property {module:model/TransactionIds}
	 */
		TransactionIds,

	/**
	 * The TransactionPayload model constructor.
	 * @property {module:model/TransactionPayload}
	 */
		TransactionPayload,

	/**
	 * The TransactionStatusDTO model constructor.
	 * @property {module:model/TransactionStatusDTO}
	 */
		TransactionStatusDTO,

	/**
	 * The UInt64DTO model constructor.
	 * @property {module:model/UInt64DTO}
	 */
		UInt64DTO,

	/**
	 * The AccountRoutesApi service constructor.
	 * @property {module:api/AccountRoutesApi}
	 */
		AccountRoutesApi,

	/**
	 * The BlockchainRoutesApi service constructor.
	 * @property {module:api/BlockchainRoutesApi}
	 */
		BlockchainRoutesApi,

    /**
     * The LockRoutesApi service constructor.
     * @property {module:api/LockRoutesApi}
     */
        LockRoutesApi,

	/**
	 * The MosaicRoutesApi service constructor.
	 * @property {module:api/MosaicRoutesApi}
	 */
		MosaicRoutesApi,

	/**
	 * The NamespaceRoutesApi service constructor.
	 * @property {module:api/NamespaceRoutesApi}
	 */
		NamespaceRoutesApi,

	/**
	 * The TransactionRoutesApi service constructor.
	 * @property {module:api/TransactionRoutesApi}
	 */
		TransactionRoutesApi,

	/**
	 * The NetworkRoutesApi service constructor.
	 * @property {module:api/NetworkRoutesApi}
	 */
		NetworkRoutesApi,

	// ////// Listeners Region

	/**
	 *
	 * @property {module:listeners/BlockListener}
	 */
		BlockListener,

	/**
	 *
	 * @property {module:listeners/ConfirmedTransactionsListener}
	 */
		ConfirmedTransactionsListener,

	/**
	 *
	 * @property {module:listeners/PartialTransactionsListener}
	 */
		PartialTransactionsListener,

	/**
	 *
	 * @property {module:listeners/TransactionStatusListener}
	 */
		TransactionStatusListener,

	/**
	 * @property {module:listeners/UnconfirmedTransactionsListener}
	 */
		UnconfirmedTransactionsListener,

	/**
	 * @property {module:schema/Schema}
	 */
		Schema,

	/**
	 * @property {module:transactions/CosignatureTransaction}
	 */
		CosignatureTransaction,

	/**
	 * @property {module:transactions/AggregateTransaction}
	 */
		AggregateTransaction,

	/**
	 * @property {module:transactions/deadline}
	 */
		deadline,

	/**
	 * @property {module:transactions/HashLockTransaction}
	 */
		HashLockTransaction,

	/**
	 * @property {module:transactions/MosaicCreationTransaction}
	 */
		MosaicCreationTransaction,

	/**
	 * @property {module:transactions/MosaicSupplyChangeTransaction}
	 */
		MosaicSupplyChangeTransaction,

	/**
	 * @property {module:transactions/MultisigModificationTransaction}
	 */
		MultisigModificationTransaction,

	/**
	 * @property {module:transactions/NamespaceCreationTransaction}
	 */
		NamespaceCreationTransaction,

	/**
	 * @property {module:transactions/SecretLockTransaction}
	 */
		SecretLockTransaction,

	/**
	 * @property {module:transactions/SecretProofTransaction}
	 */
		SecretProofTransaction,

	/**
	 * @property {module:transactions/TransferTransaction}
	 */
		TransferTransaction,

	/**
	 * @property {module:transactions/VerifiableTransaction}
	 */
		VerifiableTransaction,

	/**
	 * @property {module:transactions/VerifiableTransactionBuilder}
	 */
		VerifiableTransactionBuilder,

	/**
	 * @property {module:crypto/keyPair}
	 */
		KeyPair,

	/**
	 * @property {module:crypto/crypto}
	 */
		crypto,

	/**
	 * @property {module:crypto/nacl_catapult}
	 */
		nacl_catapult,

	/**
	 * @property {module:coders/convert}
	 */
		convert,

	/**
	 *
	 */
		sha3Hasher,

	/**
	 * @property {module:coders/idGenerator}
	 */
		IdGenerator,

	/**
	 * @property {module:coders/uint64}
	 */
		uint64,

	/**
	 * @property {module:coders/address}
	 */
		address,

	/**
	 * @property {module:transactions/mosaicId}
	 */
		mosaicId,

	/**
	 * @property {module:transactions/namespaceId}
	 */
		namespaceId,

	/**
	 * @property {module:transactions/subnamespaceParentId}
	 */
		subnamespaceParentId,

	/**
	 * @property {module:transactions/subnamespaceNamespaceId}
	 */
		subnamespaceNamespaceId
};