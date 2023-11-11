import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Title from './Title';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';

const Body = ({style}) => {
  const [form, setForm] = useState({
    formFieldOne: '',
    formFieldTwo: '',
    formFieldThree: '',
    formFieldFour: '',
  });

  const onChangeInput = (key, value) => {
    setForm({...form, [key]: value});
  };

  const onSubmit = form => {
    console.log(form);
    setForm({
      formFieldOne: '',
      formFieldTwo: '',
      formFieldThree: '',
      formFieldFour: '',
    });


  };

  const onReset = () => {
    setForm({
      formFieldOne: '',
      formFieldTwo: '',
      formFieldThree: '',
      formFieldFour: '',
    });
  };
  return (
    <View style={style}>
      <View style={styles.formContainer}>
        <Title />
        <CustomInput
        value={form.formFieldOne}
          inputTitle={'TEXT FORM FIELD'}
          onChangeText={text => onChangeInput('formFieldOne', text)}
        />
        <CustomInput
          value={form.formFieldTwo}
          inputTitle={'TEXT FORM FIELD'}
          onChangeText={text => onChangeInput('formFieldTwo', text)}
        />
        <CustomInput
          value={form.formFieldThree}
          inputTitle={'TEXT FORM FIELD'}
          onChangeText={text => onChangeInput('formFieldThree', text)}
        />
        <CustomInput
          value={form.formFieldFour}
          inputTitle={'TEXT FORM FIELD'}
          onChangeText={text => onChangeInput('formFieldFour', text)}
        />
        <View style={styles.buttonsContainer}>
          <CustomButton buttonTitle={'RESET'} onPress={() => onReset()} />
          <CustomButton buttonTitle={'SUBMIT'} onPress={() => onSubmit(form)} />
        </View>
      </View>
    </View>
  );
};

export default Body;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 15,
    gap: 20,
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
