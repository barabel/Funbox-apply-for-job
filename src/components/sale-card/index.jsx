import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import cn from "classnames";
import './style.scss';

const SaleCard = ({
  aboveTitle,
  deselect,
  title,
  underTitle,
  description,
  mass,
  image,
  className,
  callToAction,
  isSelected,
  isDisabled,
  tabindex
}) => {
  const [selected, setSelected] = useState(isSelected);
  const [noHover, setNoHover] = useState(false);
  const [isDeselect, setIsDeselect] = useState(false);

  const handleClick = useCallback((event) => {
    if (isDisabled) {
      return
    }

    if (selected) {
      setSelected(false);
    } else {
      setSelected(true);
    }

    if (!event.target.closest('.sale-card__call-to-action-action')) {
      setNoHover(true);
    }

    setIsDeselect(false);
  }, [isDisabled, selected]);

  const handleMouseLeave = useCallback(() => {
    setNoHover(false);
    setIsDeselect(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (selected && !noHover) {
      setIsDeselect(true);
    }
  }, [selected, noHover]);

  const renderCallToCation = useCallback((state = 'default') => {
      return (
        <div className='sale-card__call-to-action'>
          {typeof callToAction[state]?.text === 'string' && <span className='sale-card__call-to-action-text'>{callToAction[state]?.text}</span>}
          {state === 'default' && typeof callToAction[state]?.action === 'string' && (
            <span className='sale-card__call-to-action-action'><b onClick={handleClick}>{callToAction[state]?.action}</b>.</span>
          )}
        </div>
      );
  }, [callToAction, handleClick]);

  return (
    <div className={cn('sale-card', {'sale-card--disabled': isDisabled}, className)}>
      <div className={cn('sale-card__card', {'sale-card__card--selected': selected, 'sale-card__card--no-hover': noHover})} onClick={handleClick} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
        <div className='sale-card__content'>
          {typeof aboveTitle === 'string' && (
            <div className='sale-card__above-title'>
              {(isDeselect && typeof deselect === 'string') ? deselect : aboveTitle}
            </div>
          )}
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
      </div>
      {callToAction && (
        renderCallToCation(selected ? 'selected' : isDisabled ? 'disabled' : 'default')
      )}
    </div>
  );
}

export const saleCardPropTypes = {
  aboveTitle: PropTypes.string,
  deselect: PropTypes.string,
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
  className: PropTypes.string,
  callToAction: PropTypes.shape({
    default: PropTypes.shape({
      text: PropTypes.string,
      action: PropTypes.string
    }),
    selected: PropTypes.shape({
      text: PropTypes.string,
      action: PropTypes.string
    }),
    disabled: PropTypes.shape({
      text: PropTypes.string,
      action: PropTypes.string
    })
  }),
  isSelected: PropTypes.bool,
  isDisabled: PropTypes.bool,
  tabindex: PropTypes.string
}

SaleCard.propTypes = saleCardPropTypes;

export default SaleCard;
