"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import MobileMenu from "@/components/mobile-menu";
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Clock,
  Users,
  Baby,
  Shield,
  Activity,
  Stethoscope,
  Calendar,
  AlertCircle,
  ExternalLink,
} from "lucide-react";

export default function HealthWellnessPage() {
  const healthPrograms = [
    {
      id: 1,
      name: "Better Families Program",
      description:
        "Comprehensive family support services including parenting classes, family counseling, and home visits to strengthen family bonds.",
      eligibility: "Families with children 0-18 years",
      services: [
        "Parenting workshops",
        "Family counseling",
        "Home visiting services",
        "Crisis intervention",
      ],
      contact: "Sarah Medicine Crow",
      phone: "(555) 300-1001",
      email: "betterfamilies@firstnation.ca",
      hours: "Mon-Fri 8:30 AM - 4:30 PM",
      status: "accepting",
      featured: true,
    },
    {
      id: 2,
      name: "Jordan's Principle",
      description:
        "Ensures First Nations children can access products, services and supports when they need them, where they need them.",
      eligibility: "First Nations children 0-18 years",
      services: [
        "Medical equipment & supplies",
        "Mental health services",
        "Educational supports",
        "Respite care",
      ],
      contact: "Jordan's Principle Coordinator",
      phone: "(555) 300-1002",
      email: "jordansprinciple@firstnation.ca",
      hours: "Mon-Fri 9:00 AM - 5:00 PM",
      status: "accepting",
      featured: true,
    },
    {
      id: 3,
      name: "Maternal Child Health",
      description:
        "Prenatal and postnatal care, breastfeeding support, and early childhood development programs for mothers and babies.",
      eligibility: "Pregnant women and families with children 0-6 years",
      services: [
        "Prenatal classes",
        "Breastfeeding support",
        "Well-baby clinics",
        "Immunizations",
      ],
      contact: "Lisa Bearcloud, RN",
      phone: "(555) 300-1003",
      email: "maternal@firstnation.ca",
      hours: "Mon, Wed, Fri 9:00 AM - 3:00 PM",
      status: "accepting",
    },
    {
      id: 4,
      name: "Youth Mental Health",
      description:
        "Culturally appropriate mental health services for youth including counseling, group therapy, and crisis support.",
      eligibility: "Youth ages 12-24 years",
      services: [
        "Individual counseling",
        "Group therapy sessions",
        "Crisis intervention",
        "Cultural healing circles",
      ],
      contact: "Michael Strongeagle",
      phone: "(555) 300-1004",
      email: "youthmental@firstnation.ca",
      hours: "Mon-Thu 10:00 AM - 6:00 PM",
      status: "waitlist",
    },
    {
      id: 5,
      name: "Healthy Child Development",
      description:
        "Early intervention services, developmental screenings, and support for children with special needs.",
      eligibility: "Children 0-12 years with developmental concerns",
      services: [
        "Developmental assessments",
        "Speech therapy",
        "Occupational therapy",
        "Family support planning",
      ],
      contact: "Jennifer Whitehorse",
      phone: "(555) 300-1005",
      email: "childdevelopment@firstnation.ca",
      hours: "Tue-Thu 8:00 AM - 4:00 PM",
      status: "accepting",
    },
    {
      id: 6,
      name: "Family Violence Prevention",
      description:
        "Safe, confidential support for families affected by violence including counseling, safety planning, and advocacy.",
      eligibility: "All community members affected by family violence",
      services: [
        "Crisis counseling",
        "Safety planning",
        "Court advocacy",
        "Support groups",
      ],
      contact: "Confidential Intake Line",
      phone: "(555) 300-SAFE",
      email: "familysafety@firstnation.ca",
      hours: "24/7 Crisis Line Available",
      status: "accepting",
      urgent: true,
    },
  ];

  const nursingStation = {
    name: "Community Nursing Station",
    address: "456 Wellness Way, Community Center",
    mainPhone: "(555) 300-2000",
    emergencyPhone: "(555) 300-HELP",
    email: "nursing@firstnation.ca",
    hours: {
      regular: "Mon-Fri 8:00 AM - 6:00 PM",
      weekend: "Sat 9:00 AM - 1:00 PM",
      emergency: "24/7 On-call Nurse Available",
    },
    services: [
      "Primary health care",
      "Chronic disease management",
      "Immunizations",
      "Health screenings",
      "Wound care",
      "Medication management",
    ],
    staff: [
      {
        name: "Maria Thunderheart, RN",
        title: "Head Nurse",
        phone: "(555) 300-2001",
        specialties: ["Diabetes care", "Wound management"],
      },
      {
        name: "David Crowfeather, RN",
        title: "Community Health Nurse",
        phone: "(555) 300-2002",
        specialties: ["Mental health", "Addiction support"],
      },
      {
        name: "Dr. Patricia Running Wolf",
        title: "Visiting Physician",
        phone: "(555) 300-2003",
        schedule: "Tuesdays & Thursdays",
      },
    ],
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "accepting":
        return "bg-green-50 text-green-800 border-green-200";
      case "waitlist":
        return "bg-amber-50 text-amber-800 border-amber-200";
      case "closed":
        return "bg-red-50 text-red-800 border-red-200";
      default:
        return "bg-stone-50 text-stone-800 border-stone-200";
    }
  };

  const featuredPrograms = healthPrograms.filter((program) => program.featured);
  const regularPrograms = healthPrograms.filter((program) => !program.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 pb-20">
      {/* Header with Mobile Menu */}
      <div className="bg-gradient-to-r from-green-800 to-emerald-800 border-b border-green-700 sticky top-0 z-10 shadow-lg">
        <div className="px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-green-50">
              Health & Wellness
            </h1>
            <p className="text-sm text-green-100 mt-1">
              Community health programs and services
            </p>
          </div>
          <MobileMenu currentPage="health" />
        </div>
      </div>
      <div className="px-4 py-4 space-y-6">
        {/* Emergency Contact Banner */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-4 shadow-md">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="h-5 w-5 text-red-600" />
            <h3 className="font-semibold text-red-900">Emergency Services</h3>
          </div>
          <p className="text-sm text-red-800 mb-3">
            For medical emergencies, call 911 or the nursing station emergency
            line.
          </p>
          <Button
            size="sm"
            className="bg-red-600 hover:bg-red-700 text-white"
            onClick={() => window.open("tel:5553002000")}
          >
            <Phone className="h-3 w-3 mr-1" />
            Emergency: (555) 300-HELP
          </Button>
        </div>
        {/* Featured Programs */}
        {featuredPrograms.length > 0 && (
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-5 w-5 text-red-600" />
              <h2 className="text-lg font-semibold text-green-900">
                Key Programs
              </h2>
            </div>
            <div className="space-y-3">
              {featuredPrograms.map((program) => (
                <Card
                  key={program.id}
                  className="shadow-lg ring-2 ring-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-base leading-tight flex-1 text-green-900">
                        {program.name}
                      </CardTitle>
                      <Badge
                        className={`text-xs ${getStatusColor(program.status)}`}
                        variant="outline"
                      >
                        {program.status === "accepting"
                          ? "Accepting"
                          : program.status === "waitlist"
                          ? "Waitlist"
                          : "Closed"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-3">
                    <p className="text-sm text-green-800 leading-relaxed">
                      {program.description}
                    </p>

                    <div className="space-y-2">
                      <div className="flex items-start gap-2 text-sm">
                        <Users className="h-4 w-4 text-green-600 mt-0.5" />
                        <span className="text-green-700">
                          <strong>Eligibility:</strong> {program.eligibility}
                        </span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <Activity className="h-4 w-4 text-green-600 mt-0.5" />
                        <div className="text-green-700">
                          <strong>Services:</strong>
                          <ul className="mt-1 ml-4 list-disc text-xs space-y-1">
                            {program.services.map((service, index) => (
                              <li key={index}>{service}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-green-600" />
                        <span className="text-green-700">{program.hours}</span>
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
                          onClick={() => window.open(`tel:${program.phone}`)}
                        >
                          <Phone className="h-3 w-3 mr-1" />
                          Call
                        </Button>
                        <Button
                          size="sm"
                          className="h-8 px-3 bg-green-700 hover:bg-green-800 text-white"
                          onClick={() => window.open(`mailto:${program.email}`)}
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
        )}
        {/* All Health Programs */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Baby className="h-5 w-5 text-teal-700" />
            <h2 className="text-lg font-semibold text-green-900">
              Child & Family Programs
            </h2>
          </div>

          <div className="space-y-3">
            {regularPrograms.map((program) => (
              <Card 
                key={program.id} 
                className="shadow-md bg-white/80 backdrop-blur-sm border-green-200 hover:shadow-lg transition-shadow"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2 flex-1">
                      {program.urgent && (
                        <AlertCircle className="h-4 w-4 text-red-600" />
                      )}
                      <CardTitle className="text-base leading-tight text-green-900">
                        {program.name}
                      </CardTitle>
                    </div>
                    <Badge
                      className={`text-xs ${getStatusColor(program.status)}`}
                      variant="outline"
                    >
                      {program.status === "accepting"
                        ? "Accepting"
                        : program.status === "waitlist"
                        ? "Waitlist"
                        : "Closed"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 space-y-3">
                  <p className="text-sm text-green-800 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-start gap-2 text-sm">
                      <Users className="h-4 w-4 text-green-600 mt-0.5" />
                      <span className="text-green-700">
                        <strong>Eligibility:</strong> {program.eligibility}
                      </span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <Activity className="h-4 w-4 text-green-600 mt-0.5" />
                      <div className="text-green-700">
                        <strong>Services:</strong>
                        <ul className="mt-1 ml-4 list-disc text-xs space-y-1">
                          {program.services.map((service, index) => (
                            <li key={index}>{service}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-green-600" />
                      <span className="text-green-700">{program.hours}</span>
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
                        onClick={() => window.open(`tel:${program.phone}`)}
                      >
                        <Phone className="h-3 w-3 mr-1" />
                        Call
                      </Button>
                      <Button
                        size="sm"
                        className="h-8 px-3 bg-green-700 hover:bg-green-800 text-white"
                        onClick={() => window.open(`mailto:${program.email}`)}
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

        {/* Nursing Station Contact Panel */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Stethoscope className="h-5 w-5 text-emerald-700" />
            <h2 className="text-lg font-semibold text-green-900">
              Community Nursing Station
            </h2>
          </div>

          <Card className="shadow-lg ring-2 ring-green-200 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-base text-green-900">{nursingStation.name}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-green-600" />
                  <span className="text-green-700">{nursingStation.address}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-green-600" />
                  <a
                    href={`tel:${nursingStation.mainPhone}`}
                    className="text-emerald-700 font-medium hover:text-emerald-800"
                  >
                    {nursingStation.mainPhone}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <AlertCircle className="h-4 w-4 text-red-600" />
                  <a
                    href={`tel:${nursingStation.emergencyPhone}`}
                    className="text-red-700 font-medium hover:text-red-800"
                  >
                    Emergency: {nursingStation.emergencyPhone}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-green-600" />
                  <a
                    href={`mailto:${nursingStation.email}`}
                    className="text-emerald-700 hover:text-emerald-800"
                  >
                    {nursingStation.email}
                  </a>
                </div>
              </div>

              <Separator className="bg-green-200" />

              <div>
                <h4 className="font-medium text-sm mb-2 text-green-900">Hours of Operation</h4>
                <div className="space-y-1 text-sm text-green-700">
                  <p>Regular: {nursingStation.hours.regular}</p>
                  <p>Weekend: {nursingStation.hours.weekend}</p>
                  <p className="text-emerald-800 font-medium">
                    {nursingStation.hours.emergency}
                  </p>
                </div>
              </div>

              <Separator className="bg-green-200" />

              <div>
                <h4 className="font-medium text-sm mb-2 text-green-900">Services Available</h4>
                <div className="grid grid-cols-2 gap-1 text-xs">
                  {nursingStation.services.map((service, index) => (
                    <div key={index} className="flex items-center gap-1">
                      <div className="w-1 h-1 bg-green-600 rounded-full"></div>
                      <span className="text-green-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="bg-green-200" />

              <div>
                <h4 className="font-medium text-sm mb-2 text-green-900">Staff</h4>
                <div className="space-y-2">
                  {nursingStation.staff.map((staff, index) => (
                    <div key={index} className="text-sm">
                      <p className="font-medium text-green-900">{staff.name}</p>
                      <p className="text-green-700 text-xs">{staff.title}</p>
                      {staff.specialties && (
                        <p className="text-green-600 text-xs">
                          Specialties: {staff.specialties.join(", ")}
                        </p>
                      )}
                      {staff.schedule && (
                        <p className="text-green-600 text-xs">
                          Available: {staff.schedule}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button
                  className="flex-1 bg-green-700 hover:bg-green-800 text-white"
                  onClick={() => window.open(`tel:${nursingStation.mainPhone}`)}
                >
                  <Phone className="h-3 w-3 mr-1" />
                  Call Main Line
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-green-300 text-green-700 hover:bg-green-50"
                  onClick={() => window.open(`mailto:${nursingStation.email}`)}
                >
                  <Mail className="h-3 w-3 mr-1" />
                  Email
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}