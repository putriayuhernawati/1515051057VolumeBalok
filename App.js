import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text, TextInput,
  View,
  Alert
} from 'react-native';

export default class AppHitungBalok1515051057 extends Component {
  constructor(props){
    super(props)
    this.state = {
      p:0,
      l:0,
      t:0,
      luas:0,
      volume:0
      
    };
  }
    _onPressButton() {
        Alert.alert('Putri Ayu Hernawati/NIM:1515051057')
      }
  render() {
    return (
      <View style = {{flex:1,backgroundColor:'#C8E6C9'}}>

        <View style={{backgroundColor:'#4CAF50'}}>
           <Text style = {{padding: 10, fontSize: 20, color: 'white', textAlign:'center'}} >
            Menghitung Bangun Ruang Balok
          </Text>
         </View>

        <View style={{margin:20,padding: 10, backgroundColor:'#e3f2fd'}}>
            <TextInput style = {{height: 40}}
              placeholder="Masukkan Panjang"
              onChangeText={(p)=>this.setState({p})}
              keyboardType = 'numeric'
            />
            <TextInput style = {{height: 40}}
              placeholder="Masukkan Lebar"
              onChangeText={(l)=>this.setState({l})}
              keyboardType = 'numeric'
            />
            <TextInput style = {{height: 40}}
              placeholder="Masukkan  Tinggi"
              onChangeText={(t)=>this.setState({t})}
              keyboardType = 'numeric'
            />
              <View style={{margin:0,padding:5, backgroundColor:'#e3f2fd'}}>
                <Button
                  onPress={()=>this.setState({
                    luas: (2*((this.state.p*this.state.l)+(this.state.p*this.state.t)+(this.state.l*this.state.t)))
                  })}
                  title="Hitung Luas"
                  color="#4CAF50"
                  accessibilityLabel="Klik untuk menghitung Luas"
                />
              </View>

              <View style={{margin:0,padding: 5, backgroundColor:'#e3f2fd'}}>
                <Button
                  onPress={()=>this.setState({
                    volume: (this.state.p*this.state.l*this.state.l)
                  })}
                  title="Hitung Volume"
                  color="#4CAF50"
                  accessibilityLabel="Klik untuk menghitung Volume"
                />
              </View>
       </View>

        <View style={{margin:20, backgroundColor:'#4CAF50'}}>
          <Text style = {{padding: 10, fontSize: 15, color: 'white'}} >
              Panjang =  {this.state.p} {"\n"}
              Lebar =  {this.state.l} {"\n"}
              Tinggi =  {this.state.t} {"\n"}
              Luas = {this.state.luas} {"\n"}
              Nilai Luas diperloleh dari perhitungan = 2 * ( {this.state.p} * {this.state.l} ) + ( {this.state.p} * {this.state.t} ) + ( {this.state.l} * {this.state.t} ) ) = {this.state.luas}{"\n"}
              Volume = {this.state.volume} {"\n"}
              Nilai Volume diperloleh dari perhitungan =  ( {this.state.p} * {this.state.l} * {this.state.t} ) = {this.state.volume}
          </Text>
         </View>

             <View style={{margin:20,padding: 10, backgroundColor:'#e3f2fd'}}>
                <Button
                 onPress={this._onPressButton}
                  title="Profile Pengembang"
                  color="#4CAF50"
                  accessibilityLabel="Klik untuk melihat"
                />
              </View>



   </View>

    );
  }

}






AppRegistry.registerComponent('AppForm2', () => AppHitungBalok1515051057);
