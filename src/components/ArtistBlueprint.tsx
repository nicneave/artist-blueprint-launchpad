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

    // EPK Module (complete detailed content)
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

          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Sections Your EPK Should Include</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                {
                  title: "Artist Bio",
                  description: "A compelling and concise story of who you are, where you're from, and why your music matters. Aim for a short version (75 words) and a long version (150–200 words)."
                },
                {
                  title: "Press Photos", 
                  description: "High-resolution, professional-looking images (ideally vertical and horizontal versions). Include live performance shots, portraits, and any promotional photography."
                },
                {
                  title: "Music Links",
                  description: "Spotify, Apple Music, SoundCloud, Bandcamp — only include your best and most recent music. Embed YouTube videos for extra engagement."
                },
                {
                  title: "Performance Footage / Music Videos",
                  description: "Link to your strongest live footage and music videos (hosted on YouTube/Vimeo)"
                },
                {
                  title: "Press Quotes / Reviews",
                  description: "Any write-ups, blog mentions, or quotes from tastemakers"
                },
                {
                  title: "Social Media & Stats",
                  description: "Instagram, TikTok, YouTube, Spotify follower/stream counts (if they're impressive). Milestones like playlist placements or virality moments."
                },
                {
                  title: "Contact Info",
                  description: "Manager email, booking contact, or your own email"
                },
                {
                  title: "Downloadable Assets",
                  description: "A zipped folder of photos, logos, and music files if sending to press/booking"
                }
              ].map((section, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="font-semibold text-primary">{section.title}</h4>
                  <p className="text-foreground/80">{section.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">How to Make an EPK (Tools + Tips)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {[
                  "Use free tools like Canva, Notion, or Google Sites to design your own beautiful EPK.",
                  "Or, use platforms like Bandzoogle, Sonicbids, or SubmitHub Press Kits.",
                  "Keep it mobile-friendly and no more than 2–3 scrolls long on desktop."
                ].map((tip, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground/80">{tip}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <h4 className="font-semibold text-foreground mb-3">Design Best Practices:</h4>
                <ul className="space-y-2 ml-6">
                  <li className="text-foreground/80">• Choose fonts and colors that match your artist brand</li>
                  <li className="text-foreground/80">• Keep it visually clean and skimmable</li>
                  <li className="text-foreground/80">• Use headlines, bold text, and icons to guide the eye</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">How to Use Your EPK</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  title: "Press Pitches",
                  description: "Include it in outreach to blogs, YouTube reviewers, playlist curators, and magazines"
                },
                {
                  title: "Booking Agents",
                  description: "Show you're professional and ready for bigger stages"
                },
                {
                  title: "Brand Sponsorships",
                  description: "Help brands understand your audience and aesthetic"
                },
                {
                  title: "Team Building",
                  description: "Send to managers, publicists, or producers who want to learn more"
                }
              ].map((use, index) => (
                <div key={index} className="flex gap-3">
                  <span className="font-medium text-primary">{use.title} –</span>
                  <span className="text-foreground/80">{use.description}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Pro Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "Update your EPK every 2–3 months",
                "Track which links are being clicked (use Bit.ly or Linktree analytics)",
                "Don't overload it — curate quality over quantity"
              ].map((tip, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-foreground/80">{tip}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Bonus Resource Downloads</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "Free Canva EPK Template",
                "List of 10+ Example EPKs from Independent Artists",
                "EPK Audit Checklist"
              ].map((resource, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground/80">{resource}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Key Takeaways</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {[
                  "Every serious artist needs an EPK to be taken seriously by the industry.",
                  "You don't need a label or a big budget to create one.",
                  "When done right, it opens doors you didn't even know were closed."
                ].map((takeaway, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground/80">{takeaway}</p>
                  </div>
                ))}
              </div>
              <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/80 mt-6">
                "You are your own PR team until the world decides otherwise. Show up like a professional before anyone asks you to."
              </blockquote>
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

    // Newsletter Module
    if (moduleId === "newsletter") {
      return (
        <div className="space-y-8 animate-fade-in-up">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="p-4 rounded-full bg-gradient-card border border-border">
                <Icon className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-foreground">Building Your Artist Newsletter System</h2>
          </div>
          
          <Card className="bg-gradient-cta/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                🚀 "If Social Media Disappeared Tomorrow, Would You Still Be Able to Reach Your Fans?"
              </h3>
              <p className="text-lg text-foreground/80">
                A newsletter is your most important direct-to-fan tool. It's personal, trackable, and owned by you. This module gives you the playbook for building and running a powerful email + SMS newsletter that converts fans into supporters for life.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">🌐 What This Module Covers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "Why every artist needs an email list",
                "The psychology of fan retention",
                "Choosing your newsletter platform",
                "How to collect emails and phone numbers",
                "What to send your fans (and how often)",
                "Automations, welcome flows, and fan journeys",
                "Tools for advanced segmentation and tracking"
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
              <CardTitle className="text-xl text-foreground">✅ Step-by-Step: Setting Up Your Newsletter</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              
              {[
                {
                  step: "1",
                  title: "Understand Why You Need a Newsletter",
                  content: [
                    "Social media platforms own your followers.",
                    "Algorithms change — your fan engagement shouldn't.",
                    "A newsletter gives you ownership over your community.",
                    "Email & SMS have higher ROI than social media (30-40x ROI when done well)."
                  ]
                },
                {
                  step: "2",
                  title: "Choose a Platform",
                  content: [
                    "Email Only: ConvertKit, Mailchimp, Flodesk, Beehiiv",
                    "Email + SMS: Klaviyo, Brevo (Sendinblue), Omnisend, ActiveCampaign",
                    "Simple & Free to Start: Mailchimp or Brevo"
                  ]
                },
                {
                  step: "3",
                  title: "Create a Freebie to Incentivize Signups",
                  content: [
                    "A free unreleased song",
                    "Exclusive demo or acoustic version",
                    "Behind-the-scenes vlog",
                    "Early access to tickets or merch"
                  ]
                },
                {
                  step: "4",
                  title: "Embed Sign-Up Forms Everywhere",
                  content: [
                    "On your website (use a pop-up or embedded form)",
                    "On Linktree or Hypeddit landing pages",
                    "In YouTube video descriptions",
                    "In your Spotify bio (via link)",
                    "On Instagram stories or pinned posts"
                  ]
                },
                {
                  step: "5",
                  title: "Automate the Welcome Series",
                  content: [
                    "Email 1: Welcome & deliver freebie",
                    "Email 2: Your story + what to expect",
                    "Email 3: Best music video or most streamed song",
                    "Email 4: Behind-the-scenes vlog or song breakdown",
                    "Email 5: Invite them to follow on socials & reply to email"
                  ]
                },
                {
                  step: "6",
                  title: "Start Sending Weekly Broadcasts",
                  content: [
                    "Behind-the-scenes updates",
                    "New release reminders",
                    "Ask fans for input (cover art, lyrics, etc.)",
                    "Merch promotions",
                    "Tour announcements"
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
              <CardTitle className="text-xl text-foreground">💡 Pro Tips & Tools</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "Use Klaviyo or ConvertKit for automation and segmentation.",
                "Segment fans by interests, actions, or geography.",
                "Connect with Shopify or Spotify for smart product recommendations.",
                "Track open rates, click-through rates, and conversions to measure what works."
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
              <CardTitle className="text-xl text-foreground">📌 Key Takeaways</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "Email + SMS marketing gives you control over your fan base.",
                "Incentives drive signups. Give fans a reason to opt in.",
                "Automations allow you to nurture fans even while you sleep.",
                "Newsletters create long-term fan relationships that support merch, tickets, and releases."
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

    // Short-form Content Module
    if (moduleId === "content") {
      return (
        <div className="space-y-8 animate-fade-in-up">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="p-4 rounded-full bg-gradient-card border border-border">
                <Icon className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-foreground">Shortform Content Strategy for Artists</h2>
          </div>
          
          <Card className="bg-gradient-cta/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <p className="text-lg text-foreground/80">
                Shortform video content is the most powerful organic marketing tool for independent artists in 2025. With platforms like TikTok, Instagram Reels, and YouTube Shorts, it's possible to reach thousands — even millions — without spending a dime. This module gives you the blueprint to start creating consistently, generate engagement, and convert attention into real fans.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">1. Why Shortform Content Matters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "Algorithm Boost: Platforms prioritize shortform videos and push them to new audiences.",
                "Music Discovery: TikTok is now the #1 platform for discovering new music.",
                "Fan Conversion: The right content can turn a scroll into a follow, a stream, and eventually a fan."
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
              <CardTitle className="text-xl text-foreground">2. Types of Shortform Content That Works for Artists</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                {
                  title: "Hook-Based Performances",
                  description: "Sing the most emotional line of your song. Film a dramatic moment that grabs attention in 1 second."
                },
                {
                  title: "Behind the Scenes",
                  description: "Studio sessions, writing process, day in the life of an artist."
                },
                {
                  title: "Relatable Skits or POVs",
                  description: "Use your lyrics to tell a story visually."
                },
                {
                  title: "Trends with a Twist",
                  description: "Jump on trending sounds, but relate them to your own song."
                },
                {
                  title: "Reaction Style",
                  description: "Film your friends reacting to your song. Ask strangers to give their first impression."
                },
                {
                  title: "Live Performance Clips",
                  description: "Strip down a performance to guitar or piano. Use dramatic lighting and storytelling."
                }
              ].map((type, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="font-semibold text-primary">{type.title}</h4>
                  <p className="text-foreground/80">{type.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">4. The Hook Formula (First 3 Seconds)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground/80">The first 3 seconds decide whether people watch. Try:</p>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "\"This song made my mom cry...\"",
                  "\"This is the most vulnerable thing I've ever written.\"",
                  "\"You won't believe what this lyric means.\"",
                  "\"This song was rejected by 3 labels — now it's blowing up.\""
                ].map((hook, index) => (
                  <div key={index} className="bg-primary/5 p-3 rounded-lg">
                    <p className="text-foreground/80 italic">{hook}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">5. Content Calendar (Example Weekly Plan)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-3 text-foreground">Day</th>
                      <th className="text-left p-3 text-foreground">Content Type</th>
                    </tr>
                  </thead>
                  <tbody className="text-foreground/80">
                    {[
                      ["Mon", "Hook-based performance"],
                      ["Tue", "Behind the scenes clip"],
                      ["Wed", "Skit / POV or storytelling"],
                      ["Thu", "Trend or duet with a twist"],
                      ["Fri", "Reaction / comment reply vid"],
                      ["Sat", "Live performance / teaser"],
                      ["Sun", "Recap or inspirational moment"]
                    ].map(([day, content], index) => (
                      <tr key={index} className="border-b border-border/50">
                        <td className="p-3 font-medium text-primary">{day}</td>
                        <td className="p-3">{content}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-foreground/80 mt-4">
                You don't have to post every day, but consistency is key. Start with 3x a week and scale up.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <p className="text-center text-foreground/80 italic">
                Shortform content is not just about going viral — it's about building trust, storytelling, and bringing people into your world. Do it consistently, and you'll see your fanbase grow every month.
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

    // Shopify Module
    if (moduleId === "shopify") {
      return (
        <div className="space-y-8 animate-fade-in-up">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="p-4 rounded-full bg-gradient-card border border-border">
                <Icon className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-foreground">Shopify Store + Printful Merch Setup</h2>
          </div>
          
          <Card className="bg-gradient-cta/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <p className="text-lg text-foreground/80">
                Having a merch store not only gives your fans a way to support you directly, but it also creates a real sense of identity and brand around your music. With platforms like Shopify and Printful, you can run a professional merch operation with zero inventory or upfront costs. Here's how to set it up step-by-step.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">1. Why Merch Matters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "Creates new revenue streams outside of streaming",
                "Turns fans into walking billboards for your brand",
                "Allows you to express your aesthetic and message visually",
                "Strengthens community connection",
                "Provides a product to promote with every release, show, or campaign"
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
              <CardTitle className="text-xl text-foreground">3. Step-by-Step Store Setup</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <Badge variant="secondary">A</Badge>
                  Create Your Shopify Store
                </h4>
                <ul className="space-y-2 ml-6">
                  <li className="text-foreground/80">• Go to shopify.com and start a free trial</li>
                  <li className="text-foreground/80">• Choose a clean, artist-friendly template (e.g., Spotlight, Dawn)</li>
                  <li className="text-foreground/80">• Set your domain (e.g., yourartistname.com)</li>
                  <li className="text-foreground/80">• Add your branding: logo, colors, and copy</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <Badge variant="secondary">B</Badge>
                  Connect Printful
                </h4>
                <ul className="space-y-2 ml-6">
                  <li className="text-foreground/80">• Go to printful.com and create an account</li>
                  <li className="text-foreground/80">• Connect Printful to Shopify via the Shopify App Store</li>
                  <li className="text-foreground/80">• Set up product templates (e.g., t-shirts, hoodies, hats, stickers)</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <Badge variant="secondary">C</Badge>
                  Add Products
                </h4>
                <ul className="space-y-2 ml-6">
                  <li className="text-foreground/80">• Upload your designs or create new ones using Printful's editor</li>
                  <li className="text-foreground/80">• Set retail prices (consider your fanbase's budget and profit margin)</li>
                  <li className="text-foreground/80">• Write strong product descriptions (ex: "Soft, premium cotton tee with a lyric from [your song]")</li>
                  <li className="text-foreground/80">• Add mockup images for a professional look</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">8. Long-Term Merch Strategy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "Drop new designs with every release",
                "Make seasonal/limited edition merch (holiday, tour, etc.)",
                "Poll your fans for ideas (Instagram stories, email, etc.)",
                "Run merch giveaways or bundle deals",
                "Always have something new to promote"
              ].map((strategy, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-foreground/80">{strategy}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <p className="text-center text-foreground/80 italic">
                Setting up your merch store is one of the smartest moves you can make as an artist. Not only does it generate income, it deepens fan connection and gives your audience something to wear, hold, and represent. With tools like Shopify + Printful, there's no excuse not to launch your store today.
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

    // Royalties Module
    if (moduleId === "royalties") {
      return (
        <div className="space-y-8 animate-fade-in-up">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="p-4 rounded-full bg-gradient-card border border-border">
                <Icon className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-foreground">Royalty Collection & Music Publishing Basics</h2>
          </div>
          
          <Card className="bg-gradient-cta/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Get Paid for Every Play: The Ultimate Guide to Royalties and Publishing
              </h3>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">What This Module Covers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "The different types of royalties (performance, mechanical, sync)",
                "What publishing is and why it matters",
                "How to collect all the money you're owed",
                "Which platforms and organizations to register with"
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
              <CardTitle className="text-xl text-foreground">Step-by-Step Setup</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <Badge variant="secondary">1</Badge>
                  Understand the Types of Royalties
                </h4>
                <div className="space-y-3 ml-6">
                  <div>
                    <span className="font-medium text-primary">Performance Royalties –</span>
                    <span className="text-foreground/80"> Generated when your music is played publicly (radio, bars, TV, streaming, live shows). Collected by PROs (ASCAP, BMI, SESAC).</span>
                  </div>
                  <div>
                    <span className="font-medium text-primary">Mechanical Royalties –</span>
                    <span className="text-foreground/80"> Generated when your song is streamed, downloaded, or reproduced. Collected in the U.S. by The MLC (Mechanical Licensing Collective).</span>
                  </div>
                  <div>
                    <span className="font-medium text-primary">Sync Royalties –</span>
                    <span className="text-foreground/80"> Generated when your music is used in film, TV, video games, or commercials. You get paid via direct negotiation or your publisher.</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <Badge variant="secondary">2</Badge>
                  Register with the Right Organizations
                </h4>
                <ul className="space-y-2 ml-6">
                  <li className="text-foreground/80">• Sign up for a PRO: Choose ASCAP or BMI (free or low-cost signup). These collect your performance royalties.</li>
                  <li className="text-foreground/80">• Register with the MLC: Free to join. Collects mechanical streaming royalties from services like Spotify, Apple Music, Amazon, etc.</li>
                  <li className="text-foreground/80">• Create a Songtrust or CD Baby Pro account (optional but powerful): These collect international royalties and administer your publishing rights more broadly.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <Badge variant="secondary">3</Badge>
                  Register Your Works
                </h4>
                <ul className="space-y-2 ml-6">
                  <li className="text-foreground/80">• Any time you release a song, register it with your PRO and your publishing admin (like Songtrust or CD Baby Pro).</li>
                  <li className="text-foreground/80">• Input the ISRC (for the recording) and the splits if co-written.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <Badge variant="secondary">4</Badge>
                  Set Up SoundExchange
                </h4>
                <ul className="space-y-2 ml-6">
                  <li className="text-foreground/80">• This collects digital performance royalties from services like Pandora and SiriusXM. Free to sign up. These are separate from your PRO.</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Key Takeaways</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "There is money on the table you're probably missing.",
                "Registering for publishing and royalty collection is free or low-cost but sets you up to earn from your entire catalog.",
                "Owning your publishing = long-term income and licensing opportunities."
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

    // Bonus Module
    if (moduleId === "bonus") {
      return (
        <div className="space-y-8 animate-fade-in-up">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="p-4 rounded-full bg-gradient-card border border-border">
                <Icon className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-foreground">Bonus Module: Insider Music Industry Secrets</h2>
          </div>
          
          <Card className="bg-gradient-cta/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <p className="text-lg text-foreground/80">
                This bonus section contains everything else you need to know about the music industry to avoid the biggest mistakes and set yourself up for a long-term, profitable career. These are insights and strategies pulled directly from the music business playbook used by top artists, managers, and lawyers — the stuff no one tells you until it's too late.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">1. You Are a Business</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "Think like a business from day one. You're not just an artist — you're a company with revenue, branding, expenses, and taxes.",
                "Keep your business organized. Set up a business bank account, track your income and expenses, and learn basic accounting.",
                "Your career has a lifespan — plan for the long-term. Invest, save, and avoid unnecessary spending early on."
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
              <CardTitle className="text-xl text-foreground">3. Record Deals: The Fine Print</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {[
                  "Record labels rarely do artist development anymore. You're expected to already have traction.",
                  "Advances are loans. You don't pay them back, but they are recouped from your royalties.",
                  "Cross-Collateralization: Labels can recoup losses from one project with profits from another. Avoid it when possible.",
                  "360 Deals: Labels take a percentage of everything — merch, touring, brand deals. If you sign one, negotiate exclusions.",
                  "Exclusivity & Re-Recording Clauses: These can lock you down. Always ask for a \"sunset clause\" and reversion terms."
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground/80">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-destructive/5 border-destructive/20">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">8. Avoiding Common Pitfalls</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <span className="text-destructive text-xl">❌</span>
                  <p className="text-foreground/80">Don't sign anything without a lawyer.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-destructive text-xl">❌</span>
                  <p className="text-foreground/80">Don't pay for fake streams or shady playlisting.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-destructive text-xl">❌</span>
                  <p className="text-foreground/80">Don't ignore your data: your Spotify for Artists and YouTube dashboards tell a story. Use it to guide your next steps.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-destructive text-xl">❌</span>
                  <p className="text-foreground/80">Don't chase viral hits without a fanbase to catch them.</p>
                </div>
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
    }

    // Continue with remaining modules...

    // Branding Module
    if (moduleId === "branding") {
      return (
        <div className="space-y-8 animate-fade-in-up">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="p-4 rounded-full bg-gradient-card border border-border">
                <Icon className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-foreground">Brand Building for Artists</h2>
          </div>
          
          <Card className="bg-gradient-cta/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <p className="text-lg text-foreground/80">
                Your brand is more than just your logo or visual identity—it's how people feel when they encounter you and your music. A well-developed brand sets you apart in a saturated market and helps fans connect with your personality, values, and story.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">1. What Is a Brand (for Artists)?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="text-foreground/80">• A brand is the total emotional experience a fan has with you.</li>
                <li className="text-foreground/80">• It's built through your sound, visuals, messaging, tone of voice, and personal story.</li>
                <li className="text-foreground/80">• Think of your favorite artists—what emotions or images come to mind when you think of them? That's their brand at work.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">2. Discovering Your Identity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground/80">Before building your brand, get clear on:</p>
              <div className="space-y-3">
                <div>
                  <span className="font-medium text-primary">Your Why:</span>
                  <span className="text-foreground/80"> Why do you make music? What do you want to express?</span>
                </div>
                <div>
                  <span className="font-medium text-primary">Your Story:</span>
                  <span className="text-foreground/80"> What makes your background and journey unique?</span>
                </div>
                <div>
                  <span className="font-medium text-primary">Your Audience:</span>
                  <span className="text-foreground/80"> Who are your ideal fans? What do they care about?</span>
                </div>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg mt-4">
                <p className="text-foreground/80">
                  <strong>Example:</strong> "I make nostalgic pop music for twenty-somethings navigating love, heartbreak, and self-discovery."
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">3. Visual Identity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground/80">Once your story and audience are defined, build a consistent visual language:</p>
              <div className="space-y-3">
                {[
                  "Color Palette: 3–5 brand colors used across all content.",
                  "Typography: 1–2 consistent fonts for visuals and website.",
                  "Photography Style: Gritty & raw? Dreamy & cinematic? Vintage film?",
                  "Logo/Wordmark: A recognizable artist name design for merch, streaming profiles, and posters."
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground/80">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">7. Examples of Great Artist Brands</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <span className="font-medium text-primary">Tyler, The Creator:</span>
                  <span className="text-foreground/80"> Playful yet cinematic aesthetic, alter ego-based storytelling.</span>
                </div>
                <div>
                  <span className="font-medium text-primary">Billie Eilish:</span>
                  <span className="text-foreground/80"> Dark visuals, whispery vocals, emotionally raw branding.</span>
                </div>
                <div>
                  <span className="font-medium text-primary">Bad Bunny:</span>
                  <span className="text-foreground/80"> Bold color use, gender-bending fashion, Latino cultural pride.</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">9. Action Steps</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "Write a 1–2 sentence brand statement.",
                "Define your color palette and visual mood board using Pinterest or Canva.",
                "Create 3 content series that show different sides of your personality (e.g., studio sessions, stories from your life, fan Q&As).",
                "Update your bios, link in bio, and visuals to reflect your brand.",
                "Stick to your brand for 60–90 days and track how people respond."
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-foreground/80">{step}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <p className="text-center text-foreground/80 italic">
                Remember: A brand isn't built overnight. It's about clarity, consistency, and connection over time.
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

    // Playlisting Module
    if (moduleId === "playlisting") {
      return (
        <div className="space-y-8 animate-fade-in-up">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="p-4 rounded-full bg-gradient-card border border-border">
                <Icon className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-foreground">Playlisting & Pitching for Artists</h2>
          </div>
          
          <Card className="bg-gradient-cta/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <p className="text-lg text-foreground/80">
                Getting your music onto Spotify playlists and other streaming platforms is one of the most powerful ways to build momentum, gain monthly listeners, and reach new fans. This module will break down how playlisting works, how to approach playlist curators, and how to run your own campaigns.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">1. Understanding Playlisting</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground/80">There are three primary types of playlists:</p>
              <div className="space-y-4">
                <div>
                  <span className="font-medium text-primary">Editorial Playlists –</span>
                  <span className="text-foreground/80"> Created by Spotify's in-house editorial team (e.g., RapCaviar, Fresh Finds). Harder to access, but extremely powerful.</span>
                </div>
                <div>
                  <span className="font-medium text-primary">Algorithmic Playlists –</span>
                  <span className="text-foreground/80"> Auto-generated by Spotify's AI (e.g., Release Radar, Discover Weekly). These are triggered by data: saves, skips, shares, and engagement.</span>
                </div>
                <div>
                  <span className="font-medium text-primary">User-Curated Playlists –</span>
                  <span className="text-foreground/80"> Made by independent curators or companies. These are the most accessible and can still deliver great results.</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">3. How to Pitch Your Song</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">A. Spotify Editorial Pitch (via Spotify for Artists)</h4>
                <ul className="space-y-2 ml-6">
                  <li className="text-foreground/80">• Log into Spotify for Artists</li>
                  <li className="text-foreground/80">• Navigate to your upcoming release and click "Pitch a Song"</li>
                  <li className="text-foreground/80">• Fill out every field with accuracy</li>
                  <li className="text-foreground/80">• Select the best fitting genre and subgenres</li>
                  <li className="text-foreground/80">• Write a clear, compelling pitch (100–300 words max)</li>
                  <li className="text-foreground/80">• Submit at least 7 days before your release date</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">B. SubmitHub & Groover</h4>
                <p className="text-foreground/80">These platforms allow you to submit music to independent curators, influencers, blogs, and YouTubers.</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h5 className="font-medium text-foreground mb-2">SubmitHub</h5>
                    <ul className="text-sm text-foreground/80 space-y-1">
                      <li>• Free and paid credits</li>
                      <li>• Target niche curators</li>
                      <li>• Track response rates and feedback</li>
                    </ul>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h5 className="font-medium text-foreground mb-2">Groover</h5>
                    <ul className="text-sm text-foreground/80 space-y-1">
                      <li>• Pay to submit to influencers, playlist curators, and professionals</li>
                      <li>• Many curators provide feedback or placement in exchange</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">C. Manual Outreach</h4>
                <ul className="space-y-2 ml-6">
                  <li className="text-foreground/80">• Search Spotify for playlists in your genre (e.g., "lo-fi beats," "indie pop gems")</li>
                  <li className="text-foreground/80">• Use tools like Chartmetric or PlaylistSupply to find curator contact info</li>
                  <li className="text-foreground/80">• Reach out with a short, professional email or DM</li>
                </ul>
                
                <div className="bg-muted/20 p-4 rounded-lg">
                  <h5 className="font-medium text-foreground mb-2">Sample Email:</h5>
                  <div className="text-sm text-foreground/80 space-y-2">
                    <p><strong>Subject:</strong> Playlist Submission – [Your Song Title] by [Artist Name]</p>
                    <div className="space-y-2">
                      <p>Hey [Curator Name],</p>
                      <p>I just released a track I think would be a great fit for your playlist [Playlist Name]. It blends [genre] with [mood], and I'd love for you to check it out.</p>
                      <p>Link: [Spotify song link]</p>
                      <p>Thanks for listening and keep up the amazing work!</p>
                      <p>– [Your Name / Artist Name]</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-destructive/5 border-destructive/20">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">4. Avoiding Playlisting Scams</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-foreground/80">Be wary of services that:</p>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <span className="text-destructive text-xl">❌</span>
                  <p className="text-foreground/80">Guarantee editorial placement</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-destructive text-xl">❌</span>
                  <p className="text-foreground/80">Offer "bot" plays or fake listeners</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-destructive text-xl">❌</span>
                  <p className="text-foreground/80">Don't show you the playlist you'll be added to</p>
                </div>
              </div>
              <p className="text-primary font-medium">
                Stick with legitimate platforms like SubmitHub, Groover, or curated services with proven track records.
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

    // Continue with remaining modules...
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