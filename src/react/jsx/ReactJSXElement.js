import hasOwnProperty from 'shared/hasOwnProperty';
import {REACT_ELEMENT_TYPE} from 'shared/ReactSymbols';
//不会放到props上
const RESERVED_PROPS={
    key:true,
    ref:true,
    __self:true,
    __source:true

}

function hasValidKey(config){
    return config.key !== undefined;
}

function hasValidRef(config){
    return config.ref !== undefined
}

function ReactElement(type,key,ref,props){
    return {//这就是虚拟dom了
        $$typeof:REACT_ELEMENT_TYPE,
        type, //h1 span
        key, //唯一标识符
        ref, //后面再讲，是用来获取真实DOM元素
        props //属性 children，style,id
    }
}

export function jsxDEV(type,config){
    debugger
    let propName; //属性名
    const props = {}; //属性对象
    let key = null; //每个虚拟DOM可以有一个可选的key属性，用来区分一个父节点下的不同子节点
    let ref = null;//引入，后面可以通过这个实现获取真实的DOM的需求
    if(hasValidKey(config)){
        key = config.key;
    }
    if(hasValidRef(config)){
        ref = config.ref;
    }
    //将属性保存到props RESERVED_PROPS是保留属性，不存
    for(propName in config){
        if(hasOwnProperty.call(config,propName)&&!RESERVED_PROPS.hasOwnProperty(propName)){
            props[propName] = config[propName]
        }
    }
    return;

}