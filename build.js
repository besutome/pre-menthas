var packager = require('electron-packager');  
var config = require('./package.json');

packager({  
  dir: './',          // 対象
  out: './dist',      // 出力先
  name: 'pre-menthas',  // 名前
  platform: 'darwin', // or win32
  arch: 'x64',        // 64bit
  version: '0.34.2',  // electron のバージョン
  icon: './app.icns', // アイコン

  'app-bundle-id': 'jp.phi.electron-app', // ドメイン
  'app-version': config.version,          // バージョン

  overwrite: true,  // 上書き
  asar: true,       // アーカイブ
  prune: true,
  // 無視ファイル
  ignore: "node_modules/(electron-packager|electron-prebuilt|\.bin)|release\.js",
}, function done (err, appPath) {
  if(err) {
    throw new Error(err);
  }
  console.log('Done!!');
});
