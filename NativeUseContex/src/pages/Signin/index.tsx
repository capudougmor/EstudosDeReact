import React, { useContext } from "react";
import { View, Button, StyleSheet } from "react-native";
import { signin } from  '../../services/auth'
import AuthContext from "../../contexts/auth";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    }
});

const Signin: React.FC = () => {
    const { Signed } = useContext(AuthContext)

    
    async function handleSignin() {
        const response = await signin()
        console.log(response)
    }
    return (
        <View style={styles.container}>
            <Button title="Sign in" onPress={ handleSignin } />
        </View>
    );
};

export default Signin;
