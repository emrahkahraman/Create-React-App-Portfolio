import { useEffect, useState } from "react"
import { Button } from "react-bootstrap";

export default function Home(){

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = 'sdasadsad ${count}';
    });

    return(
        <div style={{textAlign:"center"}}>

            Bu sayfa Emrah Kahraman'a aittir.

            <Button />
        </div>
    )
}