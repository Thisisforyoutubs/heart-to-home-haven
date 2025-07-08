import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MoodSelectorProps {
  onMoodSelect: (mood: string) => void;
  onMemoriesClick: () => void;
}

const moods = [
  { id: "sad", label: "When sad", emoji: "💙", description: "Feeling down or blue" },
  { id: "stressed", label: "When stressed", emoji: "😰", description: "Overwhelmed or anxious" },
  { id: "worried", label: "When worried", emoji: "😟", description: "Mind racing with concerns" },
  { id: "missing", label: "When missing me", emoji: "🥺", description: "Feeling the distance" },
  { id: "angry", label: "When angry", emoji: "😤", description: "Frustrated or upset" },
  { id: "scared", label: "When scared", emoji: "😨", description: "Feeling afraid or uncertain" },
  { id: "lonely", label: "When lonely", emoji: "💔", description: "Feeling isolated" },
  { id: "nightmare", label: "Bad dream", emoji: "😴", description: "After a scary dream" },
  { id: "insecure", label: "Feeling insecure", emoji: "🥀", description: "Doubting yourself" },
  { id: "overwhelmed", label: "Overwhelmed", emoji: "🌊", description: "Too much at once" }
];

export const MoodSelector = ({ onMoodSelect, onMemoriesClick }: MoodSelectorProps) => {
  return (
    <div className="min-h-screen bg-gradient-comfort p-4">
      <div className="max-w-4xl mx-auto">
        <Card className="mb-8 shadow-warm animate-fade-in">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl mb-4 text-foreground animate-gentle-bounce">
              Welcome Tubsie wubsie!! 💕
            </CardTitle>
            <p className="text-xl text-muted-foreground">
              How are you feeling right now, my dear?
            </p>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {moods.map((mood, index) => (
            <Button
              key={mood.id}
              variant="mood"
              size="mood"
              onClick={() => onMoodSelect(mood.id)}
              className="flex flex-col items-center justify-center h-32 animate-fade-in hover:animate-heart-pulse"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both'
              }}
            >
              <span className="text-3xl mb-2">{mood.emoji}</span>
              <span className="text-base font-medium text-center">{mood.label}</span>
              <span className="text-xs text-muted-foreground text-center mt-1">
                {mood.description}
              </span>
            </Button>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            variant="memory"
            size="xl"
            onClick={onMemoriesClick}
            className="animate-fade-in animate-comfort-glow"
            style={{
              animationDelay: '1s',
              animationFillMode: 'both'
            }}
          >
            ✨ Memories!!! ✨
          </Button>
        </div>
      </div>
    </div>
  );
};