import React from 'react'
import Sidebar from '../../../components/Sidebar'
import ClientNavbar from '../../MentorClient/ClientNavbar/ClientNavbar'
import Pichart from '../../../assets/Group 268.png'
import Image1 from '../../../assets/Ellipse 17.png'
import Image2 from '../SuperAdminAssets/Group294.png'
import Image3 from '../SuperAdminAssets/Group293.png'
import './suparAdmin.css'
import MobileNav from '../../../components/Mobile/MobileNav'
import SuperAdminSide from '../SuperAdminSide/SuperAdminSide'

const SuparAdmin = () => {

  // Sample data for the table
  const tableData = [
    {
      name: 'John Doe',
      value: 85,
      image: 'url_to_image_1',
      studentId: 'S12345',
    }

    // Add more rows as needed
  ];


  return (
    <>
      <div className='flex'>
        <div className="max-sm:hidden ">
          <SuperAdminSide />
        </div>
        <div className='w-[100%] ml-[30px] max-sm:ml-[0px]'>


          <div className="sm:hidden  ml-[10px]">  <MobileNav /> </div>
          <div className='max-sm:hidden'> <ClientNavbar /> </div>

          <div className='flex justify-between mt-[60px] w-[100%] max-sm:mt-[10px]'>
            <div className='flex justify-between w-[100%] max-sm:flex-col max-sm:gap-[10px]'>
              <div className='flex justify-between  text-white background1 max-sm:gap-0 h-[70px]  rounded-lg items-center max-sm:w-[350px] p-[5px]'>
                <p className='m-[5px] max-sm:hidden font-normal'>Issued Reported By Client .....</p>
                <p className='m-[5px] sm:hidden font-normal'>Issued Report.....</p>
                <p className='m-[5px] font-normal'>20/12/2023</p>
              </div>

              <div className='flex p-[5px] text-white gap-[15px] justify-between items-center background2 rounded-lg h-[70px] max-sm:gap-0  max-sm:w-[350px]'>
                <p className='m-[5px] max-sm:hidden font-normal'>Upcoming Workshop by Mentor</p>
                <p className='m-[5px] sm:hidden font-normal'>Upcoming Mentor.....</p>
                <p className='font-normal'>20/02/2024</p>
                <p className='font-normal'>Set Reminder</p>
              </div>
            </div>

          </div>


          <div className='flex w-[100%] justify-between mt-[20px] p-[10px] max-sm:flex-col max-sm:gap-[10px]'>
            <div className='flex shadow-lg gap-[50px] p-4 h-[170px] rounded-lg'>
              <div className=' h-[200px]'>
                <p>Session Revenue</p>
                <p className='text-3xl font-bold'>CCL20.4K</p>
                <p>We have sold 123 items</p>
              </div>
              <div>
                <img className='w-[100px] h-[100px]' src={Pichart} />

              </div>
            </div>
            <div className='flex shadow-lg gap-[50px] p-4 h-[170px] rounded-lg'>
              <div className=' h-[200px]'>
                <p>Session Revenue</p>
                <p className='text-3xl font-bold'>CCL20.4K</p>
                <p>We have sold 123 items</p>
              </div>
              <div>
                <img className='w-[100px] h-[100px]' src={Pichart} />

              </div>
            </div>
            <div className='flex shadow-lg gap-[50px] p-4 h-[170px] rounded-lg'>
              <div className=' h-[200px]'>
                <p>Session Revenue</p>
                <p className='text-3xl font-bold'>CCL20.4K</p>
                <p>We have sold 123 items</p>
              </div>
              <div>
                <img className='w-[100px] h-[100px]' src={Pichart} />

              </div>
            </div>



          </div>


          <div className='flex w-[100%]  justify-between p-[8px] max-sm:flex-col max-sm:gap-[10px]'>
            <img className='shadow-lg' src={Image2} />
            <img className='shadow-lg' src={Image3} />
          </div>


          {/* second part */}
          <div className='flex justify-between p-[8px] max-sm:hidden'>

            <div className='w-[800px] shadow-lg p-[15px]'>
              <div className='flex justify-between'>
                <p className='text-xl font-bold'>Top Session Services  (All)</p>
                <p className='text-xl font-bold'>Weak</p>
              </div>

              <div className='flex justify-between shadow-lg p-[10px]'>
                <div>
                  <p className='font-bold'>Session with XYZ </p>
                  <ul>
                    <div className='flex justify-between gap-[30px] '>
                      <li>Class Time :</li>
                      <li className='font-bold' >06:45 - 07:15</li>
                    </div>
                    <div className='flex justify-between gap-[30px]'>
                      <li>Class Day :</li>
                      <li className='font-bold'>Wednesday, 25 Oct</li>
                    </div>
                    <div className='flex justify-between gap-[30px]'>
                      <li>Scheduled Time : </li>
                      <li className='font-bold'>04:23:12:23</li>
                    </div>

                  </ul>
                </div>
                <div>
                  <p className='font-bold'>Mentor</p>
                  <ul className='flex justify-between gap-[10px]'>
                    <img src={Image1} />
                    <li className='font-bold'>Kaiya Workman</li>
                  </ul>
                </div>
                <div>
                  <p className='font-bold'>Members</p>
                  <ul className='flex justify-between'>
                    <img src={Image1} />

                    <li className='font-bold'>10+ More</li>
                  </ul>
                </div>

              </div>
            </div>

            <div className='w-[500px] shadow-lg'>
              <p>New Joinee Clients</p>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((rowData, index) => (
                    <tr className='flex col-span-2' key={index}>
                      <td>
                        {/* <img src={rowData.image} alt={`Image of ${rowData.name}`} style={{ width: '50px', height: '50px' }} /> */}
                        <img src={Image1} />
                      </td>
                      <td>
                        <td>Rayna Torff</td> <br />
                        <td>Student ID 956123</td>
                        {/* {rowData.name}
                        {rowData.value} */}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>


          </div>
        </div>
      </div>
    </>



  )
}

export default SuparAdmin
