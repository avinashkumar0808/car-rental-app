import {ScrollView, View} from 'react-native';
import CustomText from '../../commonComponent/CutstomText';
import {useState} from 'react';

import {style} from './style';
import StandardPlan from './component/StandardPlan';
import {protectionPlan} from '../../../utils/constants/dummyData/protectionPlans';
import SubmitButton from '../../commonComponent/FormSubmitButton';
import { Screen_Routes } from '../../../utils/constants/Routes';

export default function ProtectionPlans({navigation}) {
  const [active, setActive] = useState(0);
  return (
    <ScrollView style={style.container}>
      <CustomText style={style.headingText}>Protection plans</CustomText>
      <View style={style.planContainer}>
        {protectionPlan.map((data, index) => (
          <StandardPlan
            key={data.name}
            data={data}
            index={index}
            active={active}
            setActive={setActive}
          />
        ))}
      </View>
      <SubmitButton text={'Continue'} onPress={()=>navigation.navigate(Screen_Routes.FinalCheckout)}/>
    </ScrollView>
  );
}
