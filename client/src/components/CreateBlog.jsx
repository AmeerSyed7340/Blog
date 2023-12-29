import Button from '@mui/material/Button';

export default function CreateBlog(){
    function handleSubmit(){
        console.log("hello");
    }
    return (
        <Button color='inherit' onClick={handleSubmit}>Create Blog</Button>
    );
}