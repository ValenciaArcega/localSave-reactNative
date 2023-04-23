import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { s } from '../styles/st-home';

export const Home = ({ route }) => {
  // props
  const { user, gonnaRemember } = { ...route.params };
  // var
  const n = useNavigation();
  // fn
  const signOut = () => n.replace('SignIn', user);
  // hooks
  useEffect(() => {
    console.log(`El usuario ${user.nombre} se ha logeado y ${gonnaRemember
      ? 'ha decidido guardar su inicio de sesión'
      : 'NO ha habilitado la opción de recordar'} \n Recordar: ${gonnaRemember}`);
  }, []);
  // cm
  return (
    <View style={s.containerHome}>
      <Text style={s.homeText}>Hola {user.nombre} !</Text>
      <TouchableOpacity style={s.homeButtonSignOut} onPress={signOut}>
        <Text style={s.homeButtonSignOutText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};
