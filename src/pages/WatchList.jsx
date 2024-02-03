/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import Header from "../components/Common/Header";
import TabsComponents from "../components/Dashboard/Tabs";
import { get100Coins } from "../functions/get100Coins";

function WatchList() {
   const [allCoinId, setAllCoinId] = useState([])
   const [allCoin, setAllCoin] = useState([]);
   const [watchListCoinInfo, setWatchListCoinInfo] = useState([]);

  useEffect(() => {
    console.log("localStorage",localStorage)
    const watchListCoinId =JSON.parse(localStorage.getItem('watchList'))
    if(watchListCoinId){
      console.log("watchListCoinId",watchListCoinId)
      setAllCoinId(watchListCoinId);

    }
  },[])

  useEffect(() =>{
    getData();
  },[])

  const getData = async () => {
    const coinData = await get100Coins();
    if(coinData){
      setAllCoin(coinData);
      if(allCoin && allCoinId){
        allCoinId.forEach((coinId) => {
          const filteredCoin = allCoin.filter((coin) => coin.id == coinId);
          setWatchListCoinInfo([...watchListCoinInfo, filteredCoin])
        })
      }
    }
  }



  return (
    <div className="watchlist-container">
      <Header />
      <TabsComponents coins={watchListCoinInfo}/>
    </div>
  );
}

export default WatchList;
