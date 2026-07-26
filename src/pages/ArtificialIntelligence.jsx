import { Link } from "react-router-dom";

function ArtificialIntelligence() {
  const skills = [
    "Python",
    "Machine Learning",
    "Deep Learning",
    "TensorFlow",
    "PyTorch",
    "NumPy",
    "Pandas",
    "Data Visualization",
    "Mathematics",
    "Problem Solving",
  ];

  const roadmap = [
    "Learn Python",
    "Master Mathematics & Statistics",
    "Learn Machine Learning",
    "Study Deep Learning",
    "Practice TensorFlow & PyTorch",
    "Build AI Projects",
    "Learn NLP & Computer Vision",
    "Create AI Portfolio",
    "Apply for AI Jobs",
  ];

  const companies = [
    "Google",
    "Microsoft",
    "OpenAI",
    "Amazon",
    "NVIDIA",
    "Infosys",
    "TCS",
    "Accenture",
  ];

  const jobRoles = [
    "AI Engineer",
    "Machine Learning Engineer",
    "Deep Learning Engineer",
    "NLP Engineer",
    "Computer Vision Engineer",
    "Research Engineer",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <div className="bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-8">

          <Link to="/" className="text-cyan-400 hover:text-cyan-300">
            ← Back to Home
          </Link>

          <h1 className="text-5xl font-bold mt-6">
            🤖 Artificial Intelligence
          </h1>

          <p className="text-gray-400 mt-4 text-lg">
            Build intelligent systems using Machine Learning and Deep Learning.
          </p>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="bg-slate-900 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-cyan-400">💰 Salary</h2>

          <div className="grid md:grid-cols-3 gap-6 mt-8">

            <div className="bg-slate-800 rounded-xl p-6 text-center">
              <h3 className="font-bold">Fresher</h3>
              <p className="text-3xl text-green-400 mt-3">₹6–10 LPA</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 text-center">
              <h3 className="font-bold">Experienced</h3>
              <p className="text-3xl text-yellow-400 mt-3">₹15–25 LPA</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 text-center">
              <h3 className="font-bold">Senior</h3>
              <p className="text-3xl text-cyan-400 mt-3">₹35+ LPA</p>
            </div>

          </div>
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">
            🛠 Skills Required
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-4">
                ✅ {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">
            🗺 Learning Roadmap
          </h2>

          <div className="space-y-4">
            {roadmap.map((step, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-4">
                {index + 1}. {step}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">
            💼 Job Roles
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {jobRoles.map((role, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-4">
                🚀 {role}
              </div>
            ))}
          </div>
        </div>

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

export default ArtificialIntelligence;