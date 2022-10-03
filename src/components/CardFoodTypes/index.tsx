import React, {useEffect} from 'react';
import {RectButtonProps} from 'react-native-gesture-handler';
import {useTheme} from 'styled-components';
import * as S from './styles';

import {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
  withDelay,
  Easing,
} from 'react-native-reanimated';

type CardFoodTypesProps = RectButtonProps & {
  name: string;
  imageUrl: string;
};

export const CardFoodTypes: React.FC<CardFoodTypesProps> = ({
  name,
  imageUrl,
  ...rest
}) => {
  const theme = useTheme();
  const opacityTransformAnimate = useSharedValue<number>(30);
  const shadowAnimate = useSharedValue<number>(0);

  const animetedTransformOpacity = useAnimatedStyle(() => {
    return {
      transform: [{translateY: opacityTransformAnimate.value}],
      opacity: interpolate(opacityTransformAnimate.value, [30, 0], [0, 1]),
    };
  });

  const shadowAnimated = useAnimatedStyle(() => {
    return {
      shadowColor: theme.colors.text,
      shadowOpacity: interpolate(shadowAnimate.value, [0, 1], [0, 0.22]),
      shadowRadius: interpolate(shadowAnimate.value, [0, 1], [0, 0.2]),
      elevation: interpolate(shadowAnimate.value, [0, 1], [0, 3]),
    };
  });

  const initAnimate = () => {
    const newValueOpacityTransformAnimate = 0;
    const newValue = 1;
    opacityTransformAnimate.value = withTiming(
      newValueOpacityTransformAnimate,
      {duration: 700, easing: Easing.bounce},
    );
    shadowAnimate.value = withDelay(
      700,
      withTiming(newValue, {duration: 1500}),
    );
  };

  useEffect(() => {
    initAnimate();
  }, []);

  return (
    <S.Container style={[animetedTransformOpacity, shadowAnimated]}>
      <S.ButtonFoodTypes {...rest}>
        <S.ImageFood source={{uri: imageUrl}} resizeMode="contain" />
        <S.NameFood>{name}</S.NameFood>
      </S.ButtonFoodTypes>
    </S.Container>
  );
};
