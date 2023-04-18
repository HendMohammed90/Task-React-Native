import {StyleSheet} from 'react-native';

const colours = {
  black: 'rgb(42,42,42)',
  red: 'rgb(230,73,111)',
  blue: 'rgb(0,191,215)',
  yellow: 'rgb(255,255,80)',
  grey: 'rgb(155,155,155)',
  white: 'rgb(245,245,245)',
};

const fonts = {
  regular: 'PublicaSans-Regular',
  bold: 'PublicaSans-Bold',
  thin: 'PublicaSans-UltraLight',
};

const defaultStyles = StyleSheet.create({
  defaultText: {
    fontFamily: fonts.regular,
    letterSpacing: 0.5,
    fontSize: 18,
    color: colours.black,
  },
  ThinText: {
    fontFamily: fonts.thin,
    letterSpacing: 0.5,
    fontSize: 18,
    color: colours.black,
  },
  boldText: {
    fontFamily: fonts.bold,
    letterSpacing: 0.5,
    fontSize: 18,
    color: colours.black,
  },
  smallText: {
    fontFamily: fonts.regular,
    letterSpacing: 0.5,
    fontSize: 13,
    color: colours.black,
  },
  smallBoldText: {
    fontFamily: fonts.bold,
    letterSpacing: 0.5,
    fontSize: 13,
    color: colours.black,
  },
  smallLightText: {
    fontFamily: fonts.thin,
    letterSpacing: 0.5,
    fontSize: 13,
    color: colours.black,
  },
  headerText: {
    fontFamily: fonts.thin,
    letterSpacing: 0.5,
    fontSize: 28,
    color: colours.black,
  },
});

export {colours, fonts, defaultStyles};
