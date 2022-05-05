import {View, StyleSheet, Image} from 'react-native';
import React, {FC} from 'react';
import {COLORS, SIZES, SHADOWS} from '../../constants';
import {NFTItem} from '../../models';

interface Props {
  data: NFTItem;
}

const NFTCard: FC<Props> = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Image resizeMode="cover" source={data.image} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.font,
    marginBottom: SIZES.extraLarge,
    margin: SIZES.base,
    ...SHADOWS.dark,
  },
  cardContainer: {
    width: '100%',
    height: 250,
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: SIZES.font,
    borderTopRightRadius: SIZES.font,
  },
});

export default NFTCard;
