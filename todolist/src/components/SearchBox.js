import React from "react";

const SearchBox = ({search, searchChange}) => {
	// const doSomething = () =>{
		// return "Something";
	// }

	return(
		<>
			<input onChange={searchChange}></input>
			{/* <div>{doSomething()}</div> */}
		</>
		
	)
}

export default SearchBox;