import React, { Component } from 'react';
import {Actions  } from 'react-native-router-flux';
import {
  Platform,
  StyleSheet,
  Text,
  View ,
  TouchableOpacity,
  WebView,
  Image,
  ActivityIndicator,
  Alert
} from 'react-native';

import AnimateLoadingButton from 'react-native-animate-loading-button';
import ActionButton from 'react-native-action-button';
import { Expo , 
	AdMobBanner , Constants ,AdMobInterstitial,  PublisherBanner,  AdMobRewarded ,
 BarCodeScanner, Permissions , ScreenOrientation ,
} from 'expo';
export default class tesLogin extends Component<{}>{
 
	   constructor(props){
		    super(props)
		    this.state = {
		      cekdataparagarf: '', 
		      hasCameraPermission: null,
		      viewBardcode:false,
		      countstate: '',
		      statescan:'',
		      statescannipsearchbaru: ''
		    }
		  }
componentDidMount() {
  // ScreenOrientation.allow(ScreenOrientation.Orientation.LANDSCAPE);   
  }

  

	backHome(){
		Actions.Dasbord();
	}
	logout(){
		Actions.Login();
	}
	ActivityIndicatorLoadingView() {
	    return (
	      <ActivityIndicator
	        color="#009688"
	        size="large"
	        style={styles.ActivityIndicatorStyle}
	      />
	    );
	  }

	 
render(){
	let script1 = `
					alert(document.title);
					if(document.title == 'Tes'){
						alert('yes mantap jiwa ku');
						document.getElementById('nipsearch').style ='width: 20%; background-color: #E18C67';
						document.getElementById('nipsearch').value = 'width: 80%; background-color: #10101094;';					
					}
				`;
		return(				   
               <View style={styles.container}>   
			                  <WebView
			                  				originWhitelist={['*']}
			                                ref={r => this.webview = r}
									        source={{uri: 'http://45.77.45.3:8080/KemTek/pages/tesAndroid.html'}}
									        style={{marginTop: 20 , flex: 1 ,}}
									        javaScriptEnabled={true}
									        domStorageEnabled={true}
									        keyboardDisplayRequiresUserAction={true} 
										    automaticallyAdjustContentInsets={false}
										    allowFileAccessFromFileURLs={true}									        
									        renderLoading={this.ActivityIndicatorLoadingView} 
									        injectedJavaScript={script1}    
									        startInLoadingState={true}  
									        javaScriptEnabledAndroid={true}  									        
									      />
				</View>
			)
	}
}

const styles = StyleSheet.create({
container: {
      flex: 1,
      backgroundColor: "#efeff4",
  },
  textContent: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  button: {
		  flex: 1,
		    justifyContent: 'flex-end',
		    marginBottom: 36
},
actionButtonIcon: {
    fontSize: 20,
    height: 40,
    width: 40,
    color: 'white',
  },
  ActivityIndicatorStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    flex:1
  },
  containerBardcode: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  }
});




// document.querySelector('#ceksukasuka').style.backgroundColor = 'blue'; 
// 							 document.querySelector('#nipsearch').focus();
//https://snack.expo.io/Skxzn6-5b