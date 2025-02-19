import React, { useEffect, useState } from 'react';
import { ScrollView, Text, SafeAreaView, TextInput, View, ActivityIndicator, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CharacterCard from './CharacterCard';
import styles from './styles';


const App = () => {
  const [characters, setCharacters] = useState([]);
  const [expandedCards, setExpandedCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState('https://swapi.dev/api/people/');
  const [theme, setTheme] = useState('dark');

  const textTheme = theme === 'dark' ? styles.darkThemeText : styles.lightThemeText;
  const iconTheme = theme === 'dark' ? styles.darkThemeIcon : styles.lightThemeIcon;
  const mainContainerTheme = theme === 'dark' ? styles.darkThemeContainer : styles.lightThemeContainer;
  const buttonTheme = theme === 'dark' ? styles.darkThemeButton : styles.lightThemeButton;
  const toggleSwitchTheme = theme === 'dark' ? styles.darkModeToggle : styles.lightModeToggle;
  const toggleButtonTheme = theme === 'dark' ? styles.darkToggle : styles.lightToggle;
  const searchTheme = theme === 'dark' ? styles.darkSearchInput : styles.lightSearchInput;

  useEffect(() => {
    const fetchCharacters = async () => {
      if (!info || loading) return;

      setLoading(true);
      try {
        const response = await axios.get(info);
        const newCharacters = response.data.results;
        setInfo(response.data.next);

        const characterDetails = await Promise.all(
          newCharacters.map(async (character) => {
            const films = await Promise.all(
              character.films.map((film) => axios.get(film).then((res) => res.data.title))
            );
            const homeworld = await axios.get(character.homeworld).then((res) => res.data.name);

            return { ...character, films, homeworld };
          })
        );

        setCharacters((prevCharacters) => [
          ...prevCharacters,
          ...characterDetails.map((character, index) => ({
            ...character,
            id: prevCharacters.length + index + 1,
          })),
        ]);
      } catch (error) {
        console.error('Error Retrieving Characters:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [info, loading]);

  const handleCardPress = (id) => {
    setExpandedCards((prev) =>
      prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]
    );
  };

  const filteredCharacters = characters.filter((character) => {
    const searchTerm = searchQuery.toLowerCase();
    return (
      character.name.toLowerCase().includes(searchTerm) ||
      character.homeworld.toLowerCase().includes(searchTerm) ||
      character.films.some((film) => film.toLowerCase().includes(searchTerm))
    );
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const expandCards = () => {
    setExpandedCards(characters.map((character) => character.id));
  };

  const collapseCards = () => {
    setExpandedCards([]); 
  };

  const clearSearch = () => {
    setSearchQuery(''); 
  };

  return (
    <SafeAreaView style={[styles.mainContainer, mainContainerTheme]}>
      <View style={styles.header}>
        <Text style={[styles.title, textTheme]}>Jedi Journals</Text>

        <View style={styles.headerRow}>
          <Text style={[styles.header, textTheme]}>
            Star Wars Characters
          </Text>

          <TouchableOpacity onPress={toggleTheme}>
            <View style={[styles.toggleThemeContainer, toggleSwitchTheme]}>
              <View
                style={[styles.toggleButton, toggleButtonTheme]}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.searchBarContainer}>
        <TextInput
          style={[styles.searchBar, searchTheme]}
          placeholder="Search by name, homeworld, or film..."
          placeholderTextColor={textTheme}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />

        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={clearSearch} style={styles.clearSearchButton}>
            <Icon name="clear" size={20} style={textTheme} />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.expandCollapseButtonContainer}>
        <TouchableOpacity
          style={[styles.expandCollapseButtons, buttonTheme]}
          onPress={expandCards}
        >
          <Icon
            name="expand-more"
            size={24}
            style={[iconTheme]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.expandCollapseButtons, buttonTheme]}
          onPress={collapseCards}
        >
          <Icon
            name="expand-less"
            size={24}
            style={[styles.expandCollapseIcons, iconTheme]}
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.multiCardContainer}
        showsVerticalScrollIndicator={false}
      >
        {filteredCharacters.length > 0 ? (
          filteredCharacters
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((character) => (
              <CharacterCard
                key={character.id}
                character={character}
                onPress={() => handleCardPress(character.id)}
                isExpanded={expandedCards.includes(character.id)}
                theme={theme}
              />
            ))
        ) : (
          <View style={styles.noResultsContainer}>
            <Text style={[styles.noResultsContainer, textTheme]}>
              No Results Found
            </Text>
          </View>
        )}

        {loading && (
          <View style={styles.loadingCardContainer}>
            <ActivityIndicator size="large" />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
