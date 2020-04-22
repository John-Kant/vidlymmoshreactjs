import React, { Component } from 'react';
import _ from 'loadsh';
class TableBody extends Component {
    //function took ttwo parameter for now
    renderCell=(item,column)=>
    {
        if(column.content) return column.content(item);

      return  _.get(item,column.path);

    };
    //to make code clean lets create new methode for the key
    createKey=(item,column)=>
    {
        return item._id + (column.path || column.key);
    };
    render() { 

        const {data,columns}=this.props;
        return ( 
//first map renderein tthe row
//second rendering the columns or cells
     <tbody>
         
         {data.map(item =>(
                   <tr key={item._id}>
                       {columns.map(column=> (
                        <td key={this.createKey(item,column)}> {this.renderCell(item,column)}</td>
                       
                        ) )}
                 
               </tr>
          ) )}
         
     </tbody>

         );
    }
}
 
export default TableBody;