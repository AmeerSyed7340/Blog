import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function CreateBlog() {

    const navigate = useNavigate(); // Use the hook directly

    const goToWritePage = () => {
        navigate('/write');
    } 
    return (
        <>
            <Button color='inherit' onClick={goToWritePage}>Create Blog</Button>            
        </>
    );
}