(() => {
  tinydrive.start({
    demo_files_url: '{{imagesdir}}/tiny-drive-demo/demo_files.json',
    target: 'div#drive-standalone-start',
    token_provider: (success) => success({ token: 'fake-token' }),
  });
})();
