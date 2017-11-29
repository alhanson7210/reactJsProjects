import React from 'react';

const style = {
  backgroundColor: "green",
  color: "white",
  textAlign: "center"
}

class PersonListings extends React.Component{
  render() {
    return (
      <div>
        <h1 style = {style}>Hello World</h1>
        <p style = {style}>It's nice to meet you</p>
      </div>
    )
  }
}

export default PersonListings;
// import React from 'react';
//
// class First extends React.Component{
//   render() {
//     return (
//       <div>
//             <h1>First Component</h1>
//           {this.data.map((person, i) => <Second person = {person}/>)}
//
//
//           {/* <Second person = "Alex"/>
//         {/* <Third/> */}
//          */}
//
//       </div>
//     )
//   }
// }
//
// class Second extends React.Component{
//   render() {
//     return (
//       <div>
//         <h3>{this.props.person.name}</h3>
//
//         {/* <h1>Second Component</h1>
//       {/* <Third/> */}
//       <h3>{this.props.person}</h3> */}
//
//       </div>
//     )
//   }
// }
// class Third extends React.Component{
//   render() {
//     return (
//       <div>
//         <h1>Third Component</h1>
//       </div>
//     )
//   }
// }
