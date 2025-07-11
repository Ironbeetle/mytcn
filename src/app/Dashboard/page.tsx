"use client";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
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
  Sun,
  Cloud,
  CloudRain,
  Wind,
  Thermometer,
  Droplets,
  Eye,
  MapPin,
  Bell,
  Heart,
  Shield,
  Activity,
  TrendingUp,
  Wifi,
  Zap,
  Car,
  AlertTriangle,
  TreePine,
} from "lucide-react";

export default function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const menuItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Megaphone, label: "Chief & Council", href: "/chief-council", active: true },
    { icon: Users, label: "Community Programs", href: "/community" },
    { icon: FileText, label: "Documents", href: "/documents" },
    { icon: Calendar, label: "Events", href: "/events" },
    { icon: Settings, label: "Settings", href: "/settings" },
    { icon: LogOut, label: "Sign Out", href: "/logout" },
  ];

  // Mock weather data - in real app, this would come from a weather API
  const weatherData = {
    current: {
      temperature: 18,
      condition: "Partly Cloudy",
      icon: Cloud,
      humidity: 65,
      windSpeed: 12,
      visibility: 10,
      feelsLike: 20,
    },
    forecast: [
      { day: "Today", high: 22, low: 15, condition: "Cloudy", icon: Cloud },
      { day: "Tomorrow", high: 25, low: 18, condition: "Sunny", icon: Sun },
      { day: "Wed", high: 19, low: 12, condition: "Rain", icon: CloudRain },
      { day: "Thu", high: 23, low: 16, condition: "Sunny", icon: Sun },
    ],
  };

  // Community stats
  const communityStats = [
    {
      label: "New Messages",
      value: "3",
      icon: Bell,
      color: "text-amber-700",
      bgColor: "bg-amber-50",
    },
   
    {
      label: "New Public Posts",
      value: "8",
      icon: Calendar,
      color: "text-emerald-700",
      bgColor: "bg-emerald-50",
    },
  ];

  // Service status
  const serviceStatus = [
    { name: "Internet", status: "operational", icon: Wifi },
    { name: "Power", status: "operational", icon: Zap },
    { name: "Water", status: "maintenance", icon: Droplets },
    { name: "Roads", status: "construction", icon: Car },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "operational":
        return "text-green-600";
      case "maintenance":
        return "text-amber-600";
      case "construction":
        return "text-orange-600";
      case "outage":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 pb-20">
      {/* Header with Hamburger Menu */}
      <div className="bg-gradient-to-r from-green-800 to-emerald-800 border-b border-green-700 sticky top-0 z-10 shadow-lg">
        <div className="px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-green-50">Tansi</h1>
            <p className="text-sm text-green-100 mt-1">
              TCN Member Portal
            </p>
          </div> 
          <div className="text-right">
            <MobileMenu currentPage="dashboard" />
          </div>
        </div>
      </div>

      <div className="px-4 py-4 space-y-6">
        {/* Weather Widget */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Sun className="h-5 w-5 text-amber-600" />
            <h2 className="text-lg font-semibold text-green-900">Weather</h2>
            <Badge className="bg-green-50 text-green-800 border-green-200 text-xs">
              Live
            </Badge>
          </div>

          <Card className="shadow-md bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <weatherData.current.icon className="h-8 w-8 text-blue-600" />
                  <div>
                    <div className="text-2xl font-bold text-blue-900">
                      {weatherData.current.temperature}°C
                    </div>
                    <div className="text-sm text-blue-700">
                      {weatherData.current.condition}
                    </div>
                  </div>
                </div>
                <div className="text-right text-sm text-blue-700">
                  <div className="flex items-center gap-1 mb-1">
                    <Thermometer className="h-3 w-3" />
                    <span>Feels like {weatherData.current.feelsLike}°C</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>TCN Community</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-4 text-xs">
                <div className="text-center">
                  <Droplets className="h-4 w-4 text-blue-600 mx-auto mb-1" />
                  <div className="text-blue-900 font-medium">
                    {weatherData.current.humidity}%
                  </div>
                  <div className="text-blue-700">Humidity</div>
                </div>
                <div className="text-center">
                  <Wind className="h-4 w-4 text-blue-600 mx-auto mb-1" />
                  <div className="text-blue-900 font-medium">
                    {weatherData.current.windSpeed} km/h
                  </div>
                  <div className="text-blue-700">Wind</div>
                </div>
                <div className="text-center">
                  <Eye className="h-4 w-4 text-blue-600 mx-auto mb-1" />
                  <div className="text-blue-900 font-medium">
                    {weatherData.current.visibility} km
                  </div>
                  <div className="text-blue-700">Visibility</div>
                </div>
              </div>

              <Separator className="bg-blue-200 mb-4" />

              <div className="grid grid-cols-4 gap-2 text-xs">
                {weatherData.forecast.map((day, index) => (
                  <div key={index} className="text-center">
                    <div className="text-blue-700 mb-1">{day.day}</div>
                    <day.icon className="h-4 w-4 text-blue-600 mx-auto mb-1" />
                    <div className="text-blue-900 font-medium">
                      {day.high}°/{day.low}°
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Community Stats */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="h-5 w-5 text-emerald-700" />
            <h2 className="text-lg font-semibold text-green-900">Community Overview</h2>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {communityStats.map((stat, index) => (
              <Card key={index} className="shadow-md bg-white/80 backdrop-blur-sm border-green-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                      <stat.icon className={`h-4 w-4 ${stat.color}`} />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-green-900">{stat.value}</div>
                      <div className="text-xs text-green-700">{stat.label}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Service Status */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Activity className="h-5 w-5 text-teal-700" />
            <h2 className="text-lg font-semibold text-green-900">Service Status</h2>
          </div>

          <Card className="shadow-md bg-white/80 backdrop-blur-sm border-green-200">
            <CardContent className="p-4">
              <div className="grid grid-cols-2 gap-4">
                {serviceStatus.map((service, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <service.icon className={`h-4 w-4 ${getStatusColor(service.status)}`} />
                    <span className="text-sm text-green-900">{service.name}</span>
                    <div className={`w-2 h-2 rounded-full ${
                      service.status === "operational" ? "bg-green-500" :
                      service.status === "maintenance" ? "bg-amber-500" :
                      service.status === "construction" ? "bg-orange-500" : "bg-red-500"
                    }`}></div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Emergency Contacts */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <h2 className="text-lg font-semibold text-green-900">Emergency Contacts</h2>
          </div>

          <Card className="shadow-md bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
            <CardContent className="p-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-red-900">Emergency Services</span>
                  <Button 
                    size="sm" 
                    className="bg-red-600 hover:bg-red-700 text-white h-8"
                    onClick={() => window.open("tel:911")}
                  >
                    <Phone className="h-3 w-3 mr-1" />
                    911
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-red-900">TCN Health Center</span>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-red-300 text-red-700 hover:bg-red-50 h-8"
                    onClick={() => window.open("tel:5553002000")}
                  >
                    <Phone className="h-3 w-3 mr-1" />
                    (555) 300-2000
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Main Navigation Cards */}
        <section>
          <div className="space-y-3">
            <Card className="shadow-md bg-white/80 backdrop-blur-sm border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <Bell className="h-5 w-5 text-emerald-700" />
                  <p className="text-sm text-green-800 font-medium leading-relaxed">
                    My Messages
                  </p>
                </div>
                <Separator className="bg-green-200" />
                <div className="flex items-center justify-between">
                  <Image
                    src="/tcnlogolg.png"
                    alt="TCN Logo"
                    width={80}
                    height={80}
                    className="w-16 h-auto"
                  />
                  <Button 
                    className="bg-green-700 hover:bg-green-800 text-white" 
                    asChild
                  >
                    <Link href="/MemberPage">View Messages</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md bg-white/80 backdrop-blur-sm border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-teal-700" />
                  <p className="text-sm text-green-800 font-medium leading-relaxed">
                    TCN Bulletin Board
                  </p>
                </div>
                <Separator className="bg-green-200" />
                <div className="flex items-center justify-between">
                  <Image
                    src="/tcnlogolg.png"
                    alt="TCN Logo"
                    width={80}
                    height={80}
                    className="w-16 h-auto"
                  />
                  <Button 
                    className="bg-green-700 hover:bg-green-800 text-white" 
                    asChild
                  >
                    <Link href="/BulletinBoard">View Bulletins</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md bg-white/80 backdrop-blur-sm border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <Crown className="h-5 w-5 text-amber-700" />
                  <p className="text-sm text-green-800 font-medium leading-relaxed">
                    Chief & Council
                  </p>
                </div>
                <Separator className="bg-green-200" />
                <div className="flex items-center justify-between">
                  <Image
                    src="/tcnlogolg.png"
                    alt="TCN Logo"
                    width={80}
                    height={80}
                    className="w-16 h-auto"
                  />
                  <Button 
                    className="bg-green-700 hover:bg-green-800 text-white" 
                    asChild
                  >
                    <Link href="/ChiefnCouncil">View Council</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md bg-white/80 backdrop-blur-sm border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-emerald-700" />
                  <p className="text-sm text-green-800 font-medium leading-relaxed">
                    TCN Band Office
                  </p>
                </div>
                <Separator className="bg-green-200" />
                <div className="flex items-center justify-between">
                  <Image
                    src="/tcnlogolg.png"
                    alt="TCN Logo"
                    width={80}
                    height={80}
                    className="w-16 h-auto"
                  />
                  <Button 
                    className="bg-green-700 hover:bg-green-800 text-white" 
                    asChild
                  >
                    <Link href="/ProgramsDirectory">View Directory</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md bg-white/80 backdrop-blur-sm border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-red-600" />
                  <p className="text-sm text-green-800 font-medium leading-relaxed">
                    Emergency Management
                  </p>
                </div>
                <Separator className="bg-green-200" />
                <div className="flex items-center justify-between">
                  <Image
                    src="/tcnlogolg.png"
                    alt="TCN Logo"
                    width={80}
                    height={80}
                    className="w-16 h-auto"
                  />
                  <Button 
                    className="bg-green-700 hover:bg-green-800 text-white" 
                    asChild
                  >
                    <Link href="/Emergency">Emergency Response</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md bg-white/80 backdrop-blur-sm border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <Heart className="h-5 w-5 text-red-600" />
                  <p className="text-sm text-green-800 font-medium leading-relaxed">
                    TCN Health & Wellness
                  </p>
                </div>
                <Separator className="bg-green-200" />
                <div className="flex items-center justify-between">
                  <Image
                    src="/tcnlogolg.png"
                    alt="TCN Logo"
                    width={80}
                    height={80}
                    className="w-16 h-auto"
                  />
                  <Button 
                    className="bg-green-700 hover:bg-green-800 text-white" 
                    asChild
                  >
                    <Link href="/TCNHealth">View Health & Wellness</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md bg-white/80 backdrop-blur-sm border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <TreePine className="h-5 w-5 text-green-700" />
                  <p className="text-sm text-green-800 font-medium leading-relaxed">
                    TCN Traditional Lifestyle
                  </p>
                </div>
                <Separator className="bg-green-200" />
                <div className="flex items-center justify-between">
                  <Image
                    src="/tcnlogolg.png"
                    alt="TCN Logo"
                    width={80}
                    height={80}
                    className="w-16 h-auto"
                  />
                  <Button 
                    className="bg-green-700 hover:bg-green-800 text-white" 
                    asChild
                  >
                    <Link href="/BulletinBoard">Learning Resources</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}