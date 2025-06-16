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
        return "bg-green-100 text-green-800 border-green-200";
      case "waitlist":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "closed":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const featuredPrograms = healthPrograms.filter((program) => program.featured);
  const regularPrograms = healthPrograms.filter((program) => !program.featured);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header with Mobile Menu */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900">
              Health & Wellness
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              Community health programs and services
            </p>
          </div>
          <MobileMenu currentPage="health" />
        </div>
      </div>
      <div className="px-4 py-4 space-y-6">
        {/* Emergency Contact Banner */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
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
            className="bg-red-600 hover:bg-red-700"
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
              <h2 className="text-lg font-semibold text-gray-900">
                Key Programs
              </h2>
            </div>
            <div className="space-y-3">
              {featuredPrograms.map((program) => (
                <Card
                  key={program.id}
                  className="shadow-sm ring-2 ring-blue-200 bg-blue-50"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-base leading-tight flex-1">
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
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {program.description}
                    </p>

                    <div className="space-y-2">
                      <div className="flex items-start gap-2 text-sm">
                        <Users className="h-4 w-4 text-gray-400 mt-0.5" />
                        <span>
                          <strong>Eligibility:</strong> {program.eligibility}
                        </span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <Activity className="h-4 w-4 text-gray-400 mt-0.5" />
                        <div>
                          <strong>Services:</strong>
                          <ul className="mt-1 ml-4 list-disc text-xs space-y-1">
                            {program.services.map((service, index) => (
                              <li key={index}>{service}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span>{program.hours}</span>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">{program.contact}</p>
                        <p className="text-xs text-gray-500">{program.phone}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 px-3"
                          onClick={() => window.open(`tel:${program.phone}`)}
                        >
                          <Phone className="h-3 w-3 mr-1" />
                          Call
                        </Button>
                        <Button
                          size="sm"
                          className="h-8 px-3"
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
            <Baby className="h-5 w-5 text-purple-600" />
            <h2 className="text-lg font-semibold text-gray-900">
              Child & Family Programs
            </h2>
          </div>

          <div className="space-y-3">
            {regularPrograms.map((program) => (
              <Card key={program.id} className="shadow-sm">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2 flex-1">
                      {program.urgent && (
                        <AlertCircle className="h-4 w-4 text-red-600" />
                      )}
                      <CardTitle className="text-base leading-tight">
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
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-start gap-2 text-sm">
                      <Users className="h-4 w-4 text-gray-400 mt-0.5" />
                      <span>
                        <strong>Eligibility:</strong> {program.eligibility}
                      </span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <Activity className="h-4 w-4 text-gray-400 mt-0.5" />
                      <div>
                        <strong>Services:</strong>
                        <ul className="mt-1 ml-4 list-disc text-xs space-y-1">
                          {program.services.map((service, index) => (
                            <li key={index}>{service}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span>{program.hours}</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">{program.contact}</p>
                      <p className="text-xs text-gray-500">{program.phone}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-8 px-3"
                        onClick={() => window.open(`tel:${program.phone}`)}
                      >
                        <Phone className="h-3 w-3 mr-1" />
                        Call
                      </Button>
                      <Button
                        size="sm"
                        className="h-8 px-3"
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
            <Stethoscope className="h-5 w-5 text-green-600" />
            <h2 className="text-lg font-semibold text-gray-900">
              Community Nursing Station
            </h2>
          </div>

          <Card className="shadow-sm ring-2 ring-green-200 bg-green-50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">{nursingStation.name}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span>{nursingStation.address}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <a
                    href={`tel:${nursingStation.mainPhone}`}
                    className="text-blue-600 font-medium"
                  >
                    {nursingStation.mainPhone}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <AlertCircle className="h-4 w-4 text-red-400" />
                  <a
                    href={`tel:${nursingStation.emergencyPhone}`}
                    className="text-red-600 font-medium"
                  >
                    Emergency: {nursingStation.emergencyPhone}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <a
                    href={`mailto:${nursingStation.email}`}
                    className="text-blue-600"
                  >
                    {nursingStation.email}
                  </a>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-medium text-sm mb-2">Hours of Operation</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>Regular: {nursingStation.hours.regular}</p>
                  <p>Weekend: {nursingStation.hours.weekend}</p>
                  <p className="text-green-700 font-medium">
                    {nursingStation.hours.emergency}
                  </p>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-medium text-sm mb-2">Services Available</h4>
                <div className="grid grid-cols-2 gap-1 text-xs">
                  {nursingStation.services.map((service, index) => (
                    <div key={index} className="flex items-center gap-1">
                      <div className="w-1 h-1 bg-green-600 rounded-full"></div>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-medium text-sm mb-2">Staff</h4>
                <div className="space-y-2">
                  {nursingStation.staff.map((staff, index) => (
                    <div key={index} className="text-sm">
                      <p className="font-medium">{staff.name}</p>
                      <p className="text-gray-600 text-xs">{staff.title}</p>
                      {staff.specialties && (
                        <p className="text-gray-500 text-xs">
                          Specialties: {staff.specialties.join(", ")}
                        </p>
                      )}
                      {staff.schedule && (
                        <p className="text-gray-500 text-xs">
                          Available: {staff.schedule}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button
                  className="flex-1"
                  onClick={() => window.open(`tel:${nursingStation.mainPhone}`)}
                >
                  <Phone className="h-3 w-3 mr-1" />
                  Call Main Line
                </Button>
                <Button
                  variant="outline"
                  className="flex-1"
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