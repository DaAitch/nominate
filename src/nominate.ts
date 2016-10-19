
export const nominate = (name: string, fn: Function) => {
    return <Function>new Function('fn', `return function ${name}() {return fn.apply(this, arguments)}`)(fn);
};