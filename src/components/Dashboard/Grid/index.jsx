/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import StarsRoundedIcon from "@mui/icons-material/StarsRounded";

import "./styles.css";
import { Link } from "react-router-dom";

function Grid({ coin }) {
  const [allCoinId, setAllCoinId] = useState([]);

  // console.log("coin data from grid",coin)

  const handleOnWatchList = ( coinId) => {
    if (!allCoinId.includes(coinId)) {
      setAllCoinId((previousCoinId) => [...previousCoinId,coinId]);
      console.log("allcoin id", allCoinId);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("watchList")) {
      const watchListCoin = JSON.parse(localStorage.getItem("watchList"));
      console.log("watchList", watchListCoin);
      setAllCoinId(watchListCoin);
    }
  }, []);

  useEffect(() => {
    console.log("allCoinId", allCoinId);
    localStorage.setItem("watchList", JSON.stringify(allCoinId));
  }, [allCoinId]);

  return (
    <Link to={`/coin/${coin.id}`}>
      <div
        className={`grid-container ${
          coin.price_change_percentage_24h > 0
            ? "grid-container-green"
            : "grid-container-red"
        }`}
      >
        <div className="info-flex">
          <img src={coin.image} className="coin-logo" />
          <div className="name-col">
            <p className="coin-symbol">{coin.symbol}</p>
            <p className="coin-name">{coin.name}</p>
          </div>
          <div className="watchlist-icon">
            <StarsRoundedIcon
              sx={{ color: "#3a80e9" }}
              onClick={(event) => {
                event.preventDefault();
                handleOnWatchList( coin.id);
              }}
            />
          </div>
        </div>

        {coin.price_change_percentage_24h > 0 ? (
          <div className="coin-info-flex">
            <div className="price-chip-green">
              {coin.price_change_percentage_24h.toFixed(2)} %
            </div>
            <TrendingUpRoundedIcon className="trending-icon-green" />
          </div>
        ) : (
          <div className="coin-info-flex">
            <div className="price-chip-red">
              {coin.price_change_percentage_24h.toFixed(2)} %
            </div>
            <TrendingDownRoundedIcon className="trending-icon-red" />
          </div>
        )}
        <div className="info-container">
          <h3
            className="coin-price"
            style={{
              color:
                coin.price_change_percentage_24h > 0
                  ? "var(--green)"
                  : "var(--red)",
            }}
          >
            ${coin.current_price.toLocaleString()}
          </h3>
          <p className="total_volume">
            Total Volume : ${coin.total_volume.toLocaleString()}
          </p>
          <p className="market_cap">
            Market Cap : ${coin.market_cap.toLocaleString()}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Grid;
