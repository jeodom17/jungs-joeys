import React, { useEffect } from "react";
import { useSearchParams } from 'react-router-dom';



export default function Topic() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  
  useEffect(() => {
    console.log("HERE");
    console.log(searchParams)
    console.log(searchParams.getAll("name"))
  })
    return (
      <div>
        
        <h1>This is the page for the SELECTED Topic </h1>
        

      
      </div>
    );
  }