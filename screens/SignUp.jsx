import 'moment/locale/es-mx';
import CalendarPicker from 'react-native-calendar-picker';
import { KeyboardAvoidingView, ScrollView, View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Menu, MenuDivider, MenuItem } from "react-native-material-menu";
import { scolarship } from '../data/scolarship';
import { useState } from "react";
import { s } from '../styles/st-signUp';
import * as FileSystem from 'expo-file-system';

export const SignUp = () => {
  // var
  const n = useNavigation();
  const [beca, setBeca] = useState('Seleccione una beca');
  const [visible, setVisible] = useState(false);
  const [calVisible, setCalVisible] = useState(false);
  const [dateText, setDateText] = useState('Selecciona una fecha');
  const [userData, setUserData] = useState({
    "nombre": "",
    "fecha": "",
    "tipoBeca": "",
    "nombreBeca": "",
    "semestre": "",
    "promedio": "",
    "correo": "",
    "contraseña": ""
  });
  const [marginTopLabel, setMarginTopLabel] = useState(16);
  // fn
  const updateUser = (n, v) => setUserData({ ...userData, [n]: v });
  const goSignIn = () => n.replace('SignIn');
  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);
  const showCal = () => {
    setMarginTopLabel(150);
    setCalVisible(true);
  };
  const hideCal = () => {
    setMarginTopLabel(16);
    setCalVisible(false);
  };
  const handleSaveConfig = async () => {
    try {
      const configFilePath = `../config.json`;
      // console.log(FileSystem.getInfoAsync(configFilePath));
      const configContent = await FileSystem.readAsStringAsync(configFilePath);
      const configObject = JSON.parse(configContent);
      const newConfig = { ...configObject, API_URL: apiUrl };
      const newConfigContent = JSON.stringify(newConfig);
      await FileSystem.writeAsStringAsync(configFilePath, newConfigContent);
      // console.log('Archivo de configuración actualizado.');
    } catch (error) {
      console.log(error);
    }
  };
  // cm
  return (
    <KeyboardAvoidingView behavior="padding" style={{
      flex: 1,
      backgroundColor: '#ffc078',
      zIndex: 1
    }}>
      <ScrollView >
        <View style={s.formSignUp}>
          <Text style={s.formSignUpTitle}>Registra tu beca</Text>

          <Text style={s.formSignUpLabel}>Ingresa tu nombre completo</Text>
          <TextInput onChangeText={v => updateUser("nombre", v)} style={s.formSignUpInput} placeholder="Valencia Arcega Luis Angel" ></TextInput>

          <Text style={s.formSignUpLabel}>Ultima fecha de beca</Text>
          <TouchableOpacity style={s.formSignUpButtonCalendar} onPress={showCal}>
            {calVisible
              ?
              <View style={s.calendarContainer}>
                <CalendarPicker
                  previousTitle="Prev"
                  nextTitle="Next"
                  todayBackgroundColor="#b2b2b2"
                  selectedDayColor="#ffa94d"
                  selectedDayTextColor="#FFFFFF"
                  startFromMonday={true}
                  onDateChange={(v) => {
                    v.locale('es-mx');
                    const d = v.format('dddd, DD [de] MMMM [de] YYYY');
                    setDateText(d);
                    userData.fecha = d;
                    hideCal();
                  }}
                />
              </View>
              : <Text style={{ color: "#d9480f", fontSize: 16 }}>{dateText}</Text>}
          </TouchableOpacity>

          <Text style={{ marginTop: marginTopLabel, width: '80%', fontSize: 16, fontWeight: 500, }}>Tipo de beca</Text>
          <View style={s.formSignUpMenuChooser}>
            <Menu
              style={s.formSignUpChooser}
              visible={visible}
              anchor={<Text onPress={showMenu} style={{ color: "#d9480f", fontSize: 16 }}>{beca}</Text>}
              onRequestClose={hideMenu}
            >
              <ScrollView>
                {scolarship.map((item, i) => {
                  <MenuDivider />;
                  return <MenuItem key={i} onPress={() => {
                    hideMenu();
                    userData.tipoBeca = item;
                    setBeca(item);
                  }}>{item}</MenuItem>;
                })}
              </ScrollView>
            </Menu>
          </View>

          <Text style={s.formSignUpLabel}>Nombre de la beca</Text>
          <TextInput onChangeText={v => updateUser("nombreBeca", v)} style={s.formSignUpInput} placeholder="Beca de Benito Juarez" ></TextInput>

          <Text style={s.formSignUpLabel}>Semestre</Text>
          <TextInput onChangeText={v => updateUser("semestre", v)} style={s.formSignUpInput} placeholder="Septimo Semestre" ></TextInput>

          <Text style={s.formSignUpLabel}>Promedio</Text>
          <TextInput onChangeText={v => updateUser("promedio", v)} style={s.formSignUpInput} placeholder="Ultimo promedio de semestre" ></TextInput>

          <Text style={s.formSignUpLabel}>Correo</Text>
          <TextInput onChangeText={v => updateUser("correo", v)} style={s.formSignUpInput} placeholder="usuario@dominio.some" ></TextInput>

          <Text style={s.formSignUpLabel}>Contraseña</Text>
          <TextInput onChangeText={v => updateUser("contraseña", v)} secureTextEntry style={s.formSignUpInput} placeholder="Crea una contraseña segura" ></TextInput>

          <TouchableOpacity onPress={() => {
            console.log(userData);
            // handleSaveConfig();
            n.replace('SignIn', userData);
          }} style={s.formSignUpButtonRegister}>
            <Text style={s.formSignUpButtonRegisterText}>Registrarme</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={goSignIn} style={s.formSignUpButtonBack}>
            <Text style={s.formSignUpButtonBackText}>¿Ya tienes una cuenta? Inicia Sesión</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

