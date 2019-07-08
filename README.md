# my_album 音乐，电影社交电商平台
> Design concept comes from music.163.com


---------------------------------------------------------------------------

# 项目运行相关内容

---------------------------------------------------------------------------

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

-----------------------------------------------------------------------------------------------

# 开发相关内容

-----------------------------------------------------------------------------------------------
## 项目初始化 
```
vue init webpack my_album

```

## scss 依赖包
```
npm install --save-dev sass-loader

npm install --save-dev node-sass

```

## static 目录
```
目前使用了根目录的 static 目录
以后也会使用 src/static 目录，因为scss缘故
```

## funny ~_~, vuex的部分代码来源于redux

```
https://github.com/vuejs/vuex/blob/dev/src/plugins/logger.js
<quote>
// Credits: borrowed code from fcomb/redux-logger
import { deepCopy } from '../util' ... ...
</quote>
```




