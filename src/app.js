/* babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch 
 * 通过JavaScript的transpiler将src文件夹中的app.js源文件加载为app.js并存储到scripts文件夹中, watch选项会
 * 提供监测实时的数据变化 
 */
/* JavaScript XML (JSX) */
/* 创建site object */
const site = {
    title: "React Demo",
    description: "React Documentation for starters"
};

/* 定义获取内容的函数, 如果内容失效则返回默认内容 */
function getContent(content) {
    if(content) {
        /* 将内容包装在<p>tag中, 通过{}获取变量值 - 单方向数据绑定 */
        return <p>{content}</p>;
    } else {
        return <p>The website is under built ...</p>
    }
}

/* 创建由html元素组成的模版块儿 */
const template = (
    /* 将site的成员通过数据绑定展示在页面上 */
    <div>
        <h2>{site.title}</h2>
        <p>{site.description}</p>
        {getContent(site.content)}
    </div>
);

/* 得到应用的根body */
const appRoot = document.getElementById('app'); 

/* 通过ReactDOM将模版展示到页面的某个区域 */
/* template: UI 元素
 * appRoot: DOM 元素
 */
ReactDOM.render(template, appRoot); 
