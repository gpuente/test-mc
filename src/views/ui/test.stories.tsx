import React from 'react';
import { storiesOf } from '@storybook/react';

interface TestProps {
  bar: number;
  foo: string;
};

const TestComponent: React.SFC<TestProps> = ({ bar, foo }) => (
  <div>
    <div>bar is: {bar}</div>
    <div>foo is: {foo}</div>
  </div>
);

storiesOf('TestComponent', module).add('TSX', () => (
  <TestComponent bar={10} foo="simple text" />
));
