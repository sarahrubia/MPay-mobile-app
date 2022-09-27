import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
  },
  content: {
    paddingTop: 56,
    paddingHorizontal: 36,
  },
  img: {
    width: 280,
    height: 304,
    alignSelf: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  bigText: {
    fontSize: 36,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  smallText: {
    fontSize: 20,
    paddingTop: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});

export { styles };
