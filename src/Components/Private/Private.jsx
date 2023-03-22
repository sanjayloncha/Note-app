import { useNavigate } from 'react-router-dom';

export default function Private({children}) {
    const navigate = useNavigate() ;
    const auth = JSON.parse(localStorage.getItem("userAuth")) ;
    console.log(auth) ;
    if(auth){
        return children ;
    }else{
        return navigate("/login") ;
    }
}
