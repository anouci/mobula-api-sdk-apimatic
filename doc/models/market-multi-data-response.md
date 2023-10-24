
# Market Multi Data Response

## Structure

`MarketMultiDataResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Record<string, MarketMetrics> \| undefined`](../../doc/models/market-metrics.md) | Optional | - |

## Example (as JSON)

```json
{
  "data": {
    "key0": {
      "market_cap": 184.2,
      "liquidity": 211.18,
      "price": 148.58,
      "volume": 151.96,
      "volume_7d": 24.0
    },
    "key1": {
      "market_cap": 184.2,
      "liquidity": 211.18,
      "price": 148.58,
      "volume": 151.96,
      "volume_7d": 24.0
    },
    "key2": {
      "market_cap": 184.2,
      "liquidity": 211.18,
      "price": 148.58,
      "volume": 151.96,
      "volume_7d": 24.0
    }
  }
}
```

