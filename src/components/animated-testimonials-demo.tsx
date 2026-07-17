import { AnimatedTestimonials } from "./ui/animated-testimonials";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Dexsol helped us move from a scattered online presence to a focused growth system. We saw better lead quality almost immediately.",
      name: "Sarah Chen",
      designation: "Head of Growth at Northline",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Our Shopify store now feels aligned with the brand and the numbers reflect it. Conversions improved, and the buying journey is far cleaner.",
      name: "Michael Rodriguez",
      designation: "Founder at Studio Cart",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The new brand system gave us a credible face across every channel. It made the business easier to trust and easier to remember.",
      name: "Emily Watson",
      designation: "Marketing Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Their site structure and search work made us easier to find for the right searches. The traffic that comes in is more relevant now.",
      name: "James Kim",
      designation: "Operations Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Dexsol felt like a real partner, not a vendor. The process was clear, the communication stayed sharp, and the final result lifted the brand.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  // Enable autoplay for better landing page dynamic action immediately
  return <AnimatedTestimonials testimonials={testimonials} autoplay={true} />;
}
