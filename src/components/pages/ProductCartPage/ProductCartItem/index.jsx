import React from "react";

import trashCanIcon from "asset/trash-can.svg";

import CheckBox from "components/common/CheckBox";
import Counter from "components/common/Counter";
import IconButton from "components/common/Button/IconButton";
import {
  ProductCartContainer,
  ProductCartControlBox,
  ProductCartImage,
  ProductCartName,
  ProductCartPrice,
} from "./styled";

function ProductCartItem({
  product: { id, thumbnailUrl, name, price, count, quantity },
  checkList,
  handleClickIncreaseButton,
  handleClickDecreaseButton,
  handleClickDeleteItemButton,
  handleChangeCheckbox,
}) {
  const totalPrice = Number(price) * count || null;

  return (
    <ProductCartContainer>
      <CheckBox
        isChecked={checkList.includes(id)}
        handleChangeCheckbox={handleChangeCheckbox(id)}
      />
      <ProductCartImage src={thumbnailUrl ?? ""} alt={name ?? "%ERROR%"} />
      <ProductCartName>{name ?? "%ERROR%"}</ProductCartName>
      <ProductCartControlBox>
        <IconButton
          src={trashCanIcon}
          alt="현재 상품 삭제 버튼"
          onClick={handleClickDeleteItemButton(id)}
        />
        <Counter
          count={count}
          handleClickDecreaseButton={handleClickDecreaseButton(id, count)}
          handleClickIncreaseButton={handleClickIncreaseButton(
            id,
            count,
            quantity
          )}
        />
        <ProductCartPrice>
          {totalPrice?.toLocaleString() || "%ERROR%"}원
        </ProductCartPrice>
      </ProductCartControlBox>
    </ProductCartContainer>
  );
}

export default React.memo(ProductCartItem);
