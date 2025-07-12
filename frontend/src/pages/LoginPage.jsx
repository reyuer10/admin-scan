import React from 'react'

function LoginPage() {
    return (
        <div className='h-screen w-full flex justify-center items-center'>
            <form className='w-[400px] border border-gray-300 p-4 space-y-4'>
                <div>
                    <p className='text-2xl font-bold'>Login</p>
                </div>
                <div className='space-y-2'>
                    <div className='flex flex-col w-full'>
                        <span>Username</span>
                        <input
                            className='outline-none border-none ring ring-shadow-300'
                            type="text" />
                    </div>
                    <div className='flex flex-col w-full'>
                        <span>Password</span>
                        <input
                            className='outline-none border-none ring ring-shadow-300'
                            type="text" />
                    </div>
                </div>
                <div>
                    <button
                        type='submit'
                        className='font-bold py-2 w-full bg-blue-500 text-white text-shadow text-shadow-black'
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
}

export default LoginPage