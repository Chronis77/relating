import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { BookOpen, Video, Link, Heart, ExternalLink } from 'lucide-react';

const inspirationalContent = [
  {
    title: "More embodied",
    content: "What I am most driven nuts by is my longing to feel more deeply connected to you. I know you long for closeness too, but we do different things with this need. I tend to crave and pursue and then get angry when it feels like you don't want connection. You tend to avoid and move away from your need for closeness. Why do we do this pursue-withdraw dance when we both want deep, connected intimacy? We do it because the openness and vulnerability required for this depth isn't easy. We don't yet know how to fully trust close and connected, but we are learning. When we prioritise presence, accessibility and responsiveness we start relating differently. You lean in more, finding me softer and more accepting. I stop grabbing at you out of fear and insecurity, and feel surer you want to be there. Our love becomes more embodied – more of a bodily felt sense, more in the moment, more vulnerable and aware and more joy-full. Deep intimacy becomes a possibility. There is a kind of filling up of our love tanks in that depth that is a potent healing. Often, we need each other to remember the power of love."
  },
  {
    title: "Breaking open",
    content: "When I'm disconnecting from you, what part of me is moving away from connection? It's often the part that in those moments can't speak about deeply vulnerable and painful feelings. It feels too sore and it gets too hard to feel so I disconnect from my feelings. And then I disconnect from you. What is so crucial is that instead of blaming you, I keep seeing that it is ME disconnecting. Every time I keep going back to that place in me that opens and closes I learn so much. I learn what hurts and what needs my healing attention. Most often it's a sense of myself that I am not worthy enough or lovable enough. When I can be with this part, I can keep opening my heart to love."
  },
  {
    title: "Love miner",
    content: "There is so much love everywhere – in me, in you and in our relating. It's abundant. It's in our eyes as we look and smile and encourage and in our hands as we reach to touch. Love is there when we listen and stay with each other's experience. It's in presence and time together and in the acts of service we do for each other. It's in our hellos and goodbyes, in anticipating what you'd like or inquiring into how you are doing. Love is in all the small things, like passing a box of tissues when you're hurting or holding you while you cry. It's in all the ways we care about each other, but it's also underneath all the hurt, because it wouldn't hurt if we didn't love each other. Love is there in a hundred ways. When I see love everywhere it seems to grow and thrive. I am becoming a love-miner, because seeing love, leads to feeling love and that is a kind-of gold. Somehow tuning into the constant touch of love has a way of reminding me how much love lives inside of me. It helps me feel my essence, which is full of all this love-gold."
  }
];

const books = [
  {
    title: "Hold Me Tight",
    author: "Dr Sue Johnson",
    description: "Excellent book for couples. The book focuses on seven transforming conversations helping couples to form secure and lasting bonds. This book is written by the author of EFT (Emotionally Focused Couple Therapy) which is the therapy framework that I use. Highly recommended."
  },
  {
    title: "Conscious Loving",
    author: "Gay and Kathlyn Hendricks",
    description: "Fabulous book. Focuses on various relationship commitments and relationship skills, such as 'Telling the Microscopic Truth'. Authors emphasis the importance of taking responsibility and the power of Conscious Relationship."
  },
  {
    title: "Passionate Marriage",
    author: "David Schnarch",
    description: "Excellent book focusing on sexual and intimacy issues. The book explores the concept of individuation and suggests that a lot of difficulties arise from being too emotionally enmeshed / undifferentiated. This book is for everyone, whether you are in a marriage or not."
  }
];

const videos = [
  {
    title: "Thich Nhat Hanh's – 4 wonderful mantras for couples",
    description: "This wonderful clip sums up EFT in 3 minutes. Although Thich Nhat Hanh is not purposefully referring to Emotionally Focused Couple Therapy (EFT), he manages to capture it perfectly. Simple, deep and wonderful!",
    duration: "3 minutes"
  },
  {
    title: "Sue Johnson – What is a healthy marriage?",
    description: "Relationship expert Dr. Sue Johnson addresses what constitutes a healthy marriage.",
    duration: "3.51 minutes"
  },
  {
    title: "John Gottman – Making relationships work (Part 1)",
    description: "Dr. John Gottman looks at relationships and the habits that are helpful versus the habits that are not helpful. Speaks of the Four Horsemen of the Apocalypse: Criticism, Contempt, Defensiveness, & Stonewalling.",
    duration: "10.10 minutes"
  }
];

export function ResourcesSection() {
  const [activeTab, setActiveTab] = useState("inspiration");

  return (
    <section id="resources" className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Resources</h2>
          <p className="text-lg text-muted-foreground">
            Tools, inspiration, and guidance for your relationship journey
          </p>
        </div>

        <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 glass-effect">
              <TabsTrigger value="inspiration" className="flex items-center space-x-2">
                <Heart className="h-4 w-4" />
                <span className="hidden sm:inline">Inspiration</span>
              </TabsTrigger>
              <TabsTrigger value="reading" className="flex items-center space-x-2">
                <BookOpen className="h-4 w-4" />
                <span className="hidden sm:inline">Reading</span>
              </TabsTrigger>
              <TabsTrigger value="videos" className="flex items-center space-x-2">
                <Video className="h-4 w-4" />
                <span className="hidden sm:inline">Videos</span>
              </TabsTrigger>
              <TabsTrigger value="links" className="flex items-center space-x-2">
                <Link className="h-4 w-4" />
                <span className="hidden sm:inline">Links</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="inspiration" id="inspiration">
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-primary mb-4">Relating Inspiration</h3>
                  <p className="text-muted-foreground">
                    Reflections on love, connection, and the journey of conscious relating
                  </p>
                </div>
                
                <div className="grid gap-6">
                  {inspirationalContent.map((item, index) => (
                    <Card key={index} className="glass-effect border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                      <CardHeader>
                        <CardTitle className="text-xl text-primary">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground leading-relaxed">{item.content}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reading" id="reading">
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-primary mb-4">Recommended Reading</h3>
                  <p className="text-muted-foreground">
                    Books that can deepen your understanding of relationships and personal growth
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {books.map((book, index) => (
                    <Card key={index} className="bg-gradient-to-br from-white/80 to-accent/20 border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="text-lg text-primary">{book.title}</CardTitle>
                        <p className="text-secondary font-medium">{book.author}</p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-foreground leading-relaxed">{book.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl">
                  <p className="text-center text-foreground">
                    <strong>Reading practice:</strong> A wonderful practice is to take a page or extract a day of an article or book and read it together with your partner and then have a discussion on it. This is a wonderful way of strengthening your connection and getting to know your partner.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="videos" id="videos">
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-primary mb-4">Inspiring Videos</h3>
                  <p className="text-muted-foreground">
                    Educational and inspiring video content from relationship experts
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {videos.map((video, index) => (
                    <Card key={index} className="glass-effect border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <Video className="h-6 w-6 text-primary" />
                          <Badge variant="secondary">{video.duration}</Badge>
                        </div>
                        <h4 className="font-semibold text-foreground mb-3">{video.title}</h4>
                        <p className="text-sm text-muted-foreground">{video.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="links" id="links">
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-primary mb-4">Useful Links</h3>
                  <p className="text-muted-foreground">
                    Resources, courses, and services that support relationship growth
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
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

                  <Card className="bg-gradient-to-br from-secondary/5 to-primary/5 border-secondary/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
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

                  <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
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
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}