/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, number, object, optional, Schema } from '../schema';

export interface Data2 {
  priceHistory?: number[];
}

export const data2Schema: Schema<Data2> = object({
  priceHistory: ['price_history', optional(array(number()))],
});
