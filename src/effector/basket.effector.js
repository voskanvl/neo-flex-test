import {
    createStore,
    createEffect,
    restore,
    createEvent,
    sample,
} from "effector";
import { data } from "../data";

export const show = createEvent("show");

export const $isVisible = restore(show, false);

export const addProductFx = createEffect(async id => {
    return data.headphones.filter(headphone => headphone.id === id);
});

export const incrementProductVolume = createEvent();
export const decrementProductVolume = createEvent();
export const removeProduct = createEvent();

addProductFx.done.watch(e => console.log("addProductFx", e));

export const $basket = createStore([])
    .on(addProductFx.done, (state, { params, result: [result] }) => {
        /*
        {
            id:number,
            product:{id:number, price: number ....},
            volume: number
        }
    */
        const hasInState = state.findIndex(e => e.id === params);
        if (hasInState !== -1) {
            const newState = [...state];
            newState.splice(hasInState, 1);
            return [
                ...newState,
                {
                    id: params,
                    product: result,
                    volume: state[hasInState]["volume"] + 1,
                },
            ];
        }
        return [
            ...state,
            {
                id: params,
                product: result,
                volume: 1,
            },
        ];
    })
    .on(incrementProductVolume, (state, id) => {
        const newState = [...state];
        const productIndex = state.findIndex(e => e.id === id);
        if (productIndex !== -1) newState[productIndex].volume++;
        return newState;
    })
    .on(removeProduct, (state, id) => {
        const newState = [...state];
        const productIndex = state.findIndex(e => e.id === id);
        if (productIndex !== -1) newState.splice(productIndex, 1);
        return newState;
    });

$basket.watch(e => {
    console.log("$basket", e);
    if (e.length > 1) console.log(Object.is(...e));
});

sample({
    clock: decrementProductVolume,
    source: $basket,
    fn: (state, id) => {
        const newState = [...state];
        const productIndex = state.findIndex(e => e.id === id);
        if (productIndex !== -1 && newState[productIndex].volume > 1)
            newState[productIndex].volume--;
        return newState;
    },
    target: $basket,
});
