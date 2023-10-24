
# Data 4

## Structure

`Data4`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `wallet` | `string \| undefined` | Optional | The wallet address. |
| `balanceUsd` | `number \| undefined` | Optional | The balance in USD. |
| `detailedBalance` | [`Record<string, DetailedBalance> \| undefined`](../../doc/models/detailed-balance.md) | Optional | - |

## Example (as JSON)

```json
{
  "wallet": "wallet6",
  "balance_usd": 95.22,
  "detailed_balance": {
    "key0": {
      "balance": 71.06,
      "balance_usd": 41.34
    },
    "key1": {
      "balance": 71.06,
      "balance_usd": 41.34
    }
  }
}
```

