import "./reset.css"
import './App.css';
import { CalculatorContainer } from "./container/calculator-container";
import { useTheme } from "./contexts/ThemeContext";

function App() {
  const {themeState} = useTheme();
  return (
    <div className="App" data-theme={themeState}>
      <CalculatorContainer></CalculatorContainer>
    </div>
  );
}

export default App;
