# baiyou

> A Vue.js project

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


# 技术栈
### CSS预处理器 stylus
```
npm install stylus --save-dev
npm install stylus-loader --save-dev
```
### Mint UI
```
npm install mint-ui -S
//在 main.js 中写入以下内容
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)
```
#### 如果想按需引入
```
npm install babel-plugin-component -D
//然后，将 .babelrc 修改为：
{
  "presets": [
    ["es2015", { "modules": false }]
  ],
  "plugins": [["component", [
    {
      "libraryName": "mint-ui",
      "style": true
    }
  ]]]
}
//在 main.js 中写入以下内容
import { Button, Cell } from 'mint-ui'
Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
/* 或写为
 * Vue.use(Button)
 * Vue.use(Cell)
 */
```