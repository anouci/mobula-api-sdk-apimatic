/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { Data9, data9Schema } from './data9';

export interface WalletNftsResponse1 {
  data?: Data9[];
}

export const walletNftsResponse1Schema: Schema<WalletNftsResponse1> = object({
  data: ['data', optional(array(lazy(() => data9Schema)))],
});