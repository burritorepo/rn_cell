import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';


function CardUser(props) {
  const {
    id,
    name,
    lastname,
    git,
    email,
    avatar,
    handleDeleteUser
  } = props;

  console.log('avatar', avatar)
  return (
    <Card
      title={`${name} ${lastname}`} style={{}}>
      <Image
        resizeMode="cover"
        style={{width: undefined, height: 200}}
        source={{ uri: avatar }}
      />
      <Text style={{ marginBottom: 10 }}>
        Correo: {email}
      </Text>
      <Text style={{ marginBottom: 10 }}>
        Git: {git}
      </Text>
      <Button
        // icon={<Icon name='code' color='#ffffff' />}
        backgroundColor='#03A9F4'
        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
        title='Detalle' />
    </Card>
  )
}

export {
  CardUser
}
