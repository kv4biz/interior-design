import { ArrowRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: "01",
    tag: "Crafting Culinary Masterpieces",
    title: "Gourmet Kitchen Design",
    image: "/image/kitchen1.jpg",
    desc: "Transform your kitchen into a stylish and functional space.",
  },
  {
    id: "02",
    tag: "Designing Workspaces That Work",
    title: "Workspace Transformation",
    image: "/image/drowing.jpg",
    desc: "Create an office that inspires creativity and efficiency daily.",
  },
  {
    id: "03",
    tag: "Where Comfort Meets Elegance",
    title: "Living Room Makeover",
    image: "/image/living.jpg",
    desc: "Redesign your living room to blend comfort and sophistication",
  },
  {
    id: "04",
    tag: "Creating Your Perfect Retreat",
    title: "Bedroom Redesign",
    image: "/image/badroom.jpg",
    desc: "Turn your bedroom into a serene and stylish sanctuary.",
  },
];
const CatalogueSection = () => {
  return (
    <div className="mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-4 md:gap-0 divide-gray-300 md:divide-x md:divide-y lg:divide-y-0">
      {projects.map((item) => (
        <div key={item.id} className="relative overflow-hidden group">
          <div>
            <Image
              src={item.image}
              width={380}
              height={100}
              alt=""
              className="w-full object-cover"
            />
          </div>
          <div className="quattrocento absolute top-0 p-8 lg:p-4 bg-white text-black bg-opacity-50 backdrop-blur min-h-[300px] m-12 lg:m-5">
            <div className="flex justify-between items-center pb-4">
              <a href="#" className="text-md">
                {item.title}
              </a>
              <span className="text-md">{item.id}</span>
            </div>
            <p className="text-2xl lg:text-lg font-semibold block">
              {item.tag}
            </p>
            <p className="py-4">{item.desc}</p>
            <a href="" className="inline-flex items-center font-medium">
              Learn More <ArrowRight className="ml-4" />
            </a>
          </div>
          <div className="inset-0 bg-tertiary oswald flex-col items-center justify-end md:flex hidden md:absolute md:gap-32 pb-16 text-xl transition duration-500 ease-in-out border-b-2 md:group-hover:translate-y-full md:border-b-0">
            <p className="tracking-widest -rotate-90"> {item.title}</p>
            <span>{item.id}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CatalogueSection;
