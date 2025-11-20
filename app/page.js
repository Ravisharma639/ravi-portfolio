import Navbar from "../components/Navbar";
import SidePanel from "../components/SidePanel";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";

const projects = [
  { title: "FutureBridge", desc: "Fund collection platform to support children — secure donations, transparent tracking and modern UX.", tech: "React • Node • MongoDB • Razorpay", link: "https://github.com/Ravisharma639/Fund-collection-web" },
  { title: "Hospital Management System", desc: "Java Swing + MySQL app for patient registration & appointment management.", tech: "Java • Swing • MySQL" },
  { title: "E-commerce Web", desc: "MERN e-commerce site with Razorpay payment integration.", tech: "MERN • Razorpay" },
  { title: "Password Valid", desc: "TypeScript password validation project focusing on strong types and reliability.", tech: "TypeScript • React" }
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="home" className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 md:flex gap-10">

          <SidePanel />

          <section className="flex-1 space-y-14">

            {/* HOME */}
            <div id="home"></div>
            <AnimatedSection className="card p-10 rounded-3xl">
              <h1 className="text-4xl font-bold tracking-tight mb-3">
                Hi, I’m <span className="text-accent">Ravi</span> — Full-Stack Developer
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                I build modern web apps using Java, MERN and clean architecture.
              </p>
            </AnimatedSection>

            {/* ABOUT */}
            <div id="about"></div>
            <AnimatedSection className="card p-8">
              <h3 className="text-2xl font-semibold mb-3">Profile Summary</h3>
              <p className="text-slate-300 leading-relaxed">
                Versatile Full Stack Developer skilled in Java, Spring Boot, MERN stack.
              </p>
            </AnimatedSection>

            {/* PROJECTS */}
            <div id="projects"></div>
            <AnimatedSection>
              <h3 className="text-3xl font-semibold mb-6">Projects</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {projects.map(p => (
                  <ProjectCard key={p.title} project={p} />
                ))}
              </div>
            </AnimatedSection>

            {/* SKILLS */}
            <div id="skills"></div>
            <AnimatedSection className="card p-8">
              <h3 className="text-2xl font-semibold mb-4">Skills</h3>
              <div className="grid grid-cols-2 gap-4 text-slate-300 text-lg">
                <p>Java (Intermediate)</p>
                <p>React (Intermediate)</p>
                <p>Node.js (Intermediate)</p>
                <p>MongoDB / MySQL</p>
              </div>
            </AnimatedSection>

            {/* CONTACT */}
            <div id="contact"></div>
            <AnimatedSection>
              <Footer />
            </AnimatedSection>

          </section>
        </div>
      </main>
    </>
  );
}
