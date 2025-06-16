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
  DollarSign,
  Users,
  AlertCircle,
  Star,
  Phone,
  Mail,
  ExternalLink,
  Filter,
} from "lucide-react";

export default function BulletinBoardPage() {
  const bulletinItems = [
    {
      id: 1,
      type: "event",
      title: "Annual Powwow Celebration",
      description:
        "Join us for our traditional powwow featuring dancers, drummers, and traditional foods. All community members welcome.",
      date: "2025-06-25",
      time: "10:00 AM - 8:00 PM",
      location: "Community Center Grounds",
      contact: "Cultural Committee",
      phone: "(555) 200-3001",
      priority: "high",
      featured: true,
    },
    {
      id: 2,
      type: "job",
      title: "Administrative Assistant",
      description:
        "Full-time position at the Band Office. Experience with office software and customer service required.",
      salary: "$18-22/hour",
      deadline: "2025-06-30",
      contact: "HR Department",
      email: "hr@firstnation.ca",
      phone: "(555) 200-1000",
      priority: "medium",
    },
    {
      id: 3,
      type: "notice",
      title: "Water Quality Testing Results",
      description:
        "Monthly water quality testing results are now available. All parameters meet safety standards.",
      date: "2025-06-14",
      contact: "Public Works",
      phone: "(555) 200-4000",
      priority: "low",
    },
    {
      id: 4,
      type: "event",
      title: "Elder's Lunch Program",
      description:
        "Weekly lunch program for community elders. Transportation available upon request.",
      date: "Every Thursday",
      time: "12:00 PM - 2:00 PM",
      location: "Community Hall",
      contact: "Elder Services",
      phone: "(555) 200-5000",
      priority: "medium",
    },
    {
      id: 5,
      type: "job",
      title: "Summer Youth Program Coordinator",
      description:
        "Seasonal position to coordinate summer activities for youth ages 12-18. Must have experience working with youth.",
      salary: "$20/hour",
      deadline: "2025-06-20",
      contact: "Youth Services",
      email: "youth@firstnation.ca",
      priority: "high",
    },
    {
      id: 6,
      type: "announcement",
      title: "New Recycling Program",
      description:
        "Starting July 1st, we're launching a new recycling program. Bins will be distributed to all households.",
      date: "2025-06-12",
      contact: "Environmental Services",
      phone: "(555) 200-6000",
      priority: "medium",
    },
    {
      id: 7,
      type: "event",
      title: "Traditional Craft Workshop",
      description:
        "Learn traditional beadwork and basket weaving from community elders. All materials provided.",
      date: "2025-06-22",
      time: "1:00 PM - 4:00 PM",
      location: "Cultural Center",
      contact: "Mary Thunderheart",
      phone: "(555) 200-7000",
      priority: "low",
      featured: false,
    },
    {
      id: 8,
      type: "notice",
      title: "Road Construction Update",
      description:
        "Phase 2 of Eagle Road construction will begin Monday. Expect delays and use alternate routes.",
      date: "2025-06-17",
      contact: "Public Works",
      phone: "(555) 200-4000",
      priority: "high",
    },
  ];

  const getTypeConfig = (type: string) => {
    switch (type) {
      case "event":
        return {
          icon: Calendar,
          color: "bg-blue-100 text-blue-800 border-blue-200",
          label: "Event",
        };
      case "job":
        return {
          icon: Briefcase,
          color: "bg-green-100 text-green-800 border-green-200",
          label: "Job",
        };
      case "notice":
        return {
          icon: AlertCircle,
          color: "bg-orange-100 text-orange-800 border-orange-200",
          label: "Notice",
        };
      case "announcement":
        return {
          icon: Users,
          color: "bg-purple-100 text-purple-800 border-purple-200",
          label: "Program",
        };
      default:
        return {
          icon: AlertCircle,
          color: "bg-gray-100 text-gray-800 border-gray-200",
          label: "Info",
        };
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const formatDate = (dateString: string) => {
    if (dateString.includes("Every") || dateString.includes("Weekly")) {
      return dateString;
    }
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const featuredItems = bulletinItems.filter((item) => item.featured);
  const regularItems = bulletinItems.filter((item) => !item.featured);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header with Mobile Menu */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Bulletin Board</h1>
            <p className="text-sm text-gray-600 mt-1">
              Community events, jobs, and announcements
            </p>
          </div>

          <MobileMenu currentPage="bulletin" />
        </div>
      </div>

      <div className="px-4 py-4 space-y-6">
        {/* Filter Buttons */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-5 w-5 text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-900">Categories</h2>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            <Button size="sm" variant="default" className="whitespace-nowrap">
              All Items
            </Button>
            <Button size="sm" variant="outline" className="whitespace-nowrap">
              Events
            </Button>
            <Button size="sm" variant="outline" className="whitespace-nowrap">
              Jobs
            </Button>
            <Button size="sm" variant="outline" className="whitespace-nowrap">
              Notices
            </Button>
            <Button size="sm" variant="outline" className="whitespace-nowrap">
              Programs
            </Button>
          </div>
        </section>

        {/* Featured Items */}
        {featuredItems.length > 0 && (
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Star className="h-5 w-5 text-yellow-600" />
              <h2 className="text-lg font-semibold text-gray-900">Featured</h2>
            </div>

            <div className="space-y-3">
              {featuredItems.map((item) => {
                const typeConfig = getTypeConfig(item.type);
                const TypeIcon = typeConfig.icon;

                return (
                  <Card
                    key={item.id}
                    className="shadow-sm ring-2 ring-yellow-200 bg-yellow-50"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2 flex-1">
                          <Star className="h-4 w-4 text-yellow-600" />
                          <CardTitle className="text-base leading-tight">
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
                            className={`text-xs ${getPriorityColor(
                              item.priority
                            )}`}
                            variant="outline"
                          >
                            {item.priority}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0 space-y-3">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Event/Job specific details */}
                      {(item.date || item.time || item.location || item.salary) && (
                        <div className="space-y-2">
                          {item.date && (
                            <div className="flex items-center gap-2 text-sm">
                              <Calendar className="h-4 w-4 text-gray-400" />
                              <span>{formatDate(item.date)}</span>
                            </div>
                          )}
                          {item.time && (
                            <div className="flex items-center gap-2 text-sm">
                              <Clock className="h-4 w-4 text-gray-400" />
                              <span>{item.time}</span>
                            </div>
                          )}
                          {item.location && (
                            <div className="flex items-center gap-2 text-sm">
                              <MapPin className="h-4 w-4 text-gray-400" />
                              <span>{item.location}</span>
                            </div>
                          )}
                          {item.salary && (
                            <div className="flex items-center gap-2 text-sm">
                              <DollarSign className="h-4 w-4 text-gray-400" />
                              <span>{item.salary}</span>
                            </div>
                          )}
                          {item.deadline && (
                            <div className="flex items-center gap-2 text-sm">
                              <AlertCircle className="h-4 w-4 text-red-400" />
                              <span>Apply by: {formatDate(item.deadline)}</span>
                            </div>
                          )}
                        </div>
                      )}

                      <Separator />

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">{item.contact}</p>
                          {item.phone && (
                            <p className="text-xs text-gray-500">{item.phone}</p>
                          )}
                        </div>
                        <div className="flex gap-2">
                          {item.phone && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-8 px-3"
                              onClick={() => window.open(`tel:${item.phone}`)}
                            >
                              <Phone className="h-3 w-3 mr-1" />
                              Call
                            </Button>
                          )}
                          {item.email && (
                            <Button
                              size="sm"
                              className="h-8 px-3"
                              onClick={() => window.open(`mailto:${item.email}`)}
                            >
                              <Mail className="h-3 w-3 mr-1" />
                              Email
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>
        )}

        {/* All Items */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Users className="h-5 w-5 text-blue-600" />
            <h2 className="text-lg font-semibold text-gray-900">
              All Bulletin Items
            </h2>
          </div>

          <div className="space-y-3">
            {regularItems.map((item) => {
              const typeConfig = getTypeConfig(item.type);
              const TypeIcon = typeConfig.icon;

              return (
                <Card key={item.id} className="shadow-sm">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-base leading-tight flex-1">
                        {item.title}
                      </CardTitle>
                      <div className="flex gap-1">
                        <Badge
                          className={`text-xs ${typeConfig.color}`}
                          variant="outline"
                        >
                          {typeConfig.label}
                        </Badge>
                        <Badge
                          className={`text-xs ${getPriorityColor(
                            item.priority
                          )}`}
                          variant="outline"
                        >
                          {item.priority}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-3">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Event/Job specific details */}
                    {(item.date || item.time || item.location || item.salary) && (
                      <div className="space-y-2">
                        {item.date && (
                          <div className="flex items-center gap-2 text-sm">
                            <Calendar className="h-4 w-4 text-gray-400" />
                            <span>{formatDate(item.date)}</span>
                          </div>
                        )}
                        {item.time && (
                          <div className="flex items-center gap-2 text-sm">
                            <Clock className="h-4 w-4 text-gray-400" />
                            <span>{item.time}</span>
                          </div>
                        )}
                        {item.location && (
                          <div className="flex items-center gap-2 text-sm">
                            <MapPin className="h-4 w-4 text-gray-400" />
                            <span>{item.location}</span>
                          </div>
                        )}
                        {item.salary && (
                          <div className="flex items-center gap-2 text-sm">
                            <DollarSign className="h-4 w-4 text-gray-400" />
                            <span>{item.salary}</span>
                          </div>
                        )}
                        {item.deadline && (
                          <div className="flex items-center gap-2 text-sm">
                            <AlertCircle className="h-4 w-4 text-red-400" />
                            <span>Apply by: {formatDate(item.deadline)}</span>
                          </div>
                        )}
                      </div>
                    )}

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">{item.contact}</p>
                        {item.phone && (
                          <p className="text-xs text-gray-500">{item.phone}</p>
                        )}
                      </div>
                      <div className="flex gap-2">
                        {item.phone && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 px-3"
                            onClick={() => window.open(`tel:${item.phone}`)}
                          >
                            <Phone className="h-3 w-3 mr-1" />
                            Call
                          </Button>
                        )}
                        {item.email && (
                          <Button
                            size="sm"
                            className="h-8 px-3"
                            onClick={() => window.open(`mailto:${item.email}`)}
                          >
                            <Mail className="h-3 w-3 mr-1" />
                            Email
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Load More Button */}
        <div className="flex justify-center pt-4">
          <Button variant="outline" className="w-full">
            Load More Items
          </Button>
        </div>
      </div>
    </div>
  );
}