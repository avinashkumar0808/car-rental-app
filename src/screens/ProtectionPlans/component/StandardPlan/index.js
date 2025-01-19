import {Pressable, View} from 'react-native';

import CustomText from '../../../../commonComponent/CutstomText';
import {style} from './style';
import { SvgXml } from 'react-native-svg';
import { tick } from '../../../../../utils/constants/icons';

export default function StandardPlan({data, active, setActive, index}) {
  const isActive = (index === active);
  return (
    <Pressable style={isActive ?style.activeContainer:style.container} onPress={()=>setActive(index)}>
      <View style={style.innerContainerForHeadingAndCheck}>
        <View style={isActive?style.activeTickContainer:style.tickContainer}>{isActive&& <SvgXml xml={tick} height={20} width={20}/>}</View>
        <View>
          <CustomText style={style.headingText}>{data.name}</CustomText>
          <CustomText style={style.titleText}>{data.titleText}</CustomText>
          <View style={style.featureContainer}>
            {data.feature.map(item => (
              <CustomText key={item} style={style.featureText}>
                {'\u2022'} {item}
              </CustomText>
            ))}
          </View>
        </View>
      </View>
    </Pressable>
  );
}
