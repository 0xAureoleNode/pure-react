import React from 'react';
import ReactDOM from 'react-dom';

// function MyThing() {
//   return (
//     <div className="book">
//       <div className="title">The Title</div>
//       <div className="author">The Author</div>
//       <ul className="stars">
//         <li className="rating">5 stars</li>
//         <li className="isbn">12-345678-910</li>
//       </ul>
//     </div>
//   );
// }

//

// function Greeting() {
//   // Try all of these variations:
//   // let username = "root";
//   // let username = undefined;
//   // let username = null;
//   // let username = false;
//   // Fill in the rest:
//   // return (...)
//   let username = 'x';
//   return (
//     <span>
//       {(username === 'undefined' || username === 'null') && 'Not logged in'}
//       {username === 'string' && 'Hello username'}
//     </span>
//   );
// }

// error mean
// 1.
// function testComponent() {
//   return <div>hello react</div>;
// }
// Warning: The tag <testComponent> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.

// b. Try returning 2 elements at once
// error : JSX expressions must have one parent element
// function HelloWorld() {
//   return <h1>Hello, World</h1>
//   <h4>Hello, React</h4>;
// }

// c. Tryreturninganarraywith2elementsinside
// Warning: Each child in a list should have a unique "key" prop.
// function Test() {
//   return [<Hello />, <World />];
// }

// function Hello() {
//   return <span>Hello</span>;
// }

// function World() {
//   return <span>World</span>;
// }

// d. Can you put 2 expressions inside single braces,like{x&&5;x&&7}?
// error
// function Test () {
//     return <h4>{x&&5; x&&7}</h4>
// }

// e. What happens if you use return inside a JS expression?

// f. What about a function call like alert ('hi')? Does it halt rendering?
// error The tag <alert> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.
// 不能直接用
// function Test() {
//   return (
//     <div>
//       <alert>( 'hi' )</alert>
//     </div>
//   );
// }

// g. Try putting a quoted string inside JSX.Does it strip out the quotes?
// https://stackoverflow.com/questions/21668025/access-props-inside-quotes-in-react-jsx

// 6
import './index.css';
const data = [
  { name: 'Anom', age: 19, gender: 'Male' },
  { name: 'Megha', age: 19, gender: 'Female' },
  { name: 'Subham', age: 25, gender: 'Male' },
];
function Table() {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
          {data.map((item, idx) => {
            return (
              <tr key={idx}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

ReactDOM.render(<Table />, document.getElementById('root'));
