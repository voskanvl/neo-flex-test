import { createEvent, createStore, forward, sample } from "effector";
import { removeProduct } from "./basket.effector";
import { $data } from "./data.effector";

export const $attention = createStore(
    "Вы удаляете из корзины данный продукт. Подтвердите свой выбор",
);
export const $show = createStore(false);
export const $removingProduct = createStore({});
export const ok = createEvent();
export const cancel = createEvent();
export const setTitle = createEvent();
export const show = createEvent();
export const hide = createEvent();

$show.on(show, () => true).on(hide, () => false);

$removingProduct.on(show, (_, id) => $data.getState().find(e => e.id === id));
