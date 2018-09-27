
export default{
  //模块值说明
  model:[
    0,//闪租。钓鱼竿
    1,//野货。八月瓜
    2,//预约。预约剪发
  ],

  //推荐
  tuijian_list:[
    {
      model:0,
      img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1519751787,2797767522&fm=27&gp=0.jpg', //图
      title: '新货3m钓鱼竿',//标题
      price: '18.00',//价格
      explain: '全新3m钓鱼竿,鱼饵。租满三个月免费送',//说明
      originalPrice: '180.00',//原价
      company: '月',//单位(时，天,月，年)，
      label: ['非常新'],//标签
      types: '普通',//类型(0.普通,1.合租)
      source: '商家',//来源(0.官方,1.个人，2.商家，3.企业)
      sourceName: '蕾蕾渔具',//来源名称
      sourceCredit: '2',//来源信用(0.未认证,1.已认证，未实名,2.已认证，已实名)
      address: '湿地公园南明区',//位置
      dateTime: '刚刚',//日期
    },{
      model:1,  //模块
      img:'http://108108byg.com/uploads/180202/3-1P202210TcA.jpg', //图片
      title:"八月炸野果八月瓜野香蕉", //标题
      money:15, //金额
      company:"斤",  //单位
      surplusNum:155,//剩余数量
      sellNum:188,//销售数量
      likeNum:55,//喜欢人数
      source: '商家',//来源(0.官方,1.个人，2.商家，3.企业)
      sourceName: '八月瓜',//来源名称
      sourceLog:'http://108108byg.com/skin/images/logo.png',//来源LOG
      sourceCredit: '2',//来源信用(0.未认证,1.已认证，未实名,2.已认证，已实名)
      dateTime: '刚刚',//日期
    },{
      model: 2,  //模块
      img: 'https://gss0.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/bainuo/crop%3D0%2C253%2C802%2C485%3Bw%3D720%3Bq%3D99/sign=98f69c2091504fc2b610ea45d8edcb23/e7cd7b899e510fb3b8fc67bfd333c895d1430c34.jpg', //图片
      title: "雾都美容美发店烫染368", //标题
      source: '商家',//来源(0.官方,1.个人，2.商家，3.企业)
      sourceName: '雾都美容美发',//来源名称
      sourceLog: 'https://gss0.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/bainuo/crop%3D0%2C253%2C802%2C485%3Bw%3D720%3Bq%3D99/sign=98f69c2091504fc2b610ea45d8edcb23/e7cd7b899e510fb3b8fc67bfd333c895d1430c34.jpg',//来源LOG
      sourceCredit: '2',//来源信用(0.未认证,1.已认证，未实名,2.已认证，已实名)
      address:'贵阳市花溪区贵筑路19号林都国际项1栋1单元4楼',//地址
      phone: "085183625295|",//联系电话
      businessTime:"09:00-19:00",//营业时间
      headUses:"65",//人均消费￥
      dateTime: '刚刚',//日期
      remark:"仅售368元，价值1888元美发设计师亲自染烫2选1！免费WiFi，需预约！",
    }
  ],

  throwInTheCityData: [{        //投放城市数据   
    name: "华东地区",
    index: 0,
    content: [{
      name: "山东",
      checked: false,
    }, {
      name: "江苏",
      checked: false,
    }, {
      name: "安徽",
      checked: false,
    }, {
      name: "浙江",
      checked: false,
    }, {
      name: "福建",
      checked: false,
    }, {
      name: "上海",
      checked: false,
    }]

  }, {
    name: '华南地区',
    index: 1,
    content: [{
      name: "广东",
      checked: false,
    }, {
      name: "广西",
      checked: false,
    }, {
      name: '海南',
      checked: false,
    }]
  }, {
    name: "华中地区",
    index: 2,
    content: [{
      name: "湖北",
      checked: false,
    }, {
      name: "湖南",
      checked: false
    }, {
      name: "河南",
      checked: false
    }, {
      name: "江西",
      checked: false
    }]
  }, {
    name: '华北地区',
    index: 3,
    content: [{
      name: "北京",
      checked: false,
    }, {
      name: "天津",
      checked: false
    }, {
      name: "河北",
      checked: false
    }, {
      name: "山西",
      checked: false
    }, {
      name: "内蒙古",
      checked: false
    }]
  }, {
    name: "西北地区",
    index: 4,
    content: [{
      name: "宁夏",
      checked: false
    }, {
      name: "新疆",
      checked: false
    }, {
      name: "青海",
      checked: false
    }, {
      name: "陕西",
      checked: false
    }, {
      name: "甘肃",
      checked: false
    }]
  }, {
    name: "西南地区",
    index: 5,
    content: [{
      name: "四川",
      checked: false
    }, {
      name: "云南",
      checked: false
    }, {
      name: "贵州",
      checked: false
    }, {
      name: "西藏",
      checked: false
    }, {
      name: "重庆",
      checked: false
    }]
  }, {
    name: "东北地区",
    index: 6,
    content: [{
      name: "辽宁",
      checked: false
    }, {
      name: "吉林",
      checked: false
    }, {
      name: "黑龙江",
      checked: false,
    }]
  }, {
    name: "台港澳地区",
    index: 7,
    content: [{
      name: "台湾",
      checked: false,
    }, {
      name: "香港",
      checked: false
    }, {
      name: "澳门",
      checked: false
    }]
  }],
  sxData: [{          //筛选数据
    name: "金额",
    content: [{
      minThreshold: '全部',
      maxThreshold: null,
      value: '0',
      checked: true,
    }, {
      minThreshold: 0,
      maxThreshold: 1,
      value: '1',
      checked: false,
    }, {
      minThreshold: 1,
      maxThreshold: 5,
      value: '2',
      checked: false,
    }, {
      minThreshold: 5,
      maxThreshold: 50,
      value: '3',
      checked: false,
    }, {
      minThreshold: 50,
      maxThreshold: null,
      value: '4',
      checked: false,
    }],
  },
  {
    name: "类型",
    content: [{
      name: '全部',
      value: '0',
      checked: false,
    }, {
      name: '合伙创业',
      value: '1001',
      checked: false,
    }, {
      name: '干股纳才 ',
      value: '1002',
      checked: false,
    }, {
      name: '加盟代理',
      value: '1003',
      checked: false,
    }, {
      name: '股权交易',
      value: '1004',
      checked: false,
    }, {
      name: '生意转让',
      value: '1005',
      checked: false,
      notype: '非搭伙类型',
    }, {
      name: '金融理财',
      value: '1006',
      checked: false,
      notype: '非搭伙类型',
    }, {
      name: '房产投资',
      value: '1007',
      checked: false,
      notype: '非搭伙类型',
    }, {
      name: '其他',
      value: '1008',
      checked: false,
      notype: '非搭伙类型',
    }],
  },
  {
    name: "行业",
    content: [{
      name: '全部',
      value: '0',
      checked: false,
    }, {
      name: '餐饮',
      value: '1',
      checked: false,
    }, {
      name: '休闲娱乐',
      value: '2001',
      checked: false,
    }, {
      name: '互联网',
      value: '2',
      checked: false,
    }, {
      name: '传媒',
      value: '3',
      checked: false,
    }, {
      name: "教育",
      value: '30001',
      checked: false,
    }, {
      name: '装修',
      value: '4',
      checked: false,
    }, {
      name: "生活服务",
      value: '40001',
      checked: false,
    }, {
      name: "婚庆",
      value: '40002',
      checked: false,
    }, {
      name: '百货',
      value: '5',
      checked: false,
    }, {
      name: '医疗保健',
      value: '6',
      checked: false,
    }, {
      name: "美容美发",
      value: '7',
      checked: false
    }, {
      name: '汽车',
      value: '8',
      checked: false
    }, {
      name: '地产',
      value: '9',
      checked: false
    }, {
      name: '金融',
      value: '10',
      checked: false,
    }, {
      name: '其他',
      value: '11',
      checked: false
    }],
  }]
}