"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import MobileMenu from "@/components/mobile-menu";
import {
  Phone,
  Mail,
  Megaphone,
  Calendar,
  User,
  Crown,
  Clock,
  Menu,
  Home,
  Users,
  FileText,
  Settings,
  LogOut,
} from "lucide-react";

export default function ChiefCouncilPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Megaphone, label: "Chief & Council", href: "/chief-council", active: true },
    { icon: Users, label: "Community Programs", href: "/community" },
    { icon: FileText, label: "Documents", href: "/documents" },
    { icon: Calendar, label: "Events", href: "/events" },
    { icon: Settings, label: "Settings", href: "/settings" },
    { icon: LogOut, label: "Sign Out", href: "/logout" },
  ];

  const announcements = [
    {
      id: 1,
      title: "Community Meeting - Budget Discussion",
      message:
        "Join us for our monthly community meeting to discuss the upcoming budget proposals and community projects.",
      date: "2025-06-14",
      time: "2:30 PM",
      priority: "high",
      author: "Chief Sarah Whitehorse",
    },
    {
      id: 2,
      title: "Road Maintenance Schedule",
      message:
        "Road maintenance will begin on Pine Street starting Monday. Please use alternate routes during construction hours.",
      date: "2025-06-13",
      time: "10:15 AM",
      priority: "medium",
      author: "Councilor Mike Running Bear",
    },
    {
      id: 3,
      title: "Cultural Center Grand Opening",
      message:
        "We're excited to announce the grand opening of our new Cultural Center on June 20th. Traditional feast begins at 6 PM.",
      date: "2025-06-12",
      time: "4:45 PM",
      priority: "high",
      author: "Chief Sarah Whitehorse",
    },
    {
      id: 4,
      title: "Water Service Interruption Notice",
      message:
        "Water service will be temporarily interrupted on June 16th from 8 AM to 2 PM for system upgrades.",
      date: "2025-06-11",
      time: "9:20 AM",
      priority: "medium",
      author: "Councilor Lisa Crow Feather",
    },
    {
      id: 5,
      title: "Youth Summer Programs Registration",
      message:
        "Registration is now open for summer youth programs. Limited spaces available. Contact the community center for details.",
      date: "2025-06-10",
      time: "1:10 PM",
      priority: "low",
      author: "Councilor James Thunder",
    },
  ];

  const leadership = [
    {
      name: "Chief Sarah Whitehorse",
      title: "Chief",
      phone: "(555) 200-1001",
      email: "chief@firstnation.ca",
      isChief: true,
    },
    {
      name: "Mike Running Bear",
      title: "Councilor",
      phone: "(555) 200-1002",
      email: "mrunningbear@firstnation.ca",
      isChief: false,
    },
    {
      name: "Lisa Crow Feather",
      title: "Councilor",
      phone: "(555) 200-1003",
      email: "lcrowfeather@firstnation.ca",
      isChief: false,
    },
    {
      name: "James Thunder",
      title: "Councilor",
      phone: "(555) 200-1004",
      email: "jthunder@firstnation.ca",
      isChief: false,
    },
    {
      name: "Maria Eagle Wing",
      title: "Councilor",
      phone: "(555) 200-1005",
      email: "meaglewng@firstnation.ca",
      isChief: false,
    },
    {
      name: "Robert Stone Bear",
      title: "Councilor",
      phone: "(555) 200-1006",
      email: "rstonebear@firstnation.ca",
      isChief: false,
    },
    {
      name: "Jennifer Swift Arrow",
      title: "Councilor",
      phone: "(555) 200-1007",
      email: "jswiftarrow@firstnation.ca",
      isChief: false,
    },
  ];

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
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header with Hamburger Menu */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Chief & Council</h1>
            <p className="text-sm text-gray-600 mt-1">
              Leadership updates and contact information
            </p>
          </div> 
          {/* Hamburger Menu */}
          <MobileMenu currentPage="chief-council" />
        </div>
      </div>

      <div className="px-4 py-4 space-y-6">
        {/* Public Announcements - Prominent Section */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Megaphone className="h-5 w-5 text-blue-600" />
            <h2 className="text-lg font-semibold text-gray-900">
              Public Announcements
            </h2>
          </div>

          <div className="space-y-3">
            {announcements.map((announcement) => (
              <Card key={announcement.id} className="shadow-sm">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-base leading-tight flex-1">
                      {announcement.title}
                    </CardTitle>
                    <Badge
                      className={`text-xs ${getPriorityColor(
                        announcement.priority
                      )}`}
                      variant="outline"
                    >
                      {announcement.priority}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 space-y-3">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {announcement.message}
                  </p>

                  <Separator />

                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{formatDate(announcement.date)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{announcement.time}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span className="font-medium">{announcement.author}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* View More Button */}
            <Button variant="outline" className="w-full">
              View All Announcements
            </Button>
          </div>
        </section>

        {/* Leadership Contact Section */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Crown className="h-5 w-5 text-purple-600" />
            <h2 className="text-lg font-semibold text-gray-900">
              Leadership Contact
            </h2>
          </div>

          <div className="space-y-3">
            {leadership.map((member, index) => (
              <Card
                key={index}
                className={`shadow-sm ${
                  member.isChief ? "ring-2 ring-purple-200 bg-purple-50" : ""
                }`}
              >
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      {member.isChief ? (
                        <Crown className="h-4 w-4 text-purple-600" />
                      ) : (
                        <User className="h-4 w-4 text-gray-400" />
                      )}
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {member.name}
                        </h3>
                        <p className="text-sm text-gray-600">{member.title}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="h-4 w-4 text-gray-400" />
                        <a
                          href={`tel:${member.phone}`}
                          className="text-blue-600 font-medium"
                        >
                          {member.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="h-4 w-4 text-gray-400" />
                        <a
                          href={`mailto:${member.email}`}
                          className="text-blue-600"
                        >
                          {member.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button
                        size="sm"
                        className="flex-1"
                        onClick={() => window.open(`tel:${member.phone}`)}
                      >
                        <Phone className="h-3 w-3 mr-1" />
                        Call
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1"
                        onClick={() => window.open(`mailto:${member.email}`)}
                      >
                        <Mail className="h-3 w-3 mr-1" />
                        Email
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}