import {createSlice} from "@reduxjs/toolkit";
import {createStack} from "../../lib/createStack";
import {shuffle} from "../../lib/shuffle";
import {CardSuit, ICard} from "../../types/card";

type State = {
    trump: CardSuit | null
    stack: ICard[]
    player: ICard[]
    enemy: ICard[]
}
const initialState: State = {
    trump: null,
    stack: [],
    player: [],
    enemy: [],
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        init: (state) => {
            const stack = shuffle(createStack())
            const player: ICard[] = []
            const enemy: ICard[] = []

            while (stack.length > 0 && player.length < 6) {
                // @ts-ignore
                player.push(stack.pop())
                // @ts-ignore
               // enemy.push(stack.pop())
            }

            state.trump = stack.pop()?.suit || null
            state.player = player
            state.enemy = enemy
            state.stack = stack
        }
    }
})

export const {init} = gameSlice.actions
export default gameSlice.reducer

