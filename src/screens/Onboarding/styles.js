import {StyleSheet} from 'react-native';

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
  btnWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 36,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 318,
    height: 63,
    borderRadius: 8,
    backgroundColor: '#1C5BB9',
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },
});

export {styles};
