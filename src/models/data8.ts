/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { Asset5, asset5Schema } from './asset5';
import { Quote, quoteSchema } from './quote';

export interface Data8 {
  asset?: Asset5;
  quote?: Quote;
}

export const data8Schema: Schema<Data8> = object({
  asset: ['asset', optional(lazy(() => asset5Schema))],
  quote: ['quote', optional(lazy(() => quoteSchema))],
});
