import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const { mutate: subscribeToNewsletter, isPending } = useMutation({
    mutationFn: async (email: string) => {
      const response = await apiRequest("POST", "/api/newsletter", { email });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Subscription successful!",
        description: "Thank you for joining our community.",
        variant: "default",
      });
      setEmail("");
    },
    onError: (error) => {
      toast({
        title: "Subscription failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      subscribeToNewsletter(email);
    } else {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-16 bg-fungi-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4 section-heading">
            Join Our Community
          </h2>
          <p className="text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
            Sign up for our newsletter to receive growing tips, special offers,
            and be the first to know about new products and cultures.
          </p>

          <div className="max-w-md mx-auto">
            <form className="sm:flex" onSubmit={handleSubmit}>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-5 py-3 placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-fungi-green focus:ring-white focus:border-white sm:max-w-xs rounded-md"
                required
              />
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <Button
                  type="submit"
                  disabled={isPending}
                  className="w-full px-5 py-3 border border-transparent text-base font-medium rounded-md text-fungi-green bg-white hover:bg-fungi-cream focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-fungi-green focus:ring-white"
                >
                  {isPending ? "Subscribing..." : "Subscribe"}
                </Button>
              </div>
            </form>
            <p className="mt-3 text-sm text-white text-opacity-75">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
