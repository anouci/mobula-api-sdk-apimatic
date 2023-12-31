/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { Transaction, transactionSchema } from './transaction';

export interface Data5 {
  transactions?: Transaction[];
}

export const data5Schema: Schema<Data5> = object({
  transactions: [
    'transactions',
    optional(array(lazy(() => transactionSchema))),
  ],
});
