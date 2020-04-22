import React, { Component } from 'react';

class Travel extends Component {
    state = { travel:[

          {tata:'http://aftu-senegal.org/',bus:'http://demdikk.com/senegal_dem_dikk/',taxi:'http://taxi.com/senegal'}
          

     ] };
    render() { 
        return ( 
            <table className="table">
                <thead>
              
                    <tr>
                   <th scope='col'>Bus</th>
                    <th scope='col'>Tata</th>
                    <th scope='col'>taxi</th>
                    </tr>
                
                </thead>
                <tbody className="tboby">
                    {this.state.travel.map(travels=>
                        
                        <tr>
                        <td scope='row'>{travels.bus}</td>
                        <td scope='row'>{travels.tata}</td>
                        <td scope='row'>{travels.taxi}</td>
                    </tr>
                        )}
                   
                </tbody>
            </table>
         );
    }
}
 
export default Travel;