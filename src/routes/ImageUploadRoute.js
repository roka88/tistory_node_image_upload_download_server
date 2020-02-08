const Router = require('koa-router');
const router = new Router();

const fs = require('fs');
const Path = require('path');


module.exports = router;




router.post('/image', async (ctx, next) => {


    try {
        const file = ctx.request.files.file;

        const fileName = file.name;
        /*
            binary를 통한 Mime-Type으로 확인하는 것이 맞으나 생략
        */
        const fileType = fileName.split(".")[1];
        let ts = Date.now();
        const newFileName = ts+"."+fileType;

        const syncFile = fs.readFileSync(file.path);

        fs.writeFileSync(Path.join(__dirname, "../../public/images/"+newFileName), syncFile);

        ctx.set("Content-Type", "application/json");
        ctx.body = JSON.stringify({isSuccess:true, message:newFileName});

    } catch (err) {
        console.log(err);
        ctx.status = 500;
        ctx.set("Content-Type", "application/json");
        ctx.body = JSON.stringify({isSuccess:false, message:"이미지 업로드에 실패했습니다."});
    }
});

module.exports = router;
