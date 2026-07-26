import { Link } from "react-router-dom";

function CyberSecurity() {
  const skills = [
    "Networking",
    "Linux",
    "Ethical Hacking",
    "Penetration Testing",
    "Cyber Laws",
    "Python",
    "Wireshark",
    "Nmap",
    "Burp Suite",
    "Kali Linux",
  ];

  const roadmap = [
    "Learn Computer Networks",
    "Master Linux",
    "Learn Cyber Security Fundamentals",
    "Practice Ethical Hacking",
    "Learn Python",
    "Master Security Tools",
    "Work on Labs & CTFs",
    "Earn Security Certifications",
    "Build Security Projects",
    "Apply for Cyber Security Jobs",
  ];

  const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Cisco",
    "IBM",
    "Infosys",
    "TCS",
    "Accenture",
  ];

  const jobRoles = [
    "Cyber Security Analyst",
    "Ethical Hacker",
    "Penetration Tester",
    "Security Engineer",
    "SOC Analyst",
    "Network Security Engineer",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Header */}
      <div className="bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-8">

          <Link
            to="/"
            className="text-cyan-400 hover:text-cyan-300"
          >
            ← Back to Home
          </Link>

          <h1 className="text-5xl font-bold mt-6">
            🔐 Cyber Security
          </h1>

          <p className="text-gray-400 mt-4 text-lg">
            Protect computer systems, networks and applications from cyber attacks.
          </p>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Salary */}
        <div className="bg-slate-900 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-cyan-400">💰 Salary</h2>

          <div className="grid md:grid-cols-3 gap-6 mt-8">

            <div className="bg-slate-800 rounded-xl p-6 text-center">
              <h3 className="font-bold">Fresher</h3>
              <p className="text-3xl text-green-400 mt-3">₹4–7 LPA</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 text-center">
              <h3 className="font-bold">Experienced</h3>
              <p className="text-3xl text-yellow-400 mt-3">₹10–18 LPA</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 text-center">
              <h3 className="font-bold">Senior</h3>
              <p className="text-3xl text-cyan-400 mt-3">₹25+ LPA</p>
            </div>

          </div>
        </div>

        {/* Skills */}
        <div className="bg-slate-900 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">
            🛠 Skills Required
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-lg p-4"
              >
                ✅ {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Roadmap */}
        <div className="bg-slate-900 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">
            🗺 Learning Roadmap
          </h2>

          <div className="space-y-4">
            {roadmap.map((step, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-lg p-4"
              >
                {index + 1}. {step}
              </div>
            ))}
          </div>
        </div>

        {/* Job Roles */}
        <div className="bg-slate-900 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">
            💼 Job Roles
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {jobRoles.map((role, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-lg p-4"
              >
                🚀 {role}
              </div>
            ))}
          </div>
        </div>

        {/* Companies */}
        <div className="bg-slate-900 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">
            🏢 Top Companies
          </h2>

          <div className="grid md:grid-cols-4 gap-4">
            {companies.map((company, index) => (
              <div
                key={index}
                className="bg-slate-800 border border-slate-700 rounded-lg p-4 text-center hover:bg-cyan-500 hover:border-cyan-400 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                {company}
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}

export default CyberSecurity;