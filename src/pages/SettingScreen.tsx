/*
 * @Author: yuta
 * @Date: 2021-04-17 14:28:38
 * @LastEditTime: 2021-04-21 18:38:24
 * @LastEditors: yuta
 */
import * as React from 'react';
import {Button, Text, View, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {useRecoilState} from 'recoil';
import {accountState, localeState} from '../recoil';
import Locales from '../misc/locales';

function SettingsScreen({navigation}) {
  const [account, setAccount] = useRecoilState(accountState);
  const [isVisible, setVisible] = React.useState(false);

  const onLogOut = () => {
    if (!account.isRememberPwd) {
      setAccount({
        ...account,
        username: '',
        pwd: '',
      });
    }
    navigation.navigate('Login');
  };

  const [, setLocale] = useRecoilState(localeState)

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings screen</Text>

      <Button
        title={Locales.t('Set language')}
        onPress={() => setVisible(true)}
      />

      <Button title={Locales.t('logout')} onPress={onLogOut} />

      <Modal
        isVisible={isVisible}
        animationIn="bounceInUp"
        animationInTiming={500}
        animationOut="bounceOutDown"
        style={{
          margin: 0,
          position: 'relative',
        }}
        hasBackdrop
        onBackdropPress={() => setVisible(false)}
        onModalShow={() => setVisible(true)}
        onModalHide={() => setVisible(false)}>
        <View
          style={{
            width: '100%',
            height: '10%',
            position: 'absolute',
            backgroundColor: 'white',
            bottom: 12,
          }}>
          <TouchableOpacity
            onPress={() => setLocale('zh_CN')}
            style={{
              width: '100%',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>{Locales.t('Chinese')}</Text>
          </TouchableOpacity>

          <View style={{width: '100%', height: 1, backgroundColor: 'gray'}}/>

          <TouchableOpacity
            onPress={() => setLocale('en_US')}
            style={{
              width: '100%',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>{Locales.t('English')}</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

export default SettingsScreen;
