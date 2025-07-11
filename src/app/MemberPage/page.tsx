"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MobileMenu from "@/components/mobile-menu";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Camera,
  QrCode,
  Bell,
  AlertCircle,
  CheckCircle,
  Info,
  Settings,
  Download,
} from "lucide-react";

export default function UserProfilePage() {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  // Mock user data - this would come from your backend
  const userData = {
    id: "FN-2025-001234",
    firstName: "Lenny",
    lastName: "Greenfeather",
    email: "lenny.greenfeather@firstnation.ca",
    phone: "(555) 123-4567",
    address: "123 Eagle Street, Community Name",
    dateOfBirth: "1985-03-15",
    membershipNumber: "TH-001234",
    registrationDate: "2020-01-15",
    status: "Active Member",
  };

  type MessageType = "alert" | "confirmation" | "reminder" | "invitation" | "notification";

  const userMessages: Array<{
    id: number;
    title: string;
    message: string;
    date: string;
    time: string;
    type: MessageType;
    read: boolean;
    sender: string;
  }> = [
    {
      id: 1,
      title: "Community Meeting Reminder",
      message:
        "Don't forget about tomorrow's community meeting at 7 PM in the Community Hall. We'll be discussing the new recreation center plans.",
      date: "2025-06-15",
      time: "2:30 PM",
      type: "reminder",
      read: false,
      sender: "Community Administration",
    },
    {
      id: 2,
      title: "Health Program Enrollment Confirmed",
      message:
        "Your enrollment in the Better Families Program has been confirmed. Your first appointment is scheduled for June 20th at 10 AM.",
      date: "2025-06-14",
      time: "11:15 AM",
      type: "confirmation",
      read: false,
      sender: "Health Services",
    },
    {
      id: 3,
      title: "Document Request Completed",
      message:
        "Your requested status certificate has been processed and is ready for pickup at the Band Office during regular business hours.",
      date: "2025-06-13",
      time: "3:45 PM",
      type: "notification",
      read: true,
      sender: "Band Office",
    },
    {
      id: 4,
      title: "Utility Bill Payment Due",
      message:
        "Your utility bill payment of $127.50 is due on June 20th. You can pay online, by phone, or in person at the Band Office.",
      date: "2025-06-12",
      time: "9:00 AM",
      type: "alert",
      read: true,
      sender: "Finance Department",
    },
    {
      id: 5,
      title: "Cultural Event Invitation",
      message:
        "You're invited to participate in the upcoming Traditional Craft Workshop on June 22nd. Please RSVP by June 18th.",
      date: "2025-06-10",
      time: "1:20 PM",
      type: "invitation",
      read: true,
      sender: "Cultural Committee",
    },
  ];

  const getMessageTypeConfig = (type: "alert" | "confirmation" | "reminder" | "invitation" | "notification") => {
    switch (type) {
      case "alert":
        return {
          icon: AlertCircle,
          color: "bg-red-50 text-red-800 border-red-200",
          bgColor: "bg-red-50",
        };
      case "confirmation":
        return {
          icon: CheckCircle,
          color: "bg-green-50 text-green-800 border-green-200",
          bgColor: "bg-green-50",
        };
      case "reminder":
        return {
          icon: Bell,
          color: "bg-emerald-50 text-emerald-800 border-emerald-200",
          bgColor: "bg-emerald-50",
        };
      case "invitation":
        return {
          icon: Calendar,
          color: "bg-teal-50 text-teal-800 border-teal-200",
          bgColor: "bg-teal-50",
        };
      default:
        return {
          icon: Info,
          color: "bg-stone-50 text-stone-800 border-stone-200",
          bgColor: "bg-stone-50",
        };
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && typeof e.target.result === "string") {
          setProfileImage(e.target.result);
          // Here you would typically save to localStorage or send to your backend
          localStorage.setItem("userProfileImage", e.target.result);
        }
      };
      reader.readAsDataURL(file);
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

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`;
  };

  const unreadCount = userMessages.filter((msg) => !msg.read).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 pb-20">
      {/* Header with Mobile Menu */}
      <div className="bg-gradient-to-r from-green-800 to-emerald-800 border-b border-green-700 sticky top-0 z-10 shadow-lg">
        <div className="px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-green-50">My Profile</h1>
            <p className="text-sm text-green-100 mt-1">
              Personal information and messages
            </p>
          </div>

          <MobileMenu currentPage="profile" />
        </div>
      </div>

      <div className="px-4 py-4 space-y-6">
        {/* Profile Information Card */}
        <section>
          <Card className="shadow-md bg-white/80 backdrop-blur-sm border-green-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-base text-green-900">Profile Information</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 space-y-4">
              {/* Profile Image Section */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Avatar className="h-20 w-20 ring-2 ring-green-200">
                    <AvatarImage
                      src="/Headshot.jpg"
                      alt="Profile"
                    />
                    <AvatarFallback className="text-lg bg-green-100 text-green-800">
                      {getInitials(userData.firstName, userData.lastName)}
                    </AvatarFallback>
                  </Avatar>
                  <label
                    htmlFor="profile-upload"
                    className="absolute -bottom-1 -right-1 bg-green-700 text-white rounded-full p-1.5 cursor-pointer hover:bg-green-800 transition-colors"
                  >
                    <Camera className="h-3 w-3" />
                  </label>
                  <input
                    id="profile-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-green-900">
                    {userData.firstName} {userData.lastName}
                  </h3>
                  <p className="text-sm text-green-700">{userData.status}</p>
                  <p className="text-xs text-green-600">
                    Member ID: {userData.membershipNumber}
                  </p>
                </div>
              </div>
              <Separator className="bg-green-200" />
            </CardContent>
          </Card>
        </section>

        {/* Member Barcode Section */}
        <section>
          <Card className="shadow-md bg-white/80 backdrop-blur-sm border-green-200">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base flex items-center gap-2 text-green-900">
                  <QrCode className="h-4 w-4 text-green-700" />
                  Member Barcode
                </CardTitle>
                <Button 
                  size="sm" 
                  variant="outline"
                  className="border-green-300 text-green-700 hover:bg-green-50"
                >
                  <Download className="h-3 w-3 mr-1" />
                  Save
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-lg p-6 text-center">
                {/* Placeholder barcode - replace with actual barcode generation */}
                <div className="bg-white border border-green-200 h-20 flex items-center justify-center rounded mb-3">
                  <div className="flex gap-1">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-1 bg-green-800 ${
                          i % 3 === 0 ? "h-16" : i % 2 === 0 ? "h-12" : "h-8"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm font-mono text-green-900">{userData.membershipNumber}</p>
                <p className="text-xs text-green-700 mt-1">
                  {userData.firstName} {userData.lastName}
                </p>
              </div>
              <p className="text-xs text-green-600 mt-3 text-center">
                Present this barcode when accessing community services
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Messages Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-emerald-700" />
              <h2 className="text-lg font-semibold text-green-900">Messages</h2>
              {unreadCount > 0 && (
                <Badge className="bg-red-50 text-red-800 border-red-200 text-xs">
                  {unreadCount} new
                </Badge>
              )}
            </div>
            <Button 
              size="sm" 
              variant="outline"
              className="border-green-300 text-green-700 hover:bg-green-50"
            >
              <Settings className="h-3 w-3 mr-1" />
              Settings
            </Button>
          </div>

          <div className="space-y-3">
            {userMessages.map((message) => {
              const typeConfig = getMessageTypeConfig(message.type);
              const TypeIcon = typeConfig.icon;

              return (
                <Card
                  key={message.id}
                  className={`shadow-md bg-white/80 backdrop-blur-sm border-green-200 hover:shadow-lg transition-shadow ${
                    !message.read ? "ring-2 ring-emerald-200" : ""
                  }`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2 flex-1">
                        {!message.read && (
                          <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                        )}
                        <CardTitle className="text-base leading-tight text-green-900">
                          {message.title}
                        </CardTitle>
                      </div>
                      <Badge
                        className={`text-xs ${typeConfig.color}`}
                        variant="outline"
                      >
                        <TypeIcon className="h-3 w-3 mr-1" />
                        {message.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-3">
                    <p className="text-sm text-green-800 leading-relaxed">
                      {message.message}
                    </p>

                    <Separator className="bg-green-200" />

                    <div className="flex items-center justify-between text-xs text-green-600">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{formatDate(message.date)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{message.time}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span className="font-medium text-green-700">{message.sender}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Load More Messages */}
            <Button 
              variant="outline" 
              className="w-full border-green-300 text-green-700 hover:bg-green-50"
            >
              Load More Messages
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}