import { StyleSheet } from "react-native";


export default StyleSheet.create({
//Main Container-------------------------------
    mainContainer: {
        flex: 1,
        paddingTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
      },
      //Light Theme
      lightThemeContainer: {
        backgroundColor: '#fff',
      },
      lightThemeText: {
        color: '#000',
      },
      //Dark Theme
      darkThemeContainer: {
        backgroundColor: '#121212',
      },
      darkThemeText: {
        color: '#fff',
      },
    //Header---------------------------------
      header: {
        width: '100%',
        paddingHorizontal: 20,
        alignItems: 'center',
        marginBottom: 20,
        fontSize: 18,
        fontWeight: 'bold',
      },
      title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
      },
      headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        paddingHorizontal: 20,
        alignItems: 'center',
      },
    //Searchbar--------------------------------
      searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative', 
        marginBottom: 10,
        width: '75%',
      },
      //X Button on Searchbar
      clearSearchButton: {
        position: 'absolute',
        right: 10,
        padding: 5,
      },
      //Searchbar Text Input Area
      searchBar: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 8,
        fontSize: 16,
        borderWidth: 1,
        borderRadius: 5,
      },
      //Searchbar Light Theme
      lightSearchInput: {
        backgroundColor: '#f1f1f1',
        color: '#000',
        borderColor: '#ddd',
      },
      //Searchbar Dark Theme
      darkSearchInput: {
        backgroundColor: '#333',
        color: '#fff',
        borderColor: '#444',
      },
      //Expand/Collapse Buttons
      expandCollapseButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start', 
        marginBottom: 5,
        width: '75%',
      },
    //Expand/Collapse Buttons------------------
      expandCollapseButtons: {
        width: 25,
        height: 25,
        marginRight: 5,
        borderRadius: 8,
      },
      //Expand/Collapse Icons
      expandCollapseIcons: {
      },
      //Light Theme Button
      lightThemeIcon: {
        color: '#000',
      },
      lightThemeButton: {
        backgroundColor: '#f1f1f1',
      },
      //Dark Theme Button
      darkThemeIcon: {
        color: '#fff',
        size:24,
      },
      darkThemeButton: {
        backgroundColor: '#333',
      },
//Cards Container-------------------------------- 
      multiCardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
      },
      loadingCardContainer: {
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      noResultsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        fontSize: 18,
        fontWeight: 'bold',
      },
    //Toggle Container-----------------------------
      toggleThemeContainer: {
        width: 50,
        height: 25,
        borderRadius: 15,
        justifyContent: 'center',
        padding: 3,
        marginTop: 5,
      },
      //Light Theme Toggle
      lightModeToggle: {
        backgroundColor: '#ccc',
      },
      //Dark Theme Toggle
      darkModeToggle: {
        backgroundColor: '#333',
      },
      //Toggle 
      toggleButton: {
        width: 20,
        height: 20,
        borderRadius: 10,
        position: 'absolute',
      },
      //Lightmode Toggle
      lightToggle: {
        left: 3, 
        backgroundColor: '#333',
      },
      //Darkmode Toggle
      darkToggle: {
        left: 26,
        backgroundColor: '#fff',
      },
    //Card Container--------------------------------- 
      cardContainer: {
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        width: 250, 
        justifyContent: 'center',
        transition: 'all 0.3s ease', 
      },
      //Character Name
      characterName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
      },
      //Card Picture
      characterCardImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
      },      
      //Character Details
      characterDetails: {
        marginTop: 10,
        alignItems: 'center',
      },
      //Film Section Header
      filmHeader: {
        fontSize: 16,
        marginTop: 16,
        fontWeight: 'bold',
      },
      //LightTheme
      lightCard: {
        backgroundColor: '#f9f9f9',
        borderColor: '#ddd',
        color: '#000'
      },
      //Light Theme Hover
      lightHoverCard: {
        backgroundColor: '#e6f7ff',
        borderColor: '#15f2fd', 
        boxShadow: '0 0 15px rgba(0, 191, 255, 0.6)',  
      },
      //Dark Theme
      darkCard: {
        backgroundColor: '#333',
        borderColor: '#444',
        color: '#fff' 
      },
      //Dark Theme Hover
      darkHoverCard: {
        backgroundColor: '#444', 
        borderColor: '#00bcd4', 
        boxShadow: '0 0 15px rgba(255, 0, 0, 0.7)', 
      },
})