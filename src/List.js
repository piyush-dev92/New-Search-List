import React from 'react';
const List = (props)=>{
		const  repos  = props.viewResult;
  if (!repos) return null;
  if (!repos.length) return (<p>Sorry No Matches found.</p>)
  return (
    <table className="ui celled table">
			  <thead className="">
				<tr className="">
				  <th className="">Id</th>
				  <th className="">Name</th>
				  <th className="">Gender</th>
				</tr>
			  </thead>
			  <tbody className="">
      {
        repos.map(repo => {
          return (
			
			  
				<tr key={repo._id} className="">
				  <td className="">{repo._id}</td>
				  <td className="">{repo.name}</td>
				  <td className="">{repo.gender}</td>
				</tr>
			  
			
          )
         })
       }
	   </tbody>
    </table>
  )
}
export default List;
