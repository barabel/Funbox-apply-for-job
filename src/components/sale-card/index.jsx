import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import cn from "classnames";
import './style.scss';

const SaleCard = ({
  aboveTitle,
  title,
  underTitle,
  description,
  mass,
  className,
  callToAction
}) => {
  return (
    <div className={cn('sale-card', className)}>
      <div className='sale-card__card'>
        <div className='sale-card__content'>
          {typeof aboveTitle === 'string' && <div className='sale-card__above-title'>{aboveTitle}</div>}
          {typeof title === 'string' && <h3 className='sale-card__title'>{title}</h3>}
          {typeof underTitle === 'string' && <div className='sale-card__under-title'>{underTitle}</div>}
          {Array.isArray(description) && (
            <ul className='sale-card__description'>
              {
                description.map((point, index) => {
                  return typeof point === 'string' && <li key={`${index}`} className='sale-card__point'>{parse(point)}</li>
                })
              }
            </ul>
          )}
          <img className='sale-card__image' src='/assets/images/cat.png' alt='cat' />
          {mass && (
            <div className='sale-card__mass'>
              {typeof mass.value === 'string' && <div className='sale-card__mass-value'>{mass.value}</div>}
              {typeof mass.units === 'string' && <div className='sale-card__mass-units'>{mass.units}</div>}
            </div>
          )}
        </div>
      </div>
      {callToAction && (
        <div className='sale-card__call-to-action'>
          {typeof callToAction.text === 'string' && <span className='sale-card__call-to-action-text'>{callToAction.text}</span>}
          {typeof callToAction.action === 'string' && <span className='sale-card__call-to-action-action'><b>{callToAction.action}</b>.</span>}
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
  className: PropTypes.string,
  callToAction: PropTypes.shape({
    text: PropTypes.string,
    action: PropTypes.string
  })
}

export default SaleCard;
