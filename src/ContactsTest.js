import React, { Component } from 'react';
import {
    StyleSheet, View, Text,Button,FlatList,PermissionsAndroid 
} from 'react-native';

import Contacts from 'react-native-contacts'

class ContactsTest extends Component {
    constructor(props) {
        super(props);
      
        this.state = {
            myContacts : []
        }
      }

 

async CheckContactsPermission () {
        const contactperm = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_CONTACTS);
        if (contactperm === PermissionsAndroid.RESULTS.GRANTED)
            return true;
        else 
            return false;
    }
    
    GetContacts ()  {
    this.CheckContactsPermission()
    .then((grantperm) => {
    console.log(grantperm)
     if (grantperm) {
            Contacts.getAll()
                .then((contacts) => {
                    console.log(contacts);
                        this.setState({
                            myContacts : contacts
                        })
                })
                .catch((err) => { 
                    throw err;
                })
     }
      else
        console.log('No permission')
    }
    )
}

renderPhoneNumbers(item) {
return (
item.phoneNumbers.map((phone,index) => { return (
    <Text key={index} style={styles.textStyle}>{phone.label} : {phone.number}</Text>
)}
))
}

renderEmailAddresses(item) {
return (
item.emailAddresses.map((email,index) => { return (
    <Text key={index} style={styles.textStyle}>{email.label} : {email.email}</Text>
)}
)) 
}
    render() {
        {this.state.myContacts.map ((myContact,index) => {
            console.log(myContact)
        }
        )}

        return (


            <View style={styles.container}>
              <Text style={styles.textStyle}> 
              Contact Test
              </Text>
           
            
           <Button title="Get Contacts" onPress={()=>this.GetContacts()} />
            
           
           <FlatList
          data={this.state.myContacts}
          keyExtractor={item => item.recordID}
          showsVerticalScrollIndicator={false}
          renderItem={({item,index}) =>
          <View style={[styles.flatviewStyle,
                {backgroundColor : index % 2 === 0 ? 'tomato':'mediumseagreen'}]}>
            <Text style={styles.textStyle}>{item.recordID}</Text>
            <Text style={styles.textStyle}>{item.displayName}</Text>
            <Text style={styles.textStyle}>{item.givenName}</Text>
            <Text style={styles.textStyle}>{item.familyName}</Text>
            {this.renderPhoneNumbers(item)}
            {this.renderEmailAddresses(item)}
          </View>
          } 
        />
            
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
      textStyle: {
        color: '#41cdf4',
        fontSize:  24,
      },
      flatviewStyle: {
        justifyContent: 'center',
        padding: 30,
        margin:10,
        borderRadius: 2,
      },
      

});

export default ContactsTest;
