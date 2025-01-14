import {StyleSheet} from 'react-native';
import {colors} from '../../../../../utils/constants/colors';

export const style = StyleSheet.create({
  secondContainer: {
    paddingHorizontal: 22,
  },
  circleContainer: {
    alignItems: 'center',
    justifyContent: 'left',
    gap: 5,
    flexDirection: 'row',
    marginVertical: 10,
  },
  circle: {
    height: 10,
    width: 10,
    borderRadius: '100%',
    backgroundColor: colors.grey,
  },
  activeTab: {
    height: 10,
    width: 30,
    backgroundColor: colors.darkBlue,
    borderRadius: 50,
  },
  swiper: {
    height: 410,
  },
});
