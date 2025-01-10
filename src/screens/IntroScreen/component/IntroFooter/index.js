import {TouchableOpacity, Text, View} from 'react-native';
import {memo} from 'react';

import {style} from './style';
import {introData} from '../../../../../utils/constants/dummyData/introData';

function IntroFooterFun({
  activeIndexTab,
  setActiveIndexTab,
  handleSkip,
  handleNext,
}) {
  return (
    <View style={style.buttonMainContainer}>
      <View style={style.circleContainer}>
        <View
          style={activeIndexTab === 0 ? style.activeTab : style.circle}></View>
        <View
          style={activeIndexTab === 1 ? style.activeTab : style.circle}></View>
        <View
          style={activeIndexTab === 2 ? style.activeTab : style.circle}></View>
      </View>
      <View style={style.buttonContainer}>
        
          <TouchableOpacity  disabled={activeIndexTab===introData.length-1} onPress={() => handleSkip()}>
            <Text style={activeIndexTab<introData.length-1?style.visibleSkip:style.skip}>Skip</Text>
          </TouchableOpacity>
        
        
          <TouchableOpacity onPress={() => handleNext()}>
            <Text style={style.nextButton}>Next</Text>
          </TouchableOpacity>
        
      </View>
    </View>
  );
}
const IntroFooter = memo(IntroFooterFun);
export default IntroFooter;
