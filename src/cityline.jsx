import React, { Component } from 'react';



class CityLine extends Component {
    state = {
        cityline:[{number : '1,3,5,6,7,3,9,10,9,34,56,78,90,123,457,89'}
    
    ]
      }
    render() { 
        return ( 
          
            <table className="table">
                <thead>
                <tr>
                    <th>LINE</th>
                </tr>
                </thead>

            <tbody className="tbody">
                {this.state.cityline.map(line =>
                    
                    <tr>
                    <td>{line.number}</td>
                </tr>
                  )}
               
            </tbody>
            </table>


         );
    }
}
 
export default CityLine;