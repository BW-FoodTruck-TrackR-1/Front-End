import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './components/Register.js'



function App() {
const[state, setState] = useState([])
const use =(object) =>{
  setState([...state, object])
}


  return (
    <div className="App">
    
     <Register use={use} />
    </div>
  );
}

export default App;
//=======
// import React, { Component } from 'react';
// import './App.css';
// import { connect } from 'react-redux';
// import { getTrucks, addTruck, deleteTruck } from '../actions/index'


// class App extends Component {
//   constructor(){
//     super();
//     this.state = {
   
//       // // imageOfTruck:'',
//       // cuisineType: '',
//       // customerRatings: '',
//       // customerRatingAvg: '',
//       // // menu: [],
//       // itemName: '',
//       // itemDescription: '',
//       // itemPhotos: [],
//       // itemPrice: '',
//       // customerRatings: '',
//       // customerRatingAvg: '',
//       // id: '',
//       // id: '',
//       // id: '',

//     };
//   }

//   addTruck = e => {
//     const truck = {
//       username: this.state.username,
//       age: this.state.age,
//       height: this.state.height
//     }
//     this.props.addSmurf(smurf)
//   }

//   handleInputChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   delete = e => {
//     this.setState({ id: e.target.value })
//     this.props.delSmurf(this.state.id);
//     this.setState({ id: '' })
//   }

//   idSet = e => {
//     this.setState({ id: e.target.value })
//   }

//   componentDidMount() {
//     this.props.getSmurfs()
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>SMURPH</h1>
//           {this.props.fetchingSmurfs ? (
//             <h3>loading...</h3>
//           ) : (
//             <ul>
//               {this.props.smurfs.map(smurf => {
//                 return <div key={smurf.name}>
//                   <h4>{smurf.name}</h4>
//                   <h6>age: {smurf.age}</h6>
//                   <h6>height: {smurf.height}</h6>
//                   {(this.state.id === '') ? (<button value={smurf.id} onClick={this.idSet}>delete</button>) : (<button onClick={this.delete}>confirm delete?</button>)}
//                 </div>
//               })}
//             </ul>)}
//             <div className="add-smurf">
//               <form className="fields"  onSubmit={this.addSmurf}>
//                 <input
//                   onChange={this.handleInputChange}
//                   placeholder="name"
//                   value={this.state.name}
//                   name="name"
//                 />
//                 <input
//                   onChange={this.handleInputChange}
//                   placeholder="age"
//                   value={this.state.age}
//                   name="age"
//                 />
//                 <input
//                   onChange={this.handleInputChange}
//                   placeholder="height"
//                   value={this.state.height}
//                   name="height"
//                 />
//               <button type="submit">Add to village!</button>
//               </form>
//             </div>
//         </div>

//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     smurfs: state.smurfs,
//     fetchingSmurfs: state.fetchingSmurfs
//   }
// }

// export default connect(mapStateToProps, {
//   getSmurfs,
//   addSmurf,
//   delSmurf
// })(App);
