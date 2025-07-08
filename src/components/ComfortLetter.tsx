import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

interface ComfortLetterProps {
  mood: string;
  onBack: () => void;
}

const letters = {
  sad: {
    title: "For My Beautiful Friend 💙",
    content: `My dearest Tubsie,

I see you're feeling sad right now, and I want you to know that it's completely okay to feel this way. Your emotions are valid, and you don't have to hide them from me or anyone else.

Remember that sadness is just a visitor - it will pass. Like clouds that temporarily cover the sun, this feeling won't last forever. You are so much stronger than you realize, and you've overcome difficult moments before.

I'm sending you the biggest virtual hug right now. Even though I can't be there physically, please know that you are deeply loved and cherished. Your happiness matters to me, and I believe in your ability to find joy again.

Take your time to feel what you need to feel, then remember all the beautiful things that make you YOU. Your smile, your laugh, your kind heart - they're all still there, just waiting to shine again.

You are never alone. 💕

All my love,
Your friend who cares about you endlessly`,
    image: "🌈",
    color: "comfort-cool"
  },
  stressed: {
    title: "Breathe With Me, Sweet Friend 😰",
    content: `Hey beautiful,

I can feel your stress through these words, and I want you to pause for just a moment. Take three deep breaths with me right now. In... and out. In... and out. In... and out.

You're carrying so much right now, aren't you? But remember - you don't have to carry it all at once. Break it down into smaller pieces. You've handled tough situations before, and you'll handle this one too.

It's okay to say no to things. It's okay to take breaks. It's okay to ask for help. You don't have to be perfect or have everything figured out. Even the strongest people need support sometimes.

I believe in you completely. You are capable, resilient, and worthy of peace. This stressful moment is temporary, but your strength is permanent.

Give yourself permission to rest. You deserve it.

Sending calming energy your way,
Someone who believes in you 💕`,
    image: "🌸",
    color: "comfort-soft"
  },
  worried: {
    title: "Your Worried Heart 😟",
    content: `My precious friend,

I know your mind is racing right now with all the "what ifs" and possibilities. Worry has a way of making everything seem bigger and scarier than it actually is.

But here's what I want you to remember: most of the things we worry about never actually happen. Your mind is trying to protect you, but sometimes it goes into overdrive.

Let's bring you back to right now, this moment. You are safe. You are loved. You are exactly where you need to be. The future will unfold as it's meant to, and you'll handle whatever comes your way.

You've survived 100% of your worst days so far. That's a pretty amazing track record. Trust in your ability to navigate whatever lies ahead.

For now, focus on just today. Just this hour. Just this breath. You don't have to solve everything at once.

I'm here with you in spirit, holding space for your worries while also holding onto hope for your peace.

With endless love and faith in you,
Your devoted friend 💕`,
    image: "🦋",
    color: "comfort-warm"
  },
  missing: {
    title: "Missing You Too, My Heart 🥺",
    content: `Oh my sweet, sweet friend,

I miss you too. So much that it sometimes takes my breath away. The distance between us feels like an ocean, but please know that you are never far from my thoughts.

Every little thing reminds me of you - the songs we love, the jokes that make us laugh until our stomachs hurt, the way you light up when you talk about things you're passionate about.

Missing someone you care about is one of love's bittersweet gifts. It means our connection is real and deep and beautiful. It means what we have matters.

Until we can be together again, I'm sending you all my love through these words. Feel it wrapping around you like the warmest hug. You are so incredibly special to me.

The time apart only makes me appreciate you more. You bring so much joy and meaning to my life, and I am grateful every day that our paths crossed.

Distance means nothing when someone means everything.

I love you, my dear friend. Always.

Your friend who carries you in their heart,
Me 💕`,
    image: "💌",
    color: "love-glow"
  },
  angry: {
    title: "Your Anger is Valid 😤",
    content: `Hey fierce one,

I can feel the fire in your heart right now, and you know what? It's completely okay to be angry. Your feelings are valid, and you have every right to feel upset.

Anger often shows up when we've been hurt, when boundaries have been crossed, or when something important to us has been threatened. It's actually a sign that you care deeply about something.

Let yourself feel this anger fully, but don't let it consume you. You can be angry AND still be the loving, kind person you are. These feelings don't define your entire being.

Take some time to understand what triggered this anger. What boundary was crossed? What value was challenged? Sometimes anger is our inner protector trying to tell us something important.

You have every right to stand up for yourself and what matters to you. Your voice deserves to be heard, your feelings deserve to be acknowledged.

When you're ready, and only when you're ready, let this anger transform into the power to create positive change. You are strong enough to channel this energy into something beautiful.

I'm proud of you for feeling deeply and authentically.

Standing with you always,
Your friend who sees your fire and your light 💕`,
    image: "🔥",
    color: "destructive"
  },
  scared: {
    title: "Courage Lives in Your Heart 😨",
    content: `My brave, beautiful friend,

I know you're scared right now, and that's completely human. Fear has a way of making everything feel overwhelming and impossible, but I want to remind you of something important:

You are braver than you believe, stronger than you seem, and more loved than you know.

Fear is often just excitement without breath. It means you're on the edge of something important, something that matters to you. The things that scare us most are often the things most worth doing.

I've watched you face challenges before with such grace and determination. You have an inner strength that amazes me, even when you can't see it yourself.

It's okay to be scared and do it anyway. Courage isn't the absence of fear - it's feeling the fear and moving forward despite it.

You don't have to be fearless to be brave. You just have to take one small step, then another, then another. I'll be cheering you on with every single step.

Remember: this scared feeling is temporary, but your courage is permanent. You've got this, and you've got me believing in you every step of the way.

With unwavering faith in your strength,
Your biggest supporter 💕`,
    image: "🌟",
    color: "primary"
  },
  lonely: {
    title: "You Are Never Truly Alone 💔",
    content: `My heart goes out to you right now,

Loneliness is one of the most challenging feelings to sit with. It can make the world feel empty and make us question our place in it. But I want you to know something profound:

You are never, ever truly alone. Even in your loneliest moments, you are connected to so many people who care about you, including me. Our love for you exists even when we can't be physically present.

Sometimes loneliness is our heart's way of telling us we need connection. It's okay to reach out. It's okay to say "I'm struggling" or "I need someone to talk to." The people who love you want to be there for you.

You are worthy of companionship, friendship, and love. You bring so much light into the world, and the right people see and appreciate that light.

This feeling of loneliness will pass. In the meantime, try to be gentle with yourself. Do something that brings you comfort, even if it's small.

You matter. Your presence in this world matters. The love you give matters. And the love you receive - including mine - is real and lasting.

I'm sending you the biggest, warmest hug and holding you close in my heart.

With endless love and companionship,
Your friend who sees your beautiful soul 💕`,
    image: "🤗",
    color: "comfort-warm"
  },
  nightmare: {
    title: "Sweet Dreams Ahead 😴",
    content: `Oh sweetheart,

I'm so sorry you had a scary dream. I know how real and unsettling nightmares can feel, especially when you first wake up. Your racing heart and anxious thoughts are completely normal responses.

But here's what I want you to remember: it was just a dream. None of those scary things were real. You are safe now, in this moment, in your real life where you are loved and protected.

Dreams sometimes process our fears and anxieties in strange ways. They don't predict the future or reflect reality. They're just your mind's way of sorting through thoughts and emotions.

Take some slow, deep breaths with me. Feel your feet on the ground. Look around and notice where you are right now - safe and sound in the real world.

Try to think of something peaceful and beautiful. Maybe our favorite memory together, or a place that makes you feel calm and happy. Let those positive images replace the scary ones.

You are surrounded by love and light, even in the darkness. Bad dreams have no power over your actual life, where you are cherished and protected.

Rest easy, my dear friend. Only sweet dreams ahead.

Sending you peaceful energy and love,
Your dream guardian 💕`,
    image: "🌙",
    color: "comfort-soft"
  },
  insecure: {
    title: "You Are Enough, Just As You Are 🥀",
    content: `My beautiful, worthy friend,

I can sense you're questioning yourself right now, doubting your worth and value. Those voices of insecurity can be so loud and convincing, but I need you to know they're lying to you.

You are enough. You have always been enough. You will always be enough.

I see so many incredible qualities in you that you might not even realize you possess. Your kindness, your unique perspective, your resilience, your capacity for love - these things make you irreplaceable.

Comparison is the thief of joy, and social media, other people's highlight reels, and your own inner critic can make you forget your own beautiful truth: you are exactly who you're meant to be.

Your worth isn't determined by what you achieve, how you look, what others think of you, or how you measure up to anyone else. Your worth is inherent, unchangeable, and absolute.

The people who truly matter see your value clearly. I see it. And one day, I hope you'll see yourself through our loving eyes.

You don't need to be perfect to be wonderful. You don't need to have it all figured out to be worthy of love and respect.

You are a rare and precious gift to this world.

Believing in your inherent worth,
Someone who sees your true beauty 💕`,
    image: "🌹",
    color: "love-glow"
  },
  overwhelmed: {
    title: "One Breath at a Time 🌊",
    content: `My overwhelmed but strong friend,

I can feel the weight of everything pressing down on you right now. It's like trying to drink from a fire hose - everything coming at you all at once, too fast and too much.

But here's what I want you to do: STOP. Just for this moment, stop trying to handle everything. You don't have to solve it all right now.

Take one deep breath. That's all you need to do in this exact moment. Just breathe.

Now, let's break down that enormous mountain into small, manageable steps. You don't have to climb the whole mountain today. You just need to take one step, then rest, then maybe take another.

It's okay to say no to new requests. It's okay to ask for help. It's okay to admit that you can't do everything perfectly. You're human, not a superhero (though you often act like one).

Prioritize ruthlessly. What absolutely must be done today? What can wait until tomorrow? What can you delegate or eliminate entirely?

You've handled overwhelming situations before, and you'll handle this one too. But you don't have to do it all at once, and you don't have to do it all alone.

I believe in your ability to navigate this storm and find calm waters again.

Holding space for your overwhelm and your strength,
Your steady anchor 💕`,
    image: "⚓",
    color: "comfort-cool"
  }
};

export const ComfortLetter = ({ mood, onBack }: ComfortLetterProps) => {
  const letter = letters[mood as keyof typeof letters] || letters.sad;

  return (
    <div className="min-h-screen bg-gradient-calm p-4">
      <div className="max-w-3xl mx-auto">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6 hover:bg-comfort-soft"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to feelings
        </Button>

        <Card className="shadow-warm animate-fade-in">
          <CardHeader className="text-center">
            <div className="text-6xl mb-4 animate-heart-pulse">
              {letter.image}
            </div>
            <CardTitle className="text-3xl mb-2 text-foreground">
              {letter.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none">
            <div className="whitespace-pre-line text-foreground leading-relaxed text-lg">
              {letter.content}
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <Button
            variant="love"
            size="lg"
            onClick={onBack}
            className="animate-gentle-bounce"
          >
            Thank you 💕
          </Button>
        </div>
      </div>
    </div>
  );
};