import React from 'react';
import { mount, shallow } from 'enzyme';

import ThemeProvider from '../design-tokens/ThemeProvider';

const shallowWithTheme = (element: React.ReactElement<any>, ...props): any =>
  shallow(element, {
    wrappingComponent: ThemeProvider,
    ...props,
  });

const mountWithTheme = (element: React.ReactElement<any>, ...props): any =>
  mount(element, {
    wrappingComponent: ThemeProvider,
    ...props,
  });

export { mountWithTheme as mount, shallowWithTheme as shallow };
