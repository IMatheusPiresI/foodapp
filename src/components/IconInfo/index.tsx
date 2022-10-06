import React from 'react';
import * as S from './styles';

type IconInfoProps = {
  name: string;
  size: number;
  color: string;
  title: string | number;
  fontsize: number;
  colorFont?: string;
  location?: boolean;
};

export const IconInfo: React.FC<IconInfoProps> = ({
  name,
  size,
  color,
  title,
  fontsize,
  colorFont,
  location,
}) => {
  return (
    <S.Container>
      {location ? (
        <S.IconEnt testID="location" name={name} size={size} color={color} />
      ) : (
        <S.IconFont testID="FontIcon" name={name} size={size} color={color} />
      )}
      <S.Title testID="colorFont" fontsize={fontsize} colorFont={colorFont}>
        {title}
      </S.Title>
    </S.Container>
  );
};
