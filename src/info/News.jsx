const  axios  = require("axios");
const { useState } = require("react");
const { useEffect } = require("react");


const News = ()=>{
    const [data,setData] = useState([]);
    const [page,setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [sortField, setSortField] = useState("publishedAt");
    const [sortOrder, setSortOrder] = useState("desc");
    const observer = useRef();
    useEffect(()=>{
        try
        {
            const getData = async()=>{
                if (loading || !hasMore) return;
                const res = await axios.get("/newsData");
                if(res.status == 200)
                {
                    setPage((page)=>{
                        let temp = page;
                        temp = temp + 1;
                        return temp;
                    });

                    setData((data)=>{
                        let temp = [...data];
                        return [...temp,...res.data.data];
                    });
                    if (res.data.data.length === 0 || data.length >= res.data.total) {
                        setHasMore(false);
                    }
                }
                else
                {
                    console.log(res);
                }
                setLoading(false);
            };
            getData();
        }
        catch(error)
        {
            console.log(error);
        }
    },[]);

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

    const debounce = (fn, delay) => {
        let timer;
        return (...args) => {
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => fn(...args), delay);
        };
    };
    
    const debouncedGetData = debounce(getData, 300);
    
    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleSort = (field) => {
        const order = sortField === field && sortOrder === "asc" ? "desc" : "asc";
        setSortField(field);
        setSortOrder(order);
    };

    const filteredData = data.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.repoter.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase())
    );

    const sortedData = [...filteredData].sort((a, b) => {
        if (sortOrder === "asc") {
            return a[sortField] > b[sortField] ? 1 : -1;
        } else {
            return a[sortField] < b[sortField] ? 1 : -1;
        }
    });

    return(<>
<div className="p-4">
            <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={handleSearch}
                className="border p-2 mb-4 w-full"
            />
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        {[
                            "title",
                            "content",
                            "repoter",
                            "category",
                            "publishedAt",
                            "editor"
                        ].map((field) => (
                            <th
                                key={field}
                                onClick={() => handleSort(field)}
                                className="border p-2 cursor-pointer"
                            >
                                {field.toUpperCase()} {sortField === field ? (sortOrder === "asc" ? "▲" : "▼") : ""}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((news, index) => (
                        <tr key={index} onClick={()=>{showDetail(news.media.path);}} ref={index === data.length - 1 ? lastElementRef : null} className="border">
                            <td className="border p-2">{news.title}</td>
                            <td className="border p-2">{news.content.substring(0, 50)}...</td>
                            <td className="border p-2">{news.repoter}</td>
                            <td className="border p-2">{news.category}</td>
                            <td className="border p-2">{new Date(news.publishedAt).toLocaleDateString()}</td>
                            <td className="border p-2">{news.editor}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>);
};