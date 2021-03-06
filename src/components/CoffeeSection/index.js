import React from 'react';
import PropTypes from 'prop-types';
import Media from 'react-media';
import 'styled-components/macro';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { breakpoints } from '../../config/grid';
import coffeeArtJPG from './img/cappuccino-art.jpg';
import { ReactComponent as CoffeeCup } from './img/coffee-cup.svg';
import { ReactComponent as CoffeeBeans } from './img/coffee-beans.svg';
import styles from './styles';

const CoffeeSection = ({ className, data }) => {
  const { title, text, button: { to, label } } = data;

  return (
    <div className={className} css={styles}>
      <Media query={`(max-width: ${breakpoints.md}px`}>
        {(match) => (match
          ? (
            <Grid container className="mobile-coffee-wrapper">
              <Grid item xs={12} className="block-container">
                <div className="text-block">
                  <h2>{title}</h2>
                  <p>{text}</p>
                </div>
                <button type="submit">{label}</button>
              </Grid>

              <Grid item xs={12}>
                <CoffeeCup className="coffee-cup" />
              </Grid>
            </Grid>
          )
          : (
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              className="desktop-coffee-wrapper"
            >
              <Grid className="img-wrapper" item lg={4}>
                <img src={coffeeArtJPG} alt="coffee-art-cappuccino" />
              </Grid>

              <Grid item lg={4} className="block-container">
                <div className="text-block">
                  <h2>{title}</h2>
                  <p>{text}</p>
                  <CoffeeBeans width={80} />
                </div>

                <Link to={to}>{label}</Link>
              </Grid>
            </Grid>
          ))}
      </Media>
    </div>
  );
};
CoffeeSection.defaultProps = {
  className: '',
  button: {
    to: '/',
    label: 'default label',
  },
};

CoffeeSection.propTypes = {
  className: PropTypes.string,
  button: PropTypes.shape({
    to: PropTypes.string,
    label: PropTypes.string,
  }),
  data: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    button: {
      to: PropTypes.string,
      label: PropTypes.string,
    },
  }).isRequired,
};

export default CoffeeSection;
