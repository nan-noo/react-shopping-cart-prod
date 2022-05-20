import React, { useState } from "react";
import { useDispatch } from "react-redux";

import trashCanIcon from "../../../../asset/trash-can.svg";
import { deleteCartList, updateCartCount } from "../../../../reducers/cartList";

import CheckBox from "../../../common/CheckBox";
import Counter from "../../../common/Counter";
import IconButton from "../../../common/IconButton";
import {
  ProductCartContainer,
  ProductCartControlBox,
  ProductCartImage,
  ProductCartName,
  ProductCartPrice,
} from "./styled";

function ProductCartItem({
  product: { id, thumbnailUrl, name, price, quantity, count },
}) {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(true);

  const handleClickIncreaseButton = () => {
    dispatch(updateCartCount(id, "increase"));
  };

  const handleClickDecreaseButton = () => {
    if (count <= 1) return;

    dispatch(updateCartCount(id, "decrease"));
  };

  const handleChangeCheckbox = () => {
    setIsChecked((prev) => !prev);
  };

  const handleClickDeleteItemButton = () => {
    dispatch(deleteCartList(id));
  };

  const totalPrice = price ? Number(price) * count : null;

  return (
    <ProductCartContainer>
      <CheckBox
        isChecked={isChecked}
        handleChangeCheckbox={handleChangeCheckbox}
      />
      <ProductCartImage src={thumbnailUrl ?? ""} alt={name ?? "%ERROR%"} />
      <ProductCartName>{name ?? "%ERROR%"}</ProductCartName>
      <ProductCartControlBox>
        <IconButton
          src={trashCanIcon}
          alt="현재 상품 삭제 버튼"
          onClick={handleClickDeleteItemButton}
        />
        <Counter
          count={count}
          handleClickDecreaseButton={handleClickDecreaseButton}
          handleClickIncreaseButton={handleClickIncreaseButton}
        />
        <ProductCartPrice>
          {totalPrice?.toLocaleString() || "%ERROR%"}원
        </ProductCartPrice>
      </ProductCartControlBox>
    </ProductCartContainer>
  );
}

export default React.memo(ProductCartItem);
