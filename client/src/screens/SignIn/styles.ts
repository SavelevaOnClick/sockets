import {StyleSheet} from '@components';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 36,
    backgroundColor: '#fff',
  },
  input: {
    width: '100%',
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: 'violet',
    borderRadius: 9,
    marginBottom: 10,
  },
  button: {
    borderRadius: 9,
    borderWidth: 2,
    width: 150,
    paddingVertical: 10,
    borderColor: 'violet',
  },
  buttonTitle: {
    textAlign: 'center',
    fontWeight: '700',
  },
});
