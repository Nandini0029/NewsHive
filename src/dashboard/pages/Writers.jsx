// import React from 'react';

// const Writers = () => {
//     return (
//         <div>
//             <h1>Hello Writers</h1>
//         </div>
//     );
// };

import React from "react";

function WriterList() {
  const writers = [
    {
      id: 1,
      name: "Amit Sharma",
      category: "News",
      email: "amit.sharma@gmail.com",
      role: "writer",
    },
    {
      id: 2,
      name: "Priya Singh",
      category: "Sports",
      email: "priya.singh@gmail.com",
      role: "writer",
    },
    {
      id: 3,
      name: "Rajesh Kumar",
      category: "News",
      email: "rajesh.kumar@gmail.com",
      role: "writer",
    },
    {
      id: 4,
      name: "Sneha Verma",
      category: "Entertainment",
      email: "sneha.verma@gmail.com",
      role: "writer",
    },
    {
      id: 5,
      name: "Vikas Rao",
      category: "Entertainment",
      email: "vikas.rao@gmail.com",
      role: "writer",
    },
    {
      id: 6,
      name: "Anjali Mehta",
      category: "Sports",
      email: "anjali.mehta@gmail.com",
      role: "writer",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white p-6 rounded-lg shadow-md border border-[#E5E5E5]">
        <h2 className="text-2xl font-bold mb-4">List of Writers</h2>
        <table className="table-auto w-full border-collapse 2px">
          <thead className="text-white">
            <tr className="bg-indigo-500">
              <th className="px-4 py-2 border border-gray-300">ID</th>
              <th className="px-4 py-2 border border-gray-300">Name</th>
              <th className="px-4 py-2 border border-gray-300">Email</th>
              <th className="px-4 py-2 border border-gray-300">Category</th>
              <th className="px-4 py-2 border border-gray-300">Role</th>
            </tr>
          </thead>
          <tbody>
            {writers.map((writer) => (
              <tr key={writer.id} className="text-center">
                <td className="px-4 py-2 border border-gray-300">
                  {writer.id}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {writer.name}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {writer.email}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {writer.category}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {writer.role}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WriterList;
