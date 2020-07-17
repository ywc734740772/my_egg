module.exports = options => {
    return async function auth(ctx, next) {
        const host = ctx.request.host;
        // console.log(ctx.request.host);
        await next();

        // if (host === '127.0.0.1:7001') {
        //     ctx.status = 301;
        //     ctx.body = '无权限访问12321';
        // }

    }
}
