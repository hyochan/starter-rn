'use strict';

import React, { Component } from 'react';
import {
  Alert,
  Animated,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import NativeButton from 'apsl-react-native-button';
import StarRating from 'react-native-star-rating';
import styles from './styles';

const dateFormat = 'YYYY-MM-DD(ddd)';

class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.categoryView }>
          <Text style={ styles.categoryTxt }>
            가장 선호나는 {this.props.datum.people + 1}인{this.props.datum.people === 4 ? ' 이상' : ''} 여행
          </Text>
        </View>
        <Image style={ styles.imgThumb } source={this.props.datum.pic} />
        <View style={styles.viewAreaGroup}>
          <View style={styles.viewArea}>
            <Text style={styles.txtArea}>
              { this.props.datum.area }
            </Text>
          </View>
          <View style={styles.viewArea}>
            <Text style={styles.txtArea}>
              { this.props.datum.subArea }
            </Text>
          </View>
        </View>
        <View style={ styles.content }>
          <Text style={styles.txtTitle}>{this.props.datum.title}</Text>
          <Text style={styles.txtPrice}>
            {
              this.props.datum.price.toLocaleString('ko',
                {
                  style: 'currency',
                  currency: 'KRW',
                },
              )
            }
          </Text>
        </View>
        <View style={ styles.viewReview }>
          <Text style={ styles.txtDate }>4월 21일(목) - 27일(수) 기준</Text>
          <View style={ styles.viewReviewStar }>
            <Text
              style={styles.txtReview}
            >후기 {this.props.datum.review} 개</Text>
            <StarRating
              disabled={false}
              maxStars={5}
              rating={this.props.datum.starCount}
              starSize={16}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default List;
