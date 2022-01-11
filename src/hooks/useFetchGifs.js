import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category, limit ) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getGifs(category, limit)
            .then( imgs => {
                setstate( {
                    data: imgs,
                    loading: false
                });
            } );
    }, [ category, limit ]);


    return state; // { data: [], loading: true };

}