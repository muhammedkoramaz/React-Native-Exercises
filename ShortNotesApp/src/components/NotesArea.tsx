import { FlatList, View } from "react-native";

import { Metrics } from "../../Metrics";

const ItemSeparatorView = () => {
  return (
    //Item Separator
    <View
      style={{
        height: Metrics.measure(1),
        marginLeft: Metrics.measure(15),
        marginRight: Metrics.measure(15),
        backgroundColor: "black",
      }}
    />
  );
};

type notesAreaProps = {
  postListFiltered: string[];
  _renderItem: ({ item }: any) => JSX.Element | null;
};
const NotesArea = (props: notesAreaProps) => {
  const { postListFiltered, _renderItem } = props;
  return (
    <FlatList
      data={postListFiltered}
      renderItem={_renderItem}
      keyExtractor={(item) => item + Math.random() + Date.now()} // ! TODO : unique key
      ItemSeparatorComponent={ItemSeparatorView}
    />
  );
};
export default NotesArea;
