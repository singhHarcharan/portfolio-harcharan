import { toast } from "@/components/ui/use-toast";

export function showComingSoon(message = "Coming Soon!") {
  toast({
    title: message,
    description: "This feature is currently under development.",
    duration: 3000,
    variant: "default",
  });
}
