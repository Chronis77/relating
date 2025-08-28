import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { ExternalLink } from 'lucide-react';

export function ResourcesLinksPage() {
  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-12 animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Useful Links</h1>
            <p className="text-lg text-muted-foreground">
              Resources, courses, and services that support relationship growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <Card 
              className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => window.open('https://www.famsawc.org.za', '_blank')}
            >
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <ExternalLink className="h-5 w-5 text-primary" />
                  <span>FAMSA</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground mb-2">
                  <strong>FAMSA</strong> is an NGO that offers couple and family counselling. An excellent resource, particularly for couples who have financial constraints or who need after hours sessions.
                </p>
                <p className="text-xs text-muted-foreground">www.famsawc.org.za</p>
              </CardContent>
            </Card>

            <Card 
              className="bg-gradient-to-br from-secondary/5 to-primary/5 border-secondary/20 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => window.open('https://www.mankindproject.co.za', '_blank')}
            >
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <ExternalLink className="h-5 w-5 text-secondary" />
                  <span>Mankind Project South Africa</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground mb-2">
                  A powerful weekend course for men, followed by an ongoing men's group. An empowered approach to being a man in today's world and developing the mature masculine.
                </p>
                <p className="text-xs text-muted-foreground">www.mankindproject.co.za</p>
              </CardContent>
            </Card>

            <Card 
              className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => window.open('https://www.soul-development.co.za', '_blank')}
            >
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <ExternalLink className="h-5 w-5 text-primary" />
                  <span>Art of Being</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground mb-2">
                  An intensive and deeply transformative course that runs weekly for a year. A brilliant investment for anyone who is looking for a strong and solid foundation for personal growth and soul development.
                </p>
                <p className="text-xs text-muted-foreground">www.soul-development.co.za</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}