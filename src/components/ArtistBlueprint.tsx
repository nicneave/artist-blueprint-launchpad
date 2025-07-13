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

    // Google Ads Module
    if (moduleId === "google-ads") {
      return (
        <div className="space-y-8 animate-fade-in-up">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="p-4 rounded-full bg-gradient-card border border-border">
                <Icon className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-foreground">Google Ads for YouTube Growth</h2>
          </div>
          
          <Card className="bg-gradient-cta/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                ✨ Get 1,000+ Real Views on Your YouTube Video Without a Label, Bot Farm, or Sketchy Promo Service
              </h3>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">🏋️ What This Module Covers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground/80">
                This guide walks you through how to set up a Google Ads campaign that drives high-quality traffic to your YouTube video, helping you increase views, watch time, and subscribers organically.
              </p>
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">You will learn:</h4>
                {[
                  "How to set up a Google Ads account (step-by-step)",
                  "How to link your YouTube channel",
                  "How to set up a campaign with the right targeting",
                  "What budget to use",
                  "How to test and optimize ad creatives",
                  "How to measure the results"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground/80">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-primary font-medium">
                Whether you're brand new to ads or just haven't used Google before — this guide assumes zero experience.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">📜 Step-by-Step Training</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              
              {[
                {
                  step: "1",
                  title: "Create Your Google Ads Account",
                  content: [
                    "Go to https://ads.google.com and sign in with your Gmail account.",
                    "Tip: Make sure you're using the same Gmail account tied to your YouTube channel for easy integration."
                  ]
                },
                {
                  step: "2", 
                  title: "Link Your YouTube Channel",
                  content: [
                    "In Google Ads, click on \"Tools & Settings\" > \"Linked accounts\"",
                    "Under YouTube, click \"Details\" and connect your channel"
                  ]
                },
                {
                  step: "3",
                  title: "Set Up Your First Campaign", 
                  content: [
                    "Click \"+ New Campaign\"",
                    "Choose \"Create a campaign without a goal's guidance\"",
                    "Select \"Video\" as the campaign type",
                    "Choose \"Custom video campaign\""
                  ]
                },
                {
                  step: "4",
                  title: "Campaign Settings",
                  content: [
                    "Campaign name: Use something clear like \"Kyle - YouTube Promo\"",
                    "Budget type: Daily",
                    "Start/End Dates: Set to run 3-7 days to start",
                    "Networks: Uncheck everything except \"YouTube Videos\"",
                    "Location: Choose the top countries where your fans are (e.g. US, UK, Canada)",
                    "Language: English (or your song's language)"
                  ]
                },
                {
                  step: "5",
                  title: "Bidding Strategy",
                  content: [
                    "Choose \"Maximum CPV (Cost-per-view)\"",
                    "Start with $0.02 - $0.04 per view"
                  ]
                },
                {
                  step: "6",
                  title: "Targeting",
                  content: [
                    "Demographics: Focus on your audience (e.g., 18-34 year olds)",
                    "Interests: Target music listeners, Spotify users, or fans of related genres",
                    "Placements: Add YouTube videos or channels that are similar to your music",
                    "Example: If you sound like Juice WRLD, target fans of Juice WRLD, Lil Peep, etc."
                  ]
                },
                {
                  step: "7",
                  title: "Ad Creative Setup",
                  content: [
                    "Paste the YouTube URL of your music video",
                    "Headline: Something compelling like: \"This Pop Artist Is Blowing Up...\"",
                    "Description Line 1: \"Watch the next big thing in R&B.\"",
                    "Call to Action: \"Listen Now\" or \"Watch Now\""
                  ]
                },
                {
                  step: "8",
                  title: "Launch & Monitor",
                  content: [
                    "Set your budget (start with $10/day)",
                    "Once live, check metrics daily (views, CPV, average watch time, subs)",
                    "Goal: Aim for $0.01–$0.03 per view and 20-40% view-through rate"
                  ]
                }
              ].map((stepData, index) => (
                <div key={index} className="space-y-3">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <Badge variant="secondary">{stepData.step}</Badge>
                    {stepData.title}
                  </h4>
                  <ul className="space-y-2 ml-6">
                    {stepData.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-foreground/80">• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">✨ Pro Tips & Tools</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "Use Google Trends to find breakout artists and use their audience as targeting",
                "Create multiple versions of your video (with different intros) and run A/B tests",
                "Avoid using \"skippable in-stream\" only. Try discovery ads that show up as search results — often cheaper and more engaged views"
              ].map((tip, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-foreground/80">{tip}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">✨ Key Takeaways</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "Google Ads lets you promote your YouTube without having to rely on shady promo sites",
                "Your video gets shown directly on YouTube to the right audience",
                "The average cost-per-view can be extremely low ($0.01–$0.03) if targeted correctly",
                "You control the budget, targeting, and growth"
              ].map((takeaway, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-foreground/80">{takeaway}</p>
                </div>
              ))}
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
    }

    // EPK Module (continuing with detailed content)
    if (moduleId === "epk") {
      return (
        <div className="space-y-8 animate-fade-in-up">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="p-4 rounded-full bg-gradient-card border border-border">
                <Icon className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-foreground">Building an Artist EPK (Electronic Press Kit)</h2>
          </div>
          
          <Card className="bg-gradient-cta/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Your career needs a resume. An EPK is your artist calling card — don't pitch yourself without one.
              </h3>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">What This Module Covers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "What an EPK is and why it matters",
                "What sections go into an EPK",
                "How to design a professional EPK (even for free)",
                "How to use it to land press, gigs, playlist placements, and brand partnerships"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-foreground/80">{item}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">What is an EPK?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground/80">
                An EPK (Electronic Press Kit) is a curated digital portfolio that presents your story, music, visuals, and press highlights to anyone who wants to book, cover, or collaborate with you. It's the one-stop link you send to journalists, venue owners, curators, brands, and potential team members.
              </p>
              <p className="text-primary font-medium">
                Think of it like your LinkedIn, resume, and demo reel — but for your artist career.
              </p>
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