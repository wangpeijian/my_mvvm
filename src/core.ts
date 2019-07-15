import {queryDom, throwError} from "./lib/tools";

interface JoeConfig {
    // 模板id
    root: string,
    // 手动指定模板
    template?: string,
    //渲染数据
    data?: object
}

/**
 * Joe 实例
 * @param config
 * @constructor
 */
function Joe(config: JoeConfig) {
    const {root, template, data} = config;

    // 获取实例根节点
    const rootDom = queryDom(root);

    if (!rootDom) throwError("没有找到根节点:{}", root);

}

// 暴露实例对象
(<any>window).Joe = Joe;