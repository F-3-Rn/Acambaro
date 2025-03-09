import { AlertCircle } from "lucide-react"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/alert"

interface AlertDestructiveProps {
  title?: string;
  description: string;
  icon?: React.ElementType;
}

export function AlertDestructive({
  title = "",
  description,
  icon: Icon = AlertCircle,
}: AlertDestructiveProps) {
  return (
    <Alert variant="destructive" className="dark:b flex items-center">
      <Icon className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>
        {description}
      </AlertDescription>
    </Alert>
  )
}

