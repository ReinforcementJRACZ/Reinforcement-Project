//Main container for My Books pageimport React from 'react';
import * as React from 'react';
import  ReadBooks  from './ReadBooks'
import WantToRead from './WantToRead';

function MyBooks() {

  return (
    <div>
      {/* <p>hello books</p> */}
      < ReadBooks/>
      < WantToRead/>

    </div>
  );
};

export default MyBooks;
