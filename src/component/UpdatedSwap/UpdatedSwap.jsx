import React, { useState, useEffect, useRef } from "react";
import SwapVerticalCircleIcon from "@mui/icons-material/SwapVerticalCircle";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import AnimatedNumbers from "react-animated-numbers";
import "./UpdatedSwap.css";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AnimatedNumber from "react-awesome-animated-number";
import "react-awesome-animated-number/dist/index.css";
import { UpdatedTokenModal } from "./TokenModal/UpdatedTokenModal";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import CloseIcon from "@mui/icons-material/Close";
import moment from "moment/moment";
import "./AddLiquidity.css";
import "./dashboardAddLiquidity.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
} from "recharts";

const UpdatedSwap = () => {
  const [tokenModal, setTokenModal] = useState(false);
  const [tokenModal2, setTokenModal2] = useState(false);
  const [id, setId] = useState("1");
  const [id2, setId2] = useState("");
  const [ida, setIda] = useState("1");
  const [id2b, setId2b] = useState("");
  const [idTicker, setIdTicker] = useState("1");
  const [idBase, setIdBase] = useState("");
  const [initialId, setInitialId] = useState("");
  const [initialId2, setInitialId2] = useState("");
  const [SwapAmount, setSwapAmount] = useState("");
  const [swapBaseAmount, setSwapBaseAmount] = useState("");
  const [SwapBalance, setSwapBalance] = useState("");
  const [activeDuration, setActiveDuration] = useState("hr1");
  const [shareSwap, setShareSwap] = useState(false);

  const hour1Array = [
    {
      coin: "Ethereum",
      base: "USDT",
      time: "2023-03-16T00:00:00Z",
      price: 2000.0,
      change: "open",
      percentage_change: 0,
      type: "open",
      price_difference: 0,
    },
    {
      coin: "Ethereum",
      base: "USDT",
      time: "2023-03-16T00:06:00Z",
      price: 1995.5,
      change: "decrease",
      percentage_change: 0.225,
      type: "close",
      price_difference: -4.5,
    },
    {
      coin: "Ethereum",
      base: "USDT",
      time: "2023-03-16T00:12:00Z",
      price: 1980.75,
      change: "decrease",
      percentage_change: 0.738,
      type: "close",
      price_difference: -14.75,
    },
    {
      coin: "Ethereum",
      base: "USDT",
      time: "2023-03-16T00:18:00Z",
      price: 2025.0,
      change: "increase",
      percentage_change: 2.213,
      type: "close",
      price_difference: 44.25,
    },
    {
      coin: "Ethereum",
      base: "USDT",
      time: "2023-03-16T00:24:00Z",
      price: 2032.75,
      change: "increase",
      percentage_change: 0.383,
      type: "close",
      price_difference: 7.75,
    },
    {
      coin: "Ethereum",
      base: "USDT",
      time: "2023-03-16T00:30:00Z",
      price: 2050.25,
      change: "increase",
      percentage_change: 0.86,
      type: "close",
      price_difference: 17.5,
    },
    {
      coin: "Ethereum",
      base: "USDT",
      time: "2023-03-16T00:36:00Z",
      price: 2065.5,
      change: "increase",
      percentage_change: 0.744,
      type: "close",
      price_difference: 15.25,
    },
    {
      coin: "Ethereum",
      base: "USDT",
      time: "2023-03-16T00:42:00Z",
      price: 2045.25,
      change: "decrease",
      percentage_change: 0.977,
      type: "close",
      price_difference: -20.25,
    },
    {
      coin: "Ethereum",
      base: "USDT",
      time: "2023-03-16T00:48:00Z",
      price: 2030.75,
      change: "decrease",
      percentage_change: 0.738,
      type: "close",
      price_difference: -14.75,
    },
    {
      coin: "Ethereum",
      base: "USDT",
      time: "2023-03-16T00:54:00Z",
      price: 2022.5,
      change: "decrease",
      percentage_change: 0.407,
      type: "close",
      price_difference: -8.25,
    },
    {
      coin: "Ethereum",
      base: "USDT",
      time: "2023-03-16T01:00:00Z",
      price: 2010.25,
      change: "decrease",
      percentage_change: 0.606,
      type: "close",
      price_difference: -12.25,
    },
  ];
  const hour4Array = [
    {
      coin: "Ethereum",
      base: "USDT",
      time: "2023-03-17T00:00:00Z",
      price: 2000.0,
      change: "",
      percentage_change: 0,
      type: "open",
      price_difference: 0,
    },
    {
      coin: "Ethereum",
      base: "USDT",
      time: "2023-03-17T00:30:00Z",
      price: 1980.5,
      change: "decrease",
      percentage_change: -0.975,
      type: "close",
      price_difference: -19.5,
    },
    {
      coin: "Ethereum",
      base: "USDT",
      time: "2023-03-17T01:00:00Z",
      price: 1975.25,
      change: "decrease",
      percentage_change: -0.263,
      type: "close",
      price_difference: -5.25,
    },
    {
      coin: "Ethereum",
      base: "USDT",
      time: "2023-03-17T01:30:00Z",
      price: 1990.75,
      change: "increase",
      percentage_change: 0.784,
      type: "close",
      price_difference: 15.5,
    },
    {
      coin: "Ethereum",
      base: "USDT",
      time: "2023-03-17T02:00:00Z",
      price: 2010.0,
      change: "increase",
      percentage_change: 0.964,
      type: "close",
      price_difference: 19.25,
    },
    {
      coin: "Ethereum",
      base: "USDT",
      time: "2023-03-17T02:30:00Z",
      price: 1995.5,
      change: "decrease",
      percentage_change: -0.722,
      type: "close",
      price_difference: -14.5,
    },
    {
      coin: "Ethereum",
      base: "USDT",
      time: "2023-03-17T03:00:00Z",
      price: 1985.75,
      change: "decrease",
      percentage_change: -0.491,
      type: "close",
      price_difference: -9.75,
    },
    {
      coin: "Ethereum",
      base: "USDT",
      time: "2023-03-17T03:30:00Z",
      price: 1995.25,
      change: "increase",
      percentage_change: 0.48,
      type: "close",
      price_difference: 9.5,
    },
    {
      coin: "Ethereum",
      base: "USDT",
      time: "2023-03-17T04:30:00Z",
      price: 2015.5,
      change: "increase",
      percentage_change: 0.773,
      type: "close",
      price_difference: 20.25,
    },
  ];

  const assets = [
    {
      id: "1",
      img: "/img/tokens-folder/bnb_icon.png",
      name: "Binance Smart Chain",
      symbol: "BNB",
      favorite: "true",
      balance: 0.02,
    },
    {
      id: "2",
      img: "/img/tokens-folder/busd_icon.png",
      name: "Binance Usd",
      symbol: "BUSD",
      favorite: "true",
      balance: 13000,
    },
    {
      id: "3",
      img: "/img/tokens-folder/ada_icon.png",
      name: "Ada Network",
      symbol: "ADA",
      balance: 10000,
    },
    {
      id: "4",
      img: "/img/tokens-folder/doge_icon.png",
      name: "Doge Coin",
      symbol: "DOGE",
      balance: 3000000,
    },
    {
      id: "5",
      img: "/img/tokens-folder/inc_icon.png",
      name: "1 inch Network",
      symbol: "1inch",
      balance: 3000,
    },
    {
      id: "6",
      img: "/img/tokens-folder/pancake_icon.png",
      name: "PancakeSwap Token",
      symbol: "CAKE",
      balance: 5000,
    },
    {
      id: "7",
      img: "/img/tokens-folder/wbnb_icon.png",
      name: "Wrapped Binance Coin",
      symbol: "WBNB",
      balance: 10,
    },
    {
      id: "8",
      img: "/img/tokens-folder/usdt_icon.png",
      name: "Tether",
      symbol: "USDT",
      favorite: "true",
      balance: 100000,
    },
    {
      id: "9",
      img: "/img/tokens-folder/dodo_icon.png",
      name: "Dodo Network",
      symbol: "DODO",
      balance: 1000,
    },
    {
      id: "10",
      img: "/img/tokens-folder/usdsc_icon.png",
      name: "USDC Coin",
      symbol: "USDC",
      favorite: "true",
      balance: 10000,
    },
    {
      id: "11",
      img: "/img/tokens-folder/dai_icon.png",
      name: "Dai Token",
      symbol: "DAI",
      balance: 5000,
    },
  ];
  // ================================
  // ================================
  // ================================
  // ================================
  // ===========Swap Functions Start=====================
  // ================================
  // ================================
  // ================================
  // ================================
  const ToggleTokenModal = () => {
    setTokenModal(!tokenModal);
    setInitialId(id);
  };
  const ToggleTokenModal2 = () => {
    setTokenModal2(!tokenModal2);
    setInitialId2(id2);
  };
  const setAssetsId = (e) => {
    setId(e.currentTarget.id);
    setIda(e.currentTarget.id);
    setIdTicker(e.currentTarget.id);
    setIdBase(id2);
    setId2b(id2);
    ToggleTokenModal();
    console.log(e.currentTarget.id);
    if (e.currentTarget.id == id2) {
      console.log("id is equal id2");
      setId2(initialId);
      setId2b(initialId);
      setIdBase(initialId);
      return;
    }
    setSwapBalance("");
  };
  const setAssetsId2 = (e) => {
    setId2(e.currentTarget.id);
    setId2b(e.currentTarget.id);
    setIdBase(e.currentTarget.id);
    setIdTicker(id);
    setIda(id);
    ToggleTokenModal2();
    console.log(e.currentTarget.id);
    if (e.currentTarget.id == id) {
      console.log("id is equal id2");
      setId(initialId2);
      setIda(initialId2);
      setIdTicker(initialId2);
      return;
    }
  };
  const onChangeSwapAmount = (e) => {
    setSwapAmount(e.target.value);
    // setSwapBaseAmount(e.target.value * 4);
    // if (e.target.value == 0) {
    //   setSwapBaseAmount("");
    // }
    console.log(e.target.value);
  };
  const ToggleSwapInputs = () => {
    setId(id2);
    setId2(id);
    setIdBase(id);
    setIdTicker(id2);
  };
  const ToggleSwapPrices = () => {
    setIda(id2b);
    setId2b(ida);
  };
  const ToggleSwapBase = () => {
    setIdBase(idTicker);
    setIdTicker(idBase);
  };

  const add25Per = (balance) => {
    setSwapAmount(balance * 0.25);
    // setSwapBaseAmount(SwapAmount * 4);
  };
  const add50Per = (balance) => {
    setSwapAmount(balance * 0.5);
  };
  const add75Per = (balance) => {
    setSwapAmount(balance * 0.75);
  };
  const add100Per = (balance) => {
    setSwapAmount(balance * 1);
  };
  // ================================
  // ================================
  // ================================
  // ================================
  // ===========Swap Functions End=====================
  // ================================
  // ================================
  // ================================
  // ================================
  // ================================
  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // ================================
  // ================================
  // ================================
  // ===========Trade View Functions Start=====================
  // ================================
  // ================================
  // ================================
  // ================================
  const formatTime = (time) => {
    return moment(time).format("h:mm a");
  };

  const formattedData = hour1Array.map((obj) => {
    return {
      ...obj,
      time: formatTime(obj.time),
    };
  });
  const formattedData2 = hour4Array.map((obj) => {
    return {
      ...obj,
      time: formatTime(obj.time),
    };
  });
  const lastIndex = formattedData.length - 1;
  const lastIndex2 = formattedData2.length - 1;
  const LastArray = formattedData[lastIndex];
  const LastArray2 = formattedData2[lastIndex2];
  const [ChartValue, setChartValue] = useState(LastArray.price);
  const [ChartValue2, setChartValue2] = useState(LastArray2.price);
  const [ChartTime, setChartTime] = useState(LastArray.time);
  const [ChartTime2, setChartTime2] = useState(LastArray2.time);
  const [displayChart, setDisplayChart] = useState(true);
  const [ChartPercentChange, setChartPercentChange] = useState(
    LastArray.percentage_change
  );
  const [ChartPercentChange2, setChartPercentChange2] = useState(
    LastArray2.percentage_change
  );
  const [ChartPriceDifference, setChartPriceDifference] = useState(
    LastArray.price_difference
  );
  const [ChartPriceDifference2, setChartPriceDifference2] = useState(
    LastArray2.price_difference
  );
  const [ChartChange, setChartChange] = useState(LastArray.change);
  const [ChartChange2, setChartChange2] = useState(LastArray2.change);
  function formatNumber(number) {
    const abbreviations = {
      k: 1000,
      m: 1000000,
      b: 1000000000,
      t: 1000000000000,
    };

    const num = parseFloat(number);

    for (const abbreviation in abbreviations) {
      if (
        num >= abbreviations[abbreviation] &&
        num < abbreviations[abbreviation] * 1000
      ) {
        return `${(num / abbreviations[abbreviation]).toFixed(
          1
        )}${abbreviation}`;
      }
    }

    return num.toLocaleString();
  }
  const CustomTooltip = ({ active, payload, label }) => {
    console.log(payload);
    if (active && payload && payload.length) {
      setChartValue(payload[0].payload.price);
      setChartTime(payload[0].payload.time);
      setChartPercentChange(payload[0].payload.percentage_change);
      setChartPriceDifference(payload[0].payload.price_difference);
      setChartChange(payload[0].payload.change);
      setChartValue2(payload[0].payload.price);
      setChartTime2(payload[0].payload.time);
      setChartPercentChange2(payload[0].payload.percentage_change);
      setChartPriceDifference2(payload[0].payload.price_difference);
      setChartChange2(payload[0].payload.change);
    } else {
      setChartValue(LastArray.price);
      setChartTime(LastArray.time);
      setChartPercentChange(LastArray.percentage_change);
      setChartPriceDifference(LastArray.price_difference);
      setChartChange(LastArray.change);
      setChartValue2(LastArray2.price);
      setChartTime2(LastArray2.time);
      setChartPercentChange2(LastArray2.percentage_change);
      setChartPriceDifference2(LastArray2.price_difference);
      setChartChange2(LastArray2.change);
    }
    return null;
  };
  const ToggleDuration = (e) => {
    let id = e.currentTarget.id;
    setActiveDuration(id);
    console.log(id);
    console.log("me");
  };

  const numDataPoints = formattedData.length;
  const numDataPoints2 = formattedData2.length;
  const interval = Math.ceil(numDataPoints / 6);
  const interval2 = Math.ceil(numDataPoints2 / 6);

  const minPrice =
    formattedData.length > 0
      ? Math.min(...formattedData.map((d) => d.price))
      : null;
  const minPrice2 =
    formattedData2.length > 0
      ? Math.min(...formattedData2.map((d) => d.price))
      : null;
  const priceOffset = minPrice ? minPrice : 0;
  const priceOffset2 = minPrice2 ? minPrice2 : 0;
  const ToggleShareSwap = () => {
    setShareSwap(!shareSwap);
  };
  const ToggleDisplayChart = () => {
    setDisplayChart(!displayChart);
  };
  return (
    <div className="SwapComponentDiv">
      <section className="SwapComponentDiv_section">
        <div className="container relative">
          <div className="ToggleChartDiv">
            <div className="ToggleChartDiv_txt">Live Chart</div>
            {/* <div className="ToggleChartDiv_checkBox"> */}
            <label class="ToggleChartDiv_checkBox_toggle">
              <input
                type="checkbox"
                checked={displayChart}
                onClick={ToggleDisplayChart}
                // onChange={ToggleDisplayChart}
              />
              {displayChart == true ? (
                <span class="ToggleChartDiv_checkBox_slider">On</span>
              ) : (
                <span class="ToggleChartDiv_checkBox_slider adjustFlex">
                  Off
                </span>
              )}
            </label>
            {/* </div> */}
          </div>
          <div className="liquidity_area">
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            <div className="liquidity_area1">
              <div className="swap_container_settings_cont">
                <div className="swap_container_settings_cont_area1">Swap</div>
                <div className="swap_container_settings_cont_area2">
                  <InfoOutlinedIcon className="swap_container_settings_cont_area2_icon" />
                  <ShareOutlinedIcon
                    className="swap_container_settings_cont_area2_icon2"
                    onClick={ToggleShareSwap}
                  />
                </div>
              </div>
              <div className="liquidity_cont">
                <div className="liquidity_cont_body">
                  <div className="liquidity_cont_body_conts">
                    <div className="liquidity_cont_body_conts_cont1">
                      <div className="input_amnt_layer">
                        <div className="amnt_input">
                          <div className="amnt_input_layer1">
                            <div className="amnt_input_layer1_input_div">
                              <input
                                type="number"
                                name="number"
                                id="number"
                                placeholder="0.00"
                                className="amnt_input_field"
                                autocomplete="off"
                                onChange={onChangeSwapAmount}
                                value={SwapAmount}
                              />
                              <div className="amnt_input_layer1_input_div_dollar_value">
                                ~${SwapAmount * 750}
                              </div>
                            </div>

                            {id == "" ? (
                              <div className="Swap_icondropDownDiv">
                                <span className="token_balances_span">
                                  Balance:0.00
                                </span>

                                <button
                                  className="display_tokens_drop"
                                  onClick={ToggleTokenModal}
                                >
                                  Select a token
                                  <ArrowDropDownIcon className="drop_down_icon" />
                                </button>
                              </div>
                            ) : (
                              <>
                                {assets.map((data) => {
                                  // setSwapBalance(data.balance);
                                  return (
                                    <>
                                      {data.id == id ? (
                                        <div className="Swap_icondropDownDiv">
                                          <span className="token_balances_span">
                                            Balance:{data.balance}
                                          </span>

                                          <button
                                            className="display_tokens_drop"
                                            onClick={ToggleTokenModal}
                                          >
                                            <img
                                              src={data.img}
                                              alt=""
                                              className="asset_icon"
                                            />
                                            {data.symbol}
                                            <ArrowDropDownIcon className="drop_down_icon" />
                                          </button>
                                        </div>
                                      ) : null}
                                    </>
                                  );
                                })}
                              </>
                            )}
                          </div>
                          {id == "" ? (
                            <div className="amnt_input_layer2">
                              <button className="amnt_input_layer2_cont1">
                                25%
                              </button>
                              <button className="amnt_input_layer2_cont1">
                                50%
                              </button>
                              <button className="amnt_input_layer2_cont1">
                                75%
                              </button>
                              <button className="amnt_input_layer2_cont1_last">
                                100%
                              </button>
                            </div>
                          ) : (
                            <>
                              {assets.map((data) => {
                                // setSwapBalance(data.balance);
                                return (
                                  <>
                                    {data.id == id ? (
                                      <div className="amnt_input_layer2">
                                        <button
                                          className="amnt_input_layer2_cont1"
                                          onClick={() => add25Per(data.balance)}
                                        >
                                          25%
                                        </button>
                                        <button
                                          className="amnt_input_layer2_cont1"
                                          onClick={() => add50Per(data.balance)}
                                        >
                                          50%
                                        </button>
                                        <button
                                          className="amnt_input_layer2_cont1"
                                          onClick={() => add75Per(data.balance)}
                                        >
                                          75%
                                        </button>
                                        <button
                                          className="amnt_input_layer2_cont1_last"
                                          onClick={() =>
                                            add100Per(data.balance)
                                          }
                                        >
                                          100%
                                        </button>
                                      </div>
                                    ) : null}
                                  </>
                                );
                              })}
                            </>
                          )}
                        </div>
                      </div>

                      {/* <div className="plus_icon_layer"> */}
                      <SwapVertIcon
                        className="toggle_swap_inputs"
                        onClick={ToggleSwapInputs}
                      />

                      <div className="input_amnt_layer">
                        <div className="amnt_input">
                          <div className="amnt_input_layer1">
                            <div className="amnt_input_layer1_input_div">
                              <input
                                type="number"
                                name="number"
                                id="number"
                                placeholder="0.00"
                                className="amnt_input_field"
                                autocomplete="off"
                                value={
                                  SwapAmount == "" || id2 == ""
                                    ? " "
                                    : SwapAmount * 4
                                }
                              />
                              <div className="amnt_input_layer1_input_div_dollar_value">
                                ~$
                                {SwapAmount == "" || id2 == ""
                                  ? " "
                                  : SwapAmount * 750}
                              </div>
                            </div>
                            {id2 == "" ? (
                              <div className="Swap_icondropDownDiv">
                                <span className="token_balances_span">
                                  Balance:0.00
                                </span>

                                <button
                                  className="display_tokens_drop"
                                  onClick={ToggleTokenModal2}
                                >
                                  Select a token
                                  <ArrowDropDownIcon className="drop_down_icon" />
                                </button>
                              </div>
                            ) : (
                              <>
                                {assets.map((data) => (
                                  <>
                                    {data.id == id2 ? (
                                      <div className="Swap_icondropDownDiv">
                                        <span className="token_balances_span">
                                          Balance:{data.balance}
                                        </span>

                                        <button
                                          className="display_tokens_drop"
                                          onClick={ToggleTokenModal2}
                                        >
                                          <img
                                            src={data.img}
                                            alt=""
                                            className="asset_icon"
                                          />
                                          {data.symbol}
                                          <ArrowDropDownIcon className="drop_down_icon" />
                                        </button>
                                      </div>
                                    ) : null}
                                  </>
                                ))}
                              </>
                            )}
                          </div>
                          {/* <div className="amnt_input_layer2">
                          <button className="amnt_input_layer2_cont1">
                            25%
                          </button>
                          <button className="amnt_input_layer2_cont1">
                            50%
                          </button>
                          <button className="amnt_input_layer2_cont1">
                            75%
                          </button>
                          <button className="amnt_input_layer2_cont1_last">
                            100%
                          </button>
                        </div> */}
                        </div>
                      </div>

                      {/* </div> */}
                    </div>

                    <div className="swap_price_rate_div">
                      {ida == "" ? (
                        <div className="swap_price_rate_div1">Nil</div>
                      ) : (
                        <>
                          {assets.map((data) => {
                            // setSwapBalance(data.balance);
                            return (
                              <>
                                {data.id == ida ? (
                                  <div className="swap_price_rate_div1">
                                    1 {data.symbol}
                                  </div>
                                ) : null}
                              </>
                            );
                          })}
                        </>
                      )}
                      =
                      {id2b == "" ? (
                        <div className="swap_price_rate_div2">Nil</div>
                      ) : (
                        <>
                          {assets.map((data) => {
                            // setSwapBalance(data.balance);
                            return (
                              <>
                                {data.id == id2b ? (
                                  <div className="swap_price_rate_div2">
                                    20 {data.symbol}
                                  </div>
                                ) : null}
                              </>
                            );
                          })}
                        </>
                      )}
                      <SwapHorizIcon
                        className="swap_price_rate_div_swap_icon"
                        onClick={ToggleSwapPrices}
                      />
                    </div>
                    <button
                      id="generate"
                      // style={{ marginTop: "10px" }}
                      class="updatedSwapSwapBtn"
                    >
                      Enter an amount
                    </button>
                    <div className="moreSwapInfoDiv">
                      <div className="moreSwapInfoDiv_div1">
                        More Information
                      </div>
                      <div className="moreSwapInfoDiv_div2">
                        <div className="moreSwapInfoDiv_div2_area1">
                          <div className="moreSwapInfoDiv_div2_area1_cont1">
                            Minimum Received
                          </div>
                          {id2 == "" ? (
                            <div className="moreSwapInfoDiv_div2_area1_cont2">
                              Nil
                            </div>
                          ) : (
                            <>
                              {assets.map((data) => {
                                return (
                                  <>
                                    {data.id == id2 ? (
                                      <div className="moreSwapInfoDiv_div2_area1_cont2">
                                        {SwapAmount == ""
                                          ? " "
                                          : SwapAmount * 3.8}
                                        <span>
                                          {"  "} {data.symbol}
                                        </span>
                                      </div>
                                    ) : null}
                                  </>
                                );
                              })}
                            </>
                          )}
                        </div>
                        <div className="moreSwapInfoDiv_div2_area1">
                          <div className="moreSwapInfoDiv_div2_area1_cont1">
                            Gas Fee
                          </div>
                          <div className="moreSwapInfoDiv_div2_area1_cont2">
                            $7.75
                          </div>
                        </div>
                        {/* <div className="moreSwapInfoDiv_div2_area1">
                          <div className="moreSwapInfoDiv_div2_area1_cont1">
                            Price Impact
                          </div>
                          <div className="moreSwapInfoDiv_div2_area1_cont2">
                            {"<0.22%"}
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {displayChart === true ? (
              <div className="tradeViewArea">
                <div className="tradeViewAreaCont">
                  <div className="tradeViewAreaCont_pairs_cont">
                    <div className="tradeViewAreaCont_pairs_cont_div">
                      {idTicker == "" ? (
                        <div className="tradeViewAreaCont_pairs_cont_div1">
                          Nil
                        </div>
                      ) : (
                        <>
                          {assets.map((data) => {
                            // setSwapBalance(data.balance);
                            return (
                              <>
                                {data.id == idTicker ? (
                                  <div className="tradeViewAreaCont_pairs_cont_div1 moveCloser">
                                    <img
                                      src={data.img}
                                      alt=""
                                      className="tradeViewAreaCont_pairs_cont_div1_img"
                                    />
                                  </div>
                                ) : null}
                              </>
                            );
                          })}
                        </>
                      )}
                      {idBase == "" ? (
                        <div className="tradeViewAreaCont_pairs_cont_div1">
                          Nil
                        </div>
                      ) : (
                        <>
                          {assets.map((data) => {
                            // setSwapBalance(data.balance);
                            return (
                              <>
                                {data.id == idBase ? (
                                  <div className="tradeViewAreaCont_pairs_cont_div1">
                                    <img
                                      src={data.img}
                                      alt=""
                                      className="tradeViewAreaCont_pairs_cont_div1_img"
                                    />
                                  </div>
                                ) : null}
                              </>
                            );
                          })}
                        </>
                      )}
                      {idTicker == "" ? (
                        <div className="tradeViewAreaCont_pairs_cont_div2">
                          Nil
                        </div>
                      ) : (
                        <>
                          {assets.map((data) => {
                            // setSwapBalance(data.balance);
                            return (
                              <>
                                {data.id == idTicker ? (
                                  <div className="tradeViewAreaCont_pairs_cont_div2">
                                    {data.symbol}
                                  </div>
                                ) : null}
                              </>
                            );
                          })}
                        </>
                      )}
                      <div className="tradeViewAreaCont_pairs_cont_div2_slash">
                        /
                      </div>
                      {idBase == "" ? (
                        <div className="tradeViewAreaCont_pairs_cont_div2 base">
                          Nil
                        </div>
                      ) : (
                        <>
                          {assets.map((data) => {
                            // setSwapBalance(data.balance);
                            return (
                              <>
                                {data.id == idBase ? (
                                  <div className="tradeViewAreaCont_pairs_cont_div2 base">
                                    {data.symbol}
                                  </div>
                                ) : null}
                              </>
                            );
                          })}
                        </>
                      )}
                      <SwapHorizIcon
                        className="swap_base_ticker_price_change_icon"
                        onClick={ToggleSwapBase}
                      />
                    </div>
                  </div>
                  <div className="tradeViewAreaCont1">
                    {activeDuration == "hr1" ? (
                      <div className="tradeViewAreaCont1_area1">
                        <div
                          className="analytics_container_1_Amount"
                          onChange={CustomTooltip}
                        >
                          <span>
                            <AnimatedNumber
                              value={ChartValue}
                              // hasComma={true}
                              formatValue={(value) => value.toFixed(0)}
                              size={28}
                              duration={1000}
                            />{" "}
                            {idBase == "" ? (
                              <>Nil</>
                            ) : (
                              <>
                                {assets.map((data) => {
                                  return (
                                    <>
                                      {data.id == idBase ? data.symbol : null}
                                    </>
                                  );
                                })}
                              </>
                            )}
                          </span>
                        </div>
                        <span
                          className="tradeViewAreaCont1_area1_priceChangeSpan"
                          style={
                            ChartChange == "decrease"
                              ? { color: "#ff537b" }
                              : ChartChange == "increase"
                              ? { color: "#31cb9e" }
                              : { color: "#31cb9e" }
                          }
                        >
                          {ChartChange == "decrease" ? (
                            <>
                              {ChartPriceDifference} (
                              {"-" +
                                parseFloat(ChartPercentChange).toFixed(2) +
                                "%"}
                              )
                            </>
                          ) : (
                            <>
                              {"+" + ChartPriceDifference} (
                              {"+" +
                                parseFloat(ChartPercentChange).toFixed(2) +
                                "%"}
                              )
                            </>
                          )}
                        </span>
                      </div>
                    ) : activeDuration == "hr4" ? (
                      <div className="tradeViewAreaCont1_area1">
                        <div
                          className="analytics_container_1_Amount"
                          onChange={CustomTooltip}
                        >
                          <span>
                            <AnimatedNumber
                              value={ChartValue2}
                              // hasComma={true}
                              formatValue={(value) => value.toFixed(0)}
                              size={28}
                              duration={1000}
                            />{" "}
                            {idBase == "" ? (
                              <>Nil</>
                            ) : (
                              <>
                                {assets.map((data) => {
                                  return (
                                    <>
                                      {data.id == idBase ? data.symbol : null}
                                    </>
                                  );
                                })}
                              </>
                            )}
                          </span>
                        </div>
                        <span
                          className="tradeViewAreaCont1_area1_priceChangeSpan"
                          style={
                            ChartChange2 == "decrease"
                              ? { color: "#ff537b" }
                              : ChartChange2 == "increase"
                              ? { color: "#31cb9e" }
                              : { color: "#31cb9e" }
                          }
                        >
                          {ChartChange2 == "decrease" ? (
                            <>
                              {ChartPriceDifference2} (
                              {parseFloat(ChartPercentChange2).toFixed(2) + "%"}
                              )
                            </>
                          ) : (
                            <>
                              {"+" + ChartPriceDifference2} (
                              {"+" +
                                parseFloat(ChartPercentChange2).toFixed(2) +
                                "%"}
                              )
                            </>
                          )}
                        </span>
                      </div>
                    ) : null}

                    <div className="tradeViewAreaCont1_area2">
                      <div
                        className={
                          activeDuration == "hr1"
                            ? "tradeViewAreaCont1_area2_cont1_active"
                            : "tradeViewAreaCont1_area2_cont1"
                        }
                        onClick={ToggleDuration}
                        id="hr1"
                      >
                        1H
                      </div>
                      <div
                        className={
                          activeDuration == "hr4"
                            ? "tradeViewAreaCont1_area2_cont1_active"
                            : "tradeViewAreaCont1_area2_cont1"
                        }
                        onClick={ToggleDuration}
                        id="hr4"
                      >
                        4H
                      </div>
                      <div
                        className={
                          activeDuration == "day"
                            ? "tradeViewAreaCont1_area2_cont1_active"
                            : "tradeViewAreaCont1_area2_cont1"
                        }
                        onClick={ToggleDuration}
                        id="day"
                      >
                        1D
                      </div>
                      <div
                        className={
                          activeDuration == "week"
                            ? "tradeViewAreaCont1_area2_cont1_active"
                            : "tradeViewAreaCont1_area2_cont1"
                        }
                        onClick={ToggleDuration}
                        id="week"
                      >
                        1W
                      </div>
                      <div
                        className={
                          activeDuration == "month1"
                            ? "tradeViewAreaCont1_area2_cont1_active"
                            : "tradeViewAreaCont1_area2_cont1"
                        }
                        onClick={ToggleDuration}
                        id="month1"
                      >
                        1M
                      </div>
                      <div
                        className={
                          activeDuration == "month6"
                            ? "tradeViewAreaCont1_area2_cont1_active"
                            : "tradeViewAreaCont1_area2_cont1"
                        }
                        onClick={ToggleDuration}
                        id="month6"
                      >
                        6M
                      </div>
                    </div>
                  </div>
                  <div className="tradingView_container_1_chart">
                    {activeDuration == "hr1" ? (
                      <div
                        className="tradeViewAreaCont_chart_area2 "
                        style={{ width: "100%", height: 400 }}
                      >
                        <ResponsiveContainer>
                          <AreaChart
                            width={1000}
                            height={100}
                            data={formattedData}
                            margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
                          >
                            <defs>
                              <linearGradient
                                id="colorUv"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                              >
                                <stop
                                  offset="5%"
                                  stopColor="#31cb9e"
                                  stopOpacity={0.3}
                                />
                                <stop
                                  offset="100%"
                                  stopColor="#31cb9e"
                                  stopOpacity={0}
                                />
                              </linearGradient>
                            </defs>
                            {/* <CartesianGrid
                            strokeDasharray="1 1"
                            stroke="#d7d7d7"
                          /> */}
                            <XAxis
                              dataKey="time"
                              stroke="0"
                              interval={interval - 1}
                              ticks={formattedData
                                .slice(1, -1)
                                .map((dataPoint) => dataPoint.time)}
                              // tick={false}
                              tick={{ fontSize: 12 }}
                              allowDuplicatedCategory={false}
                            />
                            {/* <YAxis
                          domain={[minPrice, "auto"]}
                          tick={false}
                          axisLine={false}
                        /> */}
                            <Tooltip content={<CustomTooltip />} />

                            <Area
                              type="monotone"
                              dataKey={(d) => d.price - priceOffset}
                              stroke="#31cb9e"
                              fillOpacity={1}
                              fill="url(#colorUv)"
                              strokeWidth={2}
                            />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    ) : activeDuration == "hr4" ? (
                      <div
                        className="tradeViewAreaCont_chart_area2 "
                        style={{ width: "100%", height: 400 }}
                      >
                        <ResponsiveContainer>
                          <AreaChart
                            width={1000}
                            height={100}
                            data={formattedData2}
                            margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
                          >
                            <defs>
                              <linearGradient
                                id="colorUv"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                              >
                                <stop
                                  offset="5%"
                                  stopColor="#ff537b"
                                  stopOpacity={0.3}
                                />
                                <stop
                                  offset="100%"
                                  stopColor="#ff537b"
                                  stopOpacity={0}
                                />
                              </linearGradient>
                            </defs>
                            {/* <CartesianGrid
                            strokeDasharray="1 1"
                            stroke="#d7d7d7"
                          /> */}
                            <XAxis
                              dataKey="time"
                              stroke="0"
                              interval={interval2 - 1}
                              ticks={formattedData2
                                .slice(1, -1)
                                .map((dataPoint) => dataPoint.time)}
                              // tick={false}
                              tick={{ fontSize: 12 }}
                              allowDuplicatedCategory={false}
                            />
                            {/* <YAxis
                          domain={[minPrice, "auto"]}
                          tick={false}
                          axisLine={false}
                        /> */}
                            <Tooltip content={<CustomTooltip />} />

                            <Area
                              type="monotone"
                              dataKey={(d) => d.price - priceOffset2}
                              stroke="#ff537b"
                              fillOpacity={1}
                              fill="url(#colorUv)"
                              strokeWidth={2}
                            />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>
      {tokenModal ? (
        <UpdatedTokenModal
          asset={assets}
          toggleTokenModal={ToggleTokenModal}
          setAsset={setAssetsId}
          tokenModal={tokenModal}
          assetId={id}
        />
      ) : null}
      {tokenModal2 ? (
        <UpdatedTokenModal
          asset={assets}
          toggleTokenModal2={ToggleTokenModal2}
          tokenModal2={tokenModal2}
          setAsset2={setAssetsId2}
          assetId={id2}
        />
      ) : null}
      {shareSwap ? (
        <div className="shareSwapDiv">
          <div
            className="shareSwapDiv_closeDiv"
            onClick={ToggleShareSwap}
          ></div>
          <div className="shareSwapDiv_cont">
            <CloseIcon
              className="shareSwapDiv_cont_close_icon"
              onClick={ToggleShareSwap}
            />
            <div className="shareSwapDiv_cont1">
              <img
                src="/img/swap_share_banner.svg"
                alt=""
                className="shareSwapDiv_cont1_img"
              />
            </div>
            <div className="shareSwapDiv_cont2">
              <div className="shareSwapDiv_cont2_cont1">
                <div className="shareSwapDiv_cont2_cont1_title">
                  Invite Your Friends!
                </div>
                <div className="shareSwapDiv_cont2_cont1_sub_title">
                  A valid invitation must meet the following conditions：
                </div>
                <div className="shareSwapDiv_cont2_cont1_body">
                  <div className="shareSwapDiv_cont2_cont1_body_div1">
                    Visit DODO through the link generated on this page
                  </div>
                  <div className="shareSwapDiv_cont2_cont1_body_div1">
                    The user must connect to the wallet
                  </div>
                  <div className="shareSwapDiv_cont2_cont1_body_div1">
                    The user needs to submit at least one valid transaction
                  </div>
                </div>
              </div>
              <div className="shareSwapDiv_cont2_cont2">
                <div className="shareSwapDiv_cont2_cont2_icon_div">
                  <CloudDownloadOutlinedIcon className="shareSwapDiv_cont2_cont2_icon" />
                  Save
                </div>
                <div className="shareSwapDiv_cont2_cont2_icon_div">
                  <TwitterIcon className="shareSwapDiv_cont2_cont2_icon" />
                  Twitter
                </div>
                <div className="shareSwapDiv_cont2_cont2_icon_div_last ">
                  <LinkOutlinedIcon className="shareSwapDiv_cont2_cont2_icon" />
                  Copy Link
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default UpdatedSwap;
