---
layout: default
title: Configuring the Tiny Drive UI
title_nav: UI options
description: List of Tiny Drive user interface configuration options.
keywords: tinydrive configuration
---

{% assign pluginname = "Tiny Drive" %}
{% assign plugincode = "tinydrive" %}

{% include configuration/tinydrive_skin.md %}

## Configuring the Insert File toolbar button

{{site.cloudfilemanager}} will automatically integrate into the Image, Link, and Media dialogs as a file picker. It can also be configured to insert files directly into any content using the `insertfile` button. To enable this button, add it to the toolbar editor setting.

The Insert File toolbar button will insert images as `img` elements or other files as links to that file.

### Example: Adding the `insertfile` toolbar button

This is an example of configuring the 'insertfile' toolbar button.

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'tinydrive',
  toolbar: 'insertfile'
});
```

{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% include misc/plugin-menu-item-id-boilerplate.md %}