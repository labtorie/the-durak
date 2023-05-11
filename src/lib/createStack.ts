import {CardSuits, CardValues, ICard} from "../types/card";

export function createStack(): ICard[] {
    const acc: ICard[] = []
    for (let suit of CardSuits) {
        for (let value of CardValues) {
            acc.push({
                suit,
                value
            })
        }
    }

    return acc
}
