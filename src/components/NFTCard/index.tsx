import {View, StyleSheet, Image} from 'react-native';
import React, {FC} from 'react';
import {COLORS, SIZES, SHADOWS, assets} from '../../constants';
import {NFTItem} from '../../models';
import CircleBtn from '../CircleBtn';
import {EthPrice, NftTitle, RectBtn, SubInfo} from '../SubInfo';

interface Props {
  data: NFTItem;
}

const NFTCard: FC<Props> = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Image resizeMode="cover" source={data.image} style={styles.image} />
        <CircleBtn
          imageUrl={assets.heart}
          onPress={() => {}}
          right={10}
          top={10}
        />
      </View>
      <SubInfo />
      <View style={{width: '100%', padding: SIZES.font}}>
        <NftTitle
          title={data.name}
          subtitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />

        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <EthPrice price={data.price} />
          <RectBtn />
        </View>
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
