const { exec } = require('child_process');

module.exports = {
    schedule: {
        interval: '15s', // 1 分钟间隔
        type: 'all', // 指定所有的 worker 都需要执行
    },

    async task(ctx) {
        // let url = 'http://192.168.100.32/cloudPlatformServerTest/poit-cloud-platform/RegularCheck/list/card/check/regular/get?keyWord=&pageNum=1&pageSize=15&appVersion=1.0&operateUserId=500139&eid=ae5920ca31074c78b67af03844cd2ddd&orgId=3010&uid=2b47c7cbe67a44038b3abbc8c5c24e56';
        // const res = await ctx.curl(url, {
        //     token: 'VE9LRU5fUE9JVF8yMDE5XzIwMjAtNTAwMTM5LTE1ODc4OTIyOTgxNjUtWE5HMjNFOHpvZXBjQ2hKNGF2VmVrZ1BJVnA5MmZUUjBpSTBSejhwcVV2QlV3',
        //     'poit_cloud_src_client': 'cloud',
        //     dataType: 'json',
        // });
        // ctx.flag && console.log('flag', ctx.flag);
        // if (res.data.retCode === '0' && !ctx.flag) {
        //     let link = 'http://localhost:8804/equipmentSpotInspection'
        //     exec(`start ${link}`);
        //     ctx.flag = true;
        // }
        // console.log('schedule-cardCheckTask:', res.data);
    },
}