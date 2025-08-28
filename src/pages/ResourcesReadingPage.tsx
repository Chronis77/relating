import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

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

export function ResourcesReadingPage() {
  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-12 animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Recommended Reading</h1>
            <p className="text-lg text-muted-foreground">
              Books that can deepen your understanding of relationships and personal growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 animate-fade-up" style={{ animationDelay: '0.2s' }}>
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

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-center text-foreground">
              <strong>Reading practice:</strong> A wonderful practice is to take a page or extract a day of an article or book and read it together with your partner and then have a discussion on it. This is a wonderful way of strengthening your connection and getting to know your partner.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}