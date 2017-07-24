'use strict';

import React, { Component } from 'react';
import {
  Animated,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { ICON_MESSAGE, ICON_SETTING, } from '../../../global/images';
import styles from './styles';
import Navbar from '../../shared/Navbar';
import SearchView from '../../shared/SearchView';
import List from '../../shared/List';

const dateFormat1 = 'MM.DD';
const dateFormat2 = 'DD';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchViewVisible: false,
    };
  }

  handleBack = () => {
    console.log('handleBack');
    this.props.navigation.goBack();
  }

  handleSearched = () => {
    console.log('handleSearched');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={ styles.header }>
          <Navbar
            showBack={true}
            handleBack={this.handleBack}
          > Let's Travel </Navbar>
        </View>
        <View style={ styles.content }>
          <ScrollView style={{ alignSelf: 'stretch', }}>
            <View style={styles.viewTop}>
              <Image style={styles.topImg1} source={ ICON_MESSAGE } />
              <Text style={styles.fontBlackStyle}>{this.props.search.area}</Text>
              <Text style={styles.fontGrayStyle}>  /  </Text>
              <Text style={styles.fontBlackStyle}>{this.props.search.people + 1}인</Text>
              <Text style={styles.fontGrayStyle}>  /  </Text>
              <Text style={styles.fontBlackStyle}>
                {
                  this.props.search.startDate && this.props.search.endDate
                  ? this.props.search.startDate.format(dateFormat1) + '-' + this.props.search.endDate.format(dateFormat2)
                  : null
                }
              </Text>
              <TouchableOpacity
                style={styles.topImg2View}
                activeOpacity={0.5}
                onPress={ () => this.setState({ searchViewVisible: !this.state.searchViewVisible}) }
              >
                <Image style={styles.topImg2} source={ ICON_SETTING } />
              </TouchableOpacity>
              <View style={styles.topOval}>
                <Text style={styles.topOvalTxt}>{this.props.search.results.length}</Text>
              </View>
            </View>
            {
              this.state.searchViewVisible
              ? <SearchView handleSearched = { this.handleSearched }/>
              : null
            }
            {
              this.props.search.results.map((datum, index) => {
                return <List key={index} datum={datum}/>
              })
            }
          </ScrollView>
        </View>
      </View>
    );
  }
}

const mapState = (state) => ({
  search: state.search,
});

export default connect(mapState)(Page);