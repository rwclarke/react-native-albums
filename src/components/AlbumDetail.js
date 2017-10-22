import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';


const AlbumDetail = ({ album }) => {

  const { title, artist, thumbnail_image, image } = album;

  return (
    <Card>
      <CardSection>
        <View style={ styles.thumbnailContainerStyle }>
          <Image
            style={styles.thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={ styles.headerContentStyle }>
          <Text style={ styles.headerTextStyle }>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          style={ styles.imageStyle }
          source={{ uri: image }}
        />
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  imageStyle: {
    flex: 1,
    height: 300,
    width: null
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10
  }
};

export default AlbumDetail;
