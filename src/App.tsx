import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";
import words from "./wordList.json";

function App() {
    return (
        <div
            style={{
                maxWidth: "800px",
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                margin: "0 auto",
                alignItems: "center",
            }}
        >
            <div style={{ fontSize: "2rem", textAlign: "center" }}>
                {"Winner! "}
                {"Nice Try "}
            </div>

            <HangmanDrawing />
            <HangmanWord />
            <Keyboard />
        </div>
    );
}

export default App;
