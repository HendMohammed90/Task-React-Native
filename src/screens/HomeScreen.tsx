/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  StatusBar,
  TextInput,
  ImageBackground,
} from 'react-native';
import {colours, fonts, defaultStyles} from '../assets/styles/styles';

const HomeScreen = (props: any): JSX.Element => {
  const [text, setText] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  // const [percentage, setPercentage] = useState(0);

  const handleItemPress = (item: any) => {
    setSelectedItem(item);
    console.log(selectedItem);
  };

  // const handleAcceptPress = () => {
  //   const newPercentage = Math.floor(Math.random() * 100) + 1; // Generate random percentage
  //   setPercentage(newPercentage);
  // };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.header}>
        <View style={styles.shareIcon}>
          <Pressable style={styles.icon}>
            <Image
              style={styles.Image}
              source={require('../assets/images/btn_share.png')}
            />
          </Pressable>
          <Pressable style={styles.icon}>
            <Image
              style={styles.Image}
              source={require('../assets/images/btnReport.png')}
            />
          </Pressable>
        </View>
        <Pressable style={styles.icon}>
          <Image
            style={styles.Image}
            source={require('../assets/images/btn_close.png')}
          />
        </Pressable>
      </View>
      <View>
        <Text style={styles.textStyle}>#animals</Text>
        <Text>What is your favorite animal </Text>
      </View>
      <View style={styles.body}>
        <Pressable
          style={[styles.item, selectedItem === 1 && styles.selectedItem]}
          onPress={() => handleItemPress(1)}>
          <Text style={styles.persentageText}>0/80</Text>
          <TextInput
            style={styles.input}
            placeholder="Start Typing"
            placeholderTextColor={colours.white}
            value={text}
            onChangeText={newText => setText(newText)}
          />
          <Image
            style={styles.Image && styles.likeIcon}
            source={require('../assets/images/icon_vote.png')}
          />
        </Pressable>
        <Pressable
          style={[styles.item, selectedItem === 2 && styles.selectedItem && styles.imageBackground]}
          onPress={() => handleItemPress(2)}
        />

        {/* <Pressable style={styles.acceptButton} onPress={handleAcceptPress}>
                  {percentage ? (
                      <Text>{percentage}%</Text>
                  ) : (
                      <FontAwesomeIcon icon={faThumbsUp} />
                  )}
              </Pressable> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  Image: {
    width: 40,
    height: 40,
  },
  shareIcon: {
    flex: 2,
    flexDirection: 'row',
  },
  icon: {
    padding: 8,
  },
  persentageText: {
    flex: 1,
  },
  textStyle: {
    letterSpacing: 0.5,
    fontSize: 18,
    color: colours.black,
  },
  likeIcon: {
    backgroundColor: colours.red,
    height: 40,
    width: 40,
    marginBottom: 10,
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  item: {
    flex: 1,
    justifyContent: 'space-around',
    width: '50%',
    height: 350,
    backgroundColor: colours.red,
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 8,
    marginHorizontal: 5,
    padding: 10,
  },
  imageBackground :{
    ba
  }
  selectedItem: {
    backgroundColor: '#ccc',
  },
  input: {
    flex: 2,
    height: 50,
    width: '80%',
    borderColor: 'gray',
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    paddingHorizontal: 10,
  },
  acceptButton: {
    width: '100%',
    height: 80,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    borderRadius: 8,
  },
});

export default HomeScreen;
