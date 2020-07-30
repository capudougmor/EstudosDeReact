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

const Dashboard: React.FC = () => {
    const { signOut } = useContext(AuthContext)

    function handleSignOut() {
        signOut()
    }
    return (
        <View style={styles.container}>
            <Button title="Logout" onPress={ handleSignOut } />
        </View>
    );
};

export default Dashboard;