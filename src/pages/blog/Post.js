import { useParams } from "react-router-dom"

export default function Post(){

    const {url , id}  = useParams();

    return(
        <div>
            <h3>post sayfası {url} - {id}</h3>
        </div>
    )
}