/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for OrderEnum
 */
export enum OrderEnum {
  Asc = 'asc',
  Desc = 'desc',
}

/**
 * Schema for OrderEnum
 */
export const orderEnumSchema: Schema<OrderEnum> = stringEnum(OrderEnum);
