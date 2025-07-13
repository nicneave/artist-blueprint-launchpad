import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Music, 
  Target, 
  FileText, 
  DollarSign, 
  Mail, 
  Palette, 
  PlayCircle, 
  Video, 
  ShoppingBag, 
  Star,
  ArrowRight,
  CheckCircle,
  Disc
} from "lucide-react";

const modules = [
  {
    id: "facebook-ads",
    title: "Facebook Ads for Spotify Growth",
    icon: Target,
    benefit: "Run your own streaming ads like the pros",
    description: "Learn the exact Facebook ad strategies we use to get artists real Spotify plays and followers."
  },
  {
    id: "google-ads",
    title: "Google Ads for YouTube Views",
    icon: Video,
    benefit: "Get real fans watching your videos daily",
    description: "Master YouTube advertising to build genuine viewership and subscriber growth."
  },
  {
    id: "epk",
    title: "Creating an Artist EPK",
    icon: FileText,
    benefit: "Craft a press kit that gets taken seriously",
    description: "Build a professional Electronic Press Kit that opens doors and gets you noticed."
  },
  {
    id: "royalties",
    title: "Royalty Collection & Publishing 101",
    icon: DollarSign,
    benefit: "Make sure you never leave money on the table",
    description: "Understand publishing, royalties, and how to collect every penny you're owed."
  },
  {
    id: "newsletter",
    title: "Artist Newsletter Strategy",
    icon: Mail,
    benefit: "Build an audience that buys everything you drop",
    description: "Create and grow an email list that converts into sales and loyal fans."
  },
  {
    id: "branding",
    title: "Brand Identity & Positioning",
    icon: Palette,
    benefit: "Define your look, sound, and story",
    description: "Develop a cohesive brand that makes you stand out in a crowded market."
  },
  {
    id: "playlisting",
    title: "Playlisting & Pitching",
    icon: PlayCircle,
    benefit: "Pitch to real curators with proven templates",
    description: "Get your music on playlists that matter with professional pitching strategies."
  },
  {
    id: "content",
    title: "Short-Form Content Strategy",
    icon: Music,
    benefit: "Go viral with content that sticks",
    description: "Create TikTok and Instagram content that grows your fanbase organically."
  },
  {
    id: "shopify",
    title: "Shopify Store & Merch Setup",
    icon: ShoppingBag,
    benefit: "Sell merch with no inventory and 0 overhead",
    description: "Set up print-on-demand merch stores that generate passive income."
  },
  {
    id: "bonus",
    title: "Bonus: Industry Secrets They Don't Teach You",
    icon: Star,
    benefit: "Everything artists should've been taught",
    description: "Insider knowledge and industry secrets that separate the pros from the amateurs."
  }
];

export default function ArtistBlueprint() {
  const [activeTab, setActiveTab] = useState("home");

  const ModuleContent = ({ moduleId }: { moduleId: string }) => {
    const module = modules.find(m => m.id === moduleId);
    if (!module) return null;

    const Icon = module.icon;

    return (
      <div className="space-y-8 animate-fade-in-up">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="p-4 rounded-full bg-gradient-card border border-border">
              <Icon className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-foreground">{module.title}</h2>
          <p className="text-lg italic text-muted-foreground max-w-2xl mx-auto">
            {module.description}
          </p>
        </div>
        
        <Card className="bg-gradient-card border-border shadow-card">
          <CardContent className="p-8">
            <div className="prose prose-invert max-w-none">
              <p className="text-foreground/80 leading-relaxed">
                Content for this module will be added here. This section will contain detailed, actionable information about {module.title.toLowerCase()}.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Each module is designed to provide step-by-step guidance and insider knowledge that you can implement immediately.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-primary/10 border-primary/20">
          <CardContent className="p-6 text-center">
            <h3 className="font-semibold text-foreground mb-3">
              Want help setting this up professionally?
            </h3>
            <p className="text-muted-foreground mb-4">
              Book a free call with our team at Label Ready and we'll build this with you.
            </p>
            <Button variant="cta-outline" size="lg">
              Book a Free Call
              <ArrowRight className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-gradient-cta">
                <Disc className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Label Ready</h1>
                <p className="text-sm text-muted-foreground">Artist Blueprint Course</p>
              </div>
            </div>
            <Badge variant="secondary" className="hidden sm:block">
              $7 Course
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 xl:grid-cols-11 gap-1 h-auto p-1 bg-muted/50 mb-8">
            <TabsTrigger 
              value="home" 
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs lg:text-sm py-3"
            >
              Home
            </TabsTrigger>
            {modules.map((module) => (
              <TabsTrigger
                key={module.id}
                value={module.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs lg:text-sm py-3 hidden lg:flex"
              >
                <module.icon className="h-4 w-4 lg:mr-2 lg:h-3 lg:w-3" />
                <span className="hidden xl:inline">{module.title.split(' ')[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Mobile Module Selector */}
          <div className="lg:hidden mb-6">
            <select 
              value={activeTab} 
              onChange={(e) => setActiveTab(e.target.value)}
              className="w-full p-3 rounded-lg bg-card border border-border text-foreground"
            >
              <option value="home">Home</option>
              {modules.map((module) => (
                <option key={module.id} value={module.id}>
                  {module.title}
                </option>
              ))}
            </select>
          </div>

          {/* Home Tab Content */}
          <TabsContent value="home" className="space-y-12 animate-fade-in-up">
            {/* Hero Section */}
            <div className="text-center space-y-6 py-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Get 10K Monthly Listeners and Your First{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-cta">
                    100 Fans in 30 Days
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground">
                  Without a Label
                </p>
                <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                  Label Ready's exact blueprint we use to grow real artists — now available for just $7.
                </p>
              </div>
              
              <div className="max-w-3xl mx-auto">
                <p className="text-foreground/70 leading-relaxed">
                  You don't need a label, a manager, or 100K followers to build a real fanbase. We've built this system after helping hundreds of independent artists break through, and now we're handing it over to you — all for less than the price of lunch. Every module is actionable. Every tab is stacked with insider knowledge. And if you want help setting it up, we can build it with you.
                </p>
              </div>

              <div className="pt-6">
                <Button variant="cta" size="lg" className="text-lg px-8 py-4 animate-glow-pulse">
                  Unlock All Modules – $7 Access
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* What's Inside Section */}
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">What's Inside</h2>
                <p className="text-muted-foreground">10 comprehensive modules covering everything you need to build a real music career</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {modules.map((module, index) => {
                  const Icon = module.icon;
                  return (
                    <Card 
                      key={module.id} 
                      className="bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow cursor-pointer group"
                      onClick={() => setActiveTab(module.id)}
                    >
                      <CardHeader className="pb-4">
                        <div className="flex items-start space-x-3">
                          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                              {module.title}
                            </CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">
                          {module.benefit}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* About Label Ready Section */}
            <Card className="bg-gradient-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">About Label Ready</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/80 leading-relaxed">
                  Label Ready is a music marketing agency that helps artists launch their careers, run ads, grow fanbases, and build real businesses around their music. These are the exact systems we run for clients — now packaged for you to do yourself.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Music Marketing</Badge>
                  <Badge variant="secondary">Artist Development</Badge>
                  <Badge variant="secondary">Digital Campaigns</Badge>
                  <Badge variant="secondary">Fan Growth</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Final CTA Section */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8 text-center space-y-6">
                <h3 className="text-2xl font-bold text-foreground">
                  Ready to Take Control of Your Music Career?
                </h3>
                <p className="text-foreground/80 max-w-2xl mx-auto">
                  This course is perfect for DIY artists who want to take control. But if you want help launching everything with our team, we also offer done-for-you campaigns.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="cta" size="lg">
                    Get Instant Access - $7
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button variant="cta-outline" size="lg">
                    Book a Free Call with Label Ready
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Module Content Tabs */}
          {modules.map((module) => (
            <TabsContent key={module.id} value={module.id}>
              <ModuleContent moduleId={module.id} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}