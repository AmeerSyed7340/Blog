import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function ReadPage(){
    const location = useLocation();
    const pathSegments = location.pathname.split('/');
    const secondSegment = pathSegments[2] || 'Default Value';
    console.log(secondSegment);

    return(
        <>
        <p>Reading page</p>
        </>
    )
}