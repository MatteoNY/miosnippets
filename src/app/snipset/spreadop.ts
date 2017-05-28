export class SpreadOp {


    public title = 'Examples of Spread operator ES6';

    public middle = [3, 4];


    constructor() { }

    public opFunSw = (action: string = 'middle') => {

        var arr: any[] = [];
        let result: any = undefined;

        switch (action) {
            case 'middle':
                arr = [1, 2, ...this.middle, 5, 6];
                result = arr + ` // [1, 2, ...middle, 5, 6]`;
                break;

            case 'concat':
                arr = ['a', 'b', 'c'];
                const arr2 = ['d', 'e', 'f'];
                result = [...arr, ...arr2] + `  // ['a', 'b', 'c', 'd', 'e', 'f']`;
                break;
           
            case 'mathMax':
                arr = [2, 4, 8, 6, 0];
                const max = Math.max(...arr);
                result = max + `  // 8 from [2, 4, 8, 6, 0]`;
                break;
          
            case 'stringToArray':
                const str:string = 'CIAOANDHELLO!';
                const chars:any[] = Array.from(str);
                result = chars + `  // from string CIAOANDHELLO`;
                break;

            default:
                console.error('Error: function switch not found');
        }

        return result;

    };

    // public opMiddle = () => {

    //     const arr: any[] = [1, 2, this.middle, 5, 6];
    //     return arr + ` // [1, 2, [3, 4], 5, 6]`;

    // };



    // ***
}
