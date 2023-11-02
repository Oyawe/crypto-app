import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const { coins, setCoins } = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en"
      )
      .then((res) => {
        console.log(res.data);
        setCoins(res.data);
      });
  }, []);

  return (
    <div>
      <h1 className="text-center p-6 text-3xl">Crypto App</h1>
      <div>{/* zoo */}</div>
    </div>
  );
};

export default Home;
