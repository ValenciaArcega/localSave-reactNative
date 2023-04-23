import { StyleSheet } from "react-native";
import { mainColor__text, mainColor__btn } from "./colors";

export const s = StyleSheet.create({
  login: {
    margin: 22,
    paddingVertical: 24,
    paddingHorizontal: 8,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: {
      height: 8,
      width: 0
    }
  },
  loginTitle: {
    fontSize: 32,
    fontWeight: 800,
    letterSpacing: -1,
    color: mainColor__text
  },
  loginLabel: {
    width: '86%',
    marginTop: 16,
    fontSize: 16,
    fontWeight: 500,
  },
  loginInput: {
    height: 44,
    width: '86%',
    marginTop: 4,
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: '#e9e9e9'

  },
  checkBoxRememberMe: {
    width: '86%',
    marginVertical: 16,
  },
  loginButton: {
    height: 44,
    width: '86%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000',
    backgroundColor: mainColor__btn
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: 600
  },
  loginButtonRegister: {
  },
  loginButtonRegisterText: {
    marginTop: 16,
    color: '#d9480f'
  },
});