import Button from '@mui/material/Button';
import { useAuth } from '../contexts/AuthContext';

export default function CreateBlog(){
    const {username} = useAuth();
    function handleSubmit(){
        console.log(`hello ${username}`);
    }
    return (
        <Button color='inherit' onClick={handleSubmit}>Create Blog</Button>
    );
}