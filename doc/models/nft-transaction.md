
# NFT Transaction

## Structure

`NFTTransaction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `timestamp` | `number \| undefined` | Optional | The timestamp of the transaction. |
| `collection` | `string \| undefined` | Optional | The NFT collection name. |
| `tokenId` | `string \| undefined` | Optional | The NFT token id. |
| `from` | `string \| undefined` | Optional | The sender's address. |
| `to` | `string \| undefined` | Optional | The receiver's address. |

## Example (as JSON)

```json
{
  "timestamp": 18,
  "collection": "collection4",
  "tokenId": "tokenId2",
  "from": "from4",
  "to": "to2"
}
```

