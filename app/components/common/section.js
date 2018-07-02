import PropTypes from 'prop-types';
import { style, mediaQueries } from '../../constants';

const Section = ({ section, mainContainer, children }) => (
  <section style={section.style}>
    <div style={mainContainer.style}>
      <style jsx>
        {`
          div {
            padding: 0 15px;
            margin: 0 auto;
          }

          @media (min-width: ${mediaQueries.S}) {
            div {
              width: 720px;
            }
          }

          @media (min-width: ${mediaQueries.L}) {
            div {
              width: 960px;
            }
          }

          @media (min-width: ${mediaQueries.XL}) {
            div {
              width: 1140px;
            }
          }
        `}
      </style>
      {children}
    </div>
  </section>
);

Section.defaultProps = {
  section: {
    style: {},
  },
  mainContainer: {
    style: {},
  },
};

Section.propTypes = {
  section: PropTypes.shape({
    style: PropTypes.object,
  }),
  mainContainer: PropTypes.shape({
    style: PropTypes.object,
  }),
  children: PropTypes.any,
};

module.exports = Section;
