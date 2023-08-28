import {Box, Title } from "./Section.styled";
import PropTypes from 'prop-types';


export const Section = ({title, children}) => {
    return (
        <Box>
          {title && <Title title={title}>{title}</Title>}
          {children}
        </Box>
      );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
};