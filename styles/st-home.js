import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  containerHome: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  homeText: {
    fontSize: 24,
    fontWeight: 500
  },
  homeButtonSignOut: {
    height: 44,
    width: '100%',
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#d8d8d8',
    borderBottomWidth: 1,
    borderBottomColor: '#d8d8d8',
  },
  homeButtonSignOutText: {
    fontSize: 18,
    color: 'red'
  }
});