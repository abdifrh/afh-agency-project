
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const WhatsAppButton = () => {
  const phoneNumber = "+33750015896"; // Remove spaces and special characters
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 z-50",
        "flex items-center justify-center",
        "h-14 w-14 rounded-full",
        "bg-green-500 hover:bg-green-600",
        "text-white shadow-lg",
        "transition-all duration-300 hover:scale-110",
        "animate-fade-in"
      )}
      aria-label="Contactez-nous sur WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold">
        1
      </span>
    </a>
  );
};

export default WhatsAppButton;
