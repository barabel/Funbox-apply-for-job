import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const SaleCard = ({
  aboveTitle,
  title,
  underTitle,
  description,
  mass,
  image
}) => {
  return (
    <div className='sale-card'>
      {typeof aboveTitle === 'string' && <div className='sale-card__above-title'>{aboveTitle}</div>}
      {typeof title === 'string' && <h3 className='sale-card__title'>{title}</h3>}
      {typeof underTitle === 'string' && <div className='sale-card__under-title'>{underTitle}</div>}
      {Array.isArray(description) && (
        <ul className='sale-card__description'>
          {
            description.map((point, index) => {
              return typeof point === 'string' && <li key={`${index}`} className='sale-card__point'>{point}</li>
            })
          }
        </ul>
      )}
      {image && (
        typeof image.src === 'string' && <img className='sale-card__image' src={image.src} alt={image.alt ? image.alt : 'image'} />
      )}
      {mass && (
        <div className='sale-card__mass'>
          {typeof mass.value === 'string' && <div className='sale-card__mass-value'>{mass.value}</div>}
          {typeof mass.units === 'string' && <div className='sale-card__mass-units'>{mass.units}</div>}
        </div>
      )}
    </div>
  );
}

SaleCard.propTypes = {
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
  })
}

export default SaleCard;
