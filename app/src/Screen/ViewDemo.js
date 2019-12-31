import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import CardView from 'react-native-cardview';
const {width, height} = Dimensions.get('window');
export default class ViewDemo extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        {/* <ScrollView> */}
        {/* <View style={{height: 5, width: '100%'}}></View> */}
        <View style={CSS.containerContent}>
          <View style={CSS.tabviewicon}>
            <View style={CSS.view}></View>
            <Image
              style={CSS.Icon}
              source={{
                uri:
                  'https://cdn3.iconfinder.com/data/icons/mobile-functions/154/phone-menu-512.png',
              }}
            />
            <Image
              style={CSS.Icon1}
              source={{
                uri:
                  'https://cdn3.iconfinder.com/data/icons/mobile-functions/154/phone-menu-512.png',
              }}
            />
            <Image
              style={CSS.Icon2}
              source={{
                uri:
                  'https://cdn3.iconfinder.com/data/icons/mobile-functions/154/phone-menu-512.png',
              }}
            />
            <Image
              style={CSS.Icon3}
              source={{
                uri:
                  'https://cdn3.iconfinder.com/data/icons/mobile-functions/154/phone-menu-512.png',
              }}
            />
          </View>
          <View style={CSS.tabcontent}>
            <CardView
              cardElevation={5}
              cardMaxElevation={5}
              cornerRadius={5}
              style={CSS.cardView}>
              <Text style={CSS.texttitle}>Truy cap trang chuong trinh</Text>
              <Text style={CSS.textContent}>
                Truy cap vao lien ket chuong trinh tren Yalla Network hoac
                website chuong trinh{' '}
              </Text>
            </CardView>
            <CardView
              cardElevation={5}
              cardMaxElevation={5}
              cornerRadius={5}
              style={CSS.cardView}>
              <Text style={CSS.texttitle}>Dang nhap</Text>
              <Text style={CSS.textContent}>
                Dang nhap tai khoan Yolla Network bang so dien thoai hoac
                Facebook{' '}
              </Text>
            </CardView>
            <CardView
              cardElevation={5}
              cardMaxElevation={5}
              cornerRadius={5}
              style={CSS.cardView}>
              <Text style={CSS.texttitle}>Nhan uu dai mien phi</Text>
              <Text style={CSS.textContent}>
                Chon vao nut "Nhan ma uu dai" de nhan uu dai tu chuong trinh cho
                ban{' '}
              </Text>
            </CardView>
            <CardView
              cardElevation={5}
              cardMaxElevation={5}
              cornerRadius={5}
              paddingBottom={10}
              style={CSS.cardView1}>
              <Text style={CSS.texttitle}>Chia se chuong trinh</Text>
              <Text style={CSS.textContent}>
                Chia se chuong trinh hoac Copy lien ket va chia se chuong trinh
                cho ban be. Ban cung co the chia se truc tiep cho ban be bang QR
                code co san tren mang.{' '}
              </Text>
              <Text style={CSS.textContent1}>
                Luu y: chia se link tu tren trang chien dich hoac tu website
                Yolla Network de co the dat dieu kien nhan thuong.{' '}
              </Text>
            </CardView>
          </View>
        </View>
        {/* </ScrollView> */}
      </View>
    );
  }
}
const CSS = StyleSheet.create({
  containerContent: {
    flex: 1,
    // backgroundColor: 'red',
    flexDirection: 'row',
  },
  tabviewicon: {
    width: 50,
    flexDirection: 'row',
    // backgroundColor: 'blue',
  },
  tabcontent: {
    flex: 6,
  },
  view: {
    width: 1,
    position: 'relative',
    left: 25,
    alignItems: 'center',
    backgroundColor: 'blue',
    top: 20,
    height: height / 2,
  },
  cardView: {
    top: 10,
    width: '95%',
    height: height / 8,
    margin: 8,
    padding: 5,
  },
  cardView1: {
    top: 10,
    width: '95%',
    height: height / 4,
    marginBottom: 20,
    margin: 8,
    padding: 5,
  },
  texttitle: {
    flex: 1,
    fontSize: 15,
    fontWeight: 'bold',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContent: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  textContent1: {
    color: '#674747',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    fontStyle: 'italic',
  },
  Icon: {
    width: 40,
    height: 40,
    top: 19,
    left: 4,
  },
  Icon1: {
    width: 40,
    height: 40,
    top: 120,
    right: 35,
  },
  Icon2: {
    width: 40,
    height: 40,
    top: 220,
    right: 75,
  },
  Icon3: {
    width: 40,
    height: 40,
    top: 325,
    right: 115,
  },
});
