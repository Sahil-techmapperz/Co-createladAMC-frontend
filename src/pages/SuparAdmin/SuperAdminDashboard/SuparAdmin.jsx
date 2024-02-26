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

  const tableData = [
    {
      name: 'John Doe',
      value: 85,
      image: 'url_to_image_1',
      studentId: 'S12345',
    }
  ];


  return (
    <>
      <div className='flex'>
        <div className="max-sm:hidden ">
          <SuperAdminSide />
        </div>
        <div className='w-[80%] ml-[30px] max-sm:ml-[0px]'>


          <div className="sm:hidden  ml-[10px]">  <MobileNav /> </div>
          <div className='max-sm:hidden'> <ClientNavbar Navtext={"Dashboard"} /> </div>
          <div className='md:h-[85vh] md:overflow-y-auto'>
            <div className='flex justify-between mt-[20px] w-[100%] max-sm:mt-[10px]'>
              <div className='flex justify-between w-[100%] max-sm:flex-col max-sm:gap-[10px]'>
                <div className='flex justify-between w-[45%]  text-white background1 max-sm:gap-0 h-[70px]  rounded-lg items-center max-sm:w-[350px] p-[5px]'>
                  <p className='m-[5px] max-sm:hidden font-normal'>Issued Reported By Client .....</p>
                  <p className='m-[5px] sm:hidden font-bold p-[12px]'>Issued Report.....</p>
                  <p className='m-[5px] font-bold p-[12px]'>20/12/2023</p>
                </div>

                <div className='flex w-[53%] p-[5px] text-white gap-[15px] justify-between items-center background2 rounded-lg h-[70px] max-sm:gap-0  max-sm:w-[350px]'>
                  <p className='m-[5px] max-sm:hidden font-normal p-[12px]'>Upcoming Workshop by Mentor</p>
                  <p className='m-[5px] sm:hidden font-bold p-[12px]'>Upcoming Mentor.....</p>
                  <p className='font-bold p-[12px]'>20/02/2024</p>
                  <button className='font-bold w-[140px] p-[12px]'><u>Set Reminder</u></button>
                </div>
              </div>

            </div>


            <div className='flex gap-[10px] w-[100%] justify-between mt-[20px] p-[0px] max-sm:flex-col max-sm:gap-[10px]'>

              <div className='flex shadow gap-[80px] p-4 h-[170px] rounded-lg'>
                <div className=' h-[200px]'>
                  <p>Session Revenue</p>
                  <p className='text-3xl mt-[20px] font-bold'>CCL20.4K</p>
                  <p className='mt-[20px]'>We have sold 123 items</p>
                </div>
                <div className='flex justify-center items-center'>
                  <img className='w-[80px] h-[80px]' src={Pichart} />

                </div>
              </div>
              <div className='flex shadow gap-[80px] p-4 h-[170px] rounded-lg'>
                <div className=' h-[200px]'>
                  <p>Session Revenue</p>
                  <p className='text-3xl mt-[20px] font-bold'>CCL20.4K</p>
                  <p className='mt-[20px]'>We have sold 123 items</p>
                </div>
                <div className='flex justify-center items-center'>
                  <img className='w-[80px] h-[80px]' src={Pichart} />

                </div>
              </div>
              <div className='flex shadow gap-[80px] p-4 h-[170px] rounded-lg'>
                <div className=' h-[200px]'>
                  <p>Session Revenue</p>
                  <p className='text-3xl mt-[20px] font-bold'>CCL20.4K</p>
                  <p className='mt-[20px]'>We have sold 123 items</p>
                </div>
                <div className='flex justify-center items-center'>
                  <img className='w-[80px] h-[80px]' src={Pichart} />

                </div>
              </div>





            </div>


            <div className='flex w-[100%]  mt-[20px] justify-between p-[8px] max-sm:flex-col max-sm:gap-[10px]'>
              <img className='shadow-lg w-[60%]' src={Image2} />
              <img className='shadow-lg' src={Image3} />
            </div>


            {/* second part */}
            <div className='flex bg-white justify-between p-[8px] max-sm:hidden'>

              <div className='w-[57%] shadow-lg p-[15px]'>
                <div className='flex justify-between'>
                  <p className='text-xl font-bold'>Top Session Services  (All)</p>
                  <p className='text-xl font-bold'>Weak</p>
                </div>

                <div className='flex justify-between mt-[20px] rounded-lg bg-gray-100  p-[25px]'>
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
                    <p className='font-bold '>Mentor</p>
                    <ul className='flex justify-between pt-[10px] gap-[10px]'>
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
      </div>
    </>



  )
}

export default SuparAdmin;
