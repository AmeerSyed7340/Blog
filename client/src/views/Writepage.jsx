import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';
import CreateBlogDialog from '../components/CreateBlogDialog';
import { useNavigate } from 'react-router-dom';

export default function WritePage() {
    const { username } = useAuth();
    const [dialogOpen, setDialogOpen] = useState(true);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const navigate = useNavigate();

    const goToHomePage = () =>{
        navigate('/');
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
                goToHomePage();
            } else {
                console.log('Server responded with status:', response.status);
            }

        } catch (e) {

            console.error(e);
        }
    }
    return (
        <>
            <CreateBlogDialog
                open={dialogOpen}
                handleClose={handleClose}
                setContent={setContent}
                setTitle={setTitle}
                title={title}
                content={content}
                endpoint_call={endpoint_call}
            />
        </>
    )
}