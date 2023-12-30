import Button from '@mui/material/Button';
import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';
import CreateBlogDialog from './CreateBlogDialog';
import { useNavigate } from 'react-router-dom';

export default function CreateBlog({}) {
    const { username } = useAuth();
    const [dialogOpen, setDialogOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const navigate = useNavigate(); // Use the hook directly

    const goToWritePage = () => {
        navigate('/write');
    }
    const handleClickOpen = () => {
        setDialogOpen(true);
    };

    const handleClose = () => {
        setDialogOpen(false);
    };

    async function endpoint_call() {
        //console.log(Username, Password)
        try {
            const response = await fetch("http://127.0.0.1:3000/api/blogs/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username,
                    title: title,
                    content: content
                })
            });
            const data = await response.json();
            if (response.status == 200 || response.status == 201) {
                console.log(response, data);
                handleClose();
            } else {
                console.log('Server responded with status:', response.status);                
            }

        } catch (e) {

            console.error(e);
        }
    }

    function handleSubmit() {
        console.log(username);
    }
    return (
        <>
            <Button color='inherit' onClick={goToWritePage}>Create Blog</Button>
            
        </>
    );
}