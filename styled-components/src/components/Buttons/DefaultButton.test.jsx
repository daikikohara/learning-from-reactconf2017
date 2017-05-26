import React from 'react';
import {matcher, serializer} from 'jest-styled-components';
import renderer from 'react-test-renderer';
import DefaultButton from './DefaultButton';

expect.extend(matcher);
expect.addSnapshotSerializer(serializer);

describe('DefaultButton Test', () => {
  it('should be rendered correctly on active', () => {
    const renderedElement = renderer.create(<DefaultButton active={true} />);
    expect(renderedElement).toMatchStyledComponentsSnapshot();
  });
  it('should be rendered correctly on disabled', () => {
    const renderedElement = renderer.create(<DefaultButton active={false} />);
    expect(renderedElement).toMatchStyledComponentsSnapshot();
  });
});

