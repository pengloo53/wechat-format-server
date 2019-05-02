你好，我来自**地球**。我是一个[智人](https://zh.wikipedia.org/wiki/智人 "学名：Homo sapiens，意为“有智慧的人”")，我喜欢买新衣服，并且都是*黑色*的。



## 前世今生

我是为了解决 [Markdown](https://sspai.com/post/25137 "认识与入门 Markdown") 写微信公众号的排版问题，而诞生的。我的生父是 [lyricat](https://github.com/lyricat/wechat-format)，诞生时，他写了[这篇文章](https://mp.weixin.qq.com/s/pn0LzyfgUj6rGUfVHUksjg)。

### 二级标题

h3 为二级标题
### 引用
> Software is like sex: it's better when it's free.  —— Linus Torvalds

我的父亲将我开源，为开源做出了一封贡献。

### 注音符号

[注音符号 W3C 定义](http://www.w3.org/TR/ruby/)。支持日语注音假名，小夜時雨【さ・よ・しぐれ】 和 汉语拼音 上海{Shàng・hǎi}

用法有 2 种形式：

```
小夜時雨【さ・よ・しぐれ】
小夜時雨{さ・よ・しぐれ}
上海【Shàng・hǎi】
上海{Shàng・hǎi}
```

### 列表
无序列表项：

- 一个列表项
- 另一个列表项
- 第三个列表项

托 [Neko](https://github.com/nekocode) 的福，有序的列表项支持了。

1. 一个列表项
2. 另一个列表项
3. 第三个列表项

### 图片

接下来是一张图片。你可以用自己图床，也可以上传到微信媒体库再把图片 URL 粘贴回来，或者编辑好以后，在公众号里插入图片。

![](https://res.wx.qq.com/mpres/zh_CN/htmledition/pages/login/loginpage/images/bg_banner4273fb.png)

### 代码块

代码块，使用微信官方的高亮配色，在代码块标示语言即可。粘贴到公众号后，需要用鼠标点一下代码块，完成高亮。

```cpp
// 你的代码
```

```javascript
const http = require('http');
http.createServer(function(req, res){
  res.setHeader('Content-Type', 'text/html');
  res.end('hello, Node');
});
```

然后是一个内联代码： `npm run start`

### 表格

接下来是表格示例：

| Header 1 | Header 2 | Header 3 | Header 4 |
| --- | --- | --- | --- |
| Key 1 | Value 1 | | yes |
| Key 2 | Value 2 |
| Key 3 | Value 3 | | no |

