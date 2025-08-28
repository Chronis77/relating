import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Video, Clock } from 'lucide-react';

const videos = [
  {
    title: "Thich Nhat Hanh's – 4 wonderful mantras for couples",
    description: "This wonderful clip sums up EFT in 3 minutes. Although Thich Nhat Hanh is not purposefully referring to Emotionally Focused Couple Therapy (EFT), he manages to capture it perfectly. Simple, deep and wonderful!",
    duration: "3 minutes",
    embedId: "UEUxFNkISnU",
    category: "EFT & Mindfulness"
  },
  {
    title: "Sue Johnson – What is a healthy marriage?",
    description: "Relationship expert Dr. Sue Johnson addresses what constitutes a healthy marriage.",
    duration: "3.51 minutes",
    embedId: "1dab34E4ON0",
    category: "EFT & Relationships"
  },
  {
    title: "Sue Johnson – How can I tell if my marriage is in trouble, and what can I do to prevent breakup?",
    description: "Relationship expert Sue Johnson identifies warning signs in a marriage and what you can do to prevent issues from destroying your relationship.",
    duration: "5.45 minutes",
    embedId: "VfFEhLagGFE",
    category: "EFT & Relationships"
  },
  {
    title: "Sue Johnson – Integrating Heart and Soul: The New Science of Attachment & EFT",
    description: "We are born to bond. Relationships are full of moving away from love and then moving again toward love. The going out from love, and the return to love is the heartbeat of life. John Bowlby famously said that 'all of us, from the cradle to the grave, are happiest when life is organized as a series of excursions, long or short, from the secure base provided by our attachment figures.'",
    duration: "Extended",
    embedId: "3bgod5TRgrI",
    category: "EFT & Relationships"
  },
  {
    title: "Sue Johnson – How can I tell if my relationship will last?",
    description: "Sue Johnson reveals how to tell if your relationship will stand the test of time.",
    duration: "4.23 minutes",
    embedId: "m-MEvwH-CCc",
    category: "EFT & Relationships"
  },
  {
    title: "Sue Johnson – Do opposites attract? (And should they?)",
    description: "Relationship expert Sue Johnson talks about how opposites attract … and if they really should.",
    duration: "3.29 minutes",
    embedId: "68k8VbfTI-A",
    category: "EFT & Relationships"
  },
  {
    title: "John Gottman – Making relationships work (Part 1)",
    description: "Dr. John Gottman looks at relationships and the habits that are helpful versus the habits that are not helpful. Speaks of the Four Horsemen of the Apocalypse: Criticism, Contempt, Defensiveness, & Stonewalling. Dr. Gottman offers ways of healing intense conflict.",
    duration: "10.10 minutes",
    embedId: "LLXX8wzvT7c",
    category: "Relationship Science"
  },
  {
    title: "John Gottman – Making relationships Work (Part 2)",
    description: "Dr John Gottman looks at the ability to repair when we feel hurt and good habits to start developing.",
    duration: "10 minutes",
    embedId: "-gFldZtVIqQ",
    category: "Relationship Science"
  },
  {
    title: "John Gottman – Making relationships Work (Part 3)",
    description: "Vital elements that build a positive emotional connection in relationship: love maps, turning toward emotional bids from our partners, fondness and admiration.",
    duration: "10 minutes",
    embedId: "sJ7RHLBdqGM",
    category: "Relationship Science"
  },
  {
    title: "John Gottman – Making Relationships Work – Part 4",
    description: "Questions from people after Dr John Gottman's talk.",
    duration: "Extended",
    embedId: "9aSpl_ZjmcY",
    category: "Relationship Science"
  },
  {
    title: "OSHO: Love is Authentic Only if it Gives Freedom",
    description: "Love is authentic only when it gives freedom. When it respects his individuality, his privacy. But the lovers that you see around the world, their whole effort is that nothing should be private; all secrets should be told to them. They are afraid of individuality.",
    duration: "7 minutes",
    embedId: "OAXghwgkqFg",
    category: "Philosophy & Spirituality"
  },
  {
    title: "Brené Brown studies human connection",
    description: "Brené Brown studies human connection — our ability to empathize, belong, love. Brené Brown studies vulnerability, courage, authenticity, and shame.",
    duration: "20 minutes",
    embedId: "X4Qm9cGRub0",
    category: "Psychology & Connection"
  },
  {
    title: "Validation",
    description: "Watch first 5 minutes of this clip and you'll be smiling from ear to ear.",
    duration: "Short",
    embedId: "Cbk980jV7Ao",
    category: "Psychology & Connection"
  },
  {
    title: "It's not about the nail",
    description: "Spoof of the masculine need to solve the problem and the feminine need to be heard and empathised with. This is very funny and highlights the difference so well, but it's also biased in favour of the masculine so enjoy with awareness.",
    duration: "Short",
    embedId: "-4EDhdAHrOg",
    category: "Psychology & Connection"
  },
  {
    title: "John Gottman – The importance of trust",
    description: "The renowned marriage expert explains how trust may be the most vital ingredient to a successful relationship.",
    duration: "5.38 minutes",
    embedId: "rgWnadSi91s",
    category: "Relationship Science"
  },
  {
    title: "Eckhart Tolle – Dealing With Anger, Resistance and Pessimism",
    description: "How we shift from being our anger to having the anger in our energy field and observing it. Anger becomes a spiritual practice.",
    duration: "13 minutes",
    embedId: "aqX5IFKYFWk",
    category: "Philosophy & Spirituality"
  },
  {
    title: "Viktor Frankl: Why to believe in others",
    description: "In this rare clip from 1972, legendary psychiatrist and Holocaust-survivor Viktor Frankl delivers a powerful message about the human search for meaning and the most important gift we can give others.",
    duration: "4 minutes",
    embedId: "fD1512_XJEw",
    category: "Philosophy & Spirituality"
  },
  {
    title: "Hedy Schleifer–The Power of Connection",
    description: "In Relationship there are three invisible connectors: the space, the bridge and the encounter. When people make these three invisible connectors visible in their lives, and embrace them fully, the 'miracle' of connection happens. The space is the relational space 'between' people. In order to honor that space, one must cross the bridge, and bring one's full and authentic presence to the world of the 'other'. And in doing so, the perfect conditions are established to create a true 'meeting', an encounter of the souls. Once the space has been honored, and the bridge has been crossed, a genuine, nourishing and fulfilling relationship is established.",
    duration: "20 minutes",
    embedId: "tQEU_PSj8WA",
    category: "Psychology & Connection"
  },
  {
    title: "Eckhart Tolle – One-sided love relationship",
    description: "A brilliant explanation of what happens in relationship.",
    duration: "7 minutes",
    embedId: "vshBnR4Z9x8",
    category: "Philosophy & Spirituality"
  }
];

export function ResourcesVideosPage() {
  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 max-w-[1400px]">
          <div className="text-center mb-12 animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Inspiring Videos</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Educational and inspiring video content from relationship experts, psychologists, and spiritual teachers
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {videos.map((video, index) => (
              <Card key={index} className="glass-effect border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="relative">
                  <div className="aspect-video bg-black">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.embedId}`}
                      title={video.title}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="bg-black/70 text-white border-0">
                      <Clock className="h-3 w-3 mr-1" />
                      {video.duration}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Video className="h-4 w-4 text-primary" />
                    <Badge variant="outline" className="text-xs">
                      {video.category}
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-foreground mb-3 text-lg leading-tight">{video.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{video.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="bg-muted/50 rounded-lg p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold text-primary mb-4">Audio Resources</h2>
              <p className="text-muted-foreground mb-6">
                Additional insights from spiritual teachers and relationship experts
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-background rounded-lg p-4">
                  <h3 className="font-medium text-foreground mb-2">Ram Dass on Anger</h3>
                  <iframe 
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/85923712&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&visual=true" 
                    width="100%" 
                    height="166" 
                    frameBorder="no" 
                    scrolling="no"
                    title="Ram Dass speaks about dealing with anger"
                  />
                </div>
                <div className="bg-background rounded-lg p-4">
                  <h3 className="font-medium text-foreground mb-2">Ram Dass on Fear</h3>
                  <iframe 
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/85923717&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&visual=true" 
                    width="100%" 
                    height="166" 
                    frameBorder="no" 
                    scrolling="no"
                    title="Ram Dass speaks about dealing with fear"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}