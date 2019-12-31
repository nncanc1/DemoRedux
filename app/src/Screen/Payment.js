import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import CardView from 'react-native-cardview';
const {width, height} = Dimensions.get('window');
import RadioForm from 'react-native-simple-radio-button';
export default class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      types: [
        {label: 'Thanh toan bang ElaPay', value: 0},
        {label: 'Thanh toan bang vi dien tu Vimo', value: 1},
      ],
      value: 0,
      demso: 1,
    };
  }
  Clickup() {
    this.setState({
      demso: this.state.demso + 1,
    });
  }
  clickDown() {
    this.setState({
      demso: this.state.demso - 1,
    });
  }
  render() {
    return (
      <View style={CSS.containerPay}>
        <CardView
          cardElevation={5}
          cardMaxElevation={5}
          cornerRadius={5}
          style={CSS.cardContent}>
          <Image
            style={CSS.ImageBig}
            source={{
              uri:
                'https://www.saga.vn/uploads/%E1%BA%A2nh%20Minh%20H%E1%BB%8Da/buy2get1.jpg',
            }}
          />
          <View style={CSS.viewContent}>
            <Text numberOfLines={2} style={CSS.textTitle}>
              Ap dung Le, Tet- He Thong Buffet Hai San Cao Cap
              kkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
            </Text>
            <Image
              style={CSS.ImageModel}
              source={{
                uri:
                  'https://balodaithang.com/images/product/combo-mua-2-vali-tang-1-vali-8.png',
              }}
            />
            <Text style={CSS.textModel}>Ten thuong hieu</Text>
            <Text style={CSS.textMoney}>250,000d</Text>
          </View>
          <View style={CSS.viewCount}>
            <TouchableOpacity
              style={CSS.clickUp}
              onPress={() => {
                this.Clickup();
              }}>
              <Imag
              e
                style={CSS.ImageUp}
                source={
                  require('../../res/img/iconimage5.png')
                  // uri:
                  //   'https://balodaithang.com/images/product/combo-mua-2-vali-tang-1-vali-8.png',
                }
              />
            </TouchableOpacity>
            <View style={{position: 'absolute', top: 45, right: 22}}>
              <Text
                style={{
                  fontWeight: 'bold',
                }}>
                {this.state.demso}
              </Text>
            </View>
            <TouchableOpacity
              style={CSS.clickDown}
              onPress={() => {
                this.clickDown();
              }}>
              <Image
                style={CSS.ImageDown}
                source={
                  require('../../res/img/iconimage5.png')

                  // uri:
                  //   'https://balodaithang.com/images/product/combo-mua-2-vali-tang-1-vali-8.png',
                }
              />
            </TouchableOpacity>
          </View>
        </CardView>
        <CardView
          style={CSS.cardAll}
          cardElevation={5}
          cardMaxElevation={5}
          cornerRadius={5}>
          <View style={{flexDirection: 'row'}}>
            <Text style={CSS.await}>Tam tinh</Text>
            <Text style={{position: 'absolute', right: 5, fontWeight: 'bold'}}>
              250,000d
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={CSS.await}>Tong thanh toan</Text>
            <Text
              style={{
                position: 'absolute',
                right: 5,
                color: 'red',
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              250,000d
            </Text>
          </View>
        </CardView>
        <CardView
          style={CSS.cardPay}
          cardElevation={5}
          cardMaxElevation={5}
          cornerRadius={5}>
          <Text style={CSS.textPayment}>Hinh thuc thanh toan</Text>
          <View style={{flex: 1}}>
            <RadioForm
              style={{margin: 10}}
              radio_props={this.state.types}
              initial={0}
              formHorizontal={false}
              labelHorizontal={true}
              animation={true}
              buttonColor={'#2196f3'}
              onPress={value => {
                this.setState({value});
              }}
            />
          </View>
        </CardView>
        <CardView
          style={CSS.cardPay}
          cardElevation={5}
          cardMaxElevation={5}
          cornerRadius={5}>
          <Text style={CSS.textPayment}>Thong tin nguoi mua</Text>
          <Text
            style={{position: 'absolute', right: 10, top: 14, color: 'blue'}}>
            Cap nhat
          </Text>
          <View style={{top: 5}}>
            <Text style={{fontSize: 15}}>Ho va ten</Text>
            <Text style={{position: 'absolute', right: 2}}>
              Nguyen Nhat Can
            </Text>
            <Text style={{fontSize: 15}}>So dien thoai</Text>
            <Text style={{position: 'absolute', right: 2, top: 23}}>
              0901234567
            </Text>
            <Text style={{fontSize: 15}}>Email</Text>
            <Text style={{position: 'absolute', right: 2, top: 45}}>
              nncanc1@gmail.com
            </Text>
          </View>
        </CardView>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={CSS.btnPay}>
            <Text style={CSS.TextPayAll}>THANH TOAN</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const CSS = StyleSheet.create({
  containerPay: {
    flex: 1,
  },
  cardContent: {
    margin: 10,
    height: 110,
    flexDirection: 'row',
  },
  cardAll: {
    margin: 10,
    height: 60,
    padding: 10,
  },
  cardPay: {
    margin: 10,
    height: 120,
    padding: 10,
  },
  cardUser: {
    margin: 10,
    height: 130,
    padding: 10,
  },
  ImageBig: {
    height: 95,
    width: 95,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  viewContent: {
    flex: 3,
    padding: 5,
    // backgroundColor:'red'
  },
  viewCount: {
    flex: 1,
    // backgroundColor: 'blue',
    alignItems: 'center',
  },
  textTitle: {
    color: 'black',
    fontWeight: 'bold',
  },
  textModel: {
    fontSize: 15,
    marginTop: 6,
    left: 25,
  },
  textMoney: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'red',
    marginTop: 12,
  },
  textPayment: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  ImageModel: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 50,
    bottom: 40,
    left: 5,
  },
  ImageUp: {
    width: 20,
    height: 20,
    top: 2,
    borderRadius: 50,
    // bottom: 40,
  },
  clickUp: {
    // backgroundColor:'red',
    width: 20,
    height: 20,
    top: 15,
    right: 15,
    position: 'absolute',
  },
  clickDown: {
    // backgroundColor:'red',
    width: 20,
    height: 20,
    bottom: 10,
    right: 15,
    position: 'absolute',
  },
  ImageDown: {
    // position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 50,
    bottom: 5,
  },
  await: {
    flex: 1,
    fontSize: 15,
    fontWeight: 'bold',
  },
  btnPay: {
    height: height / 12,
    width: '80%',
    backgroundColor: '#fa8072',
    borderRadius: 35,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: '#fff',
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 1, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 7,
    justifyContent: 'center',
  },
  TextPayAll: {
    fontSize: 15,
    color: '#fff',
    borderRadius: 50,
    borderColor: '#fff',
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontWeight: 'bold',
  },
});
