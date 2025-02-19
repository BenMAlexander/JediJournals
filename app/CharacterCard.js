import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';


const CharacterCard = ({ character, onPress, isExpanded, theme }) => {
  
  const [isHovered, setIsHovered] = useState(false);
  const characterImage = `https://picsum.photos/200/200?random=${character.id}`;

  const cardHoverTheme = theme === 'dark' ? styles.darkHoverCard : styles.lightHoverCard;
  const cardTheme = theme === 'dark' ? styles.darkCard : styles.lightCard;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.cardContainer,
        isHovered && (cardHoverTheme),cardTheme,
      ]}
      
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image source={{ uri: characterImage }} style={styles.characterCardImage}/>
      <Text style={[styles.characterName, cardTheme]}>{character.name}</Text>

      {isExpanded && (
        <View style={styles.characterDetails}>
          <Text style={cardTheme}><b>Height</b>: {character.height}</Text>
          <Text style={cardTheme}><b>Birth Year</b>: {character.birth_year}</Text>
          <Text style={cardTheme}><b>Gender</b>: {character.gender}</Text>
          <Text style={cardTheme}><b>Homeworld</b>: {character.homeworld}</Text>
          <Text style={[styles.filmHeader, cardTheme]}>Films:</Text>
          {character.films.map((film, index) => (
            <Text key={index} style={cardTheme}>{film}</Text>
            ))
          }
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CharacterCard;
