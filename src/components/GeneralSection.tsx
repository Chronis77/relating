import React from 'react';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

const themedSections = [
  {
    theme: "Love",
    image: "/images/MDslider.jpg",
    quote: "The great aim of every human being is to understand the meaning of total love. Love is not found in someone else, but in ourselves; we simply awaken it. But in order to do that, we need the other person.",
    author: "Paulo Coelho"
  },
  {
    theme: "Communication",
    image: "/images/IPslider.jpg",
    quote: "Communication is to relationships what breath is to life.",
    author: "Virginia Satir"
  },
  {
    theme: "Spiritual",
    image: "/images/Andile-Keisha.jpg",
    quote: "And let there be no purpose in relationships save the deepening of the spirit",
    author: ""
  },
  {
    theme: "Growth",
    image: "/images/GTslider.jpg",
    quote: "Each relationship teaches us something about ourselves, each relationship provides us with the opportunity to grow and evolve, to know ourselves better, to understand who we are and who we wish to be. Each one is a gift.",
    author: "Shifa Salih"
  },
  {
    theme: "Responsibility",
    image: "/images/ARslider2.jpg",
    quote: "Co-dependence is two people fighting over who is responsible. Co-commitment is two people agreeing that each is 100 percent responsible.",
    author: "Gay Hendricks"
  },
  {
    theme: "Strengthening",
    image: "/images/LMslider.jpg",
    quote: "The only question is how to make love stay.",
    author: "Tom Robbins"
  }
];

export function GeneralSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-20">
      <div className="container mx-auto px-4 max-w-[1200px]">
        {/* Header */}
        <div className="text-center space-y-6 mb-16 animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold gradient-text leading-relaxed  mb-0 pb-0">
            Relating
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium -mt-10">
            with Pippa Solomon
          </p>
          <p className="text-lg text-muted-foreground">
            Relationship Therapy • EFT Certified Therapist
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        {/* Themed Sections */}
        <div className="space-y-16 mb-20">
          {themedSections.map((section, index) => (
            <div 
              key={section.theme} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 animate-fade-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <ImageWithFallback
                    src={section.image}
                    alt={`${section.theme} - relating`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <Card className="glass-effect border-primary/20 shadow-lg">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold text-primary mb-6">
                      {section.theme}...
                    </h2>
                    <blockquote className="text-lg leading-relaxed text-foreground mb-6 italic">
                      "{section.quote}"
                    </blockquote>
                    {section.author && (
                      <cite className="text-secondary font-semibold">
                        — {section.author}
                      </cite>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Final Copy */}
        <div className="animate-fade-up" style={{ animationDelay: '1.2s' }}>
          <Card className="glass-effect border-primary/20 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-primary mb-4">What is Relating?</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
              </div>
              
              <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
                <p className="text-lg leading-relaxed mb-6">
                  Relating is the way we connect with each other. It is a process, a flow, a movement. It is relationship in action. If we want loving, connected relationships we have to work at them and often we don't know where to start or how to do this.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  Relationship Therapy is a great way of strengthening the way we connect with each other and learning the art of being and living together. It provides a safe and facilitated environment in which to have conversations that help people feel clear and resolved with each other. As Virginia Satir said "Communication is to relationships what breath is to life."
                </p>
                
                <p className="text-lg leading-relaxed">
                  Relationship Therapy has a number of focus areas within it, such as couple therapy, marriage therapy, pre-marital counselling, family therapy and mediation. Please take a closer look at the specific professional services I offer or contact me for more information.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}