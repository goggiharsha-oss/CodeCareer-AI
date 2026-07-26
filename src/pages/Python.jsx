import { Link } from "react-router-dom";

function Python() {
  const skills = [
    "Python Basics",
    "OOP",
    "Data Structures",
    "SQL",
    "Git & GitHub",
    "APIs",
    "Django / Flask",
    "NumPy",
    "Pandas",
    "Machine Learning",
  ];

  const roadmap = [
    "Learn Python Basics",
    "Practice Programs",
    "Object-Oriented Programming",
    "Data Structures & Algorithms",
    "SQL & Databases",
    "Git & GitHub",
    "Web Development (Django/Flask)",
    "Build Real Projects",
    "Prepare for Interviews",
    "Apply for Jobs",
  ];

  const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Infosys",
    "TCS",
    "Wipro",
    "Accenture",
    "Zoho",
  ];

  const careers = [
    {
      role: "Python Developer",
      salary: "₹3–8 LPA",
      desc: "Build backend applications, automation tools and web applications using Python.",
    },
    {
      role: "Backend Developer",
      salary: "₹4–10 LPA",
      desc: "Develop REST APIs and scalable server-side applications using Django or Flask.",
    },
    {
      role: "Data Scientist",
      salary: "₹8–20 LPA",
      desc: "Analyze data and build Machine Learning models for real-world problems.",
    },
    {
      role: "AI / ML Engineer",
      salary: "₹10–30+ LPA",
      desc: "Develop Artificial Intelligence and Machine Learning applications using Python.",
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
            🐍 Python Programming
          </h1>

          <p className="text-gray-400 mt-4 text-lg">
            Python is one of the most popular programming languages used in
            AI, Machine Learning, Data Science, Automation,
            Web Development, Cyber Security and Software Development.
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
                ₹3–6 LPA
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

export default Python;