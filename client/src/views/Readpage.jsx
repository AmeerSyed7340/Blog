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

    const [title, setTitle] = useState(fourthSegment.toString());
    const [username, setUsername] = useState(thirdSegment.toString());
    const [content, setContent] = useState('Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum');
    const [date, setDate] = useState(new Date());

    console.log(secondSegment);
    console.log(thirdSegment);
    console.log(fourthSegment);

    useEffect(() => {
        async function endpoint_call() {
            //console.log(Username, Password)
            try {
                const response = await fetch("http://127.0.0.1:3000/api/blogs/read", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        _id: `${secondSegment}`,
                        username: `${thirdSegment}`,
                        title: `${fourthSegment}`

                    })
                });
                const data = await response.json();
                if (response.status == 200) {
                    console.log(response, data);

                } else {
                    console.log('didnt work');
                }

            } catch (e) {
                console.error(e);
            }
        }

        endpoint_call();
    }, []);

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