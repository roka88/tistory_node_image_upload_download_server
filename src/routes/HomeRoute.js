const Router = require('koa-router');
const router = new Router();

const fs = require('fs');
const Path = require('path');


module.exports = router;


router.get('/', async (ctx, next) => {

    const html = fs.readFileSync(Path.join(__dirname, "../../src/html/UploadPage.html"));
    ctx.set("Content-Type", "text/html");
    ctx.body = html;


});
