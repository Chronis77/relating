import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Heart, Users, GraduationCap, Award, Star, Sparkles } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-background to-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--primary)_0%,_transparent_70%)] opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center space-x-3 mb-6">
            <Star className="h-6 w-6 text-primary" />
            <div className="h-px w-12 bg-gradient-to-r from-primary to-secondary"></div>
            <Star className="h-6 w-6 text-secondary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Who am I</h2>
          <h3 className="text-2xl md:text-3xl gradient-text font-semibold">Pippa Solomon</h3>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8 animate-slide-in-left">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              <div className="relative">
                <ImageWithFallback
                  src="/images/Ian-me.jpg"
                  alt="Pippa Solomon"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-effect rounded-lg p-4">
                    <p className="text-black font-medium">Certified EFT Therapist</p>
                    <p className="text-black/80 text-sm">25+ years of experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 animate-slide-in-right">
            <Card className="glass-effect border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">My Philosophy</h4>
                    <p className="text-lg leading-relaxed text-gray-700">
                      Relationships are challenging and provide us with constant opportunities to grow. Learning the art of loving and relating requires awareness.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-2xl border border-primary/10">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                I am passionate about strengthening and deepening the way we relate to each other and in bringing greater consciousness to our relating. <span className="font-semibold text-primary">Relationships that are awake have the potential to be very healing.</span>
              </p>
            </div>

            <Card className="glass-effect border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Personal Journey</h4>
                    <p className="text-gray-700 leading-relaxed">
                      On a personal level, I have been married for 25 years and have two children, age 19 and 18. That is a lot of years that we have worked on staying connected and working through difficult things that come up. <span className="font-semibold text-secondary">The ongoing work of conscious relating pays off as our love deepens.</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="group relative overflow-hidden glass-effect border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
            <CardHeader className="relative z-10">
              <CardTitle className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl">EFT Therapy Framework</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 relative z-10 pb-8">
              <div className="bg-white/50 p-4 rounded-lg border border-primary/20">
                <p className="font-semibold text-primary mb-2">Emotionally Focused Couple Therapy (EFT)</p>
                <p className="text-gray-700">
                  A combination of experiential and humanistic therapy that works with the client where they are, ensuring clients feel fully heard and understood.
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                I use an excellent and highly effective therapeutic framework called EFT (Emotionally Focused Couple Therapy).
              </p>
              <p className="text-gray-700 leading-relaxed">
                Emotionally Focused Couple Therapy (EFT) is a combination of experiential and humanistic therapy that works with the client where they are. This ensures that clients feel fully heard and understood. EFT also uses Rogerian Therapy, Systems Theory and elements of Focusing and Gestalt Therapy. It is based on the belief that our primary relationships are sources of love, trust and safety and that a healthy dependency on each other helps us to meet our deep human needs. The therapy facilitates a move from negative, stuck interactional patterns to secure and safe connections. Please read more about this framework of therapy on my page Relationship Therapy.
              </p>
              <p className="text-gray-700 leading-relaxed">
                EFT uses Rogerian Therapy, Systems Theory and elements of Focusing and Gestalt Therapy. It is based on the belief that our primary relationships are sources of love, trust and safety.
              </p>
              <div className="flex items-center space-x-2 p-3 bg-primary/5 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <p className="text-sm font-medium text-primary">
                  Facilitates a move from negative patterns to secure connections
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                I am a fully certified EFT therapist. The certification body is ICEEFT in Canada.
              </p>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden glass-effect border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent"></div>
            <CardHeader className="relative z-10">
              <CardTitle className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl">Certification & Training</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 relative z-10 pb-8">
              {[
                { title: 'Fully certified EFT therapist', subtitle: 'ICEEFT in Canada', primary: true },
                { title: 'Masters in Educational Psychology', subtitle: '2003 & 2004' },
                { title: 'Working at FAMSA', subtitle: 'Families South Africa' },
                { title: 'Imago therapy course', subtitle: 'Hedy & Yumi Schleifer' },
                { title: 'Mediation Skills Training', subtitle: 'Centre for Conflict Resolution' },
                { title: 'Qualifications at SACAP', subtitle: 'Counselling' }
              ].map((item, index) => (
                <div key={index} className={`flex items-start space-x-3 p-3 rounded-lg transition-colors hover:bg-white/30 ${item.primary ? 'bg-secondary/10 border border-secondary/20' : 'bg-white/20'}`}>
                  <div className={`w-3 h-3 rounded-full flex-shrink-0 mt-2 ${item.primary ? 'bg-secondary' : 'bg-primary'}`}></div>
                  <div>
                    <p className={`font-semibold ${item.primary ? 'text-secondary' : 'text-primary'}`}>{item.title}</p>
                    <p className="text-sm text-gray-600">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="text-center animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <Card className="inline-block glass-effect border-0 shadow-xl max-w-4xl">
            <CardContent className="p-8 lg:p-12">
              <div className="flex items-center justify-center mb-6">
                <GraduationCap className="h-8 w-8 text-primary mr-3" />
                <div className="w-12 h-px bg-gradient-to-r from-primary to-secondary"></div>
                <GraduationCap className="h-8 w-8 text-secondary ml-3" />
              </div>
              <blockquote className="text-xl lg:text-2xl italic gradient-text font-semibold leading-relaxed">
                "My Masters in Educational Psychology was specifically useful for its systemic training (working within systems instead of individuals) and it introduced me to my passion – couple and family therapy, which I now specialise in."
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}