/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { TradeHistoryItem, tradeHistoryItemSchema } from './tradeHistoryItem';

export interface TradeHistoryResponse {
  data?: TradeHistoryItem[];
}

export const tradeHistoryResponseSchema: Schema<TradeHistoryResponse> = object({
  data: ['data', optional(array(lazy(() => tradeHistoryItemSchema)))],
});