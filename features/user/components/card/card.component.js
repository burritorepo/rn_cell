import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

class CardUser extends Component {
  constructor(props) {
    super(props);
  }

  onEdit(id) {
    console.log('onEdit', id)
  }

  onDelete(id) {
    console.log('onDelete', id)
  }

  render() {
    let button;

    if (onMove) {
      button = <Button
        // icon={<Icon name='code' color='#ffffff' />}
        onPress={() => onMove(id, name, lastname)}
        backgroundColor='#03A9F4'
        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
        title='Detalle' />
    } else {
      button = <Text></Text>
    }

    const {
      id,
      name,
      lastname,
      git,
      email,
      avatar,
      handleDeleteUser,
      onMove
    } = this.props;

    return (
      <Card
        title={`${name} ${lastname}`}>
        <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10}}>
          <Text onPress={this.onEdit.bind(this, id)}>Editar</Text>
          <Text onPress={this.onDelete.bind(this, id)}>Borrar</Text>
        </View>
        <Image
          resizeMode="cover"
          style={{ width: undefined, height: 200 }}
          source={{ uri: avatar }}
        />
        <Text style={{ marginBottom: 10 }}>
          Correo: {email}
        </Text>
        <Text style={{ marginBottom: 10 }}>
          Git: {git}
        </Text>
        {button}
      </Card>
    )
  }
}

export {
  CardUser
}
