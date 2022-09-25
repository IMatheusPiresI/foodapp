import React from 'react';

import * as S from './styles';

import {useNavigation} from '@react-navigation/native';

export const BackButton: React.FC = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <S.Container
      onPress={handleGoBack}
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
      }}>
      <S.Icon name="chevron-left" size={15} />
    </S.Container>
  );
};
