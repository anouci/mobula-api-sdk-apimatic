
# Asset 2

## Structure

`Asset2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `asset` | [`Asset1 \| undefined`](../../doc/models/asset-1.md) | Optional | - |
| `roi` | `number \| undefined` | Optional | The ROI of the asset. |
| `allocation` | `number \| undefined` | Optional | The share of the user’s portfolio dedicated to this asset. |
| `estimatedBalance` | `number \| undefined` | Optional | The USD balance of the asset held by the user. |
| `price` | `number \| undefined` | Optional | The current price of the asset. |
| `priceBought` | `number \| undefined` | Optional | The average bought price of the asset by the user. |
| `balance` | `number \| undefined` | Optional | The balance of the asset. |

## Example (as JSON)

```json
{
  "asset": {
    "name": "name0",
    "symbol": "symbol2",
    "id": 240
  },
  "roi": 77.92,
  "allocation": 143.66,
  "estimated_balance": 111.52,
  "price": 143.64
}
```

