import {View, Text, StyleSheet, Image, ImageSourcePropType} from 'react-native';
import React, {FC} from 'react';
import {assets, COLORS, FONTS, SHADOWS, SIZES} from '../../constants';

interface Img {
  imgUrl: ImageSourcePropType;
  index: number;
}

const ImgCmp: FC<Img> = ({imgUrl, index}) => {
  return (
    <Image
      source={imgUrl}
      style={[styles.img, {marginLeft: index === 0 ? 0 : -SIZES.font}]}
    />
  );
};

interface NftTitleProps {
  title: string;
  subtitle: string;
  titleSize: number;
  subTitleSize: number;
}

export const NftTitle: FC<NftTitleProps> = ({
  title,
  subtitle,
  titleSize,
  subTitleSize,
}) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: titleSize,
          color: COLORS.primary,
        }}>
        {title}
      </Text>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: subTitleSize,
          color: COLORS.primary,
        }}>
        {subtitle}
      </Text>
    </View>
  );
};

export const EthPrice = ({price}: any) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image
        source={assets.eth}
        style={{width: 20, height: 20, marginRight: 2}}
      />
      <Text
        style={{
          fontFamily: FONTS.medium,
          fontSize: SIZES.font,
          color: COLORS.primary,
        }}>
        {price}
      </Text>
    </View>
  );
};
export const RectBtn = () => {
  return (
    <View>
      <Text>RectBtn</Text>
    </View>
  );
};

export const People = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      {[assets.person02, assets.person03, assets.person04].map(
        (imgUrl, index) => (
          <ImgCmp imgUrl={imgUrl} index={index} key={`People-${index}`} />
        ),
      )}
    </View>
  );
};
export const EndDate = () => {
  return (
    <View style={styles.endDate}>
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small,
          color: COLORS.primary,
        }}>
        Ending in
      </Text>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.medium,
          color: COLORS.primary,
        }}>
        12h 30m
      </Text>
    </View>
  );
};

export const SubInfo = () => {
  return (
    <View style={styles.subinfo}>
      <People />
      <EndDate />
    </View>
  );
};

const styles = StyleSheet.create({
  subinfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: SIZES.font,
    marginTop: -SIZES.extraLarge,
  },
  img: {
    width: 48,
    height: 48,
  },
  endDate: {
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.base,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOWS.light,
    elevation: 1,
    maxWidth: '50%',
  },
});
