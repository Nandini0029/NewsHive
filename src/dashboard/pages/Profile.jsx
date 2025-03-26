import React from 'react';

const Profile = () => {
    return (
        <div className='w-full grid grid-cols-2 gap-x-6 mt-5'>
            {/* Profile Section */}
            <div className='bg-white gap-x-3 p-6 rounded flex justify-center items-center'>
                <div>
                    {/* Displaying Female Admin SVG */}
                    <img
                        src="https://img.icons8.com/glyph-neue/64/admin-settings-female.png" 
                        alt="Admin Avatar"
                        className="w-[150px] h-[150px] rounded-full border-2 border-gray-300"
                    />
                </div>
                <div className='text-[#404040] flex flex-col gap-y-1 justify-center items-start'>
                    <span><strong>Name:</strong> Nandini Kapil</span>
                    <span><strong>Email:</strong> nandini@gmail.com</span>
                    <span><strong>Category:</strong> All</span>
                    <span><strong>Role:</strong> Admin</span>
                </div>
            </div>
        </div>
    );
}

export default Profile;