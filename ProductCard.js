import React, { useState,useMemo,useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {getProductCardData} from './GetData';


const Card = () => {
    //const [depositData,setDepositData]=useState();
    const [rowData,setRowData] = useState([]);
    // define the columns
    const [columnDefs] = useState([

        { headerName: "Lead Reference ID", field: "uob_leadrefid", sortable: true },
        { headerName: "Lead Source", field: "uob_leadsourcename", sortable: true },
        { headerName: "Campaign Code", field: "campaignidname", sortable: true },
        { headerName: "Rating", field: "prioritycodename", sortable: true },
        { headerName: "Status", field: "statuscodename", sortable: true },
        { headerName: "Call Outcome", field: "uob_calloutcomename", sortable: true },
        { headerName: "Meet Outcome", field: "uob_meetoutcomename", sortable: true },
        { headerName: "Call Expiry Date", field: "uob_callexpirydate", sortable: true },
        { headerName: "Close Expiry Date", field: "uob_closeexpirydate", sortable: true },
        { headerName: "Created Date", field: "createdon", sortable: true }
        
    ]);  

    const getCardData = async () =>{
        let data = await getProductCardData();
        console.log("getCard Data");
        console.log(data);
        // set the data into the rows
        setRowData(data);
    }

      useEffect(()=>{  
        getCardData();
     
      },[])
 
//const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
const gridStyle = useMemo(() => ({ height: 350, width: '100%', textAlign:'left'}
), []);

  return (
    <>
    <main>
    <h2 align ="left">Leads</h2>
    
<div>
  </div>
    <div className="ag-theme-balham" style={gridStyle}>
           <AgGridReact
               rowData={rowData}
               columnDefs={columnDefs}
               pagination={true}
               paginationPageSize={10}
               icons={{
                sortAscending:'<i class="fa-solid fa-angle-up"/>',
                sortDescending:'<i class="fa-solid fa-angle-down"/>'
               }}
              >
           </AgGridReact>
       </div>


       </main>
    </>
  );
};

export default Card;
