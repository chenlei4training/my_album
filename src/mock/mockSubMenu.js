// 两篇文章基础上进行修改源代码，为每个主菜单对应的多个子菜单的具体条目内容经常模拟
// 每次请求返回其中一个子菜单数组，这一条的数据由传入的 main_menu_id 进行挑选的

// source 文章1 : https://www.jianshu.com/p/aea89b5e6d33
// source 文章2 :https://blog.csdn.net/dadiyang/article/details/82825163  mockjs 请求带参数


import Mock from 'mockjs' // 获取mock对象
import queryString from 'querystring'


const domain = 'http://mockjs.com/api' // 定义默认域名，可以自己定义自己的域名 比如 localhost,192.188.xxx.xxx
const code = 200 // 返回的状态码


let mainMenu = {} // 用于存放全部的子菜单


// 子菜单数据
const subMenuItems = req => {

  console.log('req', req) // 请求体，用于获取参数

  //发现音乐
  let faxian_subMenuItems = []
  mainMenu.faxian = faxian_subMenuItems

  faxian_subMenuItems.push({ title: '推荐' })
  faxian_subMenuItems.push({ title: '排行榜' })
  faxian_subMenuItems.push({ title: '歌单' })
  faxian_subMenuItems.push({ title: '主播电台' })
  faxian_subMenuItems.push({ title: '歌手' })
  faxian_subMenuItems.push({ title: '新碟上架' })

  //我的音乐
  let wode_subMenuItems = []
  mainMenu.wode = wode_subMenuItems


  //朋友
  let pengyou_subMenuItems = []
  mainMenu.pengyou = pengyou_subMenuItems

  //商城
  let shangcheng_subMenuItems = []
  mainMenu.shangcheng = shangcheng_subMenuItems

  //音乐人
  let yinyueren_subMenuItems = []
  mainMenu.yinyueren = yinyueren_subMenuItems


  //下载客户端
  let xiazai_subMenuItems = []
  mainMenu.xiazai = xiazai_subMenuItems


  // 为返回一条数据做准备，这一条的数据由传入的 id 进行挑选
  let indexOf_question_mark = req.url.indexOf('?')
  let keyValueString = req.url.substr(indexOf_question_mark + 1)

  let qsObj = queryString.parse(keyValueString); //keyValueString比如'id=100&name=lei',这里id  fanxian, wodeyinyue,pengyou等
  console.log('qsObj', qsObj)
  //alert('qsObj:' + JSON.stringify(qsObj))

  return {
    code,
    subMenuItems: mainMenu[qsObj.id]
  }
}

// 定义请求链接，http请求类型，还有返回数据
// 注意：es6模板`${var_name}` 和 正则表达式 RegExp  '.*' 表示任何长度的字符 
Mock.mock(RegExp(`${domain}/subMenu` + '.*'), 'get', subMenuItems);