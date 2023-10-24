
# Success

## Structure

`Success`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `error` | `string \| undefined` | Optional | - |
| `tx` | [`Tx \| undefined`](../../doc/models/tx.md) | Optional | - |
| `willFail` | `boolean \| undefined` | Optional | - |
| `amountOut` | `string \| undefined` | Optional | - |
| `protocol` | `string \| undefined` | Optional | - |
| `isAggregator` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "error": "Insufficient balance",
  "tx": {
    "from": "from2",
    "to": "to4",
    "data": "data0",
    "value": "value2"
  },
  "will_fail": false,
  "amountOut": "amountOut0",
  "protocol": "protocol8"
}
```

