import React, { useState } from "react";
import "./style.scss";
import arrow from '../../img/arrow.png';
import Foot from "../Foot/Foot";
import Head from "../Head/Head";

export default function ViewStats() {
  const [users, setUsers] = useState([
    {
      id: 1,
      first_name: "Christie",
      last_name: "Gann",
      email: "cgann0@hostgator.com",
      gender: "Female",
      ip_address: "57.14.195.231",
    },
    {
      id: 2,
      first_name: "Hamil",
      last_name: "Cressey",
      email: "hcressey1@delicious.com",
      gender: "Male",
      ip_address: "45.225.25.145",
    },
    {
      id: 3,
      first_name: "Lottie",
      last_name: "Dupre",
      email: "ldupre2@dot.gov",
      gender: "Female",
      ip_address: "254.46.181.79",
    },
    {
      id: 4,
      first_name: "Godfry",
      last_name: "Raoult",
      email: "graoult3@npr.org",
      gender: "Male",
      ip_address: "133.124.79.194",
    },
    {
      id: 5,
      first_name: "Dorrie",
      last_name: "Beckley",
      email: "dbeckley4@buzzfeed.com",
      gender: "Female",
      ip_address: "252.217.2.208",
    },
    {
      id: 6,
      first_name: "Linc",
      last_name: "Milella",
      email: "lmilella5@wikispaces.com",
      gender: "Male",
      ip_address: "175.119.105.110",
    },
    {
      id: 7,
      first_name: "Alfie",
      last_name: "O' Sullivan",
      email: "aosullivan6@sphinn.com",
      gender: "Male",
      ip_address: "218.183.185.92",
    },
    {
      id: 8,
      first_name: "Urbanus",
      last_name: "Pittford",
      email: "upittford7@mit.edu",
      gender: "Male",
      ip_address: "199.232.254.9",
    },
    {
      id: 9,
      first_name: "Osbourne",
      last_name: "Andreacci",
      email: "oandreacci8@eventbrite.com",
      gender: "Male",
      ip_address: "172.255.67.174",
    },
    {
      id: 10,
      first_name: "Dina",
      last_name: "Sturt",
      email: "dsturt9@npr.org",
      gender: "Female",
      ip_address: "170.156.106.240",
    },
    {
      id: 11,
      first_name: "Corrinne",
      last_name: "Muskett",
      email: "cmusketta@arstechnica.com",
      gender: "Female",
      ip_address: "61.24.39.159",
    },
    {
      id: 12,
      first_name: "Alla",
      last_name: "Symes",
      email: "asymesb@usatoday.com",
      gender: "Female",
      ip_address: "224.194.222.88",
    },
    {
      id: 13,
      first_name: "Cheri",
      last_name: "Bier",
      email: "cbierc@independent.co.uk",
      gender: "Female",
      ip_address: "152.9.22.103",
    },
    {
      id: 14,
      first_name: "Antony",
      last_name: "Sesser",
      email: "asesserd@spiegel.de",
      gender: "Male",
      ip_address: "138.238.136.114",
    },
    {
      id: 15,
      first_name: "Clair",
      last_name: "Willmot",
      email: "cwillmote@huffingtonpost.com",
      gender: "Female",
      ip_address: "245.57.42.28",
    },
  ]);
  return (
    <section className="stats">
      <Head />
      <div className='breadcrumbs'>
          <p className='breadcrumbs__parent'>Main page&nbsp;&nbsp;</p>
          <img className='breadcrumbs__arrow' src={arrow} alt={arrow}></img>
          <p className='breadcrumbs__child'>&nbsp;&nbsp;User satistics</p>
      </div>


      <div className='statistics'>
          <h2 className='statistics__title text-bold'>Users statistics</h2>
          {/* <div className='statistic__wrapper'> */}
              <table className='statistic__table'>
                  <thead>
                      <tr className='statistic__headRow'>
                          <td>Id</td>
                          <td>First name</td>
                          <td>Last name</td>
                          <td>Email</td>
                          <td>Gender</td>
                          <td>IP adress</td>
                          <td>Total clicks</td>
                          <td>Total page views</td>
                      </tr>
                  </thead>
                  <tbody>
                      <tr className='statistic__row'>
                          <td>1</td>
                          <td>Samuel</td>
                          <td>Frost</td>
                          <td>sirious.sam@gmail.com</td>
                          <td>male</td>
                          <td>192.168.32.05</td>
                          <td>290 883</td>
                          <td>290 883</td>
                      </tr>
                      <tr className='statistic__row'>
                          <td>1</td>
                          <td>Samuel</td>
                          <td>Frost</td>
                          <td>sirious.sam@gmail.com</td>
                          <td>male</td>
                          <td>192.168.32.05</td>
                          <td>290 883</td>
                          <td>290 883</td>
                      </tr>
                      <tr className='statistic__row'>
                          <td>1</td>
                          <td>Samuel</td>
                          <td>Frost</td>
                          <td>sirious.sam@gmail.com</td>
                          <td>male</td>
                          <td>192.168.32.05</td>
                          <td>290 883</td>
                          <td>290 883</td>
                      </tr>
                      <tr className='statistic__row'>
                          <td>1</td>
                          <td>Samuel</td>
                          <td>Frost</td>
                          <td>sirious.sam@gmail.com</td>
                          <td>male</td>
                          <td>192.168.32.05</td>
                          <td>290 883</td>
                          <td>290 883</td>
                      </tr>
                      <tr className='statistic__row'>
                          <td>1</td>
                          <td>Samuel</td>
                          <td>Frost</td>
                          <td>sirious.sam@gmail.com</td>
                          <td>male</td>
                          <td>192.168.32.05</td>
                          <td>290 883</td>
                          <td>290 883</td>
                      </tr>
                  </tbody>
              </table>
          {/* </div> */}
      </div>

      <Foot />
    </section>
  );
}
