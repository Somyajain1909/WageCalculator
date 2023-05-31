import RowsContext from "./rowsContext";
import { useState } from "react";
import React from 'react'


const RowState = (props) => {

const[rows,setRows]=useState([
{
    "_key":1,
    "name":'',
    "currency":"INR",
    "No_of_Resouces":"",
    "Working_Hours":"",
    "cost":"",
    "margin":"",
    "Dollar_Per_Hr":"",
    "overhead":"",
    "sell_rate_rounded":"",
    "total_per_month":"",
    "total_per_year":"" 
}])

const updateRow=async(key,name,currency,NoR,WH,cost,margin,DPH,overhead,sell_rate_rounded,total_per_month,total_per_year)=>{
    let newRows=JSON.parse(JSON.stringify(rows));
    
    for (let index = 0; index < rows.length; index++) {
        
        const element = newRows[index];
        
        if(element._key===key){
          newRows[index].name=name;
          newRows[index].currency=currency;
          newRows[index].margin=margin;
          newRows[index].No_of_Resouces=NoR;
          newRows[index].Working_Hours=WH;
          newRows[index].cost=cost;
          newRows[index].Dollar_Per_Hr=DPH;
          newRows[index].overhead=overhead
          newRows[index].sell_rate_rounded=sell_rate_rounded
          newRows[index].total_per_month=total_per_month
          newRows[index].total_per_year=total_per_year
          
          break;
        }
        
      }
      setRows(newRows);
      
      }
    const addRow = async (key,name,currency,NoR,WH,cost,margin,DPH,overhead,sell_rate_rounded,total_per_month,total_per_year) =>{
      let row={
        "_key":key,
       "name":name,
       "currency":currency,
       "No_of_Resouces":NoR,
       "Working_Hours":WH,
       "cost":cost,
       "margin":margin,
       "Dollar_Per_Hr":DPH,
       "overhead":overhead,
       "sell_rate_rounded":sell_rate_rounded,
       "total_per_month":total_per_month,
       "total_per_year":total_per_year
      }

        
        
        
      setRows(rows.concat(row))
      
      }



  return (
    <div>
        <RowsContext.Provider value={{rows,updateRow,addRow}}>
            {props.children}
        </RowsContext.Provider>
      
    </div>
  )
}

export default RowState
