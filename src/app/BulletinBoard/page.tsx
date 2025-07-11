"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import MobileMenu from "@/components/mobile-menu";
import {
  Calendar,
  MapPin,
  Clock,
  Briefcase,
  Users,
  AlertCircle,
  Star,
  RefreshCw,
} from "lucide-react";
import { format } from "date-fns";
import { useBulletinItems } from "@/hooks/use-bulletin";
import { z } from "zod";
import { msgApiLogSchema, userSchema } from "@/lib/validation";

// Create the type with User relation for the component
type MsgApiLogWithUser = z.infer<typeof msgApiLogSchema> & {
  User: {
    first_name: string;
    last_name: string;
    department: string;
  };
};

export default function BulletinBoardPage() {
  const {
    data: bulletinItems = [],
    isLoading,
    error,
    refetch,
    isRefetching,
  } = useBulletinItems();

  const getTypeConfig = (type: string) => {
    switch (type.toLowerCase()) {
      case "event":
        return {
          icon: Calendar,
          color: "bg-emerald-50 text-emerald-800 border-emerald-200",
          label: "Event",
        };
      case "job":
        return {
          icon: Briefcase,
          color: "bg-green-50 text-green-800 border-green-200",
          label: "Job",
        };
      case "notice":
        return {
          icon: AlertCircle,
          color: "bg-amber-50 text-amber-800 border-amber-200",
          label: "Notice",
        };
      case "announcement":
        return {
          icon: Users,
          color: "bg-teal-50 text-teal-800 border-teal-200",
          label: "Program",
        };
      default:
        return {
          icon: AlertCircle,
          color: "bg-stone-50 text-stone-800 border-stone-200",
          label: "Info",
        };
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case "high":
        return "bg-red-50 text-red-800 border-red-200";
      case "medium":
        return "bg-orange-50 text-orange-800 border-orange-200";
      case "low":
        return "bg-lime-50 text-lime-800 border-lime-200";
      default:
        return "bg-stone-50 text-stone-800 border-stone-200";
    }
  };

  const formatDate = (date: Date | string) => {
    try {
      const dateObj = typeof date === 'string' ? new Date(date) : date;
      return format(dateObj, "MMM dd, yyyy");
    } catch {
      return "Invalid date";
    }
  };

  const formatTime = (time: Date | string) => {
    try {
      const timeObj = typeof time === 'string' ? new Date(time) : time;
      return format(timeObj, "h:mm a");
    } catch {
      return "Invalid time";
    }
  };

  // Filter only published items
  const publishedItems = bulletinItems.filter(item => item.isPublished);
  
  // Determine featured items (high priority items)
  const featuredItems = publishedItems.filter(
    (item) => item.priority === "high"
  );
  const regularItems = publishedItems.filter(
    (item) => item.priority !== "high"
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-green-700">Loading bulletin items...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-red-600 mx-auto mb-4" />
          <p className="text-red-700">
            Error: {error instanceof Error ? error.message : "An error occurred"}
          </p>
          <Button
            onClick={() => refetch()}
            className="mt-4 bg-green-700 hover:bg-green-800"
            disabled={isRefetching}
          >
            {isRefetching ? (
              <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
            ) : null}
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  const BulletinCard = ({ 
    item, 
    featured = false 
  }: { 
    item: MsgApiLogWithUser; 
    featured?: boolean 
  }) => {
    const typeConfig = getTypeConfig(item.type);

    return (
      <Card
        className={
          featured
            ? "shadow-lg ring-2 ring-amber-200 bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200"
            : "shadow-md bg-white/80 backdrop-blur-sm border-green-200 hover:shadow-lg transition-shadow"
        }
      >
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2 flex-1">
              {featured && <Star className="h-4 w-4 text-amber-600" />}
              <CardTitle className="text-base leading-tight text-green-900">
                {item.title}
              </CardTitle>
            </div>
            <div className="flex gap-1">
              <Badge
                className={`text-xs ${typeConfig.color}`}
                variant="outline"
              >
                {typeConfig.label}
              </Badge>
              <Badge
                className={`text-xs ${getPriorityColor(item.priority)}`}
                variant="outline"
              >
                {item.priority}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0 space-y-3">
          <p className="text-sm text-green-800 leading-relaxed">
            {item.content}
          </p>

          {/* Date, Time, and Location from msgApiLogSchema */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4 text-green-600" />
              <span className="text-green-700">{formatDate(item.date)}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4 text-green-600" />
              <span className="text-green-700">{formatTime(item.time)}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-green-600" />
              <span className="text-green-700">{item.location}</span>
            </div>
            {item.expiryDate && (
              <div className="flex items-center gap-2 text-sm">
                <AlertCircle className="h-4 w-4 text-red-600" />
                <span className="text-red-700">
                  Expires: {formatDate(item.expiryDate)}
                </span>
              </div>
            )}
          </div>

          <Separator className="bg-green-200" />

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-green-900">
                {item.User.first_name} {item.User.last_name}
              </p>
              <p className="text-xs text-green-600">{item.User.department}</p>
            </div>
            {item.created && (
              <div className="text-xs text-green-600">
                Posted: {formatDate(item.created)}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 pb-20">
      {/* Header with Mobile Menu */}
      <div className="bg-gradient-to-r from-green-800 to-emerald-800 border-b border-green-700 sticky top-0 z-10 shadow-lg">
        <div className="px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-green-50">Bulletin Board</h1>
            <p className="text-sm text-green-100 mt-1">
              Community events, jobs, and announcements
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => refetch()}
              disabled={isRefetching}
              className="text-green-100 hover:bg-green-700"
            >
              <RefreshCw
                className={`h-4 w-4 ${isRefetching ? "animate-spin" : ""}`}
              />
            </Button>
            <MobileMenu currentPage="bulletin" />
          </div>
        </div>
      </div>

      <div className="px-4 py-4 space-y-6">
        {/* Featured Items */}
        {featuredItems.length > 0 && (
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Star className="h-5 w-5 text-amber-600" />
              <h2 className="text-lg font-semibold text-green-900">Featured</h2>
            </div>

            <div className="space-y-3">
              {featuredItems.map((item) => (
                <BulletinCard key={item.id} item={item} featured />
              ))}
            </div>
          </section>
        )}

        {/* Regular Items */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Users className="h-5 w-5 text-emerald-700" />
            <h2 className="text-lg font-semibold text-green-900">
              All Bulletin Items
            </h2>
          </div>

          <div className="space-y-3">
            {regularItems.map((item) => (
              <BulletinCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {publishedItems.length === 0 && (
          <div className="text-center py-12">
            <Users className="h-12 w-12 text-green-400 mx-auto mb-4" />
            <p className="text-green-700">
              No bulletin items available at this time.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}