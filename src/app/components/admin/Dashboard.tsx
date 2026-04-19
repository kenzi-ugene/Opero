import { useState } from "react";
import { useNavigate } from "react-router";
import { 
  LayoutDashboard, 
  FileText, 
  Briefcase, 
  Mail, 
  Settings,
  LogOut,
  Save,
  Image as ImageIcon
} from "lucide-react";
import { toast } from "sonner";
import React from "react";

type Section = "overview" | "home" | "services" | "about" | "contact" | "settings";

export function Dashboard() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<Section>("overview");

  const handleLogout = () => {
    localStorage.removeItem("cms_authenticated");
    toast.success("Logged out successfully");
    navigate("/admin/login");
  };

  const menuItems = [
    { id: "overview" as Section, label: "Overview", icon: LayoutDashboard },
    { id: "home" as Section, label: "Home Page", icon: FileText },
    { id: "services" as Section, label: "Services", icon: Briefcase },
    { id: "about" as Section, label: "About", icon: FileText },
    { id: "contact" as Section, label: "Contact", icon: Mail },
    { id: "settings" as Section, label: "Settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 sticky top-0 bg-white z-50">
        <div className="flex items-center justify-between px-8 lg:px-12 h-20">
          <h1 className="text-2xl font-light tracking-wider text-black">CMS</h1>
          <button
            onClick={handleLogout}
            className="flex items-center text-sm text-gray-600 hover:text-black transition-colors"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r border-gray-100 min-h-[calc(100vh-5rem)] sticky top-20">
          <nav className="p-8">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded transition-colors ${
                      activeSection === item.id
                        ? "bg-black text-white"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="text-sm">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 lg:p-12">
          {activeSection === "overview" && <OverviewSection />}
          {activeSection === "home" && <HomeSection />}
          {activeSection === "services" && <ServicesSection />}
          {activeSection === "about" && <AboutSection />}
          {activeSection === "contact" && <ContactSection />}
          {activeSection === "settings" && <SettingsSection />}
        </main>
      </div>
    </div>
  );
}

function OverviewSection() {
  const stats = [
    { label: "Total Pages", value: "4" },
    { label: "Services Listed", value: "8" },
    { label: "Last Updated", value: "Today" },
    { label: "Status", value: "Published" },
  ];

  return (
    <div>
      <h2 className="text-4xl font-light tracking-tight text-black mb-12">Overview</h2>
      
      <div className="grid md:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => (
          <div key={index} className="border border-gray-200 p-6">
            <div className="text-3xl font-light text-black mb-2">{stat.value}</div>
            <div className="text-sm text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 pt-8">
        <h3 className="text-xl font-light mb-6">Quick Actions</h3>
        <div className="space-y-3">
          <button className="text-sm text-gray-700 hover:text-black transition-colors">
            → Update hero section
          </button>
          <br />
          <button className="text-sm text-gray-700 hover:text-black transition-colors">
            → Edit services
          </button>
          <br />
          <button className="text-sm text-gray-700 hover:text-black transition-colors">
            → Manage contact information
          </button>
        </div>
      </div>
    </div>
  );
}

function HomeSection() {
  const [content, setContent] = useState({
    heroTitle: "IT Solutions",
    heroSubtitle: "Built Around You",
    heroDescription:
      "Opero specializes in website development, system development, apps, web design, consulting, and more—so your technology works as hard as your team does.",
    stat1: "500+",
    stat1Label: "Projects",
    stat2: "200+",
    stat2Label: "Clients",
    stat3: "10+",
    stat3Label: "Years",
    stat4: "50+",
    stat4Label: "Experts",
  });

  const handleSave = () => {
    toast.success("Home page content updated");
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl font-light tracking-tight text-black">Home Page</h2>
        <button
          onClick={handleSave}
          className="flex items-center text-sm tracking-wider border-b-2 border-black pb-1 hover:border-gray-400 transition-colors group"
        >
          <Save className="mr-2 w-4 h-4" />
          SAVE CHANGES
        </button>
      </div>

      <div className="space-y-12">
        {/* Hero Section */}
        <div className="border-b border-gray-200 pb-12">
          <h3 className="text-xl font-light mb-8">Hero Section</h3>
          <div className="space-y-6">
            <div>
              <label className="block text-sm tracking-wider text-gray-400 mb-3">
                Title Line 1
              </label>
              <input
                type="text"
                value={content.heroTitle}
                onChange={(e) => setContent({ ...content, heroTitle: e.target.value })}
                className="w-full bg-transparent border-b border-gray-300 pb-3 text-black focus:border-black focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm tracking-wider text-gray-400 mb-3">
                Title Line 2
              </label>
              <input
                type="text"
                value={content.heroSubtitle}
                onChange={(e) => setContent({ ...content, heroSubtitle: e.target.value })}
                className="w-full bg-transparent border-b border-gray-300 pb-3 text-black focus:border-black focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm tracking-wider text-gray-400 mb-3">
                Description
              </label>
              <textarea
                value={content.heroDescription}
                onChange={(e) => setContent({ ...content, heroDescription: e.target.value })}
                rows={3}
                className="w-full bg-transparent border-b border-gray-300 pb-3 text-black focus:border-black focus:outline-none transition-colors resize-none"
              />
            </div>
            <div>
              <label className="block text-sm tracking-wider text-gray-400 mb-3">
                Hero Image
              </label>
              <button className="flex items-center text-sm text-gray-700 hover:text-black transition-colors">
                <ImageIcon className="w-4 h-4 mr-2" />
                Upload Image
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div>
          <h3 className="text-xl font-light mb-8">Statistics</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm tracking-wider text-gray-400 mb-3">
                Stat 1 Number
              </label>
              <input
                type="text"
                value={content.stat1}
                onChange={(e) => setContent({ ...content, stat1: e.target.value })}
                className="w-full bg-transparent border-b border-gray-300 pb-3 text-black focus:border-black focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm tracking-wider text-gray-400 mb-3">
                Stat 1 Label
              </label>
              <input
                type="text"
                value={content.stat1Label}
                onChange={(e) => setContent({ ...content, stat1Label: e.target.value })}
                className="w-full bg-transparent border-b border-gray-300 pb-3 text-black focus:border-black focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm tracking-wider text-gray-400 mb-3">
                Stat 2 Number
              </label>
              <input
                type="text"
                value={content.stat2}
                onChange={(e) => setContent({ ...content, stat2: e.target.value })}
                className="w-full bg-transparent border-b border-gray-300 pb-3 text-black focus:border-black focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm tracking-wider text-gray-400 mb-3">
                Stat 2 Label
              </label>
              <input
                type="text"
                value={content.stat2Label}
                onChange={(e) => setContent({ ...content, stat2Label: e.target.value })}
                className="w-full bg-transparent border-b border-gray-300 pb-3 text-black focus:border-black focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm tracking-wider text-gray-400 mb-3">
                Stat 3 Number
              </label>
              <input
                type="text"
                value={content.stat3}
                onChange={(e) => setContent({ ...content, stat3: e.target.value })}
                className="w-full bg-transparent border-b border-gray-300 pb-3 text-black focus:border-black focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm tracking-wider text-gray-400 mb-3">
                Stat 3 Label
              </label>
              <input
                type="text"
                value={content.stat3Label}
                onChange={(e) => setContent({ ...content, stat3Label: e.target.value })}
                className="w-full bg-transparent border-b border-gray-300 pb-3 text-black focus:border-black focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm tracking-wider text-gray-400 mb-3">
                Stat 4 Number
              </label>
              <input
                type="text"
                value={content.stat4}
                onChange={(e) => setContent({ ...content, stat4: e.target.value })}
                className="w-full bg-transparent border-b border-gray-300 pb-3 text-black focus:border-black focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm tracking-wider text-gray-400 mb-3">
                Stat 4 Label
              </label>
              <input
                type="text"
                value={content.stat4Label}
                onChange={(e) => setContent({ ...content, stat4Label: e.target.value })}
                className="w-full bg-transparent border-b border-gray-300 pb-3 text-black focus:border-black focus:outline-none transition-colors"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServicesSection() {
  const [services, setServices] = useState([
    {
      title: "Website Development",
      description:
        "Modern sites and web applications tailored to your brand, performance, and growth goals.",
    },
    {
      title: "System Development",
      description:
        "Custom systems and business software engineered for reliability, scale, and maintainability.",
    },
  ]);

  const handleSave = () => {
    toast.success("Services updated");
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl font-light tracking-tight text-black">Services</h2>
        <button
          onClick={handleSave}
          className="flex items-center text-sm tracking-wider border-b-2 border-black pb-1 hover:border-gray-400 transition-colors group"
        >
          <Save className="mr-2 w-4 h-4" />
          SAVE CHANGES
        </button>
      </div>

      <div className="space-y-8">
        {services.map((service, index) => (
          <div key={index} className="border border-gray-200 p-8">
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm text-gray-400">Service {index + 1}</span>
              <button className="text-sm text-gray-500 hover:text-black transition-colors">
                Remove
              </button>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-sm tracking-wider text-gray-400 mb-3">
                  Service Title
                </label>
                <input
                  type="text"
                  value={service.title}
                  onChange={(e) => {
                    const newServices = [...services];
                    newServices[index].title = e.target.value;
                    setServices(newServices);
                  }}
                  className="w-full bg-transparent border-b border-gray-300 pb-3 text-black focus:border-black focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm tracking-wider text-gray-400 mb-3">
                  Description
                </label>
                <textarea
                  value={service.description}
                  onChange={(e) => {
                    const newServices = [...services];
                    newServices[index].description = e.target.value;
                    setServices(newServices);
                  }}
                  rows={3}
                  className="w-full bg-transparent border-b border-gray-300 pb-3 text-black focus:border-black focus:outline-none transition-colors resize-none"
                />
              </div>
            </div>
          </div>
        ))}
        
        <button className="text-sm text-gray-700 hover:text-black transition-colors">
          + Add New Service
        </button>
      </div>
    </div>
  );
}

function AboutSection() {
  const [content, setContent] = useState({
    storyTitle: "Our Story",
    storyParagraph1: "Founded in 2016, we began with a singular vision...",
    missionTitle: "Our Philosophy",
    principle1: "Excellence",
    principle1Desc: "We pursue perfection in every detail, never settling for good enough.",
  });

  const handleSave = () => {
    toast.success("About page updated");
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl font-light tracking-tight text-black">About Page</h2>
        <button
          onClick={handleSave}
          className="flex items-center text-sm tracking-wider border-b-2 border-black pb-1 hover:border-gray-400 transition-colors group"
        >
          <Save className="mr-2 w-4 h-4" />
          SAVE CHANGES
        </button>
      </div>

      <div className="space-y-12">
        <div>
          <h3 className="text-xl font-light mb-8">Story Section</h3>
          <div className="space-y-6">
            <div>
              <label className="block text-sm tracking-wider text-gray-400 mb-3">
                Section Title
              </label>
              <input
                type="text"
                value={content.storyTitle}
                onChange={(e) => setContent({ ...content, storyTitle: e.target.value })}
                className="w-full bg-transparent border-b border-gray-300 pb-3 text-black focus:border-black focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm tracking-wider text-gray-400 mb-3">
                First Paragraph
              </label>
              <textarea
                value={content.storyParagraph1}
                onChange={(e) => setContent({ ...content, storyParagraph1: e.target.value })}
                rows={4}
                className="w-full bg-transparent border-b border-gray-300 pb-3 text-black focus:border-black focus:outline-none transition-colors resize-none"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-12">
          <h3 className="text-xl font-light mb-8">Philosophy Section</h3>
          <div className="space-y-6">
            <div>
              <label className="block text-sm tracking-wider text-gray-400 mb-3">
                Section Title
              </label>
              <input
                type="text"
                value={content.missionTitle}
                onChange={(e) => setContent({ ...content, missionTitle: e.target.value })}
                className="w-full bg-transparent border-b border-gray-300 pb-3 text-black focus:border-black focus:outline-none transition-colors"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactSection() {
  const [contact, setContact] = useState({
    email: "operomykl@gmail.com",
    phone: "+6011 6490 6195",
    address: "A-26-05, Petalz residences @ EXSIM, Jalan Kampung Pasir, Kuala Lumpur, Malaysia 58000",
  });

  const handleSave = () => {
    toast.success("Contact information updated");
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl font-light tracking-tight text-black">Contact Information</h2>
        <button
          onClick={handleSave}
          className="flex items-center text-sm tracking-wider border-b-2 border-black pb-1 hover:border-gray-400 transition-colors group"
        >
          <Save className="mr-2 w-4 h-4" />
          SAVE CHANGES
        </button>
      </div>

      <div className="space-y-8 max-w-2xl">
        <div>
          <label className="block text-sm tracking-wider text-gray-400 mb-3">
            Email Address
          </label>
          <input
            type="email"
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
            className="w-full bg-transparent border-b border-gray-300 pb-3 text-black focus:border-black focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm tracking-wider text-gray-400 mb-3">
            Phone Number
          </label>
          <input
            type="tel"
            value={contact.phone}
            onChange={(e) => setContact({ ...contact, phone: e.target.value })}
            className="w-full bg-transparent border-b border-gray-300 pb-3 text-black focus:border-black focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm tracking-wider text-gray-400 mb-3">
            Office Address
          </label>
          <textarea
            value={contact.address}
            onChange={(e) => setContact({ ...contact, address: e.target.value })}
            rows={3}
            className="w-full bg-transparent border-b border-gray-300 pb-3 text-black focus:border-black focus:outline-none transition-colors resize-none"
          />
        </div>
      </div>
    </div>
  );
}

function SettingsSection() {
  const [settings, setSettings] = useState({
    siteName: "OPERO",
    tagline: "IT Solutions Built Around You",
  });

  const handleSave = () => {
    toast.success("Settings updated");
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl font-light tracking-tight text-black">Settings</h2>
        <button
          onClick={handleSave}
          className="flex items-center text-sm tracking-wider border-b-2 border-black pb-1 hover:border-gray-400 transition-colors group"
        >
          <Save className="mr-2 w-4 h-4" />
          SAVE CHANGES
        </button>
      </div>

      <div className="space-y-12 max-w-2xl">
        <div>
          <h3 className="text-xl font-light mb-8">General Settings</h3>
          <div className="space-y-6">
            <div>
              <label className="block text-sm tracking-wider text-gray-400 mb-3">
                Site Name
              </label>
              <input
                type="text"
                value={settings.siteName}
                onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                className="w-full bg-transparent border-b border-gray-300 pb-3 text-black focus:border-black focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm tracking-wider text-gray-400 mb-3">
                Tagline
              </label>
              <input
                type="text"
                value={settings.tagline}
                onChange={(e) => setSettings({ ...settings, tagline: e.target.value })}
                className="w-full bg-transparent border-b border-gray-300 pb-3 text-black focus:border-black focus:outline-none transition-colors"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-12">
          <h3 className="text-xl font-light mb-8">Account</h3>
          <div className="space-y-4">
            <button className="text-sm text-gray-700 hover:text-black transition-colors">
              → Change password
            </button>
            <br />
            <button className="text-sm text-gray-700 hover:text-black transition-colors">
              → Manage users
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
