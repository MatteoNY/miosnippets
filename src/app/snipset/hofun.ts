export class Hofun {

    public title = 'Higher-order function';
   
    constructor() { }

    public add = (a, b) => a + b;

    public callAndReturn = (func: Function) => {
        return func + ` function call completed`;
    };




}


