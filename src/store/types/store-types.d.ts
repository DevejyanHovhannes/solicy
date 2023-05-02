import { Action as ReduxAction } from "redux";

export type Handler<S, A> = (state: Readonly<S>, action: Readonly<A>) => Readonly<S>;

export type ActionCreator<A> = (payload: Readonly<A["payload"]>) => Readonly<A>;

export type ActionType<T, P> = ReduxAction<T> & { payload: P };

export type PartialPick<T, K extends keyof T> = {
    [P in K]?: T[P];
};
