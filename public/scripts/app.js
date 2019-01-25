"use strict";

/* babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch 
 * 通过JavaScript的transpiler将src文件夹中的app.js源文件加载为app.js并存储到scripts文件夹中, watch选项会
 * 提供监测实时的数据变化 
 */
/* JavaScript XML (JSX) */
/* 创建site object */
var site = {
    title: "React Demo",
    description: "React Documentation for starters"
};

/* 定义获取内容的函数, 如果内容失效则返回默认内容 */
function getContent(content) {
    if (content) {
        /* 将内容包装在<p>tag中, 通过{}获取变量值 - 单方向数据绑定 */
        return React.createElement(
            "p",
            null,
            content
        );
    } else {
        return React.createElement(
            "p",
            null,
            "The website is under built ..."
        );
    }
}

/* 创建由html元素组成的模版块儿 */
var template =
/* 将site的成员通过数据绑定展示在页面上 */
React.createElement(
    "div",
    null,
    React.createElement(
        "h2",
        null,
        site.title
    ),
    React.createElement(
        "p",
        null,
        site.description
    ),
    getContent(site.content)
);

/* 得到应用的根body */
var appRoot = document.getElementById('app');

/* 通过ReactDOM将模版展示到页面的某个区域 */
/* template: UI 元素
 * appRoot: DOM 元素
 */
ReactDOM.render(template, appRoot);
