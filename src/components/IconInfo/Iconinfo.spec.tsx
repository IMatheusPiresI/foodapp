import React, {ReactNode} from 'react';
import {render} from '@testing-library/react-native';

import {IconInfo} from '.';
import {ThemeProvider} from 'styled-components/native';
import theme from '../../styles/theme';

jest.mock('react-native-responsive-fontsize', () => ({
  RFValue: (value: number) => value,
}));

const WrapperProvider: React.FC<{children: ReactNode}> = ({children}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

describe('IconInfo Component', () => {
  describe('location was passed', () => {
    it('render Location Icon', () => {
      const {getByTestId} = render(
        <IconInfo
          color={theme.colors.shape}
          fontsize={23}
          name="location-pin"
          size={23}
          title="location"
          location
        />,
        {
          wrapper: WrapperProvider,
        },
      );

      expect(getByTestId('location')).toBeTruthy();
    });
  });
  describe("location don't was passed", () => {
    it('render component icon from materialIcons', () => {
      const {getByTestId} = render(
        <IconInfo
          color={theme.colors.action_items}
          fontsize={23}
          name="chevron-left"
          size={23}
          title="location"
        />,
        {
          wrapper: WrapperProvider,
        },
      );

      expect(getByTestId('FontIcon')).toBeTruthy();
    });
  });
  describe('should be color was passed', () => {
    it('color passed was correctly', () => {
      const {getByTestId} = render(
        <IconInfo
          color={theme.colors.action_items}
          colorFont={theme.colors.action_items}
          fontsize={23}
          name="chevron-left"
          size={23}
          title="location"
        />,
        {
          wrapper: WrapperProvider,
        },
      );
      console.log();

      expect(getByTestId('colorFont').props.style[0].color).toEqual(
        theme.colors.action_items,
      );
    });
  });
});
