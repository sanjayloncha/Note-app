import React from 'react' ;
import { Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function Private({children}) {
    const navigate = useNavigate() ;

    if(true){
        return children ;
    }else{
        return navigate("/login") ;
    }
}
