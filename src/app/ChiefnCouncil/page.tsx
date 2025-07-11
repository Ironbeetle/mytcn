"use client";
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
} from "lucide-react";

export default function ChiefCouncilPage() {
  const announcements = [
    {
      id: 1,
      title: "Community Meeting - Budget Discussion",
      message:
        "Join us for our monthly community meeting to discuss the upcoming budget proposals and community projects.",
      date: "2025-06-14",
      time: "2:30 PM",
      priority: "high",
    },
    {
      id: 2,
      title: "June 17th Update",
      message:
        "Chief & Council is now calling a state of emergency, in regards to the infrastructure of the water treatment plant. we advise all TCN members to stay where they are. We will be discussing the situation with ISC and Health Canada today.",
      date: "2025-06-17",
      time: "10:15 AM",
      priority: "high",
    },
    {
      id: 3,
      title: "Fire Evacuation has been lifted",
      message:
        "The mandatory evacuation order has been lifted effective as of 6:46 this evening. Residents can now return home. Red Cross will be making arrangements for everyone to return home.",
      date: "2025-06-16",
      time: "4:45 PM",
      priority: "high",
    },
    {
      id: 4,
      title: "June 16th Fire Update",
      message:
        "Fire is being contained, there is one area of concern. MB Wildlife will provide an update this evening. There will be a live update @ 8 pm.",
      date: "2025-06-16",
      time: "9:20 AM",
      priority: "medium",
    },
    {
      id: 5,
      title: "Bus Thompson - Winnipeg & Sagkeeng",
      message:
        "Bus pick-up @ Wawatay Inn June 11 starting @ 10:30 am. If you signed up with Councilor Cynthia Ouskan, make sure you are at Wawatay tomorrow morning.",
      date: "2025-06-10",
      time: "1:10 PM",
      priority: "high",
    },
  ];

  const leadership = [
    {
      name: "Chief Doreen Spence",
      title: "Chief",
      phone: "(555) 200-1001",
      email: "doreenspence@tataskweyak.com",
      isChief: true,
    },
    {
      name: "Abby Garson Wavey",
      title: "Councilor",
      phone: "(555) 200-1002",
      email: "abby.garson@tataskweyak.com",
      isChief: false,
    },
    {
      name: "Alwyn Keeper",
      title: "Councilor",
      phone: "(555) 200-1003",
      email: "alwynkeeper@tataskweyak.com",
      isChief: false,
    },
    {
      name: "Ivan Keeper",
      title: "Councilor",
      phone: "(555) 200-1004",
      email: "ivankeeper@tataskweyak.com",
      isChief: false,
    },
    {
      name: "Jonathon Kitchekeesik",
      title: "Councilor",
      phone: "(555) 200-1005",
      email: "jonkithekeesik@tataskweyak.com",
      isChief: false,
    },
    {
      name: "Cynthia Ouskan",
      title: "Councilor",
      phone: "(555) 200-1006",
      email: "cynthiaouskan@tataskweyak.com",
      isChief: false,
    },
    {
      name: "Joan Ouskan",
      title: "Councilor",
      phone: "(555) 200-1007",
      email: "joanouskan@tataskweyak.com",
      isChief: false,
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 pb-20">
      {/* Header with Hamburger Menu */}
      <div className="bg-gradient-to-r from-green-800 to-emerald-800 border-b border-green-700 sticky top-0 z-10 shadow-lg">
        <div className="px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-green-50">Chief & Council</h1>
            <p className="text-sm text-green-100 mt-1">
              Leadership updates and contact information
            </p>
          </div>
          {/* Hamburger Menu */}
          <MobileMenu currentPage="chief-council" />
        </div>
      </div>

      <div className="px-4 py-4 space-y-6">
        {/* Rest of your component remains the same... */}
        {/* Public Announcements Section */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Megaphone className="h-5 w-5 text-emerald-700" />
            <h2 className="text-lg font-semibold text-green-900">
              Public Announcements
            </h2>
          </div>

          <div className="space-y-3">
            {announcements.map((announcement) => (
              <Card
                key={announcement.id}
                className="shadow-md bg-white/80 backdrop-blur-sm border-green-200 hover:shadow-lg transition-shadow"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-base leading-tight flex-1 text-green-900">
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
                  <p className="text-sm text-green-800 leading-relaxed">
                    {announcement.message}
                  </p>

                  <Separator className="bg-green-200" />

                  <div className="flex items-center justify-between text-xs text-green-600">
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
                  </div>
                </CardContent>
              </Card>
            ))}

            <Button
              variant="outline"
              className="w-full border-green-300 text-green-700 hover:bg-green-50"
            >
              View All Announcements
            </Button>
          </div>
        </section>

        {/* Leadership Contact Section */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Crown className="h-5 w-5 text-amber-700" />
            <h2 className="text-lg font-semibold text-green-900">
              Leadership Contact
            </h2>
          </div>

          <div className="space-y-3">
            {leadership.map((member, index) => (
              <Card
                key={index}
                className={`shadow-md transition-shadow hover:shadow-lg ${
                  member.isChief
                    ? "ring-2 ring-amber-200 bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200"
                    : "bg-white/80 backdrop-blur-sm border-green-200"
                }`}
              >
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      {member.isChief ? (
                        <Crown className="h-4 w-4 text-amber-700" />
                      ) : (
                        <User className="h-4 w-4 text-green-600" />
                      )}
                      <div>
                        <h3 className="font-semibold text-green-900">
                          {member.name}
                        </h3>
                        <p
                          className={`text-sm ${
                            member.isChief
                              ? "text-amber-700"
                              : "text-green-700"
                          }`}
                        >
                          {member.title}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="h-4 w-4 text-green-600" />
                        <a
                          href={`tel:${member.phone}`}
                          className="text-emerald-700 font-medium hover:text-emerald-800"
                        >
                          {member.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="h-4 w-4 text-green-600" />
                        <a
                          href={`mailto:${member.email}`}
                          className="text-emerald-700 hover:text-emerald-800"
                        >
                          {member.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button
                        size="sm"
                        className="flex-1 bg-green-700 hover:bg-green-800 text-white"
                        onClick={() => window.open(`tel:${member.phone}`)}
                      >
                        <Phone className="h-3 w-3 mr-1" />
                        Call
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-green-300 text-green-700 hover:bg-green-50"
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