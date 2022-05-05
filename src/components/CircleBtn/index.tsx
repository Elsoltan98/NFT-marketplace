import {
  ImageSourcePropType,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React, {FC} from 'react';
import {COLORS, SHADOWS, SIZES} from '../../constants';

interface Props {
  onPress: () => void;
  imageUrl: ImageSourcePropType;
  top?: number;
  right?: number;
}

const CircleBtn: FC<Props> = ({onPress, imageUrl}, props: any) => {
  return (
    <TouchableOpacity style={{...styles.container, ...props}} onPress={onPress}>
      <Image source={imageUrl} style={styles.img} resizeMode="contain" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    position: 'absolute',
    borderRadius: SIZES.extraLarge,
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOWS.light,
  },
  img: {
    width: 24,
    height: 24,
  },
});

export default CircleBtn;
