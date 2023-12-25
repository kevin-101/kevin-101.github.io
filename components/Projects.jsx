import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Projects() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#projects *", {
      scrollTrigger: "#projects p",
      opacity: 0,
      x: "300px",
      ease: "power4.out",
      stagger: 0.1,
    });
  }, []);
  return (
    <section
      id="projects"
      className="flex flex-col min-h-screen justify-center items-center text-center py-20"
    >
      <h1 className="text-lg mb-8">Projects</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        libero id sapiente? Illo, magnam blanditiis corporis sit deserunt vel
        sapiente excepturi recusandae consequatur minus esse, expedita
        inventore, iusto at maiores?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        libero id sapiente? Illo, magnam blanditiis corporis sit deserunt vel
        sapiente excepturi recusandae consequatur minus esse, expedita
        inventore, iusto at maiores?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        libero id sapiente? Illo, magnam blanditiis corporis sit deserunt vel
        sapiente excepturi recusandae consequatur minus esse, expedita
        inventore, iusto at maiores?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        libero id sapiente? Illo, magnam blanditiis corporis sit deserunt vel
        sapiente excepturi recusandae consequatur minus esse, expedita
        inventore, iusto at maiores?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        libero id sapiente? Illo, magnam blanditiis corporis sit deserunt vel
        sapiente excepturi recusandae consequatur minus esse, expedita
        inventore, iusto at maiores?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        libero id sapiente? Illo, magnam blanditiis corporis sit deserunt vel
        sapiente excepturi recusandae consequatur minus esse, expedita
        inventore, iusto at maiores?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        libero id sapiente? Illo, magnam blanditiis corporis sit deserunt vel
        sapiente excepturi recusandae consequatur minus esse, expedita
        inventore, iusto at maiores?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        libero id sapiente? Illo, magnam blanditiis corporis sit deserunt vel
        sapiente excepturi recusandae consequatur minus esse, expedita
        inventore, iusto at maiores?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        libero id sapiente? Illo, magnam blanditiis corporis sit deserunt vel
        sapiente excepturi recusandae consequatur minus esse, expedita
        inventore, iusto at maiores?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        libero id sapiente? Illo, magnam blanditiis corporis sit deserunt vel
        sapiente excepturi recusandae consequatur minus esse, expedita
        inventore, iusto at maiores?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        libero id sapiente? Illo, magnam blanditiis corporis sit deserunt vel
        sapiente excepturi recusandae consequatur minus esse, expedita
        inventore, iusto at maiores?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        libero id sapiente? Illo, magnam blanditiis corporis sit deserunt vel
        sapiente excepturi recusandae consequatur minus esse, expedita
        inventore, iusto at maiores?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        libero id sapiente? Illo, magnam blanditiis corporis sit deserunt vel
        sapiente excepturi recusandae consequatur minus esse, expedita
        inventore, iusto at maiores?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        libero id sapiente? Illo, magnam blanditiis corporis sit deserunt vel
        sapiente excepturi recusandae consequatur minus esse, expedita
        inventore, iusto at maiores?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        libero id sapiente? Illo, magnam blanditiis corporis sit deserunt vel
        sapiente excepturi recusandae consequatur minus esse, expedita
        inventore, iusto at maiores?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        libero id sapiente? Illo, magnam blanditiis corporis sit deserunt vel
        sapiente excepturi recusandae consequatur minus esse, expedita
        inventore, iusto at maiores?
      </p>
    </section>
  );
}

export default Projects;
