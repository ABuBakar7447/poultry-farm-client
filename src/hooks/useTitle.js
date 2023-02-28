import { useEffect } from "react";

//creating dynamic title

const useTitle = title =>{
    useEffect(() =>{
        document.title = `${title} - Poultry`
    },[title])
}

export default useTitle;