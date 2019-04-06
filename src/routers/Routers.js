import React, { Component } from 'react';
import {Router, Stack , Scene  } from 'react-native-router-flux';

import { StyleSheet, View ,Text} from 'react-native';


import  Login  from '@pages/Login';
import { connect } from 'react-redux';
import  Dasbord  from '@dasbord/Dasbord';
import  SKP  from '@pages/SKP';
import  tesLogin  from '@pages/tesLogin';

export default class Routers extends Component<{}>{
	render(){
		return(			
				<Router  >
					<Stack key="root"   >
						<Scene key="Login" component={Login} title="Login" initial={true} hideNavBar />	
						<Scene key="Map" component={Map} title="Map" hideNavBar />	
						<Scene key="Dasbord" component={Dasbord} title="Dasbord" hideNavBar />	
						<Scene key="tesLogin" component={tesLogin} title="tesLogin" hideNavBar />	
					</Stack>
				</Router>			
			)
	}
}
