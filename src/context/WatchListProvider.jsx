/* eslint-disable react/prop-types */
import { useState } from "react";
import watchListContext from "./watchListContext";


const WatchListProvider = (props) => {
    const [watchlistId, setWatchlistId] = useState([])
    return(
        <watchListContext.Provider value={{watchlistId, setWatchlistId}}>
            {props.children}
        </watchListContext.Provider>
    )
}

export default WatchListProvider