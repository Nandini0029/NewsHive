import axios from "axios";
import { useState, useEffect, useRef } from "react";

const News = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [search, setSearch] = useState("");
    const observer = useRef();

    const getData = async () => {
        if (loading || !hasMore) return;
        setLoading(true);
        try {
            const res = await axios.get(`https://newshive-express-1.onrender.com/newsData?page=${page}`);
            if (res.status === 200) {
                setData((prevData) => [...prevData, ...res.data.data]);
                setPage((prevPage) => prevPage + 1);
                if (res.data.data.length === 0 || data.length >= res.data.total) {
                    setHasMore(false);
                }
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const lastElementRef = (node) => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMore) {
                getData();
            }
        });

        if (node) observer.current.observe(node);
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const filteredData = data.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase()) ||
        item.content.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-6 bg-blue-50 min-h-screen">
            <div className="mb-4 flex justify-center">
                <input
                    type="text"
                    placeholder="Search news..."
                    value={search}
                    onChange={handleSearch}
                    className="w-full max-w-lg px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-400 bg-white text-gray-900"
                />
            </div>

            <div className="bg-white shadow-lg rounded-lg">
                <div className="overflow-hidden">
                    <table className="w-full table-fixed border-collapse text-sm text-gray-700">
                        <thead className="bg-blue-400 text-white sticky top-0 z-10">
                            <tr>
                                <th className="px-4 py-3 w-[300px] text-center">Title</th>
                                <th className="px-4 py-3 w-[150px] text-center">Image</th>
                                <th className="px-4 py-3 w-[150px] text-center">Category</th>
                                <th className="px-4 py-3 w-[150px] text-center">Editor</th>
                                <th className="px-4 py-3 w-[150px] text-center">Date</th>
                                <th className="px-4 py-3 w-[100px] text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((news, index) => (
                                <tr 
                                    key={index} 
                                    ref={index === filteredData.length - 1 ? lastElementRef : null}
                                    className="border-b border-gray-300 hover:bg-blue-100">
                                    <td className="px-4 py-3 truncate">{news.title}</td>
                                    <td className="px-4 py-3">
                                        <img 
                                            src={news.media?.path ? `https://your-image-base-url.com/${news.media.path}` : 'https://via.placeholder.com/150'} 
                                            alt={news.title} 
                                            className="w-24 h-16 object-cover rounded-md"
                                        />
                                    </td>
                                    <td className="px-4 py-3 truncate text-center">{news.category}</td>
                                    <td className="px-4 py-3 truncate text-center">{news.editor || "N/A"}</td>
                                    <td className="px-4 py-3 text-center">{new Date(news.publishedAt).toLocaleDateString()}</td>
                                    <td className="px-4 py-3 text-center">
                                        <span className="inline-block w-3 h-3 rounded-full" style={{ backgroundColor: '#10B981' }}></span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default News;
