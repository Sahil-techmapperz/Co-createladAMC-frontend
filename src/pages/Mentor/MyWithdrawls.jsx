import React, { useMemo, useState, useEffect } from 'react';
import { useTable } from 'react-table';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Sidebar from '../../components/Sidebar.jsx';
import Navbar from '../../components/Navbar.jsx';
import './../../CSS/MyWithdrawls.css';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import Modal from 'react-modal';



// StatusPill component defined directly within the MyWithdrawls component file
const StatusPill = ({ value }) => {
    let statusColor = value === 'Success' ? 'green'
        : value === 'Pending' ? 'orange'
            : value === 'Declined' ? 'red'
                : 'gray'; // Default color

    return (
        <span style={{
            color: 'white',
            backgroundColor: statusColor,
            padding: '5px 10px',
            borderRadius: '15px',
            display: 'inline-block',
            textTransform: 'capitalize',
        }}>
            {value}
        </span>
    );
};


const MyWithdrawls = () => {
    const initialData = useMemo(() => [
        { id: 1, payment: 'Payment 1', status: 'Success', amount: '$100.00', method: 'Credit Card', date: '2023-12-12' },
        { id: 2, payment: 'Payment 2', status: 'Pending', amount: '$50.00', method: 'PayPal', date: '2023-12-13' },
        { id: 3, payment: 'Payment 3', status: 'Declined', amount: '$75.00', method: 'Debit Card', date: '2023-12-14' },
        { id: 4, payment: 'Payment 4', status: 'Success', amount: '$200.00', method: 'Credit Card', date: '2023-12-15' },
        { id: 5, payment: 'Payment 5', status: 'Pending', amount: '$150.00', method: 'Bank Transfer', date: '2023-12-16' },
        { id: 6, payment: 'Payment 6', status: 'Declined', amount: '$45.00', method: 'PayPal', date: '2023-12-17' },
        { id: 7, payment: 'Payment 7', status: 'Success', amount: '$120.00', method: 'Credit Card', date: '2023-12-18' },
        { id: 8, payment: 'Payment 8', status: 'Pending', amount: '$30.00', method: 'Debit Card', date: '2023-12-19' },
        { id: 9, payment: 'Payment 9', status: 'Declined', amount: '$85.00', method: 'PayPal', date: '2023-12-20' },
        { id: 10, payment: 'Payment 10', status: 'Success', amount: '$95.00', method: 'Bank Transfer', date: '2023-12-21' },
        { id: 11, payment: 'Payment 11', status: 'Pending', amount: '$150.00', method: 'Bank Transfer', date: '2023-12-16' },
        { id: 12, payment: 'Payment 12', status: 'Declined', amount: '$45.00', method: 'PayPal', date: '2023-12-17' },
        { id: 13, payment: 'Payment 13', status: 'Success', amount: '$120.00', method: 'Credit Card', date: '2023-12-18' },
        { id: 14, payment: 'Payment 14', status: 'Pending', amount: '$30.00', method: 'Debit Card', date: '2023-12-19' },
        { id: 15, payment: 'Payment 15', status: 'Declined', amount: '$85.00', method: 'PayPal', date: '2023-12-20' },
        { id: 16, payment: 'Payment 16', status: 'Success', amount: '$95.00', method: 'Bank Transfer', date: '2023-12-21' },
    ], []);


    // Updated columns definition with the custom StatusPill component
    const columns = useMemo(() => [
        { Header: 'PAYMENT ID', accessor: 'payment' },
        {
            Header: 'STATUS',
            accessor: 'status',
            Cell: ({ value }) => <StatusPill value={value} />, // Use the custom renderer
        },
        { Header: 'AMOUNT', accessor: 'amount' },
        { Header: 'METHOD', accessor: 'method' },
        { Header: 'DATE', accessor: 'date' },
    ], []);

    // States for filters
    const [selectedStatus, setSelectedStatus] = useState({ value: 'all', label: 'All Statuses' });
    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [selectedMethod, setSelectedMethod] = useState({ value: 'all', label: 'All Payment Methods' });

    const [filteredData, setFilteredData] = useState(initialData);

    // Options for filters
    const statusOptions = [
        { value: 'all', label: 'All Statuses' },
        { value: 'success', label: 'Success' },
        { value: 'pending', label: 'Pending' },
        { value: 'declined', label: 'Declined' },
        // Add more status options as needed
    ];

    const methodOptions = useMemo(() => [
        { value: 'all', label: 'All Payment Methods' }, // Prepend an option for all methods
        { value: 'Credit Card', label: 'Credit Card' },
        { value: 'PayPal', label: 'PayPal' },
        // Add more methods as needed
    ], []);

    useEffect(() => {
        const lowercasedFilter = searchInput.toLowerCase();
        const filtered = initialData.filter(item => {
            const date = new Date(item.date);
            const startDateCheck = startDate ? date >= startDate : true;
            const endDateCheck = endDate ? date <= endDate : true;
            const statusCheck = selectedStatus.value === 'all' || item.status.toLowerCase() === selectedStatus.value;
            const methodCheck = selectedMethod.value === 'all' || item.method === selectedMethod.value;
            const searchCheck = item.payment.toLowerCase().includes(lowercasedFilter) ||
                item.amount.toLowerCase().includes(lowercasedFilter) ||
                item.method.toLowerCase().includes(lowercasedFilter) ||
                item.date.includes(lowercasedFilter);

            return startDateCheck && endDateCheck && statusCheck && methodCheck && searchCheck;
        });
        setFilteredData(filtered);
    }, [selectedStatus, searchInput, startDate, endDate, selectedMethod, initialData]);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data: filteredData });






    // const [searchInput, setSearchInput] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [coin, setCoin] = useState('');
    const [moneyAmount, setMoneyAmount] = useState('');
    const [bankDetails, setBankDetails] = useState(false);
    const [bankName, setBankName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');



    const handleMoneyAmountChange = (e) => {
        const enteredAmount = e.target.value;
        const calculatedAmount = enteredAmount * 10;
        setMoneyAmount(calculatedAmount);
    };

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleWithdrawal = () => {
        // Add your withdrawal logic here
        console.log('Withdrawal:', coin, moneyAmount, bankName, accountNumber);
        closeModal();
    };


    const handleAddBankDetails = () => {
        setBankDetails(true);
    };

    const handleCoinClick = () => {
        const coinValue = parseFloat(coin);
        if (!isNaN(coinValue)) {
            const amount = coinValue * 10;
            setMoneyAmount(amount.toString());
        }
    };

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'White',
            minWidth: '300px',
            padding: '20px',
            borderRadius: '5px',
            border: 'none',
            boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
        },
    };




    return (
        <div className='flex gap-[30px]'>
            <div className="max-sm:hidden"><Sidebar liname={"My Withdrawal"} /></div>
            <div className='w-full h-[100vh] md:overflow-y-hidden mr-[12px] py-[15px]'>
                <Navbar Navtext={"My Withdrawal"} />
                <div className='m-[20px] text-[18px] font-[600]'>
                  <Link to={"/"}>Dashboard</Link> &gt; My Withdrawal
                </div>
                <div className='md:h-[80vh] mt-[10px] md:overflow-x-auto max-md:px-[10px]'>
                    <div className='mywithdral_payment flex max-md:gap-2 max-md:flex-col md:justify-between ' >

                        <div className='grid md:grid-cols-2 grid-cols-1 md:gap-2 gap-1'>
                            <div className="filter-group">
                                <div className="filter-label">Status:</div>
                                <Select
                                    options={statusOptions}
                                    value={selectedStatus}
                                    onChange={setSelectedStatus}
                                />
                            </div>

                            <div className="filter-group">
                                <div className="filter-label">Payment Method:</div>
                                <Select
                                    options={methodOptions}
                                    value={selectedMethod}
                                    onChange={setSelectedMethod}
                                />
                            </div>

                            <div className="filter-group">
                                <div className="filter-label">Start Date:</div>
                                <DatePicker
                                    selected={startDate}
                                    onChange={date => setStartDate(date)}
                                    selectsStart
                                    startDate={startDate}
                                    endDate={endDate}
                                    placeholderText="Start Date"
                                    className='border rounded-md p-2 '
                                />
                            </div>

                            <div className="filter-group">
                                <div className="filter-label">End Date:</div>
                                <DatePicker
                                    selected={endDate}
                                    onChange={date => setEndDate(date)}
                                    selectsEnd
                                    startDate={startDate}
                                    endDate={endDate}
                                    minDate={startDate}
                                    placeholderText="End Date"
                                    className='border rounded-md p-2 max-md:w-full'
                                />
                            </div>
                        </div>



                        <div className='flex mt-3 max-sm:flex-col gap-2 md:gap-[20px] max-md:mb-2'>
                        <input
                                type="text"
                                value={searchInput}
                                onChange={e => setSearchInput(e.target.value)}
                                placeholder="Search by amount, payment method..."
                                className='border rounded-md p-2 w-[200px] h-fit max-md:w-full'
                            />


                            <button className='w-[150px] p-[5px] border rounded text-white bg-blue-500 h-fit' onClick={openModal}>Withdrawal</button>
                            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
                                <FaTimes onClick={closeModal} size={25} style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }} />
                                <h2 style={{ color: 'black' }}>Withdrawal</h2>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
                                    <label style={{ color: 'black', marginBottom: '5px' }}>Coin:</label>
                                    <input placeholder='Enter CCL Coin' type="text" value={coin} onChange={(e) => setCoin(e.target.value)} onClick={handleCoinClick} style={{ padding: '5px', borderRadius: '5px', border: '1px solid black', width: '80%', marginBottom: '10px' }} />
                                    <label style={{ color: 'black', marginBottom: '5px' }}>Money Amount:</label>
                                    <input placeholder='Total Amount' type="text" value={moneyAmount} onChange={handleMoneyAmountChange} style={{ padding: '5px', borderRadius: '5px', border: '1px solid black', width: '80%', marginBottom: '10px' }} />
                                    {bankDetails && (
                                        <>
                                            <label style={{ color: 'black', marginBottom: '5px' }}>Bank Name:</label>
                                            <input  type="text" value={bankName} onChange={(e) => setBankName(e.target.value)} style={{ padding: '5px', borderRadius: '5px', border: '1px solid black', width: '80%', marginBottom: '10px' }} />
                                            <label style={{ color: 'black', marginBottom: '5px' }}>Account Number:</label>
                                            <input type="text" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} style={{ padding: '5px', borderRadius: '5px', border: '1px solid black', width: '80%', marginBottom: '10px' }} />
                                        </>
                                    )}
                                    {!bankDetails && (
                                        <button onClick={handleAddBankDetails} style={{ backgroundColor: 'black', color: 'white', padding: '5px 10px', borderRadius: '5px', border: 'none', cursor: 'pointer', marginTop: '20px' }}>Add Bank Details</button>
                                    )}
                                    <button onClick={handleWithdrawal} style={{ backgroundColor: 'black', color: 'white', padding: '5px 10px', borderRadius: '5px', border: 'none', cursor: 'pointer', marginTop: '20px' }}>Withdrawal</button>
                                </div>
                            </Modal>



                            
                        </div>
















                        {/* <div>

                            <button className='w-[150px] p-[5px] border rounded  text-white bg-blue-500'>Withdrawal</button>
                            <input
                                type="text"
                                value={searchInput}
                                onChange={e => setSearchInput(e.target.value)}
                                placeholder="Search by amount, payment method..."
                                style={{ padding: '10px', width: '350px' }}
                            />
                        </div> */}

                    </div>

                    <table {...getTableProps()} className='md:m-[20px]' >
                        <thead>
                            {headerGroups.map(headerGroup => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map(column => (
                                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {rows.map(row => {
                                prepareRow(row);
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map(cell => {
                                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                                        })}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default MyWithdrawls;
