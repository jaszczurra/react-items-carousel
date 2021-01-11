import React from 'react';
import {
  calculateActiveItemTranslateX,
  calculateNextIndex,
  calculatePreviousIndex,
} from './helpers'

const withCarouselValues = () => (Cpmt) => (props) => {
  const {
    children,
    activeItemIndex,
    activePosition,
    containerWidth,
    numberOfCards,
    slidesToScroll,
    gutter,
    firstAndLastGutter,
    showSlither,
    forcedWidth,
  } = props;

  const items = React.Children.toArray(children);
  const elko = calculateNextIndex({
    activePosition,
    activeItemIndex,
    numberOfCards,
    slidesToScroll,
    numberOfChildren: items.length,
  })

  return (
    <Cpmt
      {...props}
      items={items}
      nextItemIndex={elko}
      previousItemIndex={calculatePreviousIndex({
        activePosition,
        activeItemIndex,
        numberOfCards,
        slidesToScroll,
        numberOfChildren: items.length,
      })}
      activeItemTranslateX={calculateActiveItemTranslateX({
        activeItemIndex,
        activePosition,
        containerWidth,
        numberOfChildren: items.length,
        numberOfCards,
        gutter,
        firstAndLastGutter,
        showSlither,
        forcedWidth,
      })}
    />
  );
}

export default withCarouselValues;