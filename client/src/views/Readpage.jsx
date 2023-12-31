import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { Typography, Card, CardContent, Grid } from '@mui/material';

export default function ReadPage() {
    const location = useLocation();
    const pathSegments = location.pathname.split('/');
    const secondSegment = pathSegments[2] || 'Default Value';
    const urlThirdSegment = pathSegments[3] || 'Default Value';
    const urlFourthSegment = pathSegments[4] || 'Default Value';
    //decode any url componenet with spaces
    const thirdSegment = decodeURIComponent(urlThirdSegment);
    const fourthSegment = decodeURIComponent(urlFourthSegment);

    const [title, setTitle] = useState('');
    const [username, setUsername] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        async function endpoint_call() {
            try {
                const queryParams = new URLSearchParams({
                    _id: secondSegment,
                    username: thirdSegment,
                    title: fourthSegment
                }).toString();
    
                const response = await fetch(`http://127.0.0.1:3000/api/blogs/read?${queryParams}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    }
                });
                const data = await response.json();
                if (response.status === 200) {                                        
                    // Update state with fetched data
                    setTitle(data.blog.title);
                    setUsername(data.blog.username);
                    setContent(data.blog.content);
                    setDate(data.blog.createdAt);
                } else {
                    console.log('Server responded with status:', response.status);
                }
    
            } catch (e) {
                console.error(e);
            }
        }
    
        endpoint_call();
    }, [secondSegment, thirdSegment, fourthSegment]); // Dependencies for useEffect
    

    return (
        <Grid container style={{ minHeight: '100vh' }} justifyContent="center" margin={7}>
            <Grid item xs={12} md={8}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h4" gutterBottom>
                            {title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                            By {username}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                            {date.toString()}
                        </Typography>
                        <Typography variant="body1">
                            {content}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}