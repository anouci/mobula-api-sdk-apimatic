
# Crypto Data

## Structure

`CryptoData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | The unique identifier of the cryptocurrency |
| `name` | `string \| undefined` | Optional | The name of the cryptocurrency |
| `symbol` | `string \| undefined` | Optional | The symbol of the cryptocurrency |
| `blockchains` | `string[] \| undefined` | Optional | The blockchains on which the cryptocurrency exists |

## Example (as JSON)

```json
{
  "id": 100000871,
  "name": "Arc",
  "symbol": "ARC",
  "blockchains": [
    "Ethereum"
  ]
}
```

