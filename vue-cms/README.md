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