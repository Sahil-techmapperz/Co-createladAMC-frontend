import React from 'react';
import { MdCheckCircle, MdCancel } from 'react-icons/md';

const TableComponent = ({ data }) => {
    return (
        <div className='shadow-md rounded-lg my-6 p-4 max-w-full overflow-x-auto'>
            <h2 className="text-xl md:text-2xl font-bold mb-4">New Clients Joining</h2>
            <div className="min-w-[320px]">
              <table className="w-full text-center">
                  <thead className="bg-gray-50">
                      <tr>
                          <th className="px-2 py-2 text-xs md:text-sm">Name</th>
                          <th className="px-2 py-2 text-xs md:text-sm">Value (CCL)</th>
                          <th className="px-2 py-2 text-xs md:text-sm">Ads Spent (CCL)</th>
                          <th className="px-2 py-2 text-xs md:text-sm">Refunds</th>
                      </tr>
                  </thead>
                  <tbody>
                      {data.map((item, index) => (
                          <tr key={index}>
                              <td className="border border-gray-300 px-2 py-2 text-xs md:text-sm">
                                  <div className='flex items-center space-x-2'>
                                      <img className='rounded-full w-12 h-12 md:w-14 md:h-14' src={item.profile_url || 'https://via.placeholder.com/150'} alt="Profile"/>
                                      <div className='flex flex-col'>
                                          <span>{item.name}</span>
                                          <span className="text-xs">Client ID- {item.clientId}</span>
                                      </div>
                                  </div>
                              </td>
                              <td className="border border-gray-300 px-2 py-2 text-xs md:text-sm">{item.value}</td>
                              <td className="border border-gray-300 px-2 py-2 text-xs md:text-sm">{item.adsSpent}</td>
                              <td className="border border-gray-300 px-2 py-2 text-xs md:text-sm">
                                  {item.refunds === '✓' ? (
                                      <div className='flex gap-1 items-center'>
                                          <MdCheckCircle className="text-green-500" />
                                          {item.refundsamount}
                                      </div>
                                  ) : item.refunds === 'A' ? (
                                      <div className='flex gap-1 items-center'>
                                          <MdCancel className="text-red-500" />
                                          {item.refundsamount}
                                      </div>
                                  ) : (
                                      item.refunds
                                  )}
                              </td>
                          </tr>
                      ))}
                  </tbody>
              </table>
            </div>
        </div>
    );
};

export default TableComponent;
