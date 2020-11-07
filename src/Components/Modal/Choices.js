import React from 'react';
import styled from 'styled-components';
import { ToppingWrap as ChoiceWrap } from '../Style/ToppingChoice';
import { ToppingLabel as ChoiceLabel } from '../Style/ToppingChoice';
import { ToppingCheckbox as ChoiceCheckbox } from '../Style/ToppingChoice';

export function Choices({ openItem, choice, changeChoices }) {
  return (
    <>
      <h3>Выбирайте: </h3>
      <ChoiceWrap>
        {openItem.choices.map((item, i) => (
          <ChoiceLabel key={i}>
            <ChoiceCheckbox 
            type="radio"
            name="choices"
            checked={choice === item}
            value={item}
            onChange={changeChoices}
            />
            {item}
          </ChoiceLabel>
        ))}
      </ChoiceWrap>
    </>
  )
}