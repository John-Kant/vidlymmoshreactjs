import React, { Component } from 'react';


class Operator extends Component {
    state ={operator: [

           {name: 'DKK',description:'bus government',link:'www.ddk.com'},
           {name: 'aftu',description:'bus private',link:'www.aftu.com'},
           {name: 'taxi bagage',description:'taxi private',link:'www.taxi.com'},
           {name: 'clando',description:'clando dakar',link:'www.clando.com'},
           {name: 'taxi halo',description:'taxi dorkat',link:'www.dorkat.com'}

    ]};

/**
 * once we have the database done instead of writiing the 
 * opera.name ,opera.description and operator.link
 * we will be using the format :
 * {opera.name},{opera.description},{opera.link}
 */
     
    render() { 
        return (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope='col'>Name</th>
                            <th scope='col'>Description</th>
                            <th scope='col'>Link/Info</th>
                        </tr>
                    </thead>
                
                <tbody className="tbody">
                    {this.state.operator.map(opera =>
                        
                        <tr>
                        <td scope='row'>{opera.name}</td>
                    <td scope='row'>{opera.description}</td>
                    <td scope='row'>{opera.link}</td>
                    </tr>
                        )}
                 
                </tbody>
                </table>
          );
    }
}
 
export default Operator;