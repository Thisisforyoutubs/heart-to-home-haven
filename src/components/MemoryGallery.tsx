import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

interface MemoryGalleryProps {
  onBack: () => void;
}

// These can be updated with actual image URLs when hosting
const memories = [
  {
    id: 1,
    title: "Our First Adventure",
    description: "Remember when we got lost but found the best ice cream shop?",
    imageUrl: "https://images.unsplash.com/photo-1488474339733-16374a8f8bbc?w=400&h=300&fit=crop&crop=faces",
    caption: "The day we laughed until our stomachs hurt 😂"
  },
  {
    id: 2,
    title: "Sunset Talks",
    description: "Those deep conversations that went on for hours",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    caption: "Where we solved all the world's problems 🌅"
  },
  {
    id: 3,
    title: "Silly Selfies",
    description: "When we couldn't stop making weird faces",
    imageUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=300&fit=crop&crop=faces",
    caption: "Peak friendship energy right here ✨"
  },
  {
    id: 4,
    title: "Movie Marathon Night",
    description: "Crying over fictional characters together",
    imageUrl: "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=400&h=300&fit=crop",
    caption: "Best tissues and snacks buddy 🎬"
  },
  {
    id: 5,
    title: "Random Tuesday Hangout",
    description: "Proof that the best moments are unplanned",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=faces",
    caption: "Just us being our amazing selves 💕"
  },
  {
    id: 6,
    title: "Inside Joke Origin",
    description: "The moment that still makes us crack up",
    imageUrl: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop&crop=faces",
    caption: "You know exactly what I'm talking about 😉"
  },
  {
    id: 7,
    title: "Comfort Food Day",
    description: "When we ate our feelings and it was perfect",
    imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
    caption: "Food tastes better with your favorite person 🍕"
  },
  {
    id: 8,
    title: "Support Squad",
    description: "When you were there for me through everything",
    imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop&crop=faces",
    caption: "My person, always and forever 🤗"
  }
];

export const MemoryGallery = ({ onBack }: MemoryGalleryProps) => {
  const [selectedMemory, setSelectedMemory] = useState<any>(null);

  return (
    <div className="min-h-screen bg-gradient-memory p-4">
      <div className="max-w-6xl mx-auto">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6 hover:bg-memory-gold"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to feelings
        </Button>

        <Card className="mb-8 shadow-warm animate-fade-in">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl mb-4 text-foreground animate-gentle-bounce">
              ✨ Our Beautiful Memories ✨
            </CardTitle>
            <p className="text-xl text-muted-foreground">
              All the moments that make my heart smile
            </p>
          </CardHeader>
        </Card>

        {selectedMemory ? (
          <Card className="shadow-warm animate-fade-in">
            <CardContent className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-foreground">{selectedMemory.title}</h2>
                <Button 
                  variant="ghost" 
                  onClick={() => setSelectedMemory(null)}
                  className="hover:bg-memory-gold"
                >
                  ✕
                </Button>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src={selectedMemory.imageUrl} 
                    alt={selectedMemory.title}
                    className="w-full h-96 object-cover rounded-2xl shadow-gentle"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-lg text-foreground leading-relaxed">
                    {selectedMemory.description}
                  </p>
                  <p className="text-xl font-medium text-primary">
                    {selectedMemory.caption}
                  </p>
                  <div className="mt-6">
                    <Button
                      variant="love"
                      size="lg"
                      onClick={() => setSelectedMemory(null)}
                      className="animate-heart-pulse"
                    >
                      Love this memory 💕
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {memories.map((memory, index) => (
              <Card 
                key={memory.id}
                className="cursor-pointer hover:shadow-warm transition-all duration-300 hover:scale-105 animate-fade-in"
                onClick={() => setSelectedMemory(memory)}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                <CardContent className="p-4">
                  <img 
                    src={memory.imageUrl} 
                    alt={memory.title}
                    className="w-full h-48 object-cover rounded-xl mb-4 shadow-gentle"
                  />
                  <h3 className="font-semibold text-foreground mb-2">{memory.title}</h3>
                  <p className="text-sm text-muted-foreground">{memory.caption}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Card className="inline-block p-6 bg-gradient-comfort shadow-warm animate-comfort-glow">
            <p className="text-lg text-foreground font-medium">
              "Every moment with you becomes a treasured memory 💕"
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};