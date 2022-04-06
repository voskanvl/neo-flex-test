import { createStore, createEffect, restore, createEvent } from "effector";
import { data } from "../data";

export const show = createEvent("show");
export const addProductFx = createEffect(async id => {
    return data.headphones.filter(headphone => headphone.id === id);
});

addProductFx.done.watch(e => console.log("addProductFx", e));

export const $isVisible = restore(show, true);
export const $basket = createStore([]).on(addProductFx.done, (state, r) => [
    ...state,
    r.result[0],
]);
$basket.watch(e => console.log("$backet", e));
