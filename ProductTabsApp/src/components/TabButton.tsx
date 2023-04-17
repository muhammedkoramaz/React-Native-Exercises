import { Text, TouchableOpacity, View } from "react-native";

import React from "react";

type TabButtonProps = {
  style?: any;
  onPress?: () => void;
  title?: string;
  titleStyle?: any;
};
const TabButton = (props: TabButtonProps) => {
  const { style, onPress, title, titleStyle } = props;
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabButton;
