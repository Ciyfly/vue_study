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
