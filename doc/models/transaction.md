
# Transaction

## Structure

`Transaction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `timestamp` | `number \| undefined` | Optional | The timestamp of the transaction. |
| `asset` | [`Asset1 \| undefined`](../../doc/models/asset-1.md) | Optional | - |
| `amount` | `number \| undefined` | Optional | The amount of asset in the transaction. |
| `from` | `string \| undefined` | Optional | The sender's address. |
| `to` | `string \| undefined` | Optional | The receiver's address. |

## Example (as JSON)

```json
{
  "timestamp": 28,
  "asset": {
    "name": "name0",
    "symbol": "symbol2",
    "id": 240
  },
  "amount": 20.56,
  "from": "from8",
  "to": "to2"
}
```

