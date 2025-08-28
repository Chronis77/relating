import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Alert, AlertDescription } from './ui/alert';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  DollarSign, 
  Calendar,
  Users,
  Heart,
  AlertCircle,
  ExternalLink
} from 'lucide-react';

const fees = [
  { duration: "1 hour session", price: "R1300" },
  { duration: "1½ hour session", price: "R1950" }
];

const factors = [
  "The level of past attachment injuries or unprocessed trauma",
  "Whether there are additional contributing factors, like abuse, addictions, affairs or individual difficulties with depression, anxiety, illness and so on",
  "The healthiness of patterns of relating, including communicating and repairing from conflict",
  "The length that a couple or family has been struggling with their specific stuck relating pattern",
  "The level of hope and commitment in the relationship"
];

const referrals = [
  {
    name: "Isabella Snyman",
    specialty: "Trauma - Somatic Experiencing (SE)",
    location: "Hout Bay, only online currently",
    contact: "073 141 8349"
  },
  {
    name: "Karen Quail",
    specialty: "Parenting support and working with children and teens",
    location: "Rondebosch East",
    contact: "076 303 5324, karenquail1@gmail.com"
  },
  {
    name: "Amy Simons",
    specialty: "Art therapy for children and teenagers",
    location: "Scarborough",
    contact: "074 473 7938"
  },
  {
    name: "Terri Wolf",
    specialty: "Kinesiologist who can access emotions through the body. Kinesiology can be a great access point for some children who find it difficult to talk or who aren't old enough yet to understand what is going on in themselves",
    location: "Scarborough",
    contact: "072 783 8683"
  },
  {
    name: "Annika Nicol",
    specialty: "Clinical Psychologist working with presence and mindfulness in longer-term psychotherapeutic processes",
    location: "Scarborough & Noordhoek",
    contact: "071 458 3199"
  },
  {
    name: "Gary Viljoen",
    specialty: "Clinical Psychologist in Hout Bay (also mostly fully booked)",
    location: "Hout Bay",
    contact: "082 563 1470"
  },
  {
    name: "Ronnie Simons",
    specialty: "Zen coach, very healing deep listening and taking you into the depths of your experience",
    location: "Scarborough",
    contact: "084 410 7453"
  }
];

export function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Contact & Important Information</h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about booking sessions and working together
          </p>
        </div>

        <Alert className="mb-8 border-amber-200 bg-amber-50">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription className="text-amber-800">
            <strong>Currently not taking new clients:</strong> Unfortunately I am currently fully booked and not taking on new clients. I also don't have a waiting list, but I am working on resources that can be supportive for couples and when I am finally ready with those I will be posting them on this website. Check back in 2026.
          </AlertDescription>
        </Alert>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-primary" />
                <span>Contact Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-3 p-4 bg-white/70 rounded-lg">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <p className="text-lg">076 882 8681</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-white/70 rounded-lg">
                <Mail className="h-5 w-5 text-secondary" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-lg">pippa@relating.co.za</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-white/70 rounded-lg">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Location</p>
                  <p>Noordhoek, Cape Town, South Africa</p>
                  <p className="text-sm text-muted-foreground">Couples and families only</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-secondary/5 to-primary/5 border-secondary/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <DollarSign className="h-6 w-6 text-secondary" />
                <span>Fees for 2025</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {fees.map((fee, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-white/70 rounded-lg">
                  <span className="font-medium">{fee.duration}</span>
                  <Badge variant="secondary" className="text-lg px-3 py-1">{fee.price}</Badge>
                </div>
              ))}
              
              <div className="text-sm text-muted-foreground space-y-2">
                <p>• Fees go up every January</p>
                <p>• Clients pay after each session and can then claim from medical aid if they have</p>
                <p>• Messages are returned as promptly as possible (WhatsApp always best)</p>
                <p>• I don't work on weekends or after hours</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-white/70 backdrop-blur-sm border-purple-100">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Calendar className="h-6 w-6 text-primary" />
                <span>Appointment Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Appointment Frequency:</h4>
                <div className="space-y-1">
                  <Badge variant="outline">Weekly</Badge>
                  <Badge variant="outline">Every second week</Badge>
                  <Badge variant="outline">"As needed" (when cancellations available)</Badge>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">EFT Duration:</h4>
                <p className="text-sm text-muted-foreground">
                  Emotionally Focused Couple & Family Therapy is designed to be brief term therapy, between <strong>10 and 30 sessions</strong>.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-sm border-purple-100">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-secondary" />
                <span>Factors Affecting Duration</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                {factors.map((factor, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-purple-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3">
              <Heart className="h-6 w-6 text-primary" />
              <span>Can't Afford It?</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              If you can't afford couple therapy with me there is an excellent organisation in Observatory called <strong>FAMSA (Families Western Cape)</strong> that offers EFT at affordable prices. They work on a sliding scale according to what people can afford.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-primary" />
              <span>021 447 7951 / 021 447 0170</span>
            </div>
            <div className="flex items-center space-x-2 text-sm mt-1">
              <ExternalLink className="h-4 w-4 text-secondary" />
              <span>www.famsawc.org.za</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/70 backdrop-blur-sm border-purple-100">
          <CardHeader>
            <CardTitle>Other Therapeutic Resources & Referrals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {referrals.map((referral, index) => (
                <div key={index} className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">{referral.name}</h4>
                  <p className="text-sm text-foreground mb-2 leading-relaxed">{referral.specialty}</p>
                  <p className="text-xs text-muted-foreground mb-1">{referral.location}</p>
                  <p className="text-xs text-secondary">{referral.contact}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-primary/5 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Note on Individual Therapy:</strong> Not all individual psychotherapy is compatible with EFT. It is important that the therapist you choose can keep in mind that you and your partner are a system that creates stuck relating patterns together. Any taking sides doesn't support the couple therapy process.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <p className="text-lg italic text-primary">
            "I am aware that therapy is a privilege and my aim is to get you out of therapy as fast as possible. 😊"
          </p>
        </div>
      </div>
    </section>
  );
}