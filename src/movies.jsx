import React, { Component } from 'react';

import {getMovies} from './services/fakeMovieService';

import Pagination from './common/pagination';
import {paginate} from './utils/paginate';
import ListGroup from './common/listGroup';
import {getGenres} from './services/fakeGenreService';
import Moviestable from './moviesTable';
import _ from 'loadsh';

class Movies extends Component {
    state = { 
        movies:[],
        genres:[],
        currentPage:1,
        pageSize:4,
        sortColumn: {path : 'title', order :'asc'}
     }
  componentDidMount()
  {
        const genres =[ {_id:"" ,name:'All Genres'}, ...getGenres()]

           this.setState({movies:getMovies(),genres});
  }
     handleDelete = movie =>
     {
         const movies= this.state.movies.filter(m =>m._id !== movie._id);
         this.setState({movies});
           
     };

     handleLiked = movie =>
     {
         //all this code in updating the UI
         //function checked the like stuff in movies
         //spread operator ...
         //indexof function in react
        const movies =[...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index]={...movies[index]};
        movies[index].liked=!movies[index].liked; 
        this.setState({movies});     
     };
     //methdde for page number
     handlePageChange =page =>
     {
         this.setState({currentPage : page});
     };
     //setting the selecting currrent genre
     handleGenreSelect =genre =>
     {
              this.setState({selectedGenre:genre ,currentPage:1});
     }
     handleSort =sortColumn =>
     {
           
         this.setState({sortColumn});
     }
     getPageData =() =>
     {
        const{pageSize,
            currentPage,
            sortColumn,
             movies:allMovies,
             genres,
             selectedGenre
           }
           =this.state;
          // first we filtered data 
        const filtered = selectedGenre  && selectedGenre._id
        ?allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies;

//we sort data 
//[] mean we can sort by multiple column
const sorted =  _.orderBy(filtered, [sortColumn.path],[sortColumn.order])

//finally we paginate data
    //called function paginate here
    const movies =paginate(sorted,currentPage,pageSize);

    return {totalCount:filtered.length, data:movies};
     };
    render() { 
        //we will use the variable count in the pagination
        const{length : count} =this.state.movies;
        const{pageSize,
             currentPage,
             sortColumn,
         
              genres,
              selectedGenre
            }
            =this.state;
        if(count === 0 ) return <p>There are no movie in the system</p>
        //object destructing
            const {totalCount,data:movies}=this.getPageData();
            
        return (  
            <div className="row">
                <div className="col-3">
                    <ListGroup 
                       items={genres}
                      
                        selectedItem={selectedGenre}
                    onItemSelect={this.handleGenreSelect}/>
                </div>
                <div className="col">

  <p>showing {totalCount} in the system</p>

      <Moviestable
       movies ={movies}
       sortColumn={sortColumn}
       onLike ={this.handleLiked}
       onDelete={this.handleLiked}
       onSort={this.handleSort}
       
       />

<Pagination  
  itemsCount={totalCount} 
  pageSize={pageSize} 
  currentPage={currentPage}
  onPageChange={this.handlePageChange}
  />

                </div>
       
                
              
              </div>
            //this is how to do pagination pageSize declare in the state stuff
        );
    }
}
 
export default Movies ;