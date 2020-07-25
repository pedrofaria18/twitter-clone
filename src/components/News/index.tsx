import React from 'react';

import { Container } from './styles';

interface Props {
  top: string;
  description: string;
}

const News: React.FC <Props> = ({
  top, description
}) => {
  return (
    <Container>
        <span>{top}</span>
        <strong>{description}</strong>
    </Container>
);
}

export default News;