import { Component, OnInit, VERSION } from '@angular/core';
import { Newbie } from './newbie.class';

@Component({
  selector: 'app-snipset',
  templateUrl: './snipset.component.html',
  styleUrls: ['./snipset.component.scss']
})
export class SnipsetComponent implements OnInit {

  name: string;
  mioVersion: string;
  nameES6: string;
  sco: any[] = [];
  a = 'uno';
  b = 0;
  private hello = 'hello';

  constructor() {
    this.mioVersion = `Angular! v${VERSION.full}`;
  }
  ngOnInit() {
   
    // ******
    this.sco.push(
      {
        purpose: `Global scope a=${this.a} vs. local const returned in fn1()`,
        res: this.fn1(),
        fn: this.fn1.toString(),
        parms: `returns const a='due';`
      });
    // ******
    this.sco.push(
      {
        purpose: `Const and Let usage.`,
        res: this.fn2(),
        fn: this.fn2.toString(),
        parms: `returns set strings const and let returns an array`
      });
    // ******
    const fn3: Newbie = new Newbie();
    this.sco.push(
      {
        purpose: `Using Classes using the new keyword instance`,
        res: fn3.a,
        fn: Newbie.toString(),
        parms: `returns a string from a class`
      });
    // ******
    const t1 = this.fn3('I am...');
    this.sco.push(
      {
        purpose: `Using closure as this.fn3('I am...') passing to t1('not zzz..'); `,
        res: t1('not zzz...'),
        fn: t1.toString(),
        parms: `returns a concat string. `
      });
    // ******
    this.sco.push(
      {
        purpose: `Procedural Syntax: uses variables, functions and conditional operators aka Imperative programming.`,
        res: this.setGreet('Hello Procedural Syntax.'),
        fn: this.setGreet.toString(),
        parms: `returns a  string. `
      });


const callingJsOOP = this.jsOOP();
//console.log ("callingJsOOP",callingJsOOP);

this.sco.push(
      {
        purpose: `Object Oriented JavaScript Syntax: uses variables, functions and conditional operators aka Imperative programming.`,
        res: callingJsOOP,
        fn: this.jsOOP.toString(),
        parms: `returns a bunch of stuff`
      });

  // ******
    this.sco.push(
      {
        purpose: `Functional programming style. Uses Declarative Programming approach that seeks to be stateless by expressing computations in the form of “pure functions”, taking arguments and returning values using immutable data without side effects (mutable). `,
        res: this.fn0('Matteo', 'ES6 syntax'),
        fn: this.fn0.toString(),
        parms: `this.fn0('Matteo', 'ES6 syntax');`
      });     


  // end of demo calls
  }

  // **************************** functions 
  // ** ES6 syntax */
  fn0 = (name, msg) => {
    return `name ${name} ${msg}`;

    /* ES6 syntax:
       fn0 = (name, msg) => {
       return `name ${name} ${msg}`;
     }
     */

  }

  // global scope and local const
  fn1() {
    const a = 'due';
    return a;

  }

  fn2(): any[] {

    const MY_CONST_DATA = 'I\'m done';
    let b = 'get set';
    b = 'reset ok';

    return [MY_CONST_DATA, b];

    /* ES6 syntax:
      const MY_CONST_DATA = 'I\'m done';
      let b = 'get set';
      b = 'reset ok';
     */

  }


  // ** closure */
  fn3(value: string) {
    return (value2) => {
      return value + ' ' + value2;
    };

    /* ES6 syntax: 
         return (value2) => {
          return value + ' ' + value2;
       };
       */

  }

  // ** setGreet functional programming style */
  setGreet(value): string {
    return value;
  }

// OOP 

jsOOP():string {

function Person(first, favorite, age, eye) {
    this.firstName = first;
    this.age = age;
    this.eyeColor = eye;
    this.favorite = favorite;
    this.likes = function() {
        return this.favorite;
    };
}

Person.prototype.nationality = "Italian";
Person.prototype.eyes = function() {
    return this.eyeColor;
};

var myFather = new Person("Matteo", "Burgers", 50, "hazel");
var myMother = new Person("Maria", "Pizza", 48, "green");

return `My Father is ${myFather.nationality}, he likes: ${myFather.likes()}  and has 
${myFather.eyes()}  eyes. My Mom is: ${myMother.nationality}  she likes: ${myMother.likes()} and has ${myMother.eyes()} eyes. `;

}





  // *** 
}
