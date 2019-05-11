## 笔记

## 制作首页app组件
1. 完成Header区域, 使用的是 Mint-UI中的 Header组件
2. 制作底部的Tabber区域, 使用的是MUI的 Tabber.html
    + 在制作购物车的小图标的时候操作会多一些
    + 先把把扩展图表的css样式 拷贝到项目中
    + 拷贝扩展字体库 tff 文件到项目中
    + 为购物车 小图标 ,添加如下样式 mui-icon mui-icon-extra mui-icon-extra-cart
3. 在中间区域 设置一个 router-view 来展示路由匹配到的组件

## 改造 tabber为router-link 
直接把a标签改为 router-link 把href改为to  这里使用快捷键 ctrl+d 选择 href后再按下d就会选择下一个href！！！可以同时操作进行修改
## 设置路由高亮
这里在 router.js里 routers下再加一个 linkActiveClass 然后指定router-link 选择样式为 muui的选择样式

## 制作首页轮播图布局


## 加载首页轮播图数据

1. 获取数据, 如何获取, 使用 vue-resource
2. 使用 vue-resource 的 this.$http.get 获取数据
3. 获取到的数据要保存到 this.data身上
4. 使用 v-for 循环渲染每个 item项

## 改造九宫格区域的样式
1. mui 复制样式代码
2. 在页面中找到对应的样式然后 下面进行样式修改
3. 一般给的图片是展示的2倍大小.这里图片引入直接src引入的
4. 调整字体大小


## 改造新闻资讯路由连接
修改连接为 router-link 并添加模板 指定路由

## 新闻资讯 页面 制作
1. 绘制界面 使用 MUI中的 media-list
2. 使用 vue-resource 获取数据
3. 渲染真实数据 

## 实现新闻资讯列表点击跳转到新闻详情
1. 把列表中的每一项改为 router-link 同时在跳转的时候应该提供唯一标识符
2. 创建新闻详情组件页面 newsInfo.vue
3. 在路由模块中 将新闻详情的路由地址和组件对应起来


## 实现新闻详情 的 页面布局和数据渲染

## 单独封装一个 Comment评论子组件
1. 先创建一个单独的 comment.vue组件模板
2. 再需要使用comment组件的中先手动导入 comment组件
+ `import Comment from './Comment.vue'`
3. 在父组件中使用 `components` 属性 将刚才导入的 comment组件 注册为自己的子组件
4. 将注册子组件时候的注册名称, 以标签形式在页面中引入即可

## 获取所有的评论数据 显示到页面中


## 实现点击加载更多评论的功能
1. 为加载更多按钮 绑定点击事件 
2. 点击加载更多  让 pageIndex++ 重新调用下getComments方法获取数据
3. 防止数据覆盖 让老数据每次 concat 也就是拼接上新数组


## 发表评论
1. 把文本框做双向数据绑定
2. 为发表按钮绑定个事件
3. 校验评论内容是否为空 如果为空则提示用户 评论内容不能为空
4. 通过vue-resource发起请求 提交评论
5. 发表评论ok后 重新刷新列表  以查看新的评论

+ 这里发表后手动写一个数据插入到列表中 这里插入到开头

## 改造图片分析 按钮为 路由的链接并显示对于的组件页面

## 绘制图片列表 组件页面结构并美化样式
1. 制作 顶部的滑动条 MUI中 
2. 制作底部的图片列表

### 制作顶部滑动条的坑
1. 借助于 MUI 中的 tab-top-webview-main.html
2. 需要把 slider 区域的 mui-fullscreen 类去掉
3. 滑动条无法正常触发滑动 通过检查官方文档 发现是一个js组件, 需要被初始化一下:
   + 导入 mui.js
   + 调用官方提供的方式去初始化
```
   mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
```
4. 我们在初始化滑动条的时候 导入的mui 但是控制台报错
是因为 mui里面没有使用严格模式的写法 但是 webpack打包是使用严格模式的

+ 解决方案: 1. 把mui.js中的非严格模式的代码改掉
           2. 把 webpack的严格模式禁用掉

### webpack移除严格模式
```
npm install babel-plugin-transform-remove-strict-mode

.babelrc 文件添加配置

{
    "plugins": ["transform-remove-strict-mode"]
}
```
5. 刚进入 图片分享页面的时候 滑动条无法正常工作 
必须等 DOM元素加载完 所以我们把初始化滑动条 放到 mouted里面来初始化
这个时候元素已经加载完毕了

7. 获取图片所有分类

### 制作图片列表区域

1. 使用懒加载

```
import { Lazyload } from 'mint-ui';

Vue.use(Lazyload);

```
2. 加载成功渲染数据

## 这里详情将 li改为 router-link的时候 tag指定为 li 这样可以恢复样式

## 缩略图用的插件 vue-preview
获取数据后得自己再改造下数据 有 w h属性
新版的需要 item.msrc = item.src 这样才可以显示成功

## 商品列表功能
一堆css3的东西样式

## 尝试在手机上 去进行项目的预览和测试
手机和开发项目的电脑处于同一个wifi中
package.json --host 0.0.0.0
