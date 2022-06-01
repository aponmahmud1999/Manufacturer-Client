import { useEffect, useState } from 'react';

const useReviews = () => {
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch('https://whispering-depths-14574.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return [reviews,setReviews]
};

export default useReviews;