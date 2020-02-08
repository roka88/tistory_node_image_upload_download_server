const Router = require('koa-router');
const router = new Router();

const fs = require('fs');
const Path = require('path');


module.exports = router;

router.get('/images/:name', async (ctx, next) => {

    const { name } = ctx.params;
    ctx.set("Content-Type", "image/jpg");
    ctx.body = fs.readFileSync(Path.join(__dirname, "../../public/images/"+name));

});
