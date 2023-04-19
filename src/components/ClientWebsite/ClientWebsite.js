import React, { useState, useEffect } from "react";
import ClientAbout from "./ClientAbout";
import ClientBanner from "./ClientBanner";
import ClientContact from "./ClientContact";
import ClientFooter from "./ClientFooter";
import ClientNav from "./ClientNav";
import ClientServices from "./ClientServices";
import { useParams } from "react-router";
import axios from "axios";

const ClientWebsite = () => {
  const { name } = useParams();
  const [businesses, setBusinesses] = useState([]);



  const fetchBusinesses = async () => {
    try {
      const res = await axios.get("http://208.73.206.2:8080/api/businesses");
      setBusinesses(res?.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchBusinesses();
  }, [businesses?.length]);


  const business = businesses?.find((business) => business?.business_name === name);


  return (
    <div>
      <ClientNav />
      <ClientBanner />
      <ClientAbout business={business} />
      <ClientServices />
      <ClientContact />
      <ClientFooter business={business} />
    </div>
  );
};

export default ClientWebsite;
