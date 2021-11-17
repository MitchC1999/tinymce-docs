### `table_default_styles`

This option enables you to specify the default styles for inserted tables.

**Type:** `Object`

**Default Value:** `{ 'border-collapse': 'collapse', 'width': '100%' }`

#### Example: Using `table_default_styles`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'table',
  menubar: 'table',
  toolbar: 'table',
  table_default_styles: {
    width: '50%'
  }
});
```