import _ from 'loadsh'; //underscore for library
import PropTypes from 'prop-types';
import  React from 'react';
const Pagination = (props) => {
    //those are the props
const {itemsCount, pageSize,currentPage, onPageChange}=props;
//to convert or to cast the result
const pagesCount=Math.ceil (itemsCount / pageSize);
if(pagesCount ===1) return null;
const pages = _.range(1, pagesCount + 1);//we add place one to make sure this items it will return the last page
//[1...... pagesCount].mapa

    return ( 
        <nav>
            <ul className="pagination">
                {pages.map(page =><li key={page} className={page ===currentPage ? "page-item active" : "page-item"}>
                 <a className="page-link"  onClick={()=>onPageChange(page)}> 
                        {page}
                    </a>
                </li> )}
                
            </ul>
        </nav>
 
   );
};

Pagination.propTypes={
    //those help to catch bugs 
      //typechecking is available in the website react js documentation
    itemsCount:PropTypes.number.isRequired,
     pageSize:PropTypes.number.isRequired,
     currentPage:PropTypes.number.isRequired, 
     onPageChange:PropTypes.func.isRequired,

}
 


export default Pagination;