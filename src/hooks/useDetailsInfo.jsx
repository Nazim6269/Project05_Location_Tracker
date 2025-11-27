import { useEffect, useState } from "react";
import { getISPInfo } from "../utils/getISPInfo";
import useGeoLocation from "./useGeoLocation";

const useDetailsInfo = () => {
    const {position}=useGeoLocation();
    const [info,setInfo]=useState({});
   
    useEffect(()=>{
        getISPInfo().then(setInfo)
    },[position])
  return {info};
}

export default useDetailsInfo