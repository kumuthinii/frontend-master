import React, { useState,useMemo,useEffect } from 'react';

export default async function getProductDepositData () {
    const response = await fetch('./DepositData.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    });
    /*
      .then(function(response){
        console.log("response1");
        console.log(response);
         response.json();
      })
      .then(function(myJson) {
        console.log("response2");
        console.log(myJson);
      });
*/
      const data = await response.json();
      console.log("deposit data");
      console.log(data);
      return data;
      
  }
 
  export async function getProductCardData () {
    const cardResponse = await fetch('CardData.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    });
    /*
      .then(function(response){
        console.log("response1");
        console.log(response);
         response.json();
      })
      .then(function(myJson) {
        console.log("response2");
        console.log(myJson);
      });
*/
      const data = await cardResponse.json();
      console.log("card data");
      console.log(data);
      return data;
      
  }
