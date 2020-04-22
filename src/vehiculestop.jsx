import React, { Component } from 'react';
//import './images';

class Vehicule extends Component {
    state = { 
    
       imageStop: 'images/abris-bus.jpg',
       vehiculColorDKK:"http://demdikk.com/bonne-fete-de-lindependance/",
       vehiculeColorTata:"http://aftu-senegal.org/a-propos",
       taxiImage:"images/taxi.jpg"

     }
    render() { 
        return (  
            <div action="" className="form">
               
                    <div src='images/abris-bus.jpg'>
                        
                        <p>Bus Dem Dikk</p>
                    </div>
                    <div>
                    <img src={this.state.vehiculColorDKK} alt=""/>
                        Bus Dem Dikk
                    </div>
                    <div>
                    <img src={this.state.vehiculeColorTata} alt=""/>
                       <p> Bus Tata</p>
                    </div>
                    <div> 
                    <img src={this.state.imageStop} alt=""/>
                        Stop
                    </div>
                
            </div>
        );
    }
}
 
export default Vehicule;