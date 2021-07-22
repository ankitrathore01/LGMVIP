import React from 'react';


const SearchBox=({searchfeild, searchChange})=>{
    return(
            <div className='pa2'>
                <input 
                className='pa2 ba b--light-blue bg-light-blue
                '
                 type="search" 
                 placeholder='search Client' 
                 onChange={searchChange}
                     
                 />
            </div>
        );
}

export default SearchBox;
