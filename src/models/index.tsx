import {ImageSourcePropType} from 'react-native';

export interface Bids {
  id: string;
  name: string;
  price: number;
  image: ImageSourcePropType;
  date: string;
}

export interface NFTItem {
  id: string;
  name: string;
  creator: string;
  price: number;
  description: string;
  image: ImageSourcePropType;
  bids: Bids[];
}
