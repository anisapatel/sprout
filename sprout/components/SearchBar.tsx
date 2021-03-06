/** @format */

import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  Keyboard,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

interface SearchProps {
  onSearch: any;
  toggleSearch: any;
}

class SearchBar extends Component<SearchProps> {
  state = {
    searchText: "",
  };

  handleSearchChange = searchText => {
    this.setState({ searchText });
  };

  handleSubmit = () => {
    console.log("clickeded");
    this.props.onSearch(this.state.searchText);
    this.setState({ searchText: "" });
  };

  dismissKeyboard = () => {
    Keyboard.dismiss();
    this.props.toggleSearch();
  };

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Search for a plant"
            maxLength={20}
            onBlur={Keyboard.dismiss}
            value={this.state.searchText}
            onChangeText={this.handleSearchChange}
            ref={this.state.searchText}
            returnKeyType="search"
            onSubmitEditing={() => this.handleSubmit()}
          />
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={this.dismissKeyboard}
          >
            <Text style={styles.cancelButtonText}>
              <Entypo name="cross" style={{ color: "#aebb8f", fontSize: 45 }} />
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default SearchBar;

const styles = StyleSheet.create({
  inputContainer: {
    paddingTop: 0,
    flex: -1,
    flexDirection: "row",

    height: "8%",
    backgroundColor: "#ffffff",
  },
  textInput: {
    borderBottomWidth: 0.1,
    height: 45,
    fontSize: 19,
    paddingLeft: 15,
    paddingTop: 5,
    paddingBottom: 5,
    width: "85%",
    backgroundColor: "#ffffff",
  },

  cancelButton: {
    backgroundColor: "transparent",
    color: "white",
    fontSize: 20,
    textAlign: "center",
    alignSelf: "flex-end",
    width: "10%",
  },
  cancelButtonText: {
    marginTop: 1,
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
  },
});
