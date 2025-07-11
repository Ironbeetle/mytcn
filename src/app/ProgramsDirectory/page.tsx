"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Users,
  Calendar,
  ExternalLink,
} from "lucide-react";
import MobileMenu from "@/components/mobile-menu";

export default function page() {
  const programs = [
    {
      id: 1,
      title: "Youth Sports League",
      description: "Basketball and soccer programs for ages 8-16",
      schedule: "Mon, Wed, Fri 4-6 PM",
      contact: "Sarah Johnson",
      phone: "(555) 123-4567",
      participants: 45,
      status: "Open",
    },
    {
      id: 2,
      title: "Senior Fitness Classes",
      description: "Low-impact exercise and wellness activities",
      schedule: "Tue, Thu 10-11 AM",
      contact: "Mike Chen",
      phone: "(555) 234-5678",
      participants: 28,
      status: "Waitlist",
    },
    {
      id: 3,
      title: "Community Garden",
      description: "Shared gardening space and workshops",
      schedule: "Saturdays 9 AM-12 PM",
      contact: "Lisa Rodriguez",
      phone: "(555) 345-6789",
      participants: 32,
      status: "Open",
    },
  ];

  const contacts = [
    {
      name: "Community Center",
      role: "Main Office",
      phone: "(555) 100-2000",
      email: "info@community.org",
      address: "123 Main St, City, ST 12345",
      hours: "Mon-Fri 8 AM-6 PM",
    },
    {
      name: "Emergency Services",
      role: "24/7 Hotline",
      phone: "(555) 911-HELP",
      email: "emergency@community.org",
      address: "Available 24/7",
      hours: "Always Open",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 pb-20">
      {/* Header with Hamburger Menu */}
      <div className="bg-gradient-to-r from-green-800 to-emerald-800 border-b border-green-700 sticky top-0 z-10 shadow-lg">
        <div className="px-4 py-4 flex items-center justify-between">
          <div className="text-xl font-bold text-green-50">
            Community Programs Directory
          </div>
          {/* Hamburger Menu */}
          <MobileMenu currentPage="chief-council" />
        </div>
      </div>

      <div className="px-4 py-4 space-y-6">
        {/* Programs Section */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Users className="h-5 w-5 text-emerald-700" />
            <h2 className="text-lg font-semibold text-green-900">
              Active Programs
            </h2>
          </div>

          <div className="space-y-3">
            {programs.map((program) => (
              <Card 
                key={program.id} 
                className="shadow-md bg-white/80 backdrop-blur-sm border-green-200 hover:shadow-lg transition-shadow"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-base leading-tight text-green-900">
                      {program.title}
                    </CardTitle>
                    <Badge
                      variant="outline"
                      className={`text-xs ${
                        program.status === "Open" 
                          ? "bg-green-50 text-green-800 border-green-200" 
                          : "bg-amber-50 text-amber-800 border-amber-200"
                      }`}
                    >
                      {program.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 space-y-3">
                  <p className="text-sm text-green-800">
                    {program.description}
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-green-600" />
                      <span className="text-green-700">{program.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-green-600" />
                      <span className="text-green-700">{program.participants} participants</span>
                    </div>
                  </div>

                  <Separator className="bg-green-200" />

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-green-900">{program.contact}</p>
                      <p className="text-xs text-green-600">{program.phone}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="h-8 px-3 border-green-300 text-green-700 hover:bg-green-50"
                      >
                        <Phone className="h-3 w-3 mr-1" />
                        Call
                      </Button>
                      <Button 
                        size="sm" 
                        className="h-8 px-3 bg-green-700 hover:bg-green-800 text-white"
                      >
                        Join
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section>
          <h2 className="text-lg font-semibold text-green-900 mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <Button 
              variant="outline" 
              className="h-12 flex-col gap-1 border-green-300 text-green-700 hover:bg-green-50 bg-white/80 backdrop-blur-sm"
            >
              <Calendar className="h-4 w-4" />
              <span className="text-xs">View Calendar</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-12 flex-col gap-1 border-green-300 text-green-700 hover:bg-green-50 bg-white/80 backdrop-blur-sm"
            >
              <ExternalLink className="h-4 w-4" />
              <span className="text-xs">Register Online</span>
            </Button>
          </div>
        </section>

        {/* Contacts Section */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Phone className="h-5 w-5 text-teal-700" />
            <h2 className="text-lg font-semibold text-green-900">
              Important Contacts
            </h2>
          </div>

          <div className="space-y-3">
            {contacts.map((contact, index) => (
              <Card 
                key={index} 
                className="shadow-md bg-white/80 backdrop-blur-sm border-green-200 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-green-900">
                        {contact.name}
                      </h3>
                      <p className="text-sm text-green-700">{contact.role}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="h-4 w-4 text-green-600" />
                        <a
                          href={`tel:${contact.phone}`}
                          className="text-emerald-700 font-medium hover:text-emerald-800"
                        >
                          {contact.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="h-4 w-4 text-green-600" />
                        <a
                          href={`mailto:${contact.email}`}
                          className="text-emerald-700 hover:text-emerald-800"
                        >
                          {contact.email}
                        </a>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-green-600 mt-0.5" />
                        <span className="text-green-700">{contact.address}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-green-600" />
                        <span className="text-green-700">{contact.hours}</span>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button
                        size="sm"
                        className="flex-1 bg-green-700 hover:bg-green-800 text-white"
                        onClick={() => window.open(`tel:${contact.phone}`)}
                      >
                        <Phone className="h-3 w-3 mr-1" />
                        Call
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-green-300 text-green-700 hover:bg-green-50"
                        onClick={() => window.open(`mailto:${contact.email}`)}
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