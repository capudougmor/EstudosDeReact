import React, { useContext } from "react";
import { View, Button, StyleSheet } from "react-native";
import AuthContext from "../../contexts/auth";

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignContent: "center",
        flexGrow: 1,
    }
});

const Signin: React.FC = () => {
    const { signed, user, signIn } = useContext(AuthContext)

    console.log(signed, user)
    function handleSignin() {
        signIn()
    }
    return (
        <View style={styles.container}>
            <Button title="Sign in" onPress={ handleSignin } />
        </View>
    );
};

export default Signin;
