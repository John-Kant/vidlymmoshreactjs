import React, { Component } from 'react';

class Ticket extends Component {
    state = {ticket :[ 

        {price:'150fr',duration:'20min'},
        {price:'200fr',duration:'30min'},
        {price:'350fr',duration:'40min'},
        {price:'450fr',duration:'50min'},
        {price:'500fr',duration:'60min'},
        {price:'180fr',duration:'35min'},
        {price:'100fr',duration:'10min'}

    ]
     };
    render() { 
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope='col'>Price</th>
                        <th scope='col'>Duration</th>
                    </tr>
                </thead>
                <tbody className="tbody">
                {this.state.ticket.map(tic=>
                    <tr>
                        <td scope='row'>{tic.price}</td>
                        <td scope='row'>{tic.duration}</td>
                    </tr>
                    )}
                   
                </tbody>
            </table>
          );
    }
}
 
export default Ticket;