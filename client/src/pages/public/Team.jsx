import { GraduationCap, Building2, Briefcase, User } from "lucide-react";

const teamMembers = [
  {
    name: "Kallol Khatua",
    college: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
    branch: "Instrumentation and Control Engineering",
    department: "Instrumentation Department",
  },
  {
    name: "Ravi Kumar Dikshit",
    college: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
    branch: "Mechanical Engineering",
    department: "Mechanical Department",
  },
  {
    name: "Mayank Chandrakar",
    college: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
    branch: "Mechanical Engineering",
    department: "Mechanical Department",
  },
];

export default function Team() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}

      <section className="bg-gray-200 py-16 text-black">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl font-bold">Project Development Team</h1>

          <p className="mt-4 text-lg text-black-100">
            Plant Machine Information System
          </p>

          <p className="mt-2 text-black-200">
            Developed during Internship at
            <br />
            <span className="font-semibold">Jindal Steel</span>
            <br />
            Pellet Plant, Barbil
          </p>
        </div>
      </section>

      {/* Team */}

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-10 text-center text-3xl font-bold text-slate-800">
          Meet Our Team
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-6 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                  <User size={42} className="text-blue-700" />
                </div>
              </div>

              <h3 className="mb-6 text-center text-xl font-bold text-slate-800">
                {member.name}
              </h3>

              <div className="space-y-5">
                <div className="flex gap-3">
                  <GraduationCap className="mt-1 text-blue-600" size={20} />

                  <div>
                    <p className="text-sm font-semibold text-slate-500">
                      College
                    </p>

                    <p className="text-slate-800">{member.college}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Building2 className="mt-1 text-green-600" size={20} />

                  <div>
                    <p className="text-sm font-semibold text-slate-500">
                      Branch
                    </p>

                    <p className="text-slate-800">{member.branch}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Briefcase className="mt-1 text-purple-600" size={20} />

                  <div>
                    <p className="text-sm font-semibold text-slate-500">
                      Intern Department
                    </p>

                    <p className="text-slate-800">{member.department}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
