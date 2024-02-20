import React from 'react';
import { FaGreaterThan } from 'react-icons/fa';
import { RiArrowDropDownLine } from 'react-icons/ri';

import '../components/Sidebar.jsx';

// Remove the duplicate import statement for FaGreaterThan
import '../CSS/MyWithdrawls.css';
import Sidebar from '../components/Sidebar.jsx';
import MobileNav from '../components/Mobile/MobileNav.jsx';
import Navbar from '../components/Navbar.jsx';


const MyWithdrawls = () => {
    return (
        <div className='MyWithdrawls_main_container'>

            <div className="max-sm:hidden  ">
                <Sidebar />
            </div>
            <div className='myWithdrawl_body ml-[30px] '>

                <div className="sm:hidden  ml-[10px]">  <MobileNav /> </div>
                <div className="max-sm:hidden"  >
                    <Navbar Navtext={"My Withdrawal"} />
                </div>

                <div className='withdralTable_container mt-[50px]'>
                    <div className='MyWithdrawls_breadcramp'>
                        <div className='MyWithdrawls_bread_child'>
                            <p>Dashboard</p>
                            {/* <FaGreaterThan /> */}
                            <p>Mywithdrawls</p>
                        </div>
                        <div className='MyWithdrawls_bread_child justify-center items-center'>
                            <p>Add Details for Withdrwal </p>
                            <i className=" fa-solid fa-gear flex  justify-center items-center"></i>

                        </div>
                    </div>


                    <div className='MyWithdrawls_bread_child gap-[10px] '>
                        <button className='w-[120px] shadow-lg rounded-md'>All Payments</button>
                        <button className='w-[120px] shadow-lg rounded-md'>Succeeded</button>
                        <button className='w-[120px] shadow-lg rounded-md'>Refunded</button>
                    </div>

                    <div className='mywithdral_payment'>
                        <div className='mywithdral_payment_range'>
                            <ul className='flex justify-center items-center gap-[5px]'>
                                <i class="fa-regular fa-clock"></i>
                                <p>Date range</p>
                                <li className=''> <RiArrowDropDownLine /></li>
                            </ul>

                            <ul className='flex justify-center items-center gap-[5px]'>
                                <i class="fa-regular fa-flag"></i>
                                <p>Status </p>
                                <li><RiArrowDropDownLine /></li>
                            </ul>

                            <ul className='flex justify-center items-center gap-[5px]'>
                                <p>P. Method</p>
                                <RiArrowDropDownLine />
                            </ul>

                        </div>
                        <div>
                            <input className='w-[350px] p-[10px]' type="text" id="searchInput" placeholder="Search by amount, payment  method  ...." />
                        </div>
                        {/* <RiArrowDropDownLine /> */}
                    </div>



                    <table className="table-container">
                        <thead>
                            <tr>
                                <th><input type="checkbox" /></th>
                                <th>PAYMENT</th>
                                <th>STATUS</th>
                                <th>AMOUNT</th>
                                <th>WITH METHOD</th>
                                <th>CREATION DATE</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- Add your table data here --> */}
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>Payment 1</td>
                                <td>Success</td>
                                <td>$100.00</td>
                                <td>Credit Card</td>
                                <td>2023-12-12</td>
                                <td><RiArrowDropDownLine /></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>Payment 2</td>
                                <td>Pending</td>
                                <td>$50.00</td>
                                <td>PayPal</td>
                                <td>2023-12-13</td>
                                <td><RiArrowDropDownLine /></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>Payment 3</td>
                                <td>Pending</td>
                                <td>$50.00</td>
                                <td>PayPal</td>
                                <td>2023-12-13</td>
                                <td><RiArrowDropDownLine /></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>Payment 4</td>
                                <td>Pending</td>
                                <td>$50.00</td>
                                <td>PayPal</td>
                                <td>2023-12-13</td>
                                <td><RiArrowDropDownLine /></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>Payment 4</td>
                                <td>Pending</td>
                                <td>$50.00</td>
                                <td>PayPal</td>
                                <td>2023-12-13</td>
                                <td><RiArrowDropDownLine /></td>
                            </tr>
                            {/* <!-- Add more rows as needed --> */}
                        </tbody>

                    </table>
                </div>
            </div>

        </div>
    )
}

export default MyWithdrawls
