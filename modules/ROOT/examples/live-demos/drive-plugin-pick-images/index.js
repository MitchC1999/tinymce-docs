tinymce.init({
  tinydrive_demo_files_url: '{{imagesdir}}/tiny-drive-demo/demo_files.json',
  tinydrive_token_provider: (success) => {
    success({ token: 'fake-token' });
  },
  selector: 'textarea#drive-pick-images-example',
  height: 200,
  menubar: false,
  plugins: 'tinydrive link image media',
  toolbar: 'custom | insertfile | link image media',
  setup: (editor) => {
    editor.ui.registry.addButton('custom', {
      text: 'Custom pick image',
      onAction: () => {
        editor.plugins.tinydrive.pick({
          filetypes: ['image']
        }).then((result) => {
          result.files.forEach((file) => {
            const img = editor.dom.createHTML('img', { src: file.url });
            editor.insertContent(img);
          });
        });
      }
    });
  },
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
});
