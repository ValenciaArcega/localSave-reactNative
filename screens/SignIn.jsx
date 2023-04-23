import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Text, View, KeyboardAvoidingView, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { s } from '../styles/st-signIn';

export const SignIn = ({ route }) => {
  // props
  const user = { ...route.params };
  // var
  const n = useNavigation();
  const [gonnaRemember, setGonnaRemember] = useState(false);
  // fn
  const goSignUp = () => n.replace('SignUp');
  const goHomeRemembered = () => {
    n.replace('Home', { user, gonnaRemember });
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <ScrollView justifyContent='center'>
        <View style={s.login}>
          <Text style={s.loginTitle}>Inicia Sesión</Text>
          <Text style={s.loginLabel}>Correo Electrónico</Text>
          <TextInput style={s.loginInput} placeholder='Ingresa tu correo'>
          </TextInput>

          <Text style={s.loginLabel}>Contraseña</Text>
          <TextInput style={s.loginInput} placeholder="Ingresa tu contraseña" secureTextEntry></TextInput>

          <BouncyCheckbox
            size={24}
            fillColor="#fd7e14"
            unfillColor="#fff"
            text="Recordarme"
            isChecked={gonnaRemember}
            textStyle={{ marginLeft: -8, fontWeight: 600, textDecorationColor: 'transparent' }}
            innerIconStyle={{ borderWidth: 2 }}
            style={s.checkBoxRememberMe}
            onPress={() => setGonnaRemember(!gonnaRemember)}
          />

          <TouchableOpacity onPress={() => {
            goHomeRemembered();
            /*{
              gonnaRemember
                ? goHomeRemembered()
                : goHomeNoRemembered();
            }*/
          }} style={s.loginButton}>
            <Text style={s.loginButtonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={goSignUp} style={s.loginButtonRegister}>
            <Text style={s.loginButtonRegisterText}>¿No tienes una cuenta? Registrate</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
