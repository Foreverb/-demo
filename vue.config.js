module.exports = {
    //禁用eslint
    lintOnSave: false,
    configureWebpack: {
        devServer: {
            port: 8089, //端口号
            open: true, //默认启动
            //mock数据
            before(app) {

                //用户数据池（数据库）
                let userPool = [
                    { username: 'xiaobo', password: '123456' },
                    { username: 'xiaozhazha', password: '123456' }
                ];

                //注册接口
                app.get('/api/register', (req, res) => {
                    const { userName, passWord } = req.query;
                    const userLength = userPool.filter(item => item.username == userName).length;
                    if (userLength > 0) {
                        res.json({
                            message: '用户名已存在',
                            success: false
                        });
                    } else {
                        res.json({
                            message: '注册成功',
                            success: true
                        });
                    }
                });
                //登录接口
                tokenKey = 'zhangliling'
                app.get('/api/login', (req, res) => {
                    const { userName, passWord } = req.query;
                    if ((userName == 'xiaobo' || userName == 'xiaozhazha') && passWord == '123456') {
                        res.json({
                            message: '登录成功',
                            code: 0,
                            token: tokenKey + '-' + userName + '-' + new Date().getTime() + 60 * 60 * 1000
                        });
                    } else {
                        res.json({
                            message: '用户不存在',
                            code: 1
                        });
                    }
                });
                //获取轮播
                app.get('/api/banner', (req, res) => {
                    res.json({
                        code: 0,
                        message: '获取成功',
                        data: [{
                                url: 'https://m.jd.com/',
                                image: '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/31746/32/1528/111163/5c500f8aEe3c6c0e7/0e1519939f544e8d.jpg!cr_1125x445_0_171!q70.jpg.dpg'
                            },
                            {
                                url: 'https://m.jd.com/',
                                image: '//imgcps.jd.com/ling4/58182620423/6ZKI57uH6KGr5LiA5q2l5Yiw5omL/5aW96LSn5pS-5Lu35Zeo5LiN5YGc/p-5c1361ed82acdd181dd72140/5fb8f063/cr_1125x445_0_171/s1125x690/q70.jpg'
                            },
                            {
                                url: 'https://m.jd.com/',
                                image: '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/66410/32/13248/152279/5da6e6bbE0fba9d04/5242871b8fc2a472.jpg!cr_1125x445_0_171!q70.jpg.dpg'
                            }
                        ]
                    })
                });
                //滚动分类数据
                app.get('/api/scrollData',(req,res)=>{
                    res.json({
                        code: 0,
                        message: '获取成功',
                        data: [
                            [
                                {
                                    url: 'https://m.jd.com/',
                                    image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png',
                                    text: '分类一'
                                },{
                                    url: 'https://m.jd.com/',
                                    image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png',
                                    text: '分类一'
                                },{
                                    url: 'https://m.jd.com/',
                                    image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png',
                                    text: '分类一'
                                },{
                                    url: 'https://m.jd.com/',
                                    image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png',
                                    text: '分类一'
                                },{
                                    url: 'https://m.jd.com/',
                                    image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png',
                                    text: '分类一'
                                },{
                                    url: 'https://m.jd.com/',
                                    image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png',
                                    text: '分类一'
                                },{
                                    url: 'https://m.jd.com/',
                                    image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png',
                                    text: '分类一'
                                },{
                                    url: 'https://m.jd.com/',
                                    image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png',
                                    text: '分类一'
                                },{
                                    url: 'https://m.jd.com/',
                                    image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png',
                                    text: '分类一'
                                },{
                                    url: 'https://m.jd.com/',
                                    image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png',
                                    text: '分类一'
                                }
                            ],
                            [
                                {
                                    url: 'https://m.jd.com/',
                                    image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png',
                                    text: '分类二'
                                },{
                                    url: 'https://m.jd.com/',
                                    image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png',
                                    text: '分类二'
                                },{
                                    url: 'https://m.jd.com/',
                                    image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png',
                                    text: '分类二'
                                },{
                                    url: 'https://m.jd.com/',
                                    image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png',
                                    text: '分类二'
                                },{
                                    url: 'https://m.jd.com/',
                                    image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png',
                                    text: '分类二'
                                },{
                                    url: 'https://m.jd.com/',
                                    image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png',
                                    text: '分类二'
                                },{
                                    url: 'https://m.jd.com/',
                                    image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png',
                                    text: '分类二'
                                },{
                                    url: 'https://m.jd.com/',
                                    image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png',
                                    text: '分类二'
                                },{
                                    url: 'https://m.jd.com/',
                                    image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png',
                                    text: '分类二'
                                },{
                                    url: 'https://m.jd.com/',
                                    image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png',
                                    text: '分类二'
                                },
                            ]
                        ]
                    })
                }),
                //获取分类数据
                app.get('/api/pannelData',(req,res)=>{
                    const type = req.query.type
                    let list = [];
                    if( type == 0 ){
                        list = [
                            {
                                image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                txt: '小米'
                            },
                            {
                                image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                txt: '华为'
                            },
                            {
                                image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                txt: '荣耀'
                            },
                            {
                                image: '//img13.360buyimg.com/focus/s140x140_jfs/t13036/273/932026474/2570/a3517c7d/5a169254N4bbbd9fb.png',
                                txt: 'OPPO'
                            },
                            {
                                image: '//img11.360buyimg.com/focus/s140x140_jfs/t11014/359/2341377211/2777/1755c29c/5a169244Nff0179e0.png',
                                txt: 'vivo'
                            },
                            {
                                image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                txt: '小米'
                            },
                            {
                                image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                txt: '华为'
                            },
                            {
                                image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                txt: '荣耀'
                            },
                            {
                                image: '//img13.360buyimg.com/focus/s140x140_jfs/t13036/273/932026474/2570/a3517c7d/5a169254N4bbbd9fb.png',
                                txt: 'OPPO'
                            },
                            {
                                image: '//img11.360buyimg.com/focus/s140x140_jfs/t11014/359/2341377211/2777/1755c29c/5a169244Nff0179e0.png',
                                txt: 'vivo'
                            },
                            {
                                image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                txt: '小米'
                            },
                            {
                                image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                txt: '华为'
                            },
                            {
                                image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                txt: '荣耀'
                            },
                            {
                                image: '//img13.360buyimg.com/focus/s140x140_jfs/t13036/273/932026474/2570/a3517c7d/5a169254N4bbbd9fb.png',
                                txt: 'OPPO'
                            },
                            {
                                image: '//img11.360buyimg.com/focus/s140x140_jfs/t11014/359/2341377211/2777/1755c29c/5a169244Nff0179e0.png',
                                txt: 'vivo'
                            },
                            {
                                image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                txt: '小米'
                            },
                            {
                                image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                txt: '华为'
                            },
                            {
                                image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                txt: '荣耀'
                            },
                            {
                                image: '//img13.360buyimg.com/focus/s140x140_jfs/t13036/273/932026474/2570/a3517c7d/5a169254N4bbbd9fb.png',
                                txt: 'OPPO'
                            },
                            {
                                image: '//img11.360buyimg.com/focus/s140x140_jfs/t11014/359/2341377211/2777/1755c29c/5a169244Nff0179e0.png',
                                txt: 'vivo'
                            }
                        ]
                    }
                    if( type == 1 ){
                        list = [
                            {
                                image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                txt: '小米'
                            },
                            {
                                image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                txt: '华为'
                            },
                            {
                                image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                txt: '荣耀'
                            },
                            {
                                image: '//img13.360buyimg.com/focus/s140x140_jfs/t13036/273/932026474/2570/a3517c7d/5a169254N4bbbd9fb.png',
                                txt: 'OPPO'
                            }
                        ]
                    }
                    if( type == 2 ){
                        list = [
                            {
                                image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                txt: '小米'
                            },
                            {
                                image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                txt: '华为'
                            },
                            {
                                image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                txt: '荣耀'
                            },
                            {
                                image: '//img13.360buyimg.com/focus/s140x140_jfs/t13036/273/932026474/2570/a3517c7d/5a169254N4bbbd9fb.png',
                                txt: 'OPPO'
                            },
                            {
                                image: '//img11.360buyimg.com/focus/s140x140_jfs/t11014/359/2341377211/2777/1755c29c/5a169244Nff0179e0.png',
                                txt: 'vivo'
                            },
                            {
                                image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                txt: '小米'
                            },
                            {
                                image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                txt: '华为'
                            },
                            {
                                image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                txt: '荣耀'
                            },
                            {
                                image: '//img13.360buyimg.com/focus/s140x140_jfs/t13036/273/932026474/2570/a3517c7d/5a169254N4bbbd9fb.png',
                                txt: 'OPPO'
                            },
                            {
                                image: '//img11.360buyimg.com/focus/s140x140_jfs/t11014/359/2341377211/2777/1755c29c/5a169244Nff0179e0.png',
                                txt: 'vivo'
                            },
                            {
                                image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                txt: '小米'
                            },
                            {
                                image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                txt: '华为'
                            }
                        ]
                    }
                    if( type == 3 ){
                        list = [
                            {
                                image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                txt: '小米'
                            },
                            {
                                image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                txt: '华为'
                            },
                            {
                                image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                txt: '荣耀'
                            }
                        ]
                    }
                    if( type == 4 ){
                        list = [
                            {
                                image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                txt: '小米'
                            },
                            {
                                image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                txt: '华为'
                            },
                            {
                                image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                txt: '荣耀'
                            },
                            {
                                image: '//img13.360buyimg.com/focus/s140x140_jfs/t13036/273/932026474/2570/a3517c7d/5a169254N4bbbd9fb.png',
                                txt: 'OPPO'
                            },
                            {
                                image: '//img11.360buyimg.com/focus/s140x140_jfs/t11014/359/2341377211/2777/1755c29c/5a169244Nff0179e0.png',
                                txt: 'vivo'
                            }
                        ]
                    }
                    if( type == 5 ){
                        list = [
                            {
                                image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                txt: '小米'
                            },
                            {
                                image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                txt: '华为'
                            }
                        ]
                    }
                    if( type == 6 ){
                        list = [
                            {
                                image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                txt: '荣耀'
                            },
                            {
                                image: '//img11.360buyimg.com/focus/s140x140_jfs/t11014/359/2341377211/2777/1755c29c/5a169244Nff0179e0.png',
                                txt: 'vivo'
                            },
                            {
                                image: '//img11.360buyimg.com/focus/s140x140_jfs/t11014/359/2341377211/2777/1755c29c/5a169244Nff0179e0.png',
                                txt: 'vivo'
                            },
                            {
                                image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                txt: '小米'
                            },
                            {
                                image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                txt: '华为'
                            },
                            {
                                image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                txt: '荣耀'
                            },
                            {
                                image: '//img13.360buyimg.com/focus/s140x140_jfs/t13036/273/932026474/2570/a3517c7d/5a169254N4bbbd9fb.png',
                                txt: 'OPPO'
                            },
                            {
                                image: '//img11.360buyimg.com/focus/s140x140_jfs/t11014/359/2341377211/2777/1755c29c/5a169244Nff0179e0.png',
                                txt: 'vivo'
                            }
                        ]
                    }
                    if( type == 7 ){
                        list = [
                            {
                                image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                txt: '小米'
                            },
                            {
                                image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                txt: '华为'
                            },
                            {
                                image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                txt: '荣耀'
                            },
                            {
                                image: '//img13.360buyimg.com/focus/s140x140_jfs/t13036/273/932026474/2570/a3517c7d/5a169254N4bbbd9fb.png',
                                txt: 'OPPO'
                            },
                            {
                                image: '//img11.360buyimg.com/focus/s140x140_jfs/t11014/359/2341377211/2777/1755c29c/5a169244Nff0179e0.png',
                                txt: 'vivo'
                            },
                            {
                                image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                txt: '小米'
                            },
                            {
                                image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                txt: '华为'
                            },
                            {
                                image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                txt: '荣耀'
                            },
                            {
                                image: '//img13.360buyimg.com/focus/s140x140_jfs/t13036/273/932026474/2570/a3517c7d/5a169254N4bbbd9fb.png',
                                txt: 'OPPO'
                            },
                            {
                                image: '//img11.360buyimg.com/focus/s140x140_jfs/t11014/359/2341377211/2777/1755c29c/5a169244Nff0179e0.png',
                                txt: 'vivo'
                            },
                            {
                                image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                txt: '小米'
                            },
                            {
                                image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                txt: '华为'
                            },
                            {
                                image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                txt: '荣耀'
                            },
                            {
                                image: '//img13.360buyimg.com/focus/s140x140_jfs/t13036/273/932026474/2570/a3517c7d/5a169254N4bbbd9fb.png',
                                txt: 'OPPO'
                            },
                            {
                                image: '//img11.360buyimg.com/focus/s140x140_jfs/t11014/359/2341377211/2777/1755c29c/5a169244Nff0179e0.png',
                                txt: 'vivo'
                            }
                        ]
                    }
                    if( type == 8 ){
                        list = [
                            {
                                image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                txt: '小米'
                            },
                            {
                                image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                txt: '华为'
                            },
                            {
                                image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                txt: '荣耀'
                            },
                            {
                                image: '//img13.360buyimg.com/focus/s140x140_jfs/t13036/273/932026474/2570/a3517c7d/5a169254N4bbbd9fb.png',
                                txt: 'OPPO'
                            },
                            {
                                image: '//img11.360buyimg.com/focus/s140x140_jfs/t11014/359/2341377211/2777/1755c29c/5a169244Nff0179e0.png',
                                txt: 'vivo'
                            },
                            {
                                image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                txt: '小米'
                            },
                            {
                                image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                txt: '华为'
                            }
                        ]
                    }
                    if( type == 9 ){
                        list = [
                            {
                                image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                txt: '小米'
                            },
                            {
                                image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                txt: '华为'
                            },
                            {
                                image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                txt: '荣耀'
                            },
                            {
                                image: '//img13.360buyimg.com/focus/s140x140_jfs/t13036/273/932026474/2570/a3517c7d/5a169254N4bbbd9fb.png',
                                txt: 'OPPO'
                            },
                            {
                                image: '//img11.360buyimg.com/focus/s140x140_jfs/t11014/359/2341377211/2777/1755c29c/5a169244Nff0179e0.png',
                                txt: 'vivo'
                            },
                            {
                                image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                txt: '小米'
                            },
                            {
                                image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                txt: '华为'
                            }
                        ]
                    }

                    if( type == 10 ){
                        list = [
                            {
                                image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                txt: '小米'
                            },
                            {
                                image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                txt: '华为'
                            },
                            {
                                image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                txt: '荣耀'
                            },
                            {
                                image: '//img13.360buyimg.com/focus/s140x140_jfs/t13036/273/932026474/2570/a3517c7d/5a169254N4bbbd9fb.png',
                                txt: 'OPPO'
                            }
                        ]
                    }
                    if( type == 11 ){
                        list = [
                            {
                                image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                txt: '小米'
                            },
                            {
                                image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                txt: '华为'
                            }
                        ]
                    }
                    if( type == 12 ){
                        list = [
                            {
                                image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                txt: '小米'
                            },
                            {
                                image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                txt: '华为'
                            },
                            {
                                image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                txt: '荣耀'
                            }
                        ]
                    }
                    if( type == 13 ){
                        list = [
                            {
                                image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                txt: '荣耀'
                            },
                            {
                                image: '//img13.360buyimg.com/focus/s140x140_jfs/t13036/273/932026474/2570/a3517c7d/5a169254N4bbbd9fb.png',
                                txt: 'OPPO'
                            },
                            {
                                image: '//img11.360buyimg.com/focus/s140x140_jfs/t11014/359/2341377211/2777/1755c29c/5a169244Nff0179e0.png',
                                txt: 'vivo'
                            },
                            {
                                image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                txt: '小米'
                            },
                            {
                                image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                txt: '华为'
                            }
                        ]
                    }
                    if( type == 14 ){
                        list = [
                            {
                                image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                txt: '小米'
                            },
                            {
                                image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                txt: '华为'
                            }
                        ]
                    }
                    if( type == 15 ){
                        list = [
                            {
                                image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                txt: '华为'
                            },
                            {
                                image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                txt: '荣耀'
                            },
                            {
                                image: '//img13.360buyimg.com/focus/s140x140_jfs/t13036/273/932026474/2570/a3517c7d/5a169254N4bbbd9fb.png',
                                txt: 'OPPO'
                            },
                            {
                                image: '//img11.360buyimg.com/focus/s140x140_jfs/t11014/359/2341377211/2777/1755c29c/5a169244Nff0179e0.png',
                                txt: 'vivo'
                            },
                            {
                                image: '//img11.360buyimg.com/focus/s140x140_jfs/t11014/359/2341377211/2777/1755c29c/5a169244Nff0179e0.png',
                                txt: 'vivo'
                            },
                            {
                                image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                txt: '小米'
                            },
                            {
                                image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                txt: '华为'
                            },
                            {
                                image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                txt: '荣耀'
                            },
                            {
                                image: '//img13.360buyimg.com/focus/s140x140_jfs/t13036/273/932026474/2570/a3517c7d/5a169254N4bbbd9fb.png',
                                txt: 'OPPO'
                            },
                            {
                                image: '//img11.360buyimg.com/focus/s140x140_jfs/t11014/359/2341377211/2777/1755c29c/5a169244Nff0179e0.png',
                                txt: 'vivo'
                            }
                        ]
                    }
                    if( type == 16 ){
                        list = [
                            {
                                image: '//img13.360buyimg.com/focus/s140x140_jfs/t13036/273/932026474/2570/a3517c7d/5a169254N4bbbd9fb.png',
                                txt: 'OPPO'
                            },
                            {
                                image: '//img11.360buyimg.com/focus/s140x140_jfs/t11014/359/2341377211/2777/1755c29c/5a169244Nff0179e0.png',
                                txt: 'vivo'
                            },
                            {
                                image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                txt: '小米'
                            },
                            {
                                image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                txt: '华为'
                            },
                            {
                                image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                txt: '荣耀'
                            },
                            {
                                image: '//img13.360buyimg.com/focus/s140x140_jfs/t13036/273/932026474/2570/a3517c7d/5a169254N4bbbd9fb.png',
                                txt: 'OPPO'
                            },
                            {
                                image: '//img11.360buyimg.com/focus/s140x140_jfs/t11014/359/2341377211/2777/1755c29c/5a169244Nff0179e0.png',
                                txt: 'vivo'
                            }
                        ]
                    }
                    
                    res.json({
                        code: 0,
                        message: '获取数据成功',
                        data: list
                    })
                })
            }
        }
    },

    css: {
        loaderOptions: {
            stylus: {
                'resolve url': true,
                'import': ['./src/theme']
            }
        }
    },

    pluginOptions: {
        'cube-ui': {
            postCompile: true,
            theme: true
        }
    }
};