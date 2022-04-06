import { createStore, createEffect, restore, createEvent } from "effector";
import { data } from "../data";

export const show = createEvent("show");
export const $isVisible = restore(show, false);
