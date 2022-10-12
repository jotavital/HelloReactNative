import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

export default function App() {
    const max = 10;
    const [counter, setCounter] = useState(0);
    const cantDecrementAlert = () =>
        Alert.alert("Erro!", "Não é possível zerar o que já é zero!!!");

    const handleSetToZero = () => {
        if (counter === 0) {
            return cantDecrementAlert();
        }

        setCounter(0);
    };

    const handleIncrecrement = () => {
        if (counter === max) {
            return;
        }

        setCounter(counter + 1);
    };

    const handleDecrement = () => {
        if (counter === 0) {
            return cantDecrementAlert();
        }

        setCounter(counter - 1);
    };

    return (
        <View style={styles.container}>
            <View style={styles.otherContainer}>
                <Text style={styles.text}>Meu primeiro app</Text>
                <Text style={styles.text}>
                    O contador é{" "}
                    <Text
                        style={
                            counter === 0 ? styles.counterZero : styles.counter
                        }
                    >
                        {counter}
                    </Text>
                </Text>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={() => handleIncrecrement()}
                        title="Incrementar"
                        color="#43aa8b"
                        style={styles.button}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={() => handleDecrement()}
                        title="Decrementar"
                        color="#f94144"
                        style={styles.button}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={() => handleSetToZero()}
                        title="Zerar"
                        color="#f9844a"
                        style={styles.button}
                    />
                </View>
            </View>
            <View style={styles.credits}>
                <Text style={styles.creditsText}>
                    Desenvolvido por João Pedro Vital
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    otherContainer: {
        height: "50%",
    },
    credits: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        height: "10%",
    },
    text: {
        fontSize: 40,
        marginBottom: 30,
        textAlign: "center",
    },
    buttonContainer: {
        margin: 10,
        display: "flex",
        justifyContent: "center",
    },
    counterZero: {
        color: "#f94144",
    },
    counter: {
        color: "green",
    },
    creditsText: {
        textAlign: "center",
        fontSize: 15,
    },
});
