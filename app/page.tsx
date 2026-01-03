import FeatureCard from "@/components/FeatureCard";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { MessageCircle, Video, Shield, Zap, Users } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Header />

      <main className="flex-1 flex flex-col items-center px-4 py-16 sm:px-6 text-center gap-20">
        <div className="max-w-4xl space-y-8 relative">
          {/* No background gradients */}

          <h1
            className="text-5xl sm:text-7xl font-bold tracking-tight
              bg-clip-text text-transparent
              bg-gradient-to-r
              from-blue-700 via-teal-400 to-orange-500
              dark:from-blue-700 dark:via-teal-300 dark:to-orange-400"
          >
            Connect instantly.
            <br />
            <span
              className="bg-clip-text text-transparent
                bg-gradient-to-r
                from-orange-500 via-red-500 to-red-600
                dark:from-orange-400 dark:via-red-400 dark:to-red-500"
            >
              Chat smarter.
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The modern messaging platform that combines lightning-fast chat and
            crystal-clear video calls in one seamless experience.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6">
            <SignedOut>
              <SignInButton mode="modal">
                <Button size="lg" className="text-lg px-8 py-6 h-auto">
                  Start Chatting Free
                </Button>
              </SignInButton>
            </SignedOut>
          </div>

          {/* Social proof */}
          <div className="pt-8">
            <p className="text-sm text-muted-foreground mb-4">
              Trusted by thousands of users worldwide
            </p>
            <div className="flex justify-center items-center gap-8 text-muted-foreground">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">50K+</div>
                <div className="text-sm">Active Users</div>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">1M+</div>
                <div className="text-sm">Messages Sent</div>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">99.9%</div>
                <div className="text-sm">Uptime</div>
              </div>
            </div>
          </div>

          {/* Features section */}
          <div className="w-full max-w-6xl">
            <div className="w-full flex items-center justify-center mb-16">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
              <div className="px-6">
                <div className="w-2 h-2 rounded-full bg-primary/60"></div>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
            </div>

            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Everything you need to stay connected
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Powerful features designed for seamless communication, whether
                you&apos;re chatting with friends or collaborating with teams.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center ">
              <FeatureCard
                icon={MessageCircle}
                title="Instant Messaging"
                description="Lightning-fast messages with real-time delivery."
              />
              <FeatureCard
                icon={Video}
                title="HD Video Calls"
                description="Crystal-clear video calls with one click."
              />
              <FeatureCard
                icon={Shield}
                title="Privacy First"
                description="End-to-end encryption keeps conversations private."
              />
              <FeatureCard
                icon={Users}
                title="Group Chats"
                description="Create and manage group conversations effortlessly."
              />
              <FeatureCard
                icon={Zap}
                title="Lightning Fast"
                description="Optimized for speed and performance across devices."
              />
            </div>
          </div>

          {/* CTA section */}
          <div className="w-full max-w-4xl">
            <div className="text-white rounded-2xl border bg-gradient-to-r
                from-orange-500 via-red-500 to-red-600
                dark:from-orange-400 dark:via-red-400 dark:to-red-500 p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to transform your conversations?
              </h2>
              <p className="text-white text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of users who&apos;ve already discovered a better
                way to communicate.
              </p>

              <SignedOut>
                <SignUpButton mode="modal">
                  <Button size="lg" className="text-lg px-8 py-6 h-auto">
                    Get Started Free
                  </Button>
                </SignUpButton>
              </SignedOut>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} NEAR. All rights reserved. NEAR is not affiliated with or endorsed by any
            third-party brands or services.
          </p>
        </div>
      </footer>
    </div>
  );
}
