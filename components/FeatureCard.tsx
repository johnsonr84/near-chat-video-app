import { LucideIcon } from "lucide-react";

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="group p-6 rounded-lg border bg-card hover:shadow-lg transition-all duration-300 hover:border-primary/20 w-full max-w-sm text-center">
      <div className="w-12 h-12 rounded-lg bg-gradient-to-r
              from-blue-600 via-blue-400 to-teal-500 flex items-center justify-center text-white mb-4 group-hover:bg-primary/20 transition-colors mx-auto">
        <Icon className="w-6 h-6 " />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-black">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

export default FeatureCard;
