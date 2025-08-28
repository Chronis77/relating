import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const inspirationalSections = [
  {
    title: "More embodied",
    image: "/images/RI3-More-embodied.jpg",
    content: "What I am most driven nuts by is my longing to feel more deeply connected to you. I know you long for closeness too, but we do different things with this need. I tend to crave and pursue and then get angry when it feels like you don't want connection. You tend to avoid and move away from your need for closeness. Why do we do this pursue-withdraw dance when we both want deep, connected intimacy? We do it because the openness and vulnerability required for this depth isn't easy. We don't yet know how to fully trust close and connected, but we are learning. When we prioritise presence, accessibility and responsiveness we start relating differently. You lean in more, finding me softer and more accepting. I stop grabbing at you out of fear and insecurity, and feel surer you want to be there. Our love becomes more embodied – more of a bodily felt sense, more in the moment, more vulnerable and aware and more joy-full. Deep intimacy becomes a possibility. There is a kind of filling up of our love tanks in that depth that is a potent healing. Often, we need each other to remember the power of love."
  },
  {
    title: "Breaking open",
    image: "/images/Breaking-open.jpg",
    content: "When I'm disconnecting from you, what part of me is moving away from connection? It's often the part that in those moments can't speak about deeply vulnerable and painful feelings. It feels too sore and it gets too hard to feel so I disconnect from my feelings. And then I disconnect from you. What is so crucial is that instead of blaming you, I keep seeing that it is ME disconnecting. Every time I keep going back to that place in me that opens and closes I learn so much. I learn what hurts and what needs my healing attention. Most often it's a sense of myself that I am not worthy enough or lovable enough. When I can be with this part, I can keep opening my heart to love."
  },
  {
    title: "Love miner",
    image: "/images/RI-2-Love-miners.jpg",
    content: "There is so much love everywhere – in me, in you and in our relating. It's abundant. It's in our eyes as we look and smile and encourage and in our hands as we reach to touch. Love is there when we listen and stay with each other's experience. It's in presence and time together and in the acts of service we do for each other. It's in our hellos and goodbyes, in anticipating what you'd like or inquiring into how you are doing. Love is in all the small things, like passing a box of tissues when you're hurting or holding you while you cry. It's in all the ways we care about each other, but it's also underneath all the hurt, because it wouldn't hurt if we didn't love each other. Love is there in a hundred ways. When I see love everywhere it seems to grow and thrive. I am becoming a love-miner, because seeing love, leads to feeling love and that is a kind-of gold. Somehow tuning into the constant touch of love has a way of reminding me how much love lives inside of me. It helps me feel my essence, which is full of all this love-gold."
  },
  {
    title: "Come full",
    image: "/images/RI-Come-full.jpg",
    content: "It's only possible for me to meet you empty of expectation when I feel free. To stay with where I am, I have to acknowledge that I am often full of need. I need to feel that you can open your heart wide to me and that together we can touch the fullness of our love. The parts of you that aren't open, can get translated by the unsure parts of me as \"I'm not loved, lovable, good enough\". I understand how this translation is inaccurate and yet it seems that those parts can only be convinced by your full opening. It's like we are caught in a rubix-cube dance of opening and acceptance. When you're accepting I relax and soften. When you're not ok with my needfulness, let's talk about it. I'd love to explore with you what frightens you and maybe in that exploring you will find a certain depth of pain that can also be loved. We can keep learning together and loving each other open."
  },
  {
    title: "Come empty",
    image: "/images/RI62-come-empty2.jpg",
    content: "I have come to you with my young heart, thinking that everything I need lies inside of you. Somehow thinking you hold the answer to what my heart longs for and I have a menu for this. This has an impact on you: pressure and confusion; some conflict between wanting to meet me and not being sure how. Now I am wanting to throw away my menu, even though I'm not sure I can do without it. I want to meet you just as you are and see who that is. I want to come empty and be filled up by the essence of you that originally drew me in. That scent of you is what I need. And in that I sense a flowering might happen; a new way of meeting where you can be free instead of something I need you to be."
  },
  {
    title: "Open wings",
    image: "/images/RI61-open-wings.jpg",
    content: "I have a tendency to think, \"If you can't meet my needs then I will meet my own needs\", but this doesn't help the longing in me for you. What I do with that longing is push it underground so that I can deceive myself that I can go it alone. My pulling away leaves me lonely. It's a fake sense of okness, because what I really want is to be close to you. There are many messages in our world encouraging a separateness: 'find yourself', 'be independent', 'take care of yourself'. Where are the messages saying, \"find you\" or \"find my love for you\" or \"find a way to keep loving you no matter what barrier shows up\". Our relating is a potent awakening opportunity. You hold up a mirror showing me the wounded places in me that aren't sure it's safe to be close and connected. I can blame you for this and say you aren't meeting my needs or I can attend to those wounded places with you; together. I don't have to strengthen myself separately so that I won't get hurt. I need to learn how to stay with the hurt so that it can teach me how to love us both more."
  },
  {
    title: "Boundaries",
    image: "/images/RI61-boundaries.jpg",
    content: "Boundaries are the way I take care of myself. I give these up when staying other-focused and making sure you are happy feels safer. I can deceive myself that making you happy keeps me happy, but it's a falsehood. I am only happy when I am attending to my own happiness. This can include taking care of you, but then its conscious. I'm not doing it from a place of fear that if I don't you will be angry or displeased with me. I'm doing it because loving you feels good. Learning to care for myself means honouring and caring for all the parts and feelings in me. It's being able to say YES and NO from a centered place rather than leaning too far into you or too far away from you. Boundaries are essential. When I can't put them in place, it's because my need to please you feels easier than staying in my power. What needs the deepest self-care is that younger part of me that believes she has to give up her needs in order to feel safe. It takes courage to set boundaries, because it takes courage to love ourselves."
  },
  {
    title: "Repairing",
    image: "/images/RI60-repairing.jpg",
    content: "Many couples move in and out of connection. We tend to do a connection-disconnection dance with each other, moving in and out of closeness.\n\nOne of the best things partners can do is to learn how to repair with each other. Setting an intention to constantly repair from breaks in our connection is powerful work. In fact, it's radical work! This kind of consciousness grows us and strengthens our ability to love.\n\nThere are a lot of skills that get developed in a repairing process. If we think for a moment about what it takes to repair something in our relating, we can pretty quickly feel the growth edge. It requires that we can feel our feelings and stay with what is painful and difficult for us; that we trust enough to share it with another; that we can move out of blame and anger; that we really hear and listen to each other so that we fully understand; that we can stay with another's experience even if we see it entirely differently. Learning how to repair is one of the most powerful ways we can stay in love. We can take that beautiful and magical gift we are given when we fall in love with someone and keep it alive. We keep prioritising love and growing. Growing is after all the very foundation of evolution.\n\nNew couple workshop on offer: Repairing for couples – 18 February 2017. Great Valentine's gift. www.relating.co.za/couple-workshops/"
  },
  
];

const additionalSections = [
  {
    title: "Felt love",
    image: "/images/RI59b-felt-love.jpg",
    content: "A photographer* sought out interesting faces across the world. He wanted to capture how faces changed when people felt affirmed. In the moment of validation, joy or shyness appeared. The need for protection seemed to melt away.\n\nLove, appreciation, affirmation and validation transform. They help partners feel safer and more valued. We can share what works for us and what we need through validation. For example: \"When you took my hand I felt important to you.\" Our partners don't often know what really works for us unless we tell them in a non-critical way. Validation helps our partners feel a stronger and more positive sense of themselves. The more we feel loved, worthy and cared for the greater our capacity to love and take care of others.\n\nIf validation is so effective, then why don't we validate more often? It is important to look at what keeps us unwilling to be affirming. Perhaps we think: \"Why should I love you if I don't feel love from you,\" or \"My heart hurts already so how can I show love?\" Perhaps we have developed a habit of focusing on the negative and so we don't see the ways in which our partners love us or that we have our own inner-well of love. Sometimes we have to be the first to give love – to ourselves and to our partners. When our love tank is empty, we have to fill it. It doesn't get filled by blame or criticism or closing ourselves off. It only gets filled by love. Love is that 'light against our being' where for a moment we feel wholly encouraged.\n\n* The photographers work: www.upworthy.com/see-the-exact-moment-a-photographer-told-these-women-they-were-beautiful?g=2&c=hpstream"
  },
  {
    title: "Catch 22",
    image: "/images/RI58-catch-22b.jpg",
    content: "Every couple has their own perfectly designed catch 22; their own divinely-inspired mechanism for growth. Partners have unmet needs or deep longings to feel more loved, accepted, needed and valued. These needs show up in many different ways. It might be a need for more sexual or emotional intimacy, more depth in the expression of love, or a need to feel heard and understood, supported, nurtured or validated. These unmet longings cause a lot of friction in our relationships.\n\nA heart that is unmet is a wounded heart and the wounded heart often loses perspective and gets caught in very painful and difficult feelings. When the heart is bleeding, it often tries to cover its wound in mainly two ways: It can protest in a critical way that leaves the other partner feeling bad. Or it tries to shut its need down or get it met elsewhere, leaving the other partner feeling rejected and inadequate. Both the protesting and the moving away are painful. When we feel threatened, we move into a defensive way of relating and then we start getting caught. A common defensive dance is where one partner protests and the other withdraws. The more the one moves away from intimacy, the more the other partner's heart gets injured and the more they protest. The more they protest, the more distressed the other partner gets and the more they close off in order to calm things down or to get away from danger. It's a catch 22 because this keeps happening over and over, like ground hog day, through many different scenarios until partners start realising, \"we are in a catch 22\".\n\nChange requires that partners start putting their heads together to work out how to get out of their specific catch 22. To stay in conversation about how we get stuck takes a lot of skill. A lot can get grown in this process. Here's what helps: Being able to distinguish between defensive relating which closes intimacy down and vulnerable relating which opens intimacy up; honesty and taking responsibility at every opportunity; staying with our painful feelings without running away and when we get hurt, we can take care of ourselves so that we can return to the conversation. When we keep running from our soul's depth and longing we get caught. Relationships are all about soul and the soul wants vulnerable, authentic love."
  },
  {
    title: "Cracked",
    image: "/images/RI56-cracked.jpg",
    content: "A lot of our relating experience is about healing parts of ourselves that we don't see and own. Love has to come and get pretty rough with us at times to get us to wake up and crack open.\n\nThe healing journey begins when we own what needs healing. We can look and see and say, \"Ah that part needs some attention!\" We can own our woundedness and the scars we bring into our relating. A beautiful metaphor is that we are driving a car with a pink windscreen and so everything we see out of our windscreen is pinkish. At some point we need to wake up to the fact that there is a pink windscreen and that reality is not what we think it is.* The way we perceive things is often seen through the lens of our scarred parts. If we are not holding these scars consciously then so often our relating becomes frought with an over-identification with them. Conflict becomes a struggle with others who we are convinced have a pinkish tinge. Instead of staying busy with them and their short-comings, it is good to learn to stay with the wounded part, because that is where the light gets in.\n\nWounds are shadow parts, hard to see, often hidden and yet they show up in our relating all the time. Our partners are constantly holding up mirrors to show us our unintegrated, unhealed parts. Wounds come from traumas or very painful experiences where we felt a lot of fear, emotional danger or an unmet need for support. We might have felt abandoned and alone, rejected and unlovable, criticised and shamed, unseen, unaccepted or betrayed. Wounds often show up as specific raw spots and are generally accompanied by a sense of not feeling good enough. Every person has scarred places where they carry their shame and unworthiness. Those cracked places are where the light enters; where Love arrives and does its evolving work. The more we see and feel our woundedness, the more integrated we become; the more integrated, the more full of Love.\n\n* Metaphor from spiritual teacher Thomas Hübl."
  }
];

export function ResourcesInspirationPage() {
  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-12 animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Relating Inspiration</h1>
            <p className="text-lg text-muted-foreground">
              Reflections on love, connection, and the journey of conscious relating
            </p>
          </div>
          
          <div className="space-y-16">
            {inspirationalSections.map((section, index) => (
              <div 
                key={section.title}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-start gap-8 animate-fade-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="w-full lg:w-1/3">
                  <div className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <ImageWithFallback
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-2/3">
                  <Card className="glass-effect border-primary/20 shadow-lg h-full">
                    <CardHeader>
                      <CardTitle className="text-2xl text-primary">{section.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-lg max-w-none">
                        {section.content.split('\n\n').map((paragraph, idx) => (
                          <p key={idx} className="text-foreground leading-relaxed mb-4">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}

            {/* Additional sections continue in similar pattern */}
            {additionalSections.map((section, index) => (
              <div 
                key={section.title}
                className={`flex flex-col ${(index + inspirationalSections.length) % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-start gap-8 animate-fade-up`}
                style={{ animationDelay: `${(index + inspirationalSections.length) * 0.1}s` }}
              >
                {/* Image */}
                <div className="w-full lg:w-1/3">
                  <div className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <ImageWithFallback
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-2/3">
                  <Card className="glass-effect border-primary/20 shadow-lg h-full">
                    <CardHeader>
                      <CardTitle className="text-2xl text-primary">{section.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-lg max-w-none">
                        {section.content.split('\n\n').map((paragraph, idx) => (
                          <p key={idx} className="text-foreground leading-relaxed mb-4">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </div>
  );
}