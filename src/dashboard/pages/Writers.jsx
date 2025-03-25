import React, { useEffect, useState } from "react";
import axios from "axios";

function WriterList() {
  const [writers, setWriters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWriters = async () => {
      try {
        const response = await axios.get("https://newshive-express-1.onrender.com/authors", {
          headers: {
            'Authorization': localStorage.getItem("token"),
            'Content-Type': 'application/json'
          }
        });
        setWriters(response.data);
      } catch (err) {
        setError("Failed to fetch writers. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchWriters();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white p-6 rounded-lg shadow-md border border-[#E5E5E5]">
        <h2 className="text-2xl font-bold mb-4">Writers</h2>

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <table className="table-auto w-full border-collapse">
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
              {writers.length > 0 ? (
                writers.map((writer) => (
                  <tr key={writer._id} className="text-center">
                    <td className="px-4 py-2 border border-gray-300">{writer._id}</td>
                    <td className="px-4 py-2 border border-gray-300">{writer.name}</td>
                    <td className="px-4 py-2 border border-gray-300">{writer.email}</td>
                    <td className="px-4 py-2 border border-gray-300">{writer.category}</td>
                    <td className="px-4 py-2 border border-gray-300">{writer.role}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center text-gray-500 py-4">
                    No writers found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default WriterList;