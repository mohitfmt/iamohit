import Image from "next/image";
import pp from "../../public/ProfilePic.webp";
import gwl2000 from "../../public/gwalior-2000.webp";
import prince from "../../public/princeofPersia.webp";
import passionValues from "../../public/CoreValues.webp";

const About = () => {
  const YrsOfExp = new Date().getFullYear() - 2006;
  return (
    <section>
      <div className="w-full my-5 flex items-center justify-center bg-[url('/AboutHero.webp')] bg-no-repeat bg-cover bg-top h-[900px] 2xl:h-[1400px]" />
      <h1 className="flex items-center justify-center sm:text-5xl text-3xl font-handlee font-bold">
        About&nbsp;
        <span className="text-[#f5f543]">Mohit</span>
        &nbsp;Shrivastava
      </h1>
      <section className="p-10">
        <Image
          src={pp}
          alt="Mohit Shrivastava"
          style={{ maxWidth: "100%", height: "auto" }}
          className="float-left sm:w-1/2 md:w-1/3 2xl:w-1/4 w-full pl-3 mr-3"
        />
        <div className="text-lg pl-3">
          <p className="py-3">
            Hey there! I'm Mohit Shrivastava, a tech enthusiast and Innovative
            Technology Leader who's been navigating the world of Full Stack
            Development and Digital Transformation for more than {YrsOfExp}{" "}
            years. This dynamic journey has been my passion, fueled by the
            thrill of crafting forward-thinking solutions that redefine how
            users experience technology and how businesses soar to new heights.
          </p>
          <p className="py-3">
            Picture my career as a thrilling adventure through the ever-evolving
            landscape of technology. It's all about innovation and an unyielding
            pursuit of excellence. As a Full Stack Developer and Digital
            Transformation Specialist, my gig is all about orchestrating digital
            revolutions that break boundaries.
          </p>
          <p className="py-3">
            Now, let's talk web wizardry. I've spent considerable time immersed
            in the intricate web tech realm, weaving a magic potion of HTML,
            CSS, JavaScript, TypeScript, React, and Angular to create
            captivating digital experiences. And that's not all – I've ventured
            into the realm of Solidity-powered Smart Contracts and Ethereum
            development, all in the name of crafting secure and future-ready
            solutions.
          </p>
          <p className="py-3">
            But wait, there's more! My journey includes collaborating with
            diverse teams and spearheading projects that have redefined how
            businesses operate. Whether it's crafting immersive 3D worlds with
            Three.js and React for a renowned German car company or launching
            interactive eBrochures that bring telecom partners to life, I'm all
            about using tech to reshape possibilities.
          </p>
          <p className="py-3">
            Now, what sets me apart? It's my never-ending commitment to learning
            and growth. Challenges? Bring 'em on! They've been my stepping
            stones to stay ahead of industry trends and innovations. This
            learning curve has been fueled by my knack for various tools,
            frameworks, and methodologies. Result? Crafting and executing
            solutions that pack a punch.
          </p>
          <p className="py-3">
            In this fast-paced digital dance, I'm thrilled by innovation and the
            art of tech. Together, let's reshape industries. So, why not take a
            stroll through my portfolio? You'll uncover a rich tapestry of
            achievements, skills, and an unquenchable thirst to shape the
            digital future.
          </p>
          <p className="py-3">
            Step into my world of innovation and technology – it's an exciting
            ride!
          </p>
        </div>
      </section>
      <section className="p-10">
        <h2 className="text-3xl font-bold">My Journey</h2>
        <Image
          src={gwl2000}
          alt="Gwalior in year 2000"
          style={{ maxWidth: "100%", height: "auto" }}
          className="float-right sm:w-1/2 md:w-1/3 2xl:w-1/4 w-full p-2"
        />
        <p className="text-lg py-3">
          It all began back in 2000, a year that marked a turning point in my
          journey. After receiving my 12th standard results, I found myself as
          an unexpected contender in the realm of academic success. With the
          prevailing expectations predicting a score below 50%, I surpassed
          those predictions and achieved a proud 64% in my 12th standard. The
          elation was palpable, but this joy was soon met with the revelation
          that my parents envisioned a path in Business Administration for me.
          Although I had achieved a good score, my heart was set on a different
          trajectory – one fueled by a passion for computers.
        </p>
        <p className="text-lg py-3">
          With courage in my corner, I approached my parents to express my
          desire for a different path. The ensuing discussions resulted in a
          shared agreement, and I embarked on a journey that would lead me
          towards the world of computing.
        </p>
        <Image
          src={prince}
          alt="Price of Persia"
          style={{ maxWidth: "100%", height: "auto" }}
          className="float-left sm:w-1/2 md:w-1/3 2xl:w-1/4 w-full p-2"
        />
        <p className="text-lg py-3">
          In those early days, my familiarity with computers was centered around
          playing the iconic game "Prince" that resonates with many from the
          90s. Stepping into the world of higher education, I quickly became a
          standout student. The support of educators like Mr. Vishal Kaul and
          Neeti Ma'am enhanced my learning journey, often granting me extended
          lab hours to delve deeper into the world of computers.
        </p>
        <p className="text-lg py-3">
          My initial foray into programming was marked by picking up JavaScript.
          Little did I know that this language would remain a significant part
          of my journey even in the present times. The curiosity within me
          sparked questions about the possibilities of JavaScript beyond just a
          client-side language. This curiosity led me to the discovery of NodeJS
          – a moment of triumph that expanded my horizons.
        </p>
        <p className="text-lg py-3">
          During my early professional years, I honed my skills in Visual Basic
          6.0 and SQL Server, utilizing their rapid application development
          capabilities to craft tailored solutions for companies. Almost four
          years were devoted to this expertise before I transitioned into the
          world of web technologies. This new phase introduced me to PHP, MySQL,
          AJAX, and JQuery, and I embraced the thrills that came with every new
          learning.
        </p>
        <p className="text-lg py-3">
          As I navigated through the tech landscape, I ventured into the realm
          of Full Stack Development. Balancing both front and back-end
          components of applications, this phase felt like holding the keys to a
          digital realm of endless potential. It was a realm where pixel-perfect
          interfaces and robust databases came to life.
        </p>
        <p className="text-lg py-3">
          But my journey was far from reaching its conclusion. The allure of
          cutting-edge technology beckoned, propelling me into the exploration
          of Web 3.0 and blockchain innovations. Solidity, Smart Contracts, and
          Ethereum were akin to learning a new language, one that held the power
          to reshape digital interactions.
        </p>
        <p className="text-lg py-3">
          Throughout the years, I've been fortunate to collaborate on projects
          that pushed boundaries. Creating immersive 3D environments that
          engaged users, launching dynamic front-end experiences that breathed
          life into brands, and optimizing backend operations for seamless
          efficiency – each milestone a testament to the ever-evolving tech
          landscape.
        </p>
        <p className="text-lg py-3">
          Today, with more than {YrsOfExp} years of experience shaping my
          perspective, I view my journey as a tapestry woven with threads of
          curiosity, passion, and innovation. The challenges encountered have
          only fueled my determination to keep learning, adapting, and remaining
          at the forefront of this dynamic industry.
        </p>
        <p className="text-lg py-3">
          So there you have it – a glimpse into my tech odyssey. From a curious
          explorer to an innovative technocrat, my journey continues to unfold,
          and I eagerly anticipate the exciting chapters that lie ahead.
        </p>
      </section>
      <section className="p-10">
        <h2 className="text-3xl font-bold">Passion and Values</h2>
        <p className="text-lg py-3">
          Coding, web development, and technology – these are the facets of my
          journey that fuel my every step. From the early days of exploring
          computer games to crafting intricate web applications, my passion for
          this ever-evolving realm has only grown stronger.
        </p>
        <Image
          src={passionValues}
          alt="Passion and Values"
          style={{ maxWidth: "100%", height: "auto" }}
          className="float-right sm:w-1/2 md:w-1/3 2xl:w-1/4 w-full p-2"
        />
        <p className="text-lg py-3">
          The allure of coding lies in the art of creation – the ability to
          transform lines of logic into functional solutions that enhance user
          experiences. The thrill of building something from scratch, watching
          it come to life with each keystroke, is a sensation that never loses
          its charm. It's like composing a symphony of algorithms, where every
          function, every line of code, contributes to the harmonious flow of a
          digital masterpiece.
        </p>
        <p className="text-lg py-3">
          Web development, on the other hand, is a canvas where innovation meets
          design. It's the platform where I sculpt user interfaces, sculpting
          experiences that seamlessly guide users through digital landscapes.
          The challenge lies in creating not just functional platforms, but
          visually captivating ones – interfaces that resonate with users and
          inspire interaction. This process, akin to molding clay into intricate
          forms, keeps me engaged and invested in the art of digital aesthetics.
        </p>
        <p className="text-lg py-3">
          Technology itself is a realm of boundless possibilities, one that
          constantly beckons me to explore its uncharted territories. The
          dynamic nature of this field ensures that there's always something new
          to learn, a fresh innovation to adapt to, or a novel solution to
          uncover. This continuous learning journey is where my passion thrives,
          and it's a journey I embark upon with eagerness.
        </p>
        <p className="text-lg py-3">
          In every endeavor, my values are my guiding lights. Precision and
          quality form the bedrock of my work. I believe in creating solutions
          that not only function but excel – code that is elegant, efficient,
          and easy to comprehend. Collaboration is another cornerstone, as I
          recognize the strength that comes from pooling diverse perspectives
          and talents.
        </p>
        <p className="text-lg py-3">
          Moreover, integrity is paramount in my approach. Whether it's
          delivering on deadlines, adhering to best practices, or maintaining
          security standards, I uphold a commitment to ethical practices that
          build trust among clients, users, and stakeholders.
        </p>
        <p className="text-lg py-3">
          Curiosity is my constant companion, propelling me to ask 'why' and
          'what if'. It's the driving force behind my desire to explore new
          technologies, understand intricate processes, and innovate beyond
          convention. This curiosity is what keeps me at the forefront of an
          industry that thrives on evolution.
        </p>
        <p className="text-lg py-3">
          Passion, values, and technology – these elements intertwine to create
          the foundation of my journey. As I embark on each project, I carry
          these principles with me, aiming to craft not just code, but impactful
          solutions that resonate with users and stand the test of time.
        </p>
      </section>
      <section className="p-10">
        <div className="flex flex-wrap">
          <div className="sm:w-1/2 md:w-1/3 2xl:w-1/6 w-full p-2">
            <div className="bg-[#212121] border-2 border-[#292929] border-solid rounded-2xl justify-center text-center items-center flex flex-col aspect-square">
              <span className="text-5xl py-4 font-bold flex">
                {(YrsOfExp * 12 * 365).toLocaleString("en-US")}
                <span className="text-xl items-end flex"></span>
              </span>
              Days Experience
            </div>
          </div>
          <div className="sm:w-1/2 md:w-1/3 2xl:w-1/6 w-full p-2">
            <div className="bg-[#212121] border-2 border-[#292929] border-solid rounded-2xl justify-center text-center items-center flex flex-col aspect-square">
              <span className="text-5xl py-4 font-bold flex">
                150<span className="text-xl items-center flex">+</span>
              </span>
              Completed Projects
            </div>
          </div>
          <div className="sm:w-1/2 md:w-1/3 2xl:w-1/6 w-full p-2">
            <div className="bg-[#212121] border-2 border-[#292929] border-solid rounded-2xl justify-center text-center items-center flex flex-col aspect-square">
              <span className="text-5xl py-4 font-bold flex">
                80<span className="text-xl items-center flex">%</span>
              </span>
              Performance Improvements
            </div>
          </div>
          <div className="sm:w-1/2 md:w-1/3 2xl:w-1/6 w-full p-2">
            <div className="bg-[#212121] border-2 border-[#292929] capitalize border-solid rounded-2xl justify-center text-center items-center flex flex-col aspect-square">
              <span className="text-5xl py-4 font-bold flex">
                35<span className="text-xl items-center flex">+</span>
              </span>
              Satisfied Clients
            </div>
          </div>
          <div className="sm:w-1/2 md:w-1/3 2xl:w-1/6 w-full p-2">
            <div className="bg-[#212121] border-2 border-[#292929] border-solid rounded-2xl justify-center text-center items-center flex flex-col aspect-square">
              <span className="text-5xl py-4 font-bold flex">
                60<span className="text-xl items-center flex">%</span>
              </span>
              Learning Curve
            </div>
          </div>
          <div className="sm:w-1/2 md:w-1/3 2xl:w-1/6 w-full p-2">
            <div className="bg-[#212121] border-2 border-[#292929] border-solid rounded-2xl justify-center text-center items-center flex flex-col aspect-square">
              <span className="text-5xl py-4 font-bold flex">
                8<span className="text-xl items-center flex">+</span>
              </span>
              Leadership
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
