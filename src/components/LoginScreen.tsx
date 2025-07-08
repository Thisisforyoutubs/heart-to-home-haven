import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface LoginScreenProps {
  onLogin: () => void;
}

export const LoginScreen = ({ onLogin }: LoginScreenProps) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (password === "TubsxRubs") {
      onLogin();
    } else {
      setError("Oops! That's not the right password 💕");
      setTimeout(() => setError(""), 3000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-comfort flex items-center justify-center p-4">
      <Card className="w-full max-w-md animate-fade-in shadow-warm">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl mb-4 text-foreground animate-gentle-bounce">
            💕 Tubsie's Haven 💕
          </CardTitle>
          <p className="text-muted-foreground text-lg">
            Your safe space awaits
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Enter your special password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
              className="text-center text-lg h-12 rounded-xl border-2 border-comfort-warm focus:border-primary"
            />
            {error && (
              <p className="text-destructive text-center text-sm animate-fade-in">
                {error}
              </p>
            )}
          </div>
          <Button 
            onClick={handleLogin}
            variant="comfort"
            size="xl"
            className="w-full"
          >
            Enter Haven ✨
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};