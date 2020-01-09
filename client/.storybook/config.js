import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import GlobalStyles from '../src/GlobalStyles';
import { withKnobs } from '@storybook/addon-knobs';
import { ThemeProvider } from 'emotion-theming';
import { secondary } from '../src/themes/themes';
// add GlobalStyle for every story
const GlobalStyleDecorator = storyFn => (
  <ThemeProvider theme={secondary}>
    <GlobalStyles />
    {storyFn()}
  </ThemeProvider>
);
addDecorator(GlobalStyleDecorator);
addDecorator(withKnobs);

// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.js$/), module);
