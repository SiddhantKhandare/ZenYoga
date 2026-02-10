import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import yogaPoses from '../data/yogaPosesData';
import colors from '../utils/colors';
import fonts from '../utils/fonts';
import fontSize from '../utils/fontSize';

const { width } = Dimensions.get('window');
const cardMargin = 8;
const cardWidth = (width - 5 * cardMargin) / 2;

const HomeScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => navigation.navigate('PoseDetails', { pose: item })}
    >
      <Image source={item.image} style={styles.image} resizeMode="cover" />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.subTitle}>({item.sanskrit})</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.background}
        translucent={false}
      />

      <View style={styles.container}>
        <Text style={styles.heading}>Yoga Poses</Text>

        <FlatList
          data={yogaPoses}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          contentContainerStyle={styles.listContainer}
          columnWrapperStyle={styles.row}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 10,
  },
  heading: {
    fontSize: fontSize.xxl,
    fontFamily: fonts.poppinsBold,
    color: colors.primary,
    marginBottom: 10,
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: cardMargin,
  },
  card: {
    backgroundColor: colors.secondary,
    borderRadius: 14,
    width: cardWidth,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: colors.gray,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 200,
  },
  textContainer: {
    padding: 8,
  },
  title: {
    fontSize: fontSize.md,
    fontFamily: fonts.poppinsSemiBold,
    color: colors.text,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: fontSize.xs,
    fontFamily: fonts.poppinsMedium,
    color: colors.text,
    textAlign: 'center',
  },
});
