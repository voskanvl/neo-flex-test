import { $data, getDataFx } from "./data.effector";
import {
    $isVisible,
    show,
    $basket,
    addProductFx,
    removeProduct,
    decrementProductVolume,
    incrementProductVolume,
} from "./basket.effector";
import {
    $attention,
    cancel,
    ok,
    setTitle,
    $removingProduct,
    $show,
    hide,
    show as showAttention,
} from "./attention.effector";

export const data = { $data, getDataFx };
export const basket = {
    $isVisible,
    show,
    $basket,
    addProductFx,
    removeProduct,
    decrementProductVolume,
    incrementProductVolume,
};
export const attention = {
    $attention,
    cancel,
    ok,
    setTitle,
    $removingProduct,
    $show,
    hide,
    show: showAttention,
};
