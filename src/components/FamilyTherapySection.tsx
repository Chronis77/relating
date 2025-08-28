import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Users, Heart, MessageCircle, Shield } from 'lucide-react';

export function FamilyTherapySection() {
  return (
    <section id="family-therapy" className="py-16 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Family Therapy</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Using Emotionally Focused Family Therapy (EFFT) to help families reconnect and heal together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-primary" />
                  <span>EFFT - Emotionally Focused Family Therapy</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg leading-relaxed">
                  <strong>EFFT (Emotionally Focused Family Therapy)</strong> helps families deal with the things that are getting in the way of being close, connected and free with each other.
                </p>
                <p>
                  It helps teens, parents, and families talk about the things they are longing to talk about, but just don't know how to.
                </p>
                <p>
                  Negative stuck cycles between family members can become bad habits that make it hard to move out of self-protective strategies and back into connection.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-4 p-4 bg-white/70 rounded-lg shadow-sm">
              <Heart className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Repair & Connection</h4>
                <p className="text-sm text-muted-foreground">
                  EFFT helps shift things so that family members can talk to each other and repair
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-white/70 rounded-lg shadow-sm">
              <Shield className="h-8 w-8 text-secondary flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Safety & Trust</h4>
                <p className="text-sm text-muted-foreground">
                  They learn to feel safe with each other and prioritise their relating
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-white/70 rounded-lg shadow-sm">
              <MessageCircle className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Open Communication</h4>
                <p className="text-sm text-muted-foreground">
                  Breaking through barriers to have meaningful conversations as a family
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-secondary/10 to-primary/10 p-8 rounded-xl">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-primary mb-4">Family Therapy in Action</h3>
            <p className="text-muted-foreground mb-6">
              Watch this inspiring video to learn more about how family therapy can transform relationships
            </p>
          </div>
          
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/jPXUB4Tz7rQ"
              title="Family Therapy Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-white/80 border-purple-100 shadow-lg max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h4 className="text-lg font-semibold text-primary mb-4">Ready to Start Your Family's Healing Journey?</h4>
              <p className="text-muted-foreground">
                Family therapy can help break negative cycles and create deeper, more authentic connections between family members. Every family deserves to feel safe, connected, and free to be themselves with each other.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}