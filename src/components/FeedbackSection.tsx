import { Card, CardContent } from './ui/card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Our weekly sessions with Pippa have breathed new life and understanding into our relationship. Our communication and trust has improved beyond expectations. We were hardly speaking at all when we started, and certainly not resolving our relationship struggles. Pippa has provided us with a structure from which to understand each other and ourselves. This therapy has illuminated so much in such a short period. We both feel blessed to have been able to work with Pippa. She is exactly what we needed – wise, skilled, unbiased and personal; a truly remarkable practitioner.",
    author: "Candice & Kieron"
  },
  {
    text: "Pippa is a heart magician. The heart-centred communication she gently guides us to access, is a vulnerable doorway to fresh outcomes, and the intimacy that we both craved. EFT is a highly effective relationship therapy, but the secret sauce of our success is Pippa. She embodies extreme intuition and attunement. Both my husband and myself feel delicately and respectfully held by her. We have never experienced such a non-judgemental, exquisitely safe space to express our deepest longings and be all that we are. She has also profoundly deepened our spiritual practice, by expanding our present moment awareness. This is individual soul work as much as it is relational. I cannot put in words the gratitude that I have for Pippa Solomon. Her unique therapy has stirred growth and blossoming in every aspect of our lives.",
    author: "Jasmin"
  },
  {
    text: "Pippa managed to get us talking again after our relationship had degenerated to a point where every interaction involved an argument with no resolution. It was a relief to achieve a more functional level of communication in a safe environment. I learnt loads about myself and some really insightful communication approaches. She offers valuable repair when relationship conflicts don't seem to be achieving any resolution.",
    author: "Charlotte"
  },
  {
    text: "The biggest gift you have given me is the ability to see my own patterns and habitual reactions and prepared me with strategies for dealing with them. The situations change, but the parameters are so often the same. I apply the learnings from our therapy across so many areas of my life. You have been such a blessing to me! Thank you, from the bottom of my Rumi-loving heart.",
    author: "Kristin"
  }
];

export function FeedbackSection() {
  return (
    <section id="feedback" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Feedback from Clients</h2>
          <p className="text-lg text-muted-foreground">
            Real experiences from couples who have found healing and growth through therapy
          </p>
        </div>

        <div className="grid gap-8 md:gap-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-to-br from-white/80 to-accent/20 border-purple-100 shadow-lg">
              <CardContent className="p-8 md:p-10">
                <div className="flex items-start space-x-4">
                  <Quote className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <blockquote className="text-lg leading-relaxed text-foreground mb-6 italic">
                      {testimonial.text}
                    </blockquote>
                    <cite className="text-secondary font-semibold text-lg">
                      — {testimonial.author}
                    </cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl">
            <p className="text-lg text-primary font-medium">
              Every couple's journey is unique, but the transformation is always profound when there's commitment to growth and healing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}