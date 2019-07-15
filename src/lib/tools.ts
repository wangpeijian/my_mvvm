/**
 * 查询dom节点
 */
export function queryDom(query: string) {

    const firstChar = query.substr(0, 1);
    const param = query.substring(1);

    switch (firstChar) {
        case '#':

            return document.getElementById(param);

        case '.':

            return document.getElementsByClassName(param);

        default:
            break;
    }
}

/**
 * 统一输出错误日志
 * @param error
 * @param arg
 */
export function throwError(error: string, ...arg) {

    let printError = error;

    // 存在参数则将错误信息中的替换符替换掉
    if(arg){
        // 记录已经被替换掉的参数个数
        let argIndex = 0;
        arg.forEach(item => {
            if (printError.indexOf("{}") !== -1) {
                printError = printError.replace("{}", item);
                argIndex++;
            }
        });

        // 检查是否有没被替换掉的参数
        let leftArg = arg.slice(argIndex);

        if(leftArg.length){
            leftArg.unshift("");
            // 将剩余参数拼接到字符串后
            printError += leftArg.join(" ");
        }
    }

    throw Error(printError);
}