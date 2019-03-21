# vue_study
自己的学习vue的笔记

## vue对xss
Vue.js 在使用 {{}} 语法输出文本的时候 html 相关的标签中的 <、>、'、"、& 会被对应转化为 &lt;、&gt;、&#39;、&quot;、&amp; 来防止渲染内容时被 JavaScript 注入攻击。
