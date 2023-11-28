import { useState, useEffect } from "react";
import MainComponent from "../MainComponent/MainComponent";
import texts from "../utils/texts";
import {useNavigation} from "@react-navigation/native";
import { ScrollView, View, StyleSheet} from "react-native";

function Game() {
  const [option, setOption] = useState(texts[0].id);
    const navigation = useNavigation();

    useEffect(() => {
    const currentText = texts.find((text) => text.id === option);
    if (currentText && [5, 9, 10, 12, 13, 14, 16, 19, 20, 21].includes(option)) {
      navigation.navigate("death", { id: currentText.id });
    }

    if(currentText && [17].includes(option)){
      navigation.navigate("win", { id: currentText.id });
    }

  }, [option, navigation]);

  const components = texts.map((text) => {
    return (
        <>
            <MainComponent
                    key={text.id}
                    text={text.text}
                    btnLeft={text.options && text.options[0] && text.options[0].text}
                    btnRight={text.options && text.options[1] && text.options[1].text}
                    setOption={(id) => setOption(id)}
                    idLeft={text.options && text.options[0] && text.options[0].nextText}
                    idRight={text.options && text.options[1] && text.options[1].nextText}
                    image={text.image}
                    additionalImage={text.additionalImage}
                    alt={text.alt}
                    additionalImageAlt={text.additionalImageAlt}
            />
        </>
    );
  });

  return (

    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>{components[option - 1]}</View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
  },
});

export default Game;