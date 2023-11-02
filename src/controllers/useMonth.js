import React, { useState, useEffect } from 'react';

function useMonth() {
 const [month, setMonth] = useState(new Date().getMonth() + 1);

 useEffect(() => {
    const timer = setInterval(() => {
      setMonth(new Date().getMonth() + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
 }, []);

//  declare converter
 const monthToString = {
  1 :"Januari",
  2 :"Februari",
  3 :"Maret",
  4 :"April",
  5 :"Mei",
  6 :"Juni",
  7 :"Juli",
  8 :"Agustus",
  9 :"September",
  10:"Oktober",
  11:"November",
  12:"Desember",
}
// convert
  const monthText = monthToString[month]

 return monthText;
}
export default useMonth;