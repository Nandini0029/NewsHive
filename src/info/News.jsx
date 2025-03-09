import axios from "axios";
import { useState, useEffect, useRef } from "react";

const News = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [sortField, setSortField] = useState("publishedAt");
    const [sortOrder, setSortOrder] = useState("desc");
    const [search, setSearch] = useState("");
    const observer = useRef();

    // Fetch Data Function
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

    // Debounce Function
    const debounce = (fn, delay) => {
        let timer;
        return (...args) => {
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => fn(...args), delay);
        };
    };

    const debouncedGetData = debounce(getData, 300);

    useEffect(() => {
        getData();
    }, []);

    const lastElementRef = (node) => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMore) {
                debouncedGetData();
            }
        });

        if (node) observer.current.observe(node);
    };

    // Handle Search
    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    // Handle Sorting
    const handleSort = (field) => {
        const order = sortField === field && sortOrder === "asc" ? "desc" : "asc";
        setSortField(field);
        setSortOrder(order);
    };

    // Filter & Sort Data
    const filteredData = data.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.repoter.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase())||
        item.content.toLowerCase().includes(search.toLowerCase())  
    );

    const sortedData = [...filteredData].sort((a, b) => {
        if (sortOrder === "asc") {
            return a[sortField] > b[sortField] ? 1 : -1;
        } else {
            return a[sortField] < b[sortField] ? 1 : -1;
        }
    });

    const handelDetail = (id)=>{
        console.log(id);
    };

 return (
<div className="p-6 bg-blue-50 min-h-screen">
    {/* Search Input */}
    <div className="mb-4 flex justify-center">
        <input
            type="text"
            placeholder="Search news..."
            value={search}
            onChange={handleSearch}
            className="w-full max-w-lg px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-400 bg-white text-gray-900 transition-all"
        />
    </div>

    {/* Table Container */}
    <div className="bg-white shadow-lg rounded-lg">
    <div className="overflow-hidden">
        <table className="w-full table-fixed border-collapse text-sm text-gray-700">
            {/* Table Header with Sorting */}
            <thead className="bg-blue-400 text-white sticky top-0 z-10">
                <tr>
                    {["title", "repoter", "category", "publishedAt", "editor"].map((field) => (
                        <th
                            key={field}
                            onClick={() => handleSort(field)}
                            className="px-4 py-3 w-[180px] truncate cursor-pointer hover:bg-blue-500 transition-all text-center"
                        >
                            {field.toUpperCase()} {sortField === field ? (sortOrder === "asc" ? "▲" : "▼") : ""}
                        </th>
                    ))}
                </tr>
            </thead>
        </table>
    </div>



        {/* Scrollable Table Body */}
        <div className="overflow-y-auto max-h-[600px]">
            <table className="w-full table-fixed border-collapse text-left text-sm text-gray-700">
                <tbody>
                    {sortedData.map((news, index) => (
                        // <tr
                        //     key={index}
                        //     onClick={() => { handelDetail(news._id); }}
                        //     ref={index === sortedData.length - 1 ? lastElementRef : null}
                        //     className="border-b border-gray-300 hover:bg-blue-100 transition-all cursor-pointer"
                        // >
                        //     <td className="px-4 py-3 w-[180px] truncate">{news.title}</td>
                        //     <td className="px-4 py-3 w-[140px] truncate">{news.repoter}</td>
                        //     <td className="px-4 py-3 w-[140px] truncate">{news.category}</td>
                        //     <td className="px-4 py-3 w-[140px]">{new Date(news.publishedAt).toLocaleDateString()}</td>
                        //     <td className="px-4 py-3 w-[140px] truncate">{news.editor}</td>
                        // </tr>
                        <tr
                            key={index}
                            onClick={() => { handelDetail(news._id); }}
                            ref={index === sortedData.length - 1 ? lastElementRef : null}
                            className="border-b border-gray-300 hover:bg-blue-100 transition-all cursor-pointer"
                        >
                            <td className="px-4 py-3 w-[600px]">
                            <div className="font-semibold text-base truncate">{news.title}</div>
                            <div className="mt-2 flex justify-between text-sm text-gray-700">
                                <span className="truncate">{news.repoter}</span>
                                <span className="truncate">{news.category}</span>
                                <span className="truncate">{news.editor}</span>
                            </div>
                                <div className="text-xs text-gray-500 text-right">{new Date(news.publishedAt).toLocaleDateString()}</div>
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
