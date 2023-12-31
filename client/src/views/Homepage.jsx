import { useEffect, useState } from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    //useeffect to mount right at the beginning.
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://127.0.0.1:3000/api/blogs/read");
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data.blog);
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

    }, []);

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
                <Card key={blog._id} sx={{ marginBottom: 2, cursor:'pointer' }} onClick={()=>handleClick(blog._id, blog.username, blog.title)}>
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
    )
}