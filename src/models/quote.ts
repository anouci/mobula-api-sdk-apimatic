/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema } from '../schema';

export interface Quote {
  /** The price of the asset. */
  price?: number;
  /** The volume of the asset. */
  volume?: number;
  /** The market cap of the asset. */
  marketCap?: number;
}

export const quoteSchema: Schema<Quote> = object({
  price: ['price', optional(number())],
  volume: ['volume', optional(number())],
  marketCap: ['market_cap', optional(number())],
});
