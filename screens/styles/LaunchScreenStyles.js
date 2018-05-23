import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e272e"
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center"
  },
  title: {
    color: "#FFF",
    marginTop: 10,
    width: 160,
    textAlign: "center",
    opacity: 0.9
  },
  logo: {
    height: 120,
    width: 250
  },
  containerLoginForm: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: "rgba(209,216,224, 0.05)",
    color: "#FFF",
    marginBottom: 10
  },
  buttonContainer: {
    backgroundColor: "#c0392b",
    paddingVertical: 10
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF"
  }
});
