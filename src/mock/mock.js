// 两篇文章基础上进行修改源代码，为了简单的测试了mockjs的功能
// 模拟了10条数据，每次请求返回其中一条，这一条的数据由传入的 id 进行挑选的

// source 文章1 : https://www.jianshu.com/p/aea89b5e6d33
// source 文章2 :https://blog.csdn.net/dadiyang/article/details/82825163  mockjs 请求带参数


import Mock  from 'mockjs' // 获取mock对象
import queryString from 'querystring'

const Random = Mock.Random // 获取random对象，随机生成各种数据，具体请翻阅文档
const domain = 'http://mockjs.com/api' // 定义默认域名，可以自己定义自己的域名 比如 localhost,192.188.xxx.xxx
const code = 200 // 返回的状态码


let posts = [] // 用于存放文章数据的数组 文章的英文也叫post


// 随机生成文章数据
const postData = req => {

  console.log('req',req) // 请求体，用于获取参数

  if (posts.length == 0) {

    for (let i = 0; i < 10; i++) { //生成10条数据
      let post = {
        title: Random.csentence(10, 25), // 随机生成长度为10-25的标题
        icon: Random.dataImage('250x250', '文章icon'), // 随机生成大小为250x250的图片链接
        author: Random.cname(), // 随机生成名字
        date: Random.date() + ' ' + Random.time() // 随机生成年月日 + 时间
      }
      posts.push(post)
    }
  }

  // 为返回一条数据做准备，这一条的数据由传入的 id 进行挑选
  let indexOf_question_mark = req.url.indexOf('?')
  let keyValueString = req.url.substr(indexOf_question_mark + 1)

  let qsObj = queryString.parse(keyValueString); //keyValueString比如'id=100&name=lei',这里id 在0-9之间 比如 ‘id=10‘
  console.log('qsObj',qsObj)
  alert('qsObj:' + JSON.stringify(qsObj))

  return {
    code,
    posts:posts[qsObj.id]
  }
}

// 定义请求链接，类型，还有返回数据
// 注意：es6模板`${var_name}` 和 正则表达式 RegExp  '.*' 表示任何长度的字符 
Mock.mock(RegExp(`${domain}/posts` + '.*'), 'get', postData);