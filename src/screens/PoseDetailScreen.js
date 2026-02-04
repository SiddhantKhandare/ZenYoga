import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import Sound from 'react-native-sound';
import colors from '../utils/colors';
import fonts from '../utils/fonts';
import fontSize from '../utils/fontSize';

const PoseDetailScreen = ({ route }) => {
  const { pose } = route.params;
  const [remainingTime, setRemainingTime] = useState(0);
  const intervalRef = useRef(null);
  const beepSound = useRef(null);

  useEffect(() => {
    beepSound.current = new Sound('beep.mp3', Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('Failed to load sound', error);
      } else {
        Sound.setCategory('Playback');
      }
    });

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (beepSound.current) beepSound.current.release();
    };
  }, []);

  const startTimer = minutes => {
    if (remainingTime > 0) return;
    const seconds = minutes * 60;
    setRemainingTime(seconds);

    intervalRef.current = setInterval(() => {
      setRemainingTime(prev => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          beepSound.current?.play();
          Alert.alert('Time up!', 'Great job completing your pose!');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    setRemainingTime(0);
  };

  const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={pose.image} style={styles.image} resizeMode="contain" />
        <Text style={styles.title}>{pose.name}</Text>

        <Text style={styles.description}>{pose.description}</Text>
        <Text style={styles.sectionTitle}>Steps:</Text>
        {pose.steps.map((step, index) => (
          <Text key={index} style={styles.step}>
            {`${index + 1})  ${step}`}
          </Text>
        ))}

        {remainingTime > 0 && (
          <>
            <View style={styles.timerContainer}>
              <Text style={styles.countdown}>
                ⏱ {formatTime(remainingTime)}
              </Text>
            </View>
            <TouchableOpacity style={styles.stopButton} onPress={stopTimer}>
              <Text style={styles.stopButtonText}>Stop Timer</Text>
            </TouchableOpacity>
          </>
        )}

        {remainingTime === 0 && (
          <View style={styles.timerOptions}>
            {[1, 3, 5].map(min => (
              <TouchableOpacity
                key={min}
                style={styles.timerButton}
                onPress={() => startTimer(min)}
              >
                <Text style={styles.timerButtonText}>{min} min</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    padding: 10,
    paddingBottom: 40,
  },
  title: {
    fontSize: fontSize.xxl,
    fontFamily: fonts.poppinsBold,
    color: colors.primary,
    textAlign: 'center',
    marginBottom: 16,
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: 230,
    borderRadius: 16,
  },
  description: {
    fontSize: fontSize.md,
    fontFamily: fonts.poppinsSemiBold,
    color: colors.text,
    marginBottom: 16,
    textAlign: 'justify',
    marginHorizontal: 10,
  },
  sectionTitle: {
    fontSize: fontSize.lg,
    fontFamily: fonts.poppinsSemiBold,
    color: colors.textDark,
    marginBottom: 8,
    marginHorizontal: 10,
  },
  step: {
    fontSize: fontSize.md,
    fontFamily: fonts.poppinsRegular,
    color: colors.text,
    marginBottom: 6,
    lineHeight: 22,
    marginHorizontal: 10,
  },
  timerOptions: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  timerButton: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  disabledButton: {
    opacity: 0.4,
  },
  timerButtonText: {
    color: colors.background,
    fontSize: fontSize.md,
    fontFamily: fonts.poppinsMedium,
  },
  timerContainer: {
    alignItems: 'center',
    marginTop: 25,
  },
  countdown: {
    fontSize: fontSize.xl,
    fontFamily: fonts.poppinsBold,
    color: colors.secondary,
    marginBottom: 10,
  },
  stopButton: {
    backgroundColor: colors.error,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  stopButtonText: {
    color: colors.background,
    fontSize: fontSize.md,
    fontFamily: fonts.poppinsMedium,
  },
});

export default PoseDetailScreen;
