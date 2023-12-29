import Button from '@mui/material/Button';
import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';

export default function CreateBlog() {
    const { username } = useAuth();
    

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
                    title: "I like big",
                    content: "butts and i cannot lie"
                })
            });
            const data = await response.json();
            if (response.status == 200) {
                console.log(response, data);     
                  
            } else {
                console.log('Server responded with status:', response.status);
            }

        } catch (e) {

            console.error(e);
        }
    }

    function handleSubmit(){
        console.log(username);
    }
    return (
        <Button color='inherit' onClick={endpoint_call}>Create Blog</Button>
    );
}