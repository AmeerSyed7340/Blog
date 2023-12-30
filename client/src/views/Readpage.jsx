import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { Typography, Card, CardContent, Grid } from '@mui/material';

export default function ReadPage() {
    const [title, setTitle] = useState('Title');
    const [username, setUsername] = useState('User-1');
    const [content, setContent] = useState('Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum');
    const[date, setDate] = useState(new Date());
    const location = useLocation();
    const pathSegments = location.pathname.split('/');
    const secondSegment = pathSegments[2] || 'Default Value';
    console.log(secondSegment);

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