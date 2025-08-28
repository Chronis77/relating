import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Heart, Target, ExternalLink } from 'lucide-react';

const focusAreas = [
  'promote safe, secure and healthy patterns of connection',
  'identify patterns of interaction that are causing problems',
  'work through difficult conversations and conflict areas',
  'deepen intimacy and connection',
  'deepen self and other awareness',
  'strengthen healthy dependency and to distinguish between effective and ineffective dependency',
  'feel understood and heard by each other'
];

const inspirationalImages = [
  {
    url: "/images/Quote-Furrow.jpg",
    alt: "Couple love relationship therapy"
  },
  {
    url: "/images/Quote-Sue.jpg",
    alt: "Healing spiritual wellness"
  },
  {
    url: "/images/RC-quote.jpg",
    alt: "Connection intimacy trust"
  },
  {
    url: "/images/RI30-Within.jpg",
    alt: "Peaceful nature calm"
  },
  {
    url: "/images/RI31-Mantras2.jpg",
    alt: "Heart hands together"
  }
];

export function TherapySection() {
  return (
    <section id="therapy" className="py-16 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="text-center mb-12 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Relationship Therapy</h1>
        </div>

        {/* What is Relationship Therapy */}
        <div className="mb-12 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <Card className="glass-effect border-primary/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">WHAT IS RELATIONSHIP THERAPY?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg leading-relaxed">
                Relationship therapy is an opportunity for people to come together in a safe and held environment to work on their relationship.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* The Focus of Relationship Therapy */}
        <div className="mb-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-2xl font-semibold text-primary mb-6">The focus of relationship therapy is to</h2>
          <Card className="glass-effect border-purple-100 shadow-lg">
            <CardContent className="p-8">
              <ul className="space-y-3">
                {focusAreas.map((area, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg leading-relaxed">{area}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Therapist Role */}
        <div className="mb-12 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <Card className="bg-gradient-to-br from-secondary/5 to-primary/5 border-secondary/20 shadow-lg">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed mb-6">
                A relationship therapist is good at distinguishing process from content, reading underlying dynamics and messages, being with deep feeling, addressing resistances and providing a safe container in which to work. At all times a relationship therapist works at being on the side of the relationship rather than biased toward a specific person. The client is the relationship.
              </p>
              <div className="bg-white/70 p-6 rounded-lg">
                <p className="text-lg font-medium text-primary">
                  The relationship framework that I have been trained in is Emotionally Focused Couple Therapy (EFT). This therapy model addresses the question: "What is necessary for a lasting transformational shift to occur in a distressed relationship?"
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Repeated Content Section */}
        <div className="mb-12 animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <Card className="glass-effect border-primary/20 shadow-lg">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed mb-6">
                Relationship therapy is an opportunity for people to come together in a safe and held environment to work on their relationship.
              </p>
              <h3 className="text-xl font-semibold text-primary mb-4">The focus of relationship therapy is to</h3>
              <ul className="space-y-3 mb-6">
                {focusAreas.map((area, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <span className="leading-relaxed">{area}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg leading-relaxed">
                A relationship therapist is good at distinguishing process from content, reading underlying dynamics and messages, being with deep feeling, addressing resistances and providing a safe container in which to work. At all times a relationship therapist works at being on the side of the relationship rather than biased toward a specific person. The client is the relationship.
              </p>
              <div className="mt-6 bg-primary/5 p-6 rounded-lg">
                <p className="text-lg font-medium text-primary">
                  The relationship framework that I have been trained in is Emotionally Focused Couple Therapy (EFT). This therapy model addresses the question: "What is necessary for a lasting transformational shift to occur in a distressed relationship?"
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* EFT Foundation */}
        <div className="mb-12 animate-fade-up" style={{ animationDelay: '1s' }}>
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Heart className="h-6 w-6 text-primary" />
                <span>The Foundation of EFT</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg leading-relaxed">
                This model of therapy is based on our primary and very human need for love, trust and secure connections with others. We continually search for emotional contact and responsiveness within our relationships. We want to know that our partner will be there for us and that we are special to them. In essence we are emotionally dependent on each other for nurturing, soothing, love and protection. Being attached to someone is viewed as a normal source of safety and security. The work is to make our dependency on each other secure and healthy rather than insecure and unhealthy.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* EFT Approach */}
        <div className="mb-12 animate-fade-up" style={{ animationDelay: '1.2s' }}>
          <Card className="bg-gradient-to-br from-secondary/5 to-primary/5 border-secondary/20 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Target className="h-6 w-6 text-secondary" />
                <span>Breaking Negative Patterns</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg leading-relaxed">
                EFT suggests that emotional isolation is very painful for us. Couples often get stuck in painful relating patterns which lead to disconnection. Protective strategies like criticism, blame, anger, withdrawal and non-responsiveness create loneliness and a lack of safety in our relating. The work in EFT is to repair these disconnecting patterns and to learn how to stay connected and safe with the person you love.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-destructive border-destructive/20">Criticism</Badge>
                <Badge variant="outline" className="text-destructive border-destructive/20">Blame</Badge>
                <Badge variant="outline" className="text-destructive border-destructive/20">Anger</Badge>
                <Badge variant="outline" className="text-destructive border-destructive/20">Withdrawal</Badge>
                <Badge variant="outline" className="text-destructive border-destructive/20">Non-responsiveness</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* EFT Resources */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-xl text-center animate-fade-up mb-12" style={{ animationDelay: '1.4s' }}>
          <h3 className="text-xl font-semibold text-primary mb-4">Learn More About EFT</h3>
          <p className="text-muted-foreground mb-6">
            Read more about EFT in three articles by Sue Johnson, the creator of EFT:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 bg-white/70 rounded-full px-4 py-2 hover:scale-105 transition-transform duration-200">
              <ExternalLink className="h-4 w-4 text-primary" />
              <span className="text-primary font-medium">Hold me tight</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/70 rounded-full px-4 py-2 hover:scale-105 transition-transform duration-200">
              <ExternalLink className="h-4 w-4 text-secondary" />
              <span className="text-secondary font-medium">Attachment, love and science (abbreviated article)</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/70 rounded-full px-4 py-2 hover:scale-105 transition-transform duration-200">
              <ExternalLink className="h-4 w-4 text-primary" />
              <span className="text-primary font-medium">When your partner doesn't have empathy</span>
            </div>
          </div>
        </div>

        {/* Inspirational Images Grid at Bottom */}
        <div className="animate-fade-up" style={{ animationDelay: '1.6s' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {inspirationalImages.map((image, index) => (
              <div 
                key={index} 
                className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${1.8 + index * 0.1}s` }}
              >
                <ImageWithFallback
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}