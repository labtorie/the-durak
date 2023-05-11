export const CardSuits = ['clubs','diamonds','spades','hearts'] as const
export const CardValues = [0,1,2,3,4,5,6,7,8] as const
export const ValueNames = ['6','7','8','9','10','J','Q','K','A'] as const

export type CardSuit = typeof CardSuits[number]
export type CardValue = typeof CardValues[number]
export type ValueName = typeof ValueNames[CardValue]

export interface ICard {
    value: CardValue,
    suit: CardSuit,
}

