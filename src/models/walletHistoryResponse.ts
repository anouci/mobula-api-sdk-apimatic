/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { Data, dataSchema } from './data';

export interface WalletHistoryResponse {
  data?: Data;
}

export const walletHistoryResponseSchema: Schema<WalletHistoryResponse> = object(
  { data: ['data', optional(lazy(() => dataSchema))] }
);
