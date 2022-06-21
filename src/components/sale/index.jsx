import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import SaleCard, { saleCardPropTypes } from '../sale-card';

const Sale = ({
  heading,
  cards
}) => {
  return (
    <section className='sale container'>
      {typeof heading === 'string' && <h2 className='sale__heading'>{heading}</h2>}
      {Array.isArray(cards) && (
        <ul className='sale__list'>
          {cards.map((card, index) => {
            return (
              <li key={`card-${index}`} className='sale__item'>
                <SaleCard {...card} />
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

Sale.propTypes = {
  heading: PropTypes.string,
  cards: PropTypes.arrayOf(PropTypes.shape(saleCardPropTypes))
}

export default Sale;
