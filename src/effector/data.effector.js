import { createStore, createEffect } from "effector";
import { data } from "../data";

export const $data = createStore([]);
export const getDataFx = createEffect(async () => {
    return data.headphones;
});
$data.on(getDataFx.done, (_, { result }) => result);
