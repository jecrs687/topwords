import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity,Modal, ScrollView } from 'react-native';
import dictionary from '../data/dictionary.json';
const lista = require('../data/English.json')
import { withTheme } from 'react-native-paper';

var {palavras,tamanho}= lista
class Main extends React.Component {
  constructor(){
    super()
    this.state={
      index:0,
      porcentagem:0.0001,
      isVisible:false,
      totalPorcent:0.00,
      
    }
  }
  componentDidMount(){
    var porcent = 0
    palavras.map((value)=>{
      porcent = porcent+value.porcent
    })
    this.setState({totalPorcent:porcent})
  }

  render() {
    return (
      <View style={[styles.container,{backgroundColor:this.props.theme.colors}]}>
        <Modal
        visible={this.state.isVisible}
        animationType='slide'
        hardwareAccelerated
        animated={true}
        presentationStyle='formSheet'
        onDismiss={()=>{this.setState({isVisible:false})}}
        onRequestClose={()=>{this.setState({isVisible:false})}}
        >
          <View style={styles.modal}>
          <Text style={styles.porcentagem}>analized words:  {tamanho}</Text>
          <Text style={styles.text}>{palavras[this.state.index].word}</Text>
          <ScrollView style={styles.textScroll}>
          <Text style={{textAlign:'justify', marginHorizontal:20,fontSize:15}} >
            {dictionary[palavras[this.state.index].word.toLowerCase()]}</Text>
            </ScrollView>
          <Text>{palavras[this.state.index].porcent.toFixed(4)}%</Text>
          <Text>{palavras[this.state.index].repeted}/{tamanho}</Text>
          <Text style={styles.marcador}>{this.state.index}/{palavras.length-1}</Text>
          </View>
        </Modal>
      <Text style={[styles.text,{fontSize:30}]}>
      {this.state.porcentagem.toFixed(2)}%
      </Text>
      <TouchableOpacity style={styles.box} onPress={()=>{ this.setState({isVisible:!this.state.isVisible})}}>        
          <Text style={styles.porcentagem}>analized words:  {tamanho}</Text>
          <View style={{marginTop:40, margin:10,}}>
          <Text style={styles.text}>{palavras[this.state.index].word}</Text>
          </View>
          <View style={{flex:1, justifyContent:'center'}}>
          <Text style={styles.dictionary} numberOfLines={20}>
            {dictionary[palavras[this.state.index].word.toLowerCase()]}</Text>
            </View>
          <Text style={{marginTop:10}}>{palavras[this.state.index].porcent.toFixed(2)}%</Text>
          <Text style={{marginBottom:10}}>{palavras[this.state.index].repeted}/{tamanho}</Text>
          <Text style={styles.marcador}>{this.state.index}/{palavras.length-1}</Text>

        </TouchableOpacity>



        <View style={styles.buttons}> 
          <TouchableOpacity 
          onPress={()=>{this.state.index>0?this.setState({
          index:this.state.index-1,
          porcentagem:this.state.porcentagem-palavras[this.state.index-1].porcent
          }):null}}
          style={styles.button}
          >
            <Text>back</Text>
          </TouchableOpacity>

                    <TouchableOpacity 
          onPress={
            ()=>{this.state.index+1<palavras.length?this.setState({
            index:this.state.index+1, 
          porcentagem:this.state.porcentagem+palavras[this.state.index].porcent
          })
          :null}}
          style={styles.button}
          >
            <Text>next</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    paddingTop: 30,
    paddingHorizontal:12,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  modal:{
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    paddingTop: 30,
    paddingHorizontal:5,
    backgroundColor: '#f89797',
    padding: 8,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
  },
  textScroll:{
    flex:1,
    marginBottom:20,
  },
  box:{
    flex:1,
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    margin:20,
    borderRadius:10,
    backgroundColor:'white',
    shadowColor:'#888',
    shadowOffset:{
      height:2,
      width:0
    },
    shadowOpacity:0.4,
    shadowRadius:5,
  },
  porcentagem:{
    position:'absolute', 
    top:10,
    left:10
    },
  text:{
    fontSize:40,
    fontWeight:'bold'
  },
  dictionary:{
    fontSize:15, 
    textAlign:'justify', 
    marginHorizontal:40
  },
  marcador:{
    position:'absolute',
    bottom:10,
    right:10,
    fontStyle:"italic",
    fontWeight:'600'
  },
  buttons: {
    flexDirection:'row',
    shadowColor:'#444',
    shadowOffset:{
      height:2,
      width:0
    },
    shadowOpacity:0.4,
    shadowRadius:5,
  },
  button: {
    flex: 1,
    backgroundColor: '#ffcce0',
    borderRadius:6,
    margin: 12,
    alignItems:'center',
    justifyContent:'center',
    height:40,
  },
});


export default withTheme(Main)