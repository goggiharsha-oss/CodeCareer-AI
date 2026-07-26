import { Link } from "react-router-dom";

function CSharp() {
  const skills = [
    "C# Basics",
    "Object-Oriented Programming",
    ".NET Framework",
    ".NET Core",
    "ASP.NET",
    "LINQ",
    "Entity Framework",
    "SQL Server",
    "API Development",
    "Git & GitHub",
  ];

  const roadmap = [
    "Learn C# Fundamentals",
    "Understand OOP Concepts",
    "Learn Classes & Objects",
    "Practice Collections",
    "Learn Exception Handling",
    "Study .NET Framework",
    "Learn ASP.NET Core",
    "Work with Databases",
    "Build Web Applications",
    "Prepare for Interviews",
  ];

  const companies = [
    "Microsoft",
    "Google",
    "Amazon",
    "Accenture",
    "TCS",
    "Infosys",
    "Wipro",
    "Capgemini",
  ];

  const careers = [
    {
      role: "C# Developer",
      salary: "₹4–10 LPA",
      desc: "Develop software applications using C# and .NET technologies.",
    },
    {
      role: ".NET Developer",
      salary: "₹5–12 LPA",
      desc: "Build enterprise web applications using ASP.NET and .NET Core.",
    },
    {
      role: "Backend Developer",
      salary: "₹6–15 LPA",
      desc: "Create APIs and server-side applications using C#.",
    },
    {
      role: "Game Developer",
      salary: "₹4–12 LPA",
      desc: "Develop games using C# and Unity game engine.",
    },
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
            🟣 C# Programming
          </h1>

          <p className="text-gray-400 mt-4 text-lg">
            C# is a modern programming language developed by Microsoft
            used for web applications, desktop software, cloud solutions
            and game development.
          </p>

        </div>
      </div>


      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Salary */}
        <div className="bg-slate-900 rounded-2xl p-8 mb-8">

          <h2 className="text-3xl font-bold text-cyan-400">
            💰 Salary
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-8">

            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="font-bold">Fresher</h3>
              <p className="text-3xl text-green-400 mt-3">
                ₹4–8 LPA
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="font-bold">Experienced</h3>
              <p className="text-3xl text-yellow-400 mt-3">
                ₹8–18 LPA
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="font-bold">Senior</h3>
              <p className="text-3xl text-cyan-400 mt-3">
                ₹20+ LPA
              </p>
            </div>

          </div>
        </div>


        {/* Skills */}
        <div className="bg-slate-900 rounded-2xl p-8 mb-8">

          <h2 className="text-3xl font-bold text-cyan-400">
            🛠 Skills Required
          </h2>

          <div className="flex flex-wrap gap-3 mt-6">

            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full"
              >
                {skill}
              </span>
            ))}

          </div>

        </div>


        {/* Roadmap */}
        <div className="bg-slate-900 rounded-2xl p-8 mb-8">

          <h2 className="text-3xl font-bold text-cyan-400">
            🗺 Learning Roadmap
          </h2>

          <div className="space-y-4 mt-8">

            {roadmap.map((step, index) => (

              <div
                key={index}
                className="bg-slate-800 p-5 rounded-xl flex items-center gap-4"
              >

                <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center font-bold">
                  {index + 1}
                </div>

                <p>{step}</p>

              </div>

            ))}

          </div>

        </div>


        {/* Career Opportunities */}
        <div className="bg-slate-900 rounded-2xl p-8 mb-8">

          <h2 className="text-3xl font-bold text-cyan-400">
            💼 Career Opportunities
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-8">

            {careers.map((career) => (

              <div
                key={career.role}
                className="bg-slate-800 rounded-xl p-6"
              >

                <h3 className="text-xl font-bold">
                  {career.role}
                </h3>

                <p className="text-gray-400 mt-3">
                  {career.desc}
                </p>

                <p className="text-green-400 font-semibold mt-4">
                  {career.salary}
                </p>

              </div>

            ))}

          </div>

        </div>


        {/* Companies */}
        <div className="bg-slate-900 rounded-2xl p-8">

          <h2 className="text-3xl font-bold text-cyan-400">
            🏢 Top Companies
          </h2>

          <div className="grid md:grid-cols-4 gap-5 mt-8">

            {companies.map((company) => (

              <div
                key={company}
                className="bg-slate-800 rounded-xl p-6 text-center font-semibold hover:bg-cyan-600 transition"
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

export default CSharp;