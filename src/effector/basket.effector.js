import { createStore, createEffect, restore, createEvent } from "effector";
import { data } from "../data";

export const show = createEvent("show");

export const $isVisible = restore(show, true);
/*
{
    id:number,
    product:{id:number, price: number ....},
    volume: number
}
*/
export const addProductFx = createEffect(async id => {
    return data.headphones.filter(headphone => headphone.id === id);
});

addProductFx.done.watch(e => console.log("addProductFx", e));

export const $basket = createStore([]).on(addProductFx.done, (state, res) => {
    const hasInState = state.findIndex(e => e.id === res.params);
    if (hasInState !== -1) {
        const newState = [...state];
        newState.splice(hasInState, 1);
        return [
            ...newState,
            {
                id: res.params,
                product: res.result[0],
                volume: state[hasInState]["volume"] + 1,
            },
        ];
    }
    return [
        ...state,
        {
            id: res.params,
            product: res.result[0],
            volume: 1,
        },
    ];
});

$basket.watch(e => {
    console.log("$basket", e);
    if (e.length > 1) console.log(Object.is(...e));
});
