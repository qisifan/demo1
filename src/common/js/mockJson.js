//mock 数据
//导入
let homeJson = require('../Json/home.json');
let columnzbJson = require('../Json/columnZb.json');
let columnfxJson = require('../Json/columnFx.json');
let columnyyjJson = require('../Json/columnYyj.json');
let columnkndJson = require('../Json/columnKnd.json');
let columnSjgJson = require('../Json/columnSjg.json');

let Mock = require('mockjs');

// 转换
let home = Mock.mock(homeJson);
let columnZb = Mock.mock(columnzbJson);
let columnFx = Mock.mock(columnfxJson);
let columnYyj = Mock.mock(columnyyjJson);
let columnKnd = Mock.mock(columnkndJson);
let columnSjg = Mock.mock(columnSjgJson);

//配置path
Mock.mock('http://xiubei.com/common/home','get',home);
Mock.mock('http://xiubei.com/common/columnZb','get',columnZb);
Mock.mock('http://xiubei.com/common/columnFx','get',columnFx);
Mock.mock('http://xiubei.com/common/columnYyj','get',columnYyj);
Mock.mock('http://xiubei.com/common/columnKnd','get',columnKnd);
Mock.mock('http://xiubei.com/common/columnSjg','get',columnSjg);