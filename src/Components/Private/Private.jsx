import { Navigate } from 'react-router-dom';

export default function Private({children}) {
    const auth = JSON.parse(localStorage.getItem("userAuth")) ;
    if(auth === "true"){
        return children ;
    }else{
        return <Navigate to="/logIn" />
    }
}
