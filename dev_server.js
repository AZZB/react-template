import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import * as config from './webpack.config.dev';
import express from 'express';



const app = express(),
      PORT = process.env.PORT || 3000,
      compiler = webpack(config.default);


app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));

app.use(webpackHotMiddleware(compiler));

app.use(express.static('/'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

app.listen(PORT, (err) => {
  if(err) return console.log(`failed to start server on port ${PORT}`);
  console.log(`server starting on port ${PORT}`);

});
