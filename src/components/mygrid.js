import * as React from 'react';
import '../App.css'
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import { getData } from '../services/data';
import logo from '../images/highradius.png'
import Navbar  from './navbar'
import AddInvo from './addInvo';

export default function MyGrid() {
  const[data, setData] = React.useState([]);
  const [checkboxSelection] = React.useState(true);

  React.useEffect( async function() {
    setData(await getData());
  }, []);
  
  const cols = [ { field: 'sl_no', headerName: 'Sl No' }, { field: 'business_code', headerName: 'Business Code'}, 
                 { field: 'cust_number', headerName: 'Customer Number'}, { field: 'clear_date', headerName: 'Clear Date'}, 
                 { field: 'buisness_year', headerName: 'Business Year'}, { field: 'doc_id', headerName: 'Document ID'}, 
                 { field: 'posting_date', headerName: 'Posting Date'}, { field: 'document_create_date', headerName: 'Document Create Date'}, 
                 { field: 'due_in_date', headerName: 'Due Date'}, { field: 'invoice_currency', headerName: 'Invoice Currency'}, 
                 { field: 'document_type', headerName: 'Document Type'}, { field: 'posting_id', headerName: 'Posting ID'}, 
                 { field: 'total_open_amount', headerName: 'Total Open Amount'}, 
                 { field: 'baseline_create_date', headerName: 'Baseline Create Date'}, 
                 { field: 'cust_payment_terms', headerName: 'Customer Payment Terms'}, { field: 'invoice_id', headerName: 'Invoice ID'}];
  
  return (
    
    <div style={{ width: '100%' }}>
      <Navbar/>
      <div style={{ height: 570 }}>
        <DataGrid checkboxSelection={checkboxSelection} columns = {cols} rows = {data} getRowId = {(row) => row.sl_no} />
      </div>
    </div>
  );
}