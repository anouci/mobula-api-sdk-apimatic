
# Search Crypto Data

## Structure

`SearchCryptoData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | The unique identifier of the cryptocurrency |
| `name` | `string \| undefined` | Optional | The name of the cryptocurrency |
| `symbol` | `string \| undefined` | Optional | The symbol of the cryptocurrency |
| `contracts` | `string[] \| undefined` | Optional | The contracts associated with the cryptocurrency |
| `blockchains` | `string[] \| undefined` | Optional | The blockchains on which the cryptocurrency exists |
| `twitter` | `string \| undefined` | Optional | The Twitter link of the cryptocurrency |
| `website` | `string \| undefined` | Optional | The website of the cryptocurrency |
| `logo` | `string \| undefined` | Optional | The logo of the cryptocurrency |
| `price` | `number \| undefined` | Optional | The price of the cryptocurrency |
| `marketCap` | `bigint \| undefined` | Optional | The market cap of the cryptocurrency |
| `liquidity` | `bigint \| undefined` | Optional | The liquidity of the cryptocurrency |
| `volume` | `bigint \| undefined` | Optional | The volume of the cryptocurrency |

## Example (as JSON)

```json
{
  "id": 100001656,
  "name": "Bitcoin",
  "symbol": "BTC",
  "contracts": [
    "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599"
  ],
  "blockchains": [
    "Ethereum"
  ],
  "twitter": "https://twitter.com/bitcoin",
  "website": "http://www.bitcoin.org",
  "logo": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
  "price": 26470.3509662373,
  "market_cap": 513425544929,
  "liquidity": 626115369,
  "volume": 42592947
}
```

