import { useContext, useEffect, useRef } from 'react'
// import UserDetailsContext from '../context/UserDetailsContext';
import { getAllFav } from '../utils/api';
import { useQuery } from 'react-query';
import { useAuth0 } from '@auth0/auth0-react';
import UserDetailsContext from '../context/UserDetailsContext';

const useFavourites = () => {

    const {userDetails, setUserDetails} = useContext(UserDetailsContext);
    // const queryRef = useRef()
    const {isAuthenticated,user} = useAuth0()
    
    const {data,isLoading,isError,refetch} = useQuery({
        queryKey: "allFavourites",
        queryFn: ()=> getAllFav(user?.email),
        onSuccess: (data) => setUserDetails((prev) => ({...prev,favourites:data})),
        enabled: user!==undefined,
        staleTime: 30000
    })

    // queryRef.current = refetch;

    // useEffect(() => {
    //     queryRef.current && queryRef.current();
    // },[])   

  return {data,isLoading,isError,refetch}
}

export default useFavourites