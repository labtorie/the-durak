import React, {useState} from 'react';
import cn from 'classnames';
import Draggable from 'react-draggable'
import {ICard} from "../../types/card";
import styles from './styles.module.css'
import {Card} from "../Card/Card";


type Props = {
    cards: ICard[]
};

export const Hand = (props: Props) => {
    const {
        cards
    } = props;

    const [selectedIndex, setSelectedIndex] = useState(-1)

    const handleCardClick = (index: number) => {
        setSelectedIndex(index)
    }

    const cardsNode = cards.map(({value, suit}, index) => (
        <div
            className={cn(styles.cardHolder, {[styles.selected]: index === selectedIndex})}
            onClick={()=>handleCardClick(index)}
        >
            <Card value={value} suit={suit}/>
        </div>
    ))

    return (
        <div className={styles.container}>
            <div className={styles.row}>
                {cardsNode}
            </div>
        </div>
    );
};
