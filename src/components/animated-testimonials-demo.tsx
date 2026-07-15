import { AnimatedTestimonials } from "./ui/animated-testimonials";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Dexsol turned our slow brochure site into a fast, polished lead generator. The new experience feels premium and performs like a real business asset.",
      name: "Sarah Chen",
      designation: "Head of Growth at Northline",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Our Shopify conversion rate improved after the rebuild, and the checkout now feels smooth on every device. The team was sharp, responsive, and easy to work with.",
      name: "Michael Rodriguez",
      designation: "Founder at Studio Cart",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The brand system finally gave us consistency across our web and sales materials. Dexsol made the identity feel clear, credible, and memorable.",
      name: "Emily Watson",
      designation: "Marketing Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Their SEO cleanup and site structure work gave us better visibility on the exact search terms we care about. We saw traction without chasing vanity metrics.",
      name: "James Kim",
      designation: "Operations Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Communication stayed tight from kickoff to launch, and the final site looked and felt far beyond what we expected at the start.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  // Enable autoplay for better landing page dynamic action immediately
  return <AnimatedTestimonials testimonials={testimonials} autoplay={true} />;
}
