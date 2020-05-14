# mt-tilda-term



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type                     | Default     |
| -------- | --------- | ----------- | ------------------------ | ----------- |
| `header` | `header`  |             | `string`                 | `undefined` |
| `intro`  | `intro`   |             | `string`                 | `undefined` |
| `items`  | --        |             | `MtTildaAccordeonItem[]` | `[]`        |


## Methods

### `addItem(item: MtTildaAccordeonItem) => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [mt-blog](../../mt-blog)
- [mt-block-title](../../mt-block-title)
- [mt-blog-block](../../mt-blog/mt-blog-block)
- [mt-tilda-rec](../mt-tilda-rec)
- [mt-tilda-accordeon](../tilda-accordeon)
- [mt-tilda-accordeon-item](../tilda-accordeon/tilda-accordeon-item)
- [mt-tilda-accordeon-header](../tilda-accordeon/tilda-accordeon-header)
- [mt-tilda-accordeon-content](../tilda-accordeon/tilda-accordeon-content)

### Graph
```mermaid
graph TD;
  mt-tilda-term --> mt-blog
  mt-tilda-term --> mt-block-title
  mt-tilda-term --> mt-blog-block
  mt-tilda-term --> mt-tilda-rec
  mt-tilda-term --> mt-tilda-accordeon
  mt-tilda-term --> mt-tilda-accordeon-item
  mt-tilda-term --> mt-tilda-accordeon-header
  mt-tilda-term --> mt-tilda-accordeon-content
  mt-tilda-accordeon-item --> mt-tilda-accordeon-header
  mt-tilda-accordeon-item --> mt-tilda-accordeon-content
  style mt-tilda-term fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*