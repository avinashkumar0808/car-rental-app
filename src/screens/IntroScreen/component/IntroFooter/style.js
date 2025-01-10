import {StyleSheet} from 'react-native';
import { colors } from '../../../../../utils/constants/colors';

export const style = StyleSheet.create({
  buttonMainContainer: {
    height: 100,
    paddingHorizontal:15,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap:120
    
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 35,
  },
  nextButton: {
    padding: 16,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#192252',
    color: '#fff',
    borderRadius: 15,
  },
  circleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    flexDirection: 'row',
  },
  circle: {
    height: 10,
    width: 10,
    borderRadius: '100%',
    backgroundColor: '#EFF3FA',
  },
  activeTab: {
    height: 10,
    width: 30,
    backgroundColor: '#192252',
    borderRadius: 50,
  },
  skip:{
    color:'#fff'
  },
  visibleSkip:{
    color:colors.lightGray
  }
});
