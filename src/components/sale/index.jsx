import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import SaleCard from '../sale-card';

const Sale = ({
  heading,
  cards
}) => {
  return (
    <section className='sale'>
      {typeof heading === 'string' && <h2 className='sale__heading'>{heading}</h2>}
      {Array.isArray(cards) && (
        <div className='sale__cards'>
          {cards.map((card, index) => {
            return (
              <div key={`card-${index}`} className='sale__card'>
                <SaleCard {...card} />
                {card.callToAction && (
                  <div className='sale__call-to-action'>
                    {typeof card.callToAction.text === 'string' && <span className='sale__call-to-action-text'>{card.callToAction.text}</span>}
                    {typeof card.callToAction.action === 'string' && <span className='sale__call-to-action-action'>{card.callToAction.action}</span>}
                  </div>
                )}
              </div>
            );
          })}
        </div>
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
    image: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string
    }),
    callToAction: PropTypes.shape({
      text: PropTypes.string,
      action: PropTypes.string
    })
  }))
}

export default Sale;
