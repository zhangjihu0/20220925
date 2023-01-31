//在react17之前，babel 转化是老的写法
const babel = require('@babel/core');
const sourceCode = `<h1>
        hello<span style={{color:'red'}}>world</span>
</h1>`;

const result = babel.transform(sourceCode,{
    plugins:[
        [
            "@babel/plugin-transform-react-jsx",{
                runtime:'classic'
            }
        ]
    ]
})
console.log(result.code)

React.createElement('h1',null,'hello',React.createElement({
    style:{
        color:'red'
    }
},'world'))