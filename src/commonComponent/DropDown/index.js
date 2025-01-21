import { View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

import CustomText from "../CutstomText";
import { styles } from "./style";
import { colors } from "../../../utils/constants/colors";

export default function DropdownComponent({label, value, setValue, isFocus, setIsFocus, data}){
  return (
    <View>
      <CustomText style={styles.text}>{label}</CustomText>
      <Dropdown
              style={[styles.dropdown, isFocus && {borderColor: colors.lightGray}]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'Select item' : '...'}
              searchPlaceholder="Search..."
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setValue(item.value);
                setIsFocus(false);
              }}
              data={data}
            />
    </View>
  )
}