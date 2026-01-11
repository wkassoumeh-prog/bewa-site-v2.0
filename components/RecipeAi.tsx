import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { ChefHat, Loader2, Sparkles } from 'lucide-react';

const RecipeAi: React.FC = () => {
  const [ingredient, setIngredient] = useState('');
  const [recipe, setRecipe] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ingredient.trim()) return;

    setLoading(true);
    setError(null);
    setRecipe(null);

    try {
      if (!process.env.API_KEY) {
        throw new Error("API Key missing");
      }

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `Erstelle ein kurzes, exquisites Gourmet-Rezept für "${ingredient}". 
      Die Antwort muss auf Deutsch sein. 
      Formatierung:
      1. Titel des Gerichts (Fett)
      2. Kurze, appetitliche Beschreibung (1 Satz)
      3. Zutatenliste (Aufzählungszeichen)
      4. Zubereitung (Nummerierte Liste, kurz gehalten).
      Halte es prägnant und passend für Wildfleisch-Liebhaber.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      setRecipe(response.text || "Kein Rezept gefunden.");

    } catch (err) {
      console.error(err);
      setError("Entschuldigung, unser AI-Chef ist gerade beschäftigt. Bitte versuchen Sie es später erneut.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-chef" className="py-20 bg-forest-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-forest-800 rounded-full mb-4">
            <Sparkles className="w-6 h-6 text-gold-500 mr-2" />
            <span className="text-gold-500 font-bold tracking-wider uppercase text-sm">Bewa AI Kitchen</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Nicht sicher, was Sie kochen sollen?</h2>
          <p className="text-forest-200">Fragen Sie unseren KI-Küchenchef nach dem perfekten Rezept für Ihr Wildbret.</p>
        </div>

        <div className="bg-forest-800/50 backdrop-blur-sm p-8 rounded-2xl border border-forest-700 shadow-2xl">
          <form onSubmit={handleGenerate} className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-grow">
              <input
                type="text"
                value={ingredient}
                onChange={(e) => setIngredient(e.target.value)}
                placeholder="z.B. Rehrücken, Wildschweinbraten, Hirschgulasch..."
                className="w-full px-6 py-4 bg-forest-950/50 border border-forest-600 rounded-xl text-white placeholder-forest-400 focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all"
              />
            </div>
            <button
              type="submit"
              disabled={loading || !ingredient}
              className="bg-gold-500 hover:bg-gold-600 text-forest-950 font-bold px-8 py-4 rounded-xl transition-colors flex items-center justify-center min-w-[160px] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><ChefHat className="w-5 h-5 mr-2" /> Rezept finden</>}
            </button>
          </form>

          {error && (
            <div className="p-4 bg-red-900/30 border border-red-800 text-red-200 rounded-lg text-center">
              {error}
            </div>
          )}

          {recipe && (
            <div className="bg-white/5 p-8 rounded-xl border border-white/10 animate-fade-in">
              <div className="prose prose-invert max-w-none font-sans whitespace-pre-line leading-relaxed">
                {recipe}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RecipeAi;