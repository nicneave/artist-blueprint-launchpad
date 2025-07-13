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

    // Facebook Ads specific content
    if (moduleId === "facebook-ads") {
      return (
        <div className="space-y-8 animate-fade-in-up">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="p-4 rounded-full bg-gradient-card border border-border">
                <Icon className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-foreground">Run Facebook Ads to Grow Your Spotify</h2>
          </div>
          
          {/* Hero Section */}
          <Card className="bg-gradient-cta/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                🚀 The $5/Day Hack to Getting 1,000+ Real Listeners on Spotify
              </h3>
              <p className="text-lg text-foreground/80">
                Finally crack the code to getting streams without begging for playlist placements.
              </p>
            </CardContent>
          </Card>

          {/* What This Module Covers */}
          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="text-xl text-foreground flex items-center gap-2">
                🧠 What This Module Covers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "How Facebook Ads can drive real listeners to your Spotify",
                "The exact ad structure we use to go from 0 to 10,000 monthly listeners in 30 days",
                "How to create 10–15 scroll-stopping creatives using just your phone",
                "How to track conversions properly using Hypeddit or Feature.fm",
                "How to set up Meta Ads Manager step-by-step",
                "How to avoid wasting money like most \"promo guys\" do"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-foreground/80">{item}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Facebook Ads 101 */}
          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">📚 Facebook Ads 101: Understanding the Basics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">What are Facebook Ads?</h4>
                <p className="text-foreground/80 mb-3">
                  Facebook Ads (now under "Meta Ads") are paid promotions that show your content to people on Instagram, Facebook, and Messenger. You can target users based on their interests, behaviors, age, location, and more.
                </p>
                <p className="text-primary font-medium">
                  Why it matters: You're not depending on playlists or hoping your TikTok blows up. You're paying to get your music in front of the right people — and you're in control.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-3">Terms to Know:</h4>
                <div className="space-y-2">
                  <div className="flex gap-3">
                    <span className="font-medium text-primary">Campaign –</span>
                    <span className="text-foreground/80">Your main ad goal (e.g., traffic, engagement)</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-medium text-primary">Ad Set –</span>
                    <span className="text-foreground/80">The audience, budget, and placement settings</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-medium text-primary">Ad –</span>
                    <span className="text-foreground/80">The creative people will actually see</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step-by-Step Setup */}
          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">🛠 Step-by-Step Setup</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              
              {/* Step 1 */}
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <Badge variant="secondary">1</Badge>
                  Create Your Meta Business Account
                </h4>
                <ul className="space-y-2 ml-6">
                  <li className="text-foreground/80">• Visit business.facebook.com</li>
                  <li className="text-foreground/80">• Create or log in to your business account</li>
                  <li className="text-foreground/80">• Set up your Business Manager</li>
                  <li className="text-foreground/80">• Connect your Instagram account, Facebook page, and Ad Account</li>
                </ul>
              </div>

              {/* Step 2 */}
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <Badge variant="secondary">2</Badge>
                  Pick the Right Song
                </h4>
                <ul className="space-y-2 ml-6">
                  <li className="text-foreground/80">• Choose a track that's new (within the last 30–60 days) or has the strongest emotional hook</li>
                  <li className="text-foreground/80">• Make sure your song has good production and cover art (yes, visuals matter)</li>
                </ul>
              </div>

              {/* Step 3 */}
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <Badge variant="secondary">3</Badge>
                  Build a Smart Link (Conversion Tracking)
                </h4>
                <ul className="space-y-2 ml-6">
                  <li className="text-foreground/80">• Use Hypeddit or Feature.fm to create a Smart Link</li>
                  <li className="text-foreground/80">• This link will be used as your ad's destination so you can track click performance</li>
                </ul>
              </div>

              {/* Step 4 */}
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <Badge variant="secondary">4</Badge>
                  Create Your Campaign in Meta Ads Manager
                </h4>
                <ul className="space-y-2 ml-6">
                  <li className="text-foreground/80">• Go to Meta Ads Manager</li>
                  <li className="text-foreground/80">• Click Create Campaign</li>
                  <li className="text-foreground/80">• Objective: Select Traffic or Conversions</li>
                  <li className="text-foreground/80">• Campaign Name: Use something like "[Song Title] Spotify Push - June"</li>
                </ul>
              </div>

              {/* Step 5 */}
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <Badge variant="secondary">5</Badge>
                  Ad Set Targeting
                </h4>
                <ul className="space-y-2 ml-6">
                  <li className="text-foreground/80">• Daily Budget: Start with $5–10/day</li>
                  <li className="text-foreground/80">• Locations: U.S., Canada, UK, Australia (add Germany or Netherlands for international if needed)</li>
                  <li className="text-foreground/80">• Age: 18–34 (sweet spot for music discovery)</li>
                  <li className="text-foreground/80">• Interests: Spotify, Apple Music, Rap Caviar, Lyrical Lemonade, specific artists</li>
                  <li className="text-foreground/80">• Placements: Manual → ONLY Instagram Feed + Instagram Stories (turn off everything else)</li>
                </ul>
              </div>

              {/* Step 6 */}
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <Badge variant="secondary">6</Badge>
                  Make Your Ad
                </h4>
                <p className="text-foreground/80 ml-6">Upload video content — videos perform much better than images.</p>
                
                <div className="ml-6">
                  <h5 className="font-medium text-foreground mb-3">Creative Ideas:</h5>
                  <ul className="space-y-2">
                    <li className="text-foreground/80">• Talking-to-camera: "If you like Drake or Brent Faiyaz, this might be for you…"</li>
                    <li className="text-foreground/80">• Behind-the-scenes studio content</li>
                    <li className="text-foreground/80">• Emotional lyric videos</li>
                    <li className="text-foreground/80">• Fan reaction clips</li>
                    <li className="text-foreground/80">• Music video snippets</li>
                  </ul>
                </div>

                <div className="ml-6">
                  <h5 className="font-medium text-foreground mb-3">Tips:</h5>
                  <ul className="space-y-2">
                    <li className="text-foreground/80">• Add captions (use CapCut or Captions app)</li>
                    <li className="text-foreground/80">• Keep it under 15 seconds</li>
                    <li className="text-foreground/80">• Hook them in the first 3 seconds</li>
                    <li className="text-foreground/80">• End with a call-to-action: "Stream it now."</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Common Mistakes */}
          <Card className="bg-destructive/5 border-destructive/20">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">💡 Common Mistakes to Avoid</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-destructive text-xl">❌</span>
                <p className="text-foreground/80">Boosting posts from Instagram (use Meta Ads Manager instead)</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-destructive text-xl">❌</span>
                <p className="text-foreground/80">Only testing 1 ad — you need 10–15 creatives to find what works</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-destructive text-xl">❌</span>
                <p className="text-foreground/80">Sending users straight to Spotify (use a Smart Link to track)</p>
              </div>
            </CardContent>
          </Card>

          {/* Optimization Checklist */}
          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">📊 After Launching: Optimization Checklist</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "Wait 3 full days before touching anything",
                "Turn off ads with high CPC ($1+ per click)",
                "Scale ads with low CPC and good click-through rates",
                "Always test new creatives weekly"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-foreground/80">{item}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Resources */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">🗖 Resource Downloads</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "Ad Setup PDF Checklist",
                "Editable CapCut Template",
                "10 Proven Ad Hooks for Music",
                "Smart Link Setup Guide",
                "Top 20 Targeting Interests List"
              ].map((resource, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground/80">{resource}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Final Words */}
          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">📌 Final Words</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground/80 leading-relaxed">
                This is the foundation of music marketing in 2025. Artists who understand how to use paid traffic build momentum, gather data, and eventually scale to full-time income.
              </p>
              <p className="text-primary font-medium">
                Your Spotify doesn't grow without traffic. Let's drive it ourselves.
              </p>
            </CardContent>
          </Card>

          {/* CTA */}
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
    }

    // Default content for other modules
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