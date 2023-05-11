import React from 'react';
import {CardSuit, CardValue, ICard, ValueNames} from "../../types/card";
import cn from 'classnames'
import styles from './styles.module.css'

type Props = ICard

function getLabelProps (suit: CardSuit, value: CardValue) {
    const valueName = ValueNames[value]
    const suitSymbols = {
        'diamonds': '♦',
        'clubs': '♣',
        'hearts': '♥',
        'spades': '♠',
    }

    return {
        suitSymbol: suitSymbols[suit],
        valueName,
        isRed: ['hearts', 'diamonds'].includes(suit),
    }
}

export const Card = (props: Props) => {
  const {
      suit,
      value,
  } = props;

  const {isRed, valueName, suitSymbol} = getLabelProps(suit, value)

  return (
    <div className={cn(styles.shape, {[styles.red]: isRed})}>
        <div className={styles.labelArea}>
            <span className={styles.cardValue}>{valueName}</span>
            <span className={styles.cardSuit}>{suitSymbol}</span>
        </div>

    </div>
  );
};
