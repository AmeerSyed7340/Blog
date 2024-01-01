import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function RetrieveUserBlog(){
    const navigate = useNavigate();

    function handleMyBlogs(){
        navigate('/myblogs');
    }
    return (
        <Button color='inherit' onClick={handleMyBlogs}>My Blogs</Button>
    );
}