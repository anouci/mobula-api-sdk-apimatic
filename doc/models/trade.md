
# Trade

## Structure

`Trade`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `from` | `string \| undefined` | Optional | The from address of the trade. |
| `to` | `string \| undefined` | Optional | The to address of the trade. |
| `blockchain` | `string \| undefined` | Optional | The blockchain used for the trade. |
| `amount` | `number \| undefined` | Optional | The amount of asset in the trade. |
| `amountUsd` | `number \| undefined` | Optional | The amount in USD of the trade. |
| `asset` | [`Asset1 \| undefined`](../../doc/models/asset-1.md) | Optional | - |
| `timestamp` | `number \| undefined` | Optional | The timestamp of the trade. |

## Example (as JSON)

```json
{
  "from": "from8",
  "to": "to2",
  "blockchain": "blockchain6",
  "amount": 236.96,
  "amount_usd": 179.2
}
```

