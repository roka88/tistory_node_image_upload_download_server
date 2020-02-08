const Koa = require('koa');
const koaBody = require('koa-body');

require("./utils/Prototype");

const app = new Koa();
const ImageUploadRoute = require('./routes/ImageUploadRoute');
const ImageDownloadRoute = require('./routes/ImageDownloadRoute');
const HomeRoute = require('./routes/HomeRoute');



app.use(koaBody({ multipart: true }));
app.use(ImageUploadRoute.routes()).use(ImageUploadRoute.allowedMethods());
app.use(ImageDownloadRoute.routes()).use(ImageUploadRoute.allowedMethods());
app.use(HomeRoute.routes()).use(ImageUploadRoute.allowedMethods());


app.listen(3000, ()=> {
  console.log("Listening to port 3000...");
});

