import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import RowsContext from '../context/rowsContext';

const Calcicomplete = (props) => {
    let dollar_cr=props.dollar_cr;
    let key=props.id
    
    let overhead=props.overhead; 
    const updateContext=useContext(RowsContext)
    const{updateRow}=updateContext
   
    const[currency,setCurrency]=useState('INR');
    const[sell_rate,Setsell_rate]=useState()
    const[sell_rate_rounded,SetSell_rate_rounded]=useState()
    const[DPH,setDPH]=useState()
    const[input,setInput]=useState()
    const[margin,SetMargin]=useState(0)
    const[overhead_value,setOverhead_value]=useState()
    const[name,setName]=useState('')
    const[working_hours,setWorking_hours]=useState(168)
    const[no_of_resources,setNo_of_resouces]=useState(1)
    const[total_per_month,setTotal_per_month]=useState()
    const[total_per_year,setTotal_per_year]=useState()
    const[dollar_overhead,setDollar_overhead]=useState(0)
    const[overhead_vis,setOverhead_vis]=useState(false)

 
    const onChangeCost=async (ev)=>{
        
      Setsell_rate(sell_rate)
       
       let Input=await ev.target.value
       setInput(Input)
       if(currency==='INR'){
        let ans=Input/2080;
       ans=ans/ dollar_cr
       ans = ans.toFixed(2);
        setDPH(ans)
        let DPH2=await Input/2080/dollar_cr
        
        let ans2=DPH2*overhead/100;
        console.log(ans2+"vbhji")
        ans2 = ans2.toFixed(2);
        setOverhead_value(ans2);
        
        let over=ans2
        
        
        
     
        let sell_rate2=await +(DPH2*100/(100-margin))
        let ans3=+sell_rate2 + +over
         ans3=Math.ceil(sell_rate2);
        SetSell_rate_rounded(ans3)
      

        let totalpm=await Input/2080/dollar_cr
        totalpm=totalpm*(working_hours)*(no_of_resources)
        totalpm= await totalpm.toFixed(2)
        setTotal_per_month(totalpm)
        let totalpy= await totalpm*12
        setTotal_per_year(totalpy)


        let a=name
    let b=currency
    let c=no_of_resources
    let d=working_hours
    let e= await ev.target.value
    let f=margin
    let g=ans
    let h=ans2
    let i=ans3
    let j=totalpm
    let k=totalpy

   updateRow(key,a,b,c,d,e,f,g,h,i,j,k)
       
    }
    else{
        let ans=Input;
       
       
        setDPH(ans)
        let DPH2=await Input
       let ov= DPH2*dollar_overhead/100
        setOverhead_value(ov);

      
       
     
        let sell_rate2=await +(DPH2*100/(100-margin))
        sell_rate2= +sell_rate2 + +ov
        let ans3=Math.ceil(sell_rate2);
        SetSell_rate_rounded(ans3)
        let totalpm=await Input
        totalpm=totalpm*(working_hours)*(no_of_resources)
        totalpm= await totalpm.toFixed(2)
        setTotal_per_month(totalpm)
        let totalpy= await totalpm*12
        setTotal_per_year(totalpy)
        let a=name
        let b=currency
        let c=no_of_resources
        let d=working_hours
        let e= await ev.target.value
        let f=margin
        let g=ans
        let h=ov
        let i=ans3
        let j=totalpm
        let k=totalpy
    
       updateRow(key,a,b,c,d,e,f,g,h,i,j,k)
    }
   

  
       
        
     }


const onChangeMargin=async (ev)=>{
let Margin= await ev.target.value;
SetMargin(Margin)
let ans= DPH*100/(100-Margin);
let over=overhead_value
ans= +ans +  +over;
Setsell_rate(ans);


let ans2=Math.ceil(ans);
SetSell_rate_rounded(ans2)
let a=name
        let b=currency
        let c=no_of_resources
        let d=working_hours
        let e= input
        let f=Margin
        let g=DPH
        let h=overhead_value
        let i=ans2
        let j=total_per_month
        let k=total_per_year
    
       updateRow(key,a,b,c,d,e,f,g,h,i,j,k)
}
const currencyisINR=async ()=>{
    setCurrency("INR")
    setOverhead_vis(false)
    let Input= input
    let ans=Input/2080;
    ans=ans/ dollar_cr
    ans = ans.toFixed(2);
     setDPH(ans)
     let DPH2=await Input/2080/dollar_cr
     let ans2=DPH2*overhead/100;
     ans2 = ans2.toFixed(2);
     setOverhead_value(ans2);
     let ans1= DPH2*100/(100-margin);
     let over=ans2
     ans1=await +ans1 +  +over;
     ans1=ans1.toFixed(2);
     Setsell_rate(ans1);
  
     let sell_rate2=await +(DPH2*100/(100-margin))+ +over
     let ans3=Math.ceil(sell_rate2);
     SetSell_rate_rounded(ans3)
     let totalpm=await Input/2080/dollar_cr
        totalpm=totalpm*(working_hours)*(no_of_resources)
        totalpm= await totalpm.toFixed(2)
        setTotal_per_month(totalpm)
        let totalpy= await totalpm*12
        setTotal_per_year(totalpy)
        let a=name
        let b="INR"
        let c=no_of_resources
        let d=working_hours
        let e= Input
        let x=margin
        let g=ans
        let h=ans2
        let i=ans3
        let j=totalpm
        let k=totalpy
    
       updateRow(key,a,b,c,d,e,x,g,h,i,j,k)

   }
   const currencyisDollar=async ()=>{
     setCurrency("Dollar")
     setOverhead_vis(true)
     let ans=input;
       
       
     setDPH(ans)
     let DPH2=await input
    let ov=DPH2*dollar_overhead/100;
     setOverhead_value(ov);

     let ans1=  await +(DPH2*100/(100-margin))
     
     ans1= ans1.toFixed(2) + ov
     Setsell_rate(ans1);
    
  
     let sell_rate2=await +(DPH2*100/(100-margin))
     sell_rate2=+sell_rate2+ +ov
     let ans3=Math.ceil(sell_rate2);
     SetSell_rate_rounded(ans3)
     let totalpm=await input
        totalpm=totalpm*(working_hours)*(no_of_resources)
        totalpm= await totalpm.toFixed(2)
        setTotal_per_month(totalpm)
        let totalpy= await totalpm*12
        setTotal_per_year(totalpy)
        let a=name
        let b="Dollar"
        let c=no_of_resources
        let d=working_hours
        let e= ans
        let f=margin
        let g=ans
        let h=ov
        let i=ans3
        let j=totalpm
        let k=totalpy
    
       updateRow(key,a,b,c,d,e,f,g,h,i,j,k)
   }
const onChangeName= async(e)=>{
let isname=await e.target.value;
setName(isname);
let a=e.target.value
let b=currency
let c=no_of_resources
let d=working_hours
let x=input
let f=margin
let g=DPH
let h=overhead_value
let i=sell_rate_rounded
let j=total_per_month
let k=total_per_year

updateRow(key,a,b,c,d,x,f,g,h,i,j,k)
}
const onChangeWH= async(ev)=>{
  let isWH= await ev.target.value;
  setWorking_hours(isWH)
  let totalpm=DPH
        totalpm=totalpm*(isWH)*(no_of_resources)
        totalpm= await totalpm.toFixed(2)
        setTotal_per_month(totalpm)
        let totalpy= await totalpm*12
        setTotal_per_year(totalpy)
        let a=name
let b=currency
let c=no_of_resources
let d=isWH
let x=input
let f=margin
let g=DPH
let h=overhead_value
let i=sell_rate_rounded
let j=totalpm
let k=totalpy

updateRow(key,a,b,c,d,x,f,g,h,i,j,k)
}
const onChangeNoR=async(ev)=>{
  let isNoR= await ev.target.value;
  setNo_of_resouces(isNoR)
  let totalpm=DPH
  totalpm=totalpm*(working_hours)*(isNoR)
  totalpm= await totalpm.toFixed(2)
  setTotal_per_month(totalpm)
  let totalpy= await totalpm*12
  setTotal_per_year(totalpy)
  let a=name
let b=currency
let c=isNoR
let d=working_hours
let x=input
let f=margin
let g=DPH
let h=overhead_value
let i=sell_rate_rounded
let j=totalpm
let k=totalpy

updateRow(key,a,b,c,d,x,f,g,h,i,j,k)
}
const onChangeDollarOverhead=async (e)=>{
  let dov= await e.target.value;
  setDollar_overhead(dov);
  let ov=DPH*dov/100;
  setOverhead_value(ov)
  let srr= DPH*100/(100-margin)
  srr= +srr + +ov
  srr=Math.ceil(srr)
  SetSell_rate_rounded(srr)
  let a=name
  let b=currency
  let c=no_of_resources
  let d=working_hours
  let x=input
  let f=margin
  let g=DPH
  let h=ov
  let i=srr
  let j=total_per_month
  let k=total_per_year
  
  updateRow(key,a,b,c,d,x,f,g,h,i,j,k)

}
   
    
  return (
    <div className='my-3'>
    <div className='my-3 mx-2' style={{'marginLeft':'10%'}}>
    <div   className="input-group mb-3 ">
    <button className="btn btn-secondary dropdown-toggle curr" style={{'borderRadius':"4px",'width':'190px','height':"40px",'backgroundColor':'#0E7680','color':'white','marginTop':'27.5px'}} type="button" data-bs-toggle="dropdown"  aria-expanded="false">
    Currency ({currency}) 
  </button>
  <ul className="dropdown-menu">
    <li><button className="dropdown-item" style={{'backgroundColor':`${currency==='INR'?'#e3f2fd':'white'}`}} onClick={currencyisINR}>INR (Rs)</button></li>
    <li><button className="dropdown-item" style={{'backgroundColor':`${currency==='INR'?'white':'#e3f2fd'}`}} onClick={currencyisDollar}>Dollar (<i className="fa-regular fa-dollar-sign fa-1x"></i>)</button></li>
    
  </ul> &nbsp; &nbsp;
  <div style={{'marginTop':'0px','color':'#0E7680','fontWeight':'normal'}}>
  &nbsp; &nbsp;
  <input style={{"height":"40px",'borderRadius':'3px','color':'black'}} type="text"  onChange={onChangeName} className="form-control mx-2  my-1" placeholder="Enter Name or Role" aria-label="Name"/></div>
  <div className='mx-2' style={{'color':'#0E7680','fontWeight':'normal'}}></div>
  <div style={{'marginTop':'0px','color':'#0E7680','fontWeight':'normal',visibility: overhead_vis ? 'visible' : 'hidden'}}>
  &nbsp; &nbsp;Custom Overhead (input)
  <input style={{"height":"40px",'borderRadius':'3px','color':'black',visibility: overhead_vis ? 'visible' : 'hidden'}} type="text"  onChange={onChangeDollarOverhead} className="form-control mx-2  my-1" placeholder=" (default 0)" aria-label="DO"/></div>
  <div className='mx-2' style={{'color':'#0E7680','fontWeight':'normal'}}></div>
  <br/>
  <br/>
 </div>
    <div   className="input-group mb-3 ">
        
    
  <div style={{'marginTop':'0px','color':'#0E7680','fontWeight':'normal'}}>
  &nbsp; &nbsp;Number of resouces (input)
  <input style={{"height":"40px",'borderRadius':'3px','color':'black'}} type="text"  onChange={onChangeNoR} className="form-control mx-2  my-1" placeholder=" (default 1)" aria-label="NoR"/></div>
  <div className='mx-2' style={{'color':'#0E7680','fontWeight':'normal'}}></div>
  <div style={{'marginTop':'0px','color':'#0E7680','fontWeight':'normal'}}>
  &nbsp; &nbsp;Working hours (input)
  <input style={{"height":"40px",'borderRadius':'3px','color':'black'}} type="text"  onChange={onChangeWH} className="form-control mx-2  my-1" placeholder=" (default 168)" aria-label="WH"/></div>
  <div className='mx-2' style={{'color':'#0E7680','fontWeight':'normal'}}></div>

  <div style={{'marginTop':'0px','color':'#0E7680','fontWeight':'normal'}}>
  &nbsp; &nbsp;Cost (input)
  <input type="text" style={{"height":"40px",'borderRadius':'3px','color':'black'}} value={input}  onChange={onChangeCost} className="form-control  mx-2 my-1"  placeholder="Enter Cost" aria-label="cost"/>&nbsp; &nbsp;
  </div>
  <div className='mx-2' style={{'color':'#0E7680','fontWeight':'normal'}}></div>
  <div style={{'marginTop':'0px','color':'#0E7680','fontWeight':'normal'}}>
  &nbsp; &nbsp;Margin (input)
    <input style={{"height":"40px",'borderRadius':'3px','color':'black'}} type="text"  onChange={onChangeMargin} className="form-control mx-1  my-1" placeholder="Specify margin (default 0%)" aria-label="Margin"/></div>
   </div><div   className="input-group ">
    <div className='mx-2' style={{'color':'#0E7680','fontWeight':'normal','marginLeft':"2%"}}>
        Hourly $ cost
    <div style={{'width':'185px','height':'40px','border':"1px solid #0E7680",'borderRadius':'3px','backgroundColor':'white','color':'black'}} className='my-1' ><p className='mx-2 my-1'>{DPH} </p>   </div>
    </div>
    <div className='mx-2' style={{'color':'#0E7680','fontWeight':'normal'}}>
    Overhead(+)<div style={{'width':'185px','height':'40px','border':"1px solid #0E7680",'borderRadius':'3px','backgroundColor':'white','color':'black'}} className="my-1" ><p className='mx-2 my-1'>{overhead_value} </p> </div>
    </div>
   


    <div className='mx-2' style={{'color':'#0E7680','fontWeight':'normal'}}>
       
  Sell Rate rounded <div style={{'width':'185px','height':'40px','border':"1px solid #0E7680",'borderRadius':'3px','backgroundColor':'white','color':'black'}} className="my-1" ><p className='mx-2 my-1'> {sell_rate_rounded} </p> </div>
  </div>
  
  <div className='mx-2' style={{'color':'#0E7680','fontWeight':'normal'}}>
       
       Total per Month <div style={{'width':'185px','height':'40px','border':"1px solid #0E7680",'borderRadius':'3px','backgroundColor':'white','color':'black'}} className="my-1" ><p className='mx-2 my-1'> {total_per_month}</p> </div>
       </div>
       
    <div className='mx-2' style={{'color':'#0E7680','fontWeight':'normal'}}>
       
    Total per Year <div style={{'width':'185px','height':'40px','border':"1px solid #0E7680",'borderRadius':'3px','backgroundColor':'white','color':'black'}} className="my-1" ><p className='mx-2 my-1'> {total_per_year} </p> </div>
       </div>
    
       
    </div>
    
<hr/>
    </div>
    </div>
  )
}

export default Calcicomplete
