
# Wallet Transactions Response

## Structure

`WalletTransactionsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data5 \| undefined`](../../doc/models/data-5.md) | Optional | - |

## Example (as JSON)

```json
{
  "data": {
    "transactions": [
      {
        "timestamp": 48,
        "asset": {
          "name": "name0",
          "symbol": "symbol2",
          "id": 240
        },
        "amount": 157.0,
        "from": "from4",
        "to": "to2"
      },
      {
        "timestamp": 48,
        "asset": {
          "name": "name0",
          "symbol": "symbol2",
          "id": 240
        },
        "amount": 157.0,
        "from": "from4",
        "to": "to2"
      },
      {
        "timestamp": 48,
        "asset": {
          "name": "name0",
          "symbol": "symbol2",
          "id": 240
        },
        "amount": 157.0,
        "from": "from4",
        "to": "to2"
      }
    ]
  }
}
```

