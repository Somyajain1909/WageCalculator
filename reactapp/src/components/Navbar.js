import React from 'react'

const Navbar = (props) => {
  return (
    <div>
    
  
<nav className='navbar navbar-expand-lg ' style={{'backgroundColor': '#0E7680','color':'white'}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
          <a className="nav-link inactive" aria-current="page" style={{'color':'white'}} href="/">Dimiour</a>
        </li>
                       
                        
                        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" style={{'color':'white'}}  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">hourly $ cost</a></li>
            <li><a className="dropdown-item" href="/">Overhead</a></li>
            
            <li><a className="dropdown-item" href="/">Sell Rate rounded</a></li>
          </ul>
        </li>
          
                    </ul>
                
                 
                    {/* <div className={`form-check form-switch text-${"light"==='light'?'dark':'light'}`}>
                  <input className="form-check-input"  type="checkbox"  id="flexSwitchCheckDefault" />
                  <label className="form-check-label" HTMLfor="flexSwitchCheckChecked">Enable DarkMode</label>
                  </div> */}
                  <button type="button" className="btn btn-outline" style={{'color':'#0B1340','backgroundColor':'white'}} onClick={props.toggleMode}>Enable {props.mode==='light'?'dark':'light'} mode</button>


                </div>
            </div>
        </nav>

    </div>
  )
}

export default Navbar
