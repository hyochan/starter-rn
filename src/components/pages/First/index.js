import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import Navbar from '../../shared/Navbar';
import SearchView from '../../shared/SearchView';
import styles from './styles';

class Page extends Component {
  handleSearched = () => {
    this.props.navigation.navigate('Second');
  }

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.header }>
          <Navbar>Let's Travel</Navbar>
        </View>
        <View style={ styles.content }>
          <SearchView handleSearched = { this.handleSearched }/>
        </View>
      </View>
    );
  }
}

export default Page;
