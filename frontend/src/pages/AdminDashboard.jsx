import React from 'react'

function AdminDashboard() {
    return (
        <div className='p-4 w-full'>
            <div>
                <p className='font-bold text-2xl'>USER INFO MANAGER</p>
            </div>
            <div>
                <div className='bg-blue-500 p-2 text-white font-bold'>
                    <p>Add User</p>
                </div>
                <div>
                    <input
                        className='w-[350px] border p-3 mr-6 my-3'
                        placeholder='Letter Type'
                        type="text" />
                    <input
                        className='w-[350px] border p-3 mr-6 my-3'
                        placeholder='Notification Type'
                        type="text" />
                    <input
                        className='w-[350px] border p-3 mr-6 my-3'
                        placeholder='Notification Number'
                        type="text" />
                    <input
                        className='w-[350px] border p-3 mr-6 my-3'
                        placeholder='Notification Date'
                        type="text" />
                    <input
                        className='w-[350px] border p-3 mr-6 my-3'
                        placeholder='Employer Name'
                        type="text"
                    />
                    <input
                        className='w-[350px] border p-3 mr-6 my-3'
                        placeholder='Foregn Worker Name'
                        type="text"
                    />
                    <input
                        className='w-[350px] border p-3 mr-6 my-3'
                        placeholder='Position'
                        type="text"
                    />
                </div>
                <div>
                    <button
                        className='bg-blue-500 text-white font-bold px-4 py-2'
                        type='button'>
                        Add User
                    </button>
                </div>
            </div>
            <div className='border'>
                <div className='bg-black text-white p-2 font-bold border-b border-b-gray-500'>
                    USER Records
                </div>
                <div className=''>
                    <table className='w-full'>
                        <thead className=' bg-black text-white'>
                            <tr className='text-center'>
                                <th>Notification Type</th>
                                <th>Notification Number</th>
                                <th> Notification Date</th>
                                <th>Employer Name</th>
                                <th>Foreign Worker Name</th>
                                <th>Position</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard