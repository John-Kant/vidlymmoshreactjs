import _ from 'loadsh';


//how to paginate user interface in the client side
//paginate function
export function paginate(items, pageNumber,pageSize)
{
const startIndex =(pageNumber-1)*pageSize;

return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();

}