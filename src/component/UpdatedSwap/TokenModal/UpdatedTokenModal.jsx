import React, { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./UpatedTokenModal.css";
export const UpdatedTokenModal = ({
  asset,
  toggleTokenModal,
  setAsset,
  tokenModal2,
  setAsset2,
  tokenModal,
  toggleTokenModal2,
  assetId,
  assetId2,
}) => {
  return (
    <div className=" dark updatedTokenModal">
      <div
        className="updatedTokenModal_closeDiv"
        onClick={
          tokenModal == true
            ? toggleTokenModal
            : tokenModal2 == true
            ? toggleTokenModal2
            : toggleTokenModal
        }
      ></div>
      <div className="updatedTokenModal_area">
        <div className="updatedTokenModal_area1">
          <div className="updatedTokenModal_area1_head">
            <span>Select a token </span>
            <CloseIcon
              className="updatedTokenModal_area1_head_close_icon"
              onClick={
                tokenModal
                  ? toggleTokenModal
                  : tokenModal2
                  ? toggleTokenModal2
                  : toggleTokenModal
              }
            />
          </div>
          <div className="updatedTokenModal_area1_para">
            You can search and select any token on KyberSwap
          </div>
          <div className="updatedTokenModal_area1_search">
            <input
              type="search"
              name=""
              id=""
              className="updatedTokenModal_area1_search_input"
            />
          </div>
          <div className="updatedTokenModal_area1_favorites">
            {asset
              .filter((data) => data.favorite == "true")
              .map((data) => (
                <button
                  id={data.id}
                  className="updatedFavoriteToken_cont"
                  disabled={data.id == assetId ? true : false}
                  onClick={
                    tokenModal2 == true
                      ? setAsset2
                      : tokenModal == true
                      ? setAsset
                      : setAsset
                  }
                >
                  <img
                    src={data.img}
                    alt=""
                    className="updatedFavoriteToken_cont_img"
                  />
                  <div className="updatedFavoriteToken_cont_title">
                    {data.symbol}
                  </div>
                </button>
              ))}
          </div>
        </div>
        <div className="updatedTokenModal_area_body">
          <div className="updatedTokenModal_area_body_area">
            {asset.map((data) => (
              <button
                disabled={data.id == assetId ? true : false}
                id={data.id}
                className="updatedTokenModal_area_body_area1"
                onClick={
                  tokenModal2 == true
                    ? setAsset2
                    : tokenModal == true
                    ? setAsset
                    : setAsset
                }
              >
                <div className="updatedTokenModal_area_body_area1_cont1">
                  <div className="updatedTokenModal_area_body_area1_cont1_div1">
                    <img
                      src={data.img}
                      alt=""
                      className="updatedTokenModal_area_body_area1_cont1_div1_img"
                    />
                  </div>
                  <div className="updatedTokenModal_area_body_area1_cont1_div2">
                    <div className="updatedTokenModal_area_body_area1_cont1_div2_cont1">
                      {data.symbol}
                    </div>
                    <div className="updatedTokenModal_area_body_area1_cont1_div2_cont2">
                      {data.name}
                    </div>
                  </div>
                </div>
                <div className="updatedTokenModal_area_body_area1_cont2">
                  {data.balance}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
