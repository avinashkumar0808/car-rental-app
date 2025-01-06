import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  buttonMainContainer: {
    height: 100,
    marginLeft: 40,
    marginRight: 40,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 100,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
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
});
