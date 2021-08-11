// import logo from './logo.svg';
// import './App.css';
// import React from 'react';
// import { Component } from 'react';
// import Header from './header';
// import Header from './header';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router-dom'

class App extends React.Component {
   render() {
      return (
         <div>
            <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            </ul>
            {this.props.children}
         </div>
      )
   }
}
// export default App;

class Home extends React.Component {
   render() {
      return (
         <div>
            <h1>Home...</h1>
         </div>
      )
   }
}

// export default Home;

class About extends React.Component {
   render() {
      return (
         <div>
            <h1>About...</h1>
         </div>
      )
   }
}
// export default About;

class Contact extends React.Component {
   render() {
      return (
         <div>
            <h1>Contact...</h1>
         </div>
      )
   }
}
// export default Contact;

ReactDOM.render((
    <Router>
       <Route path = "/" component = {App}>
          <IndexRoute component = {Home} />
          <Route path = "/home" component = {Home} />
          <Route path = "/about" component = {About} />
          <Route path = "/contact" component = {Contact} />
       </Route>
    </Router>
 ), document.getElementById('app'))

 export default {App, Home, Contacts, About};

// class App extends React.Component {
//   constructor() {
//       super();
//       this.state = {
//           data:
//               [
//                   {
//                       "id": 1,
//                       "name": "ABC",
                    
//                   },
//                   {
//                       "id": 2,
//                       "name": "BCD",
                      
//                   },
//                   {
//                       "id": 3,
//                       "name": "EFG",
                      
//                   }
//               ]
//       }
//   }

//   render() {
//       return (
//           <div className="mytable">
//               <Header/>
//               <br/>
//               <br/>
//               <table>
//                   <tbody>
//                   {this.state.data.map((person, i) => <TableRow key={i}
//                                                                 data={person}/>)}
//                   </tbody>
//               </table>
//           </div>
//       );
//   }
// }

// class TableRow extends React.Component {
//   render() {
//       return (
//           <tr>
//               <td>{this.props.data.id}</td>
//               <td>{this.props.data.name}</td>
//           </tr>
//       );
//   }
// }

// export default App;

// class App extends React.Component{
//     constructor(props){
//         super();
//     this.state={name:"Brillios"};
//     this.changeState.bind(this);
// }
// render(){
//     return(
//         <div>
//             <h1>Life cycle of a React Component</h1>
//             <h1>My State is {this.state.name}</h1>
//             <button onclick={this.changeState}>ChangeState</button>
//         </div>
//     );
            


    
// }
// changeState(){
//     this.setState({name:"JavaFullStack"});
// }}
// export default App;

// import React from 'react';
// import {
//   Nav,
//   NavLink,
//   Bars,
//   NavMenu,
//   NavBtn,
//   NavBtnLink,
// } from './NavbarElements';
  
// const Navbar = () => {
//   return (
//     <>
//       <Nav>
//         <Bars />
  
//         <NavMenu>
//           <NavLink to='/about' activeStyle>
//             About
//           </NavLink>
//           <NavLink to='/events' activeStyle>
//             Events
//           </NavLink>
//           <NavLink to='/annual' activeStyle>
//             Annual Report
//           </NavLink>
//           <NavLink to='/team' activeStyle>
//             Teams
//           </NavLink>
//           <NavLink to='/blogs' activeStyle>
//             Blogs
//           </NavLink>
//           <NavLink to='/sign-up' activeStyle>
//             Sign Up
//           </NavLink>
//           {/* Second Nav */}
//           {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
//         </NavMenu>
//         <NavBtn>
//           <NavBtnLink to='/signin'>Sign In</NavBtnLink>
//         </NavBtn>
//       </Nav>
//     </>
//   );
// };
  
// export default Navbar;