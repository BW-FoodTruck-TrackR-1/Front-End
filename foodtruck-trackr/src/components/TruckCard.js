import React,{useEffect,Component} from "react";
import { connect } from "react-redux";
import { getTrucks } from "../actions/TruckActions";
import * as actionCreators from '../actions/TruckActions';
import { render } from "react-dom";

// attempt #1
// const TruckCard = ({getTrucks,props,trucks,truckrequest}) => {
//   useEffect(() => {
//     getTrucks();
// }, []);
// console.log(getTrucks)
// console.log(trucks)

// componentDidMount() {
//   this.props.getTrucks()
// }
// render(){
//   return (
//     <div>
//       <div className="truck-card">
//         {this.props.truck.map((trucks) => {
//               return <div key={trucks} truck={trucks} ></div>
//           })}
//       </div>
//     </div>
//   );
//         }
// };
// const mapStateToProps = state => {
//   return {
//     trucks: state.trucks,
//     fetchingTrucks: state.fetchingTrucks
//   }
// }



// // export default connect(mapStateToProps,{
// //   state => state,
// //   actionCreators
// // )(TruckCard);

// export default connect(mapStateToProps, {
//   actionCreators
  
// })(TruckCard);


// attempt #2
class TruckCard extends Component {
  constructor(){
    super();
    this.state = {
        customer_rating: '',
    cuisine_type: "",
    name: '',
    };
  }
  // const [truckState, setTruckState] = useState({
  //   customer_rating: '',
  //   cuisine_type: "",
  //   name: '',
  //   // image: '',
  //   // menu: [
  //   //   {
  //   //     itemName: "",
  //   //     itemDescription: "",
  //   //     itemPhoto: [],
  //   //     itemPrice: "",
  //   //     customerRating: [],
  //   //     customerRatingAvg: [],
  //   //   },
  //   // ],
  // });



  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  

  idSet = e => {
    this.setState({ id: e.target.value })
  }

  componentDidMount() {
    this.props.getTruck()
  }

  render() {
    return (
      <div className="App">
        <h1>TRUCK</h1>
          {this.props.fetchingTruck ? (
            <div>loading...</div>
          ) : (
            <ul>
              {this.props.trucks.map(trucks => {
                return <div key={trucks.name}>
                  <div>{trucks.name}</div>
       
                </div>
              })}
            </ul>)}
  
        </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    trucks: state.trucks,
    fetchingTrucks: state.fetchingTrucks
  }
}

export default connect(mapStateToProps, {
  getTrucks,

})(TruckCard);
