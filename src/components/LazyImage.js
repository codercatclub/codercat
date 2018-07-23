import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImageContainer = styled.div`
  position: relative;
  height: ${({ height }) => `${height}px`};
`;

const Image = styled.img`
  z-index: 1;
  max-width: 100%;
`;

const ProxyImage = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${({ height }) => `${height}px`};
  z-index: -1;
`;

export default function LazyImage({
  proxy, height, src, load, loadProxy, className,
}) {
  return (
    <ImageContainer height={height} className={className}>
      {load ? <Image src={src} height={height} /> : null}
      {loadProxy ? <ProxyImage src={proxy} height={height} /> : null}
    </ImageContainer>
  );
}

LazyImage.propTypes = {
  proxy: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  load: PropTypes.bool.isRequired,
  loadProxy: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
};
