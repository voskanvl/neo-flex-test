import { $data, getDataFx } from "./data.effector";
import { $isVisible, show, $basket, addProductFx } from "./basket.effector";

export const data = { $data, getDataFx };
export const basket = { $isVisible, show, $basket, addProductFx };
