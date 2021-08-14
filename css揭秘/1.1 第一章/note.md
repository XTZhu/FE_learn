# 第一章的笔记

## Web 标准 是敌还是友

## 目录

### 标准的制定过程

略

### CSS3、CSS4 以及其他传说

略

### 冰与火之歌： 浏览器前缀

常见的前缀：

- Firefox 的： **-moz-**
- IE 的：**-ms-**
- Opera 的 **-o-**
- Safari 和 Chrome 的： **-webkit-**

一些预处理器：

- [Stylus](https://stylus-lang.com/)
- [LESS](https://lesscss.org/)
- [Sass](https://sass-lang.com/)

## CSS 编码技巧

### 尽量减少代码重复

- 尽量减少改动时要编辑的地方
- 当某些值相互依赖时，应该把他们的相互关系用代码表达出来
- 某些绝对值很容易掌控，但是当你修改的时候，他们会反咬你一口（很麻烦）
- 尝试用 em 或 rem 或百分比替换 px 来修改字体
- em 的值可以缩放， 而且是依赖字号来进行缩放
- 哪些是应该缩放的，哪些是固定的（比如 border width： 1px）
- 把半透明的白色或者黑色叠加在主色调上，就可以产生主色调的亮色和暗色变体

#### 技巧

1. 代码容易维护 vs 代码量少， 代码容易维护与代码量少不可兼得

```css
border-width: 10px 10px 10px 0;
```

vs

```css
border-width: 10px;
border-left-width: 0;
```

2. currentColor  
   css 中有史以来第一个变量

```css
hr {
  height: 0.5em;
  background: currentColor;
}
```

3. 继承

**inherit** 关键字可以用于任何css属性中， 而且总是绑定到父元素的计算值，(对于伪元素来说， 则会取生成该伪元素的宿主元素)