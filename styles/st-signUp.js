import { StyleSheet } from "react-native";
import { mainColor__btn, mainColor__text } from "./colors";

export const s = StyleSheet.create({
  formSignUp: {
    marginVertical: 42,
    marginHorizontal: 14,
    paddingVertical: 28,
    borderRadius: 14,
    backgroundColor: '#fff',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: {
      height: 8,
      width: 0
    }
  },
  formSignUpTitle: {
    paddingBottom: 8,
    fontSize: 24,
    fontWeight: 700,
  },
  formSignUpLabel: {
    width: '80%',
    marginTop: 16,
    fontSize: 16,
    fontWeight: 500,
  },
  formSignUpInput: {
    height: 44,
    width: '80%',
    marginTop: 5,
    paddingHorizontal: 12,
    borderRadius: 10,
    zIndex: 0,
    backgroundColor: '#e9e9e9'
  },

  formSignUpButtonCalendar: {
    height: 44,
    width: '80%',
    marginTop: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e9e9e9'
  },
  calendarContainer: {
    height: 280,
    width: 300,
    padding: 10,
    borderRadius: 15,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowRadius: 12,
    shadowOpacity: 0.18,
    backgroundColor: '#f2f2f2',
  },


  formSignUpMenuChooser: {
    height: 44,
    width: '80%',
    marginTop: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e9e9e9',
  },
  formSignUpChooser: {
    height: 164,
    width: 164,
    borderRadius: 12,
    shadowColor: 'black',
    shadowOffset: {
      width: 8,
      height: 8
    },
    shadowRadius: 10,
    shadowOpacity: 0.3,
  },

  formSignUpButtonRegister: {
    height: 44,
    width: '80%',
    marginTop: 24,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: mainColor__btn
  },
  formSignUpButtonRegisterText: {
    fontSize: 16,
    fontWeight: 500
  },
  formSignUpButtonBack: {
    marginTop: 18,
  },
  formSignUpButtonBackText: {
    fontWeight: 500
  },
});