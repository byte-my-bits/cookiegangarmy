import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Skull, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center py-20 px-4">
      <Card className="w-full max-w-md">
        <CardContent className="p-8 text-center">
          <Skull className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-2xl font-bold tracking-tight mb-2" data-testid="text-404-title">404 - Lost in the Wasteland</h1>
          <p className="text-sm text-muted-foreground mb-6">
            This area has been overrun. The page you are looking for does not exist or has been moved.
          </p>
          <Link href="/">
            <Button className="gap-2" data-testid="button-go-home">
              <ArrowLeft className="h-4 w-4" />
              Back to Base
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
