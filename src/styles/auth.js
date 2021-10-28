import { StyleSheet} from "react-native"; 

const authStyles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: "#eaeaea"
    },
    title: {
      marginTop: 16,
      marginBottom:20,
      paddingVertical: 8, 
      color: "#20232a",
      textAlign: "center",
      fontSize: 18,
      fontWeight: "bold"
    },
    basicButton: {
        margin: 24,
    },
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 24,
      },
      row: {
        flexDirection: 'row',
        marginTop: 4,
      },
      forgot: {
        fontSize: 13,
        color: "#20232a",
      },
      link: {
        fontWeight: 'bold',
        color: "#20232a",
      },
      input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor:"#C7C7C7"
      },
      checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
      },
      checkbox: {
        alignSelf: "center",
      },
      label: {
        margin: 8,
      },
      tinyLogo: {
        width: 50,
        height: 50,
      },
      logo: {
        width: 66,
        height: 58,
      }
  });
  
  export default authStyles;