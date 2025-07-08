import { useState } from "react";
import { LoginScreen } from "@/components/LoginScreen";
import { MoodSelector } from "@/components/MoodSelector";
import { ComfortLetter } from "@/components/ComfortLetter";
import { MemoryGallery } from "@/components/MemoryGallery";

type AppState = "login" | "mood-selector" | "letter" | "memories";

const Index = () => {
  const [currentState, setCurrentState] = useState<AppState>("login");
  const [selectedMood, setSelectedMood] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentState("mood-selector");
  };

  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood);
    setCurrentState("letter");
  };

  const handleBackToMoods = () => {
    setCurrentState("mood-selector");
    setSelectedMood("");
  };

  const handleMemoriesClick = () => {
    setCurrentState("memories");
  };

  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  switch (currentState) {
    case "mood-selector":
      return (
        <MoodSelector
          onMoodSelect={handleMoodSelect}
          onMemoriesClick={handleMemoriesClick}
        />
      );
    case "letter":
      return (
        <ComfortLetter
          mood={selectedMood}
          onBack={handleBackToMoods}
        />
      );
    case "memories":
      return (
        <MemoryGallery
          onBack={handleBackToMoods}
        />
      );
    default:
      return (
        <MoodSelector
          onMoodSelect={handleMoodSelect}
          onMemoriesClick={handleMemoriesClick}
        />
      );
  }
};

export default Index;
