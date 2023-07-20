import Image from 'next/image';
import Link from 'next/link';
import completeAuth from '../public/assets/projectimage/completeAuth.png';
import laundry from '../public/assets/projectimage/laundryimage.png'
import messenger from '../public/assets/projectimage/messengerimage.png'
import simplycart from '../public/assets/projectimage/simplycart.png'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Complete Auth."
            backgroundImg={completeAuth}
            projectUrl="/completeAuth"
            tech="React JS"
          />
          <ProjectItem
            title="Laundry Hub"
            backgroundImg={laundry}
            projectUrl="/laundry"
            tech="React native"
          />
          <ProjectItem
            title="Messenger App"
            backgroundImg={messenger}
            projectUrl="/messenger"
            tech="React native"
          />
          <ProjectItem
            title="Simplycart App"
            backgroundImg={simplycart}
            projectUrl="/simplycart"
            tech="React JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
