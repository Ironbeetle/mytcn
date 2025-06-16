"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Menu,
  Home,
  Users,
  FileText,
  Settings,
  LogOut,
  Megaphone,
  Calendar,
} from "lucide-react";

interface MenuItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
  active?: boolean;
}

interface MobileMenuProps {
  currentPage?: string;
  userInfo?: {
    name: string;
    email: string;
  };
}

export default function MobileMenu({ 
  currentPage = "",
  userInfo = { name: "Community Member", email: "member@firstnation.ca" }
}: MobileMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems: MenuItem[] = [
    { 
      icon: Home, 
      label: "Home", 
      href: "/", 
      active: currentPage === "home" 
    },
    { 
      icon: Megaphone, 
      label: "Chief & Council", 
      href: "/ChiefnCouncil", 
      active: currentPage === "chief-council" 
    },
    { 
      icon: Calendar, 
      label: "Bulletin Board", 
      href: "/BulletinBoard", 
      active: currentPage === "bulletinboard" 
    },
    { 
      icon: Calendar, 
      label: "Emergency", 
      href: "/Emergency", 
      active: currentPage === "emergency" 
    },
    { 
      icon: FileText, 
      label: "Contact Directory", 
      href: "/ContactDirectory", 
      active: currentPage === "contact-directory" 
    },
    { 
      icon: Calendar, 
      label: "Programs Drectory", 
      href: "/ProgramsDirectory", 
      active: currentPage === "programs-directory" 
    },
    { 
      icon: Settings, 
      label: "TCN Health", 
      href: "/TCNHealth", 
      active: currentPage === "tcn-health" 
    },
    { 
      icon: LogOut, 
      label: "Sign Out", 
      href: "/logout" 
    },
  ];

  const handleNavigation = (href: string) => {
    // You can customize this based on your routing setup
    if (href === "/logout") {
      // Handle logout logic
      console.log("Logging out...");
    } else {
      // Handle navigation - replace with your router logic
      window.location.href = href;
    }
    setIsMenuOpen(false);
  };

  return (
    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="p-2">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80">
        <SheetHeader>
          <SheetTitle className="text-left">Navigation</SheetTitle>
        </SheetHeader>
        <div className="mt-6 space-y-2">
          {menuItems.map((item, index) => (
            <Button
              key={index}
              variant={item.active ? "default" : "ghost"}
              className="w-full justify-start gap-3 h-12"
              onClick={() => handleNavigation(item.href)}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Button>
          ))}
        </div>
        
        {/* User Info Section */}
        <div className="absolute bottom-6 left-6 right-6">
          <Separator className="mb-4" />
          <div className="text-sm text-gray-600">
            <p className="font-medium">{userInfo.name}</p>
            <p>{userInfo.email}</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}