/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, lazy, object, optional, Schema, string } from '../schema';
import { Tx, txSchema } from './tx';

export interface Success {
  error?: string;
  tx?: Tx;
  willFail?: boolean;
  amountOut?: string;
  protocol?: string;
  isAggregator?: boolean;
}

export const successSchema: Schema<Success> = object({
  error: ['error', optional(string())],
  tx: ['tx', optional(lazy(() => txSchema))],
  willFail: ['will_fail', optional(boolean())],
  amountOut: ['amountOut', optional(string())],
  protocol: ['protocol', optional(string())],
  isAggregator: ['isAggregator', optional(boolean())],
});
