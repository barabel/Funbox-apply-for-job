import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import SaleCard from '../sale-card';

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
                <SaleCard className={'sale__card'} {...card} />
                {card.callToAction && (
                  <div className='sale__call-to-action'>
                    {typeof card.callToAction.text === 'string' && <span className='sale__call-to-action-text'>{card.callToAction.text}</span>}
                    {typeof card.callToAction.action === 'string' && <span className='sale__call-to-action-action'><b>{card.callToAction.action}</b>.</span>}
                  </div>
                )}
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
  cards: PropTypes.arrayOf(PropTypes.shape({
    aboveTitle: PropTypes.string,
    title: PropTypes.string,
    underTitle: PropTypes.string,
    description: PropTypes.arrayOf(PropTypes.string),
    mass: PropTypes.shape({
      value: PropTypes.string,
      units: PropTypes.string
    }),
    className: PropTypes.string,
    callToAction: PropTypes.shape({
      text: PropTypes.string,
      action: PropTypes.string
    })
  }))
}

export default Sale;
