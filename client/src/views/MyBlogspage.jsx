import { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function MyBlogspage() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const {username} = useAuth(); //global access to username to send as queryparam

    //useeffect to mount right at the beginning.
    useEffect(() => {
        const fetchData = async () => {
            try {               
                const response = await fetch(`http://127.0.0.1:3000/api/blogs/read?username=${encodeURIComponent(username)}`,{
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setBlogs(data.blog);
            }
            catch (e) {
                console.error('Error fetching data:', error);
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        };

        fetchData();
        console.log(username);
    }, [username]);
    
    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error: {error}</div>;
    }

    function handleClick(_id, username, title){
        navigate(`/blog/${_id}/${username}/${title}`);
    }
    return (
        <div>
            {blogs.map(blog => (
                <Card key={blog._id} sx={{ marginBottom: 2, cursor:'pointer', maxHeight: 92 }} onClick={()=>handleClick(blog._id, blog.username, blog.title)}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {blog.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {blog.content}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}