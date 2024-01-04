import { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

// Use DeleteOutline for an alternative style

export default function MyBlogspage() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { username } = useAuth(); //global access to username to send as queryparam
    //const [title, setTitle] = useState('');

    //useeffect to mount right at the beginning.
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${apiBaseUrl}/api/blogs/read?username=${encodeURIComponent(username)}`, {
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

    function handleClick(_id, username, title) {
        navigate(`/blog/${_id}/${username}/${title}`);
    }



    async function handleDelete(title, id) {

        const deleteItem = (itemId) => {
            const updatedItems = blogs.filter(blog => blog._id !== itemId);
            setBlogs(updatedItems);
        };

        const deleteData = async () => {
            try {
                const response = await fetch(`${apiBaseUrl}/api/blogs/delete`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username: `${username}`,
                        title: `${title}`
                    })
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data);
                deleteItem(id);
            }
            catch (error) {
                console.error('Error fetching data:', error);
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        };

        deleteData();
        console.log(username);
    }

    return (
        <div>
            {blogs.map(blog => (
                <Card key={blog._id} sx={{ marginBottom: 2, cursor: 'pointer', maxHeight: 92 }} >
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {blog.title}
                            <IconButton onClick={() => handleDelete(blog.title, blog._id)} aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </Typography>
                        <Typography variant="body2" color="text.secondary" onClick={() => handleClick(blog._id, blog.username, blog.title)}>
                            {blog.content}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}