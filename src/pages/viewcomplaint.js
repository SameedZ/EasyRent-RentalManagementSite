import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import Chart from "react-apexcharts";

import { useSelector } from "react-redux";

import StatusCard from "../components/status-card/StatusCard";

import Table from "../components/table/Table";

import Badge from "../components/badge/Badge";

import statusCards from "../assets/JsonData/status-card-data.json";

import { useState } from "react";


const latestComplains = {
  header: ["Complaint Id", "Customer", "date", "status"],
  body: [
    {
      id: "#OD1711",
      user: "john doe",
      date: "17 Jun 2021",
      status: "shipping",
    },
    {
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      status: "paid",
    },

  ],
};

const complainStatus = {
  shipping: "primary",
  pending: "warning",
  paid: "success",
  refund: "danger",
};

const renderComplainHead = (item, index) => <th key={index}>{item}</th>;

const renderComplainBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.user}</td>
    <td>{item.date}</td>
    <td>
      <Badge type={complainStatus[item.status]} content={item.status} />
    </td>
  </tr>
);

const ViewComplaint = () => {
  

  return (

   <div>
    
    

    <div className="row">
    <SearchComplaint/>
      <div className="col-12">
        <div className="card">
          <div className="card__header">
            <h3>Complaints List</h3>
          </div>
          <div className="card__body">
            <Table
              headData={latestComplains.header}
              renderHead={(item, index) => renderComplainHead(item, index)}
              bodyData={latestComplains.body}
              renderBody={(item, index) => renderComplainBody(item, index)}
            />
          </div>
          <div className="card__footer">
            <Link to="/">view all</Link>
          </div>
        </div>
      </div>

    </div>


    </div>

  );
};

const SearchComplaint = () => {

    const [searchedcomplain, setSearchedcomplain] = useState("null");
    const [complainview,setComplainview] = useState(false);

  function handleSearchedComplaint (e) {
     
    
    console.log(searchedcomplain)

    // implement the process of verifying if the complaint id is valid here
    if (searchedcomplain > 0){
        setComplainview(true);
    } else {
        setComplainview(false);
    }
    

      
  }

  function prevent (e) {
    e.preventDefault();
  }


  return (
    <div className="col-4">
    <div className="card">
      <div className="card__header">
        <h3>Search Complains</h3>
      </div>

      <div className="card__body">
        <div className="col-8">
          <form onSubmit={prevent} style={{"display":"flex",}} >
          
          <input className="form-control" onChange={(e)=> setSearchedcomplain(e.target.value) }  type="text" name="productquantity"  placeholder="Complaint Id" required />
          <button onClick={(e)=>handleSearchedComplaint(e.target.value)} > Search </button>   
                     
          </form>
        </div>
      </div>
    </div>
    {
        complainview?<div><CustomerComplaintView /></div>:null
    }
   

    </div>
  );
};



const CustomerComplaintView = () => {

   return (

    <div className="col-12">
    <div className="card">
      <div className="card__header">
        <h3>Customer Complaint Id: </h3>
      </div>

      <div className="card__body">
      <h3>Customer Complaint Subject: </h3> 
      </div>
    </div>
  </div>


   )


}

export default ViewComplaint;
