import React,{useState,useEffect} from 'react';
import './Style.css'

interface apiProps{
    id: number;
    name: string;
    email: string;
    phone: string;
 }

function FetchApiData() {
 const [apiData,setApiData]=useState<apiProps[]>();

 useEffect(()=>{
    fetchDataApi()
 },[])

 //fetching api data using asyc/await
 const fetchDataApi=async()=>{
        try{
            const response=await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            setApiData(data);
            console.log("data",data)
        }
        catch(error){
            console.error("somthing went wrong",error);
        }
 }

  return (
    <div>
    {apiData && apiData.length>0 &&(
         <table>
         <thead>
           <tr>
             <th>ID</th>
             <th>Name</th>
             <th>Email</th>
             <th>Phone</th>
           </tr>
         </thead>
         <tbody>
           {apiData.map((item) => (
             <tr key={item.id}>
               <td>{item.id}</td>
               <td>{item.name}</td>
               <td>{item.email}</td>
               <td>{item.phone}</td>
             </tr>
           ))}
         </tbody>
       </table>
    )}
    </div>
  )
}

export default FetchApiData