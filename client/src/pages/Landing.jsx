import { Link } from "react-router-dom";
import speechObject from "../utils/speechObject";


const Landing = () => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = speechObject();
  const stepList = [
    {icon: 'inventory', title: 'Fill out forms', description: 'By completing the profiling, it lets us know information about your disability that we can use to provide the appropriate help you need.'},
    {icon: 'difference', title: 'Submit documents', description: 'We need some corresponding documents in order to verify your disability. This will also help us in gathering the equipment from partners for distribution to our members.'},
    {icon: 'hourglass_full', title: 'Wait confirmation', description: 'We will send out a response to your email address once we receive your application.'},
  ]

  const steps = stepList.map((step) => (
      <div
        key={`ST-${step.title}`}
        className="flex h-[100%] flex-1 flex-col items-center text-skin-mute"
        onMouseEnter={() =>
          handleMouseEnter(step.title + "\n" + step.description)
        }
        onMouseLeave={handleMouseLeave}
      >
        <span className="material-symbols-rounded text-6xl">{step.icon}</span>
        <h2 className="font-display text-xl">{step.title}</h2>
        <p className="text-center">{step.description}</p>
      </div>
    ));


  const actionList = [
    {image: "", title: 'Equipment and Accomodations', description: 'We provide equipment and accomodations for our members who relies on special equipment to interact with others and their surroundings.'},
    {image: "", title: 'Support programs', description: 'Our partners provide our members with seminars, lectures, and trainings to enable them to work or gain independence.'},
    {image: "", title: 'Representation', description: 'With more members, the organization becomes a representative for people living with disabilities and allows us to directly influence the decisions of local governments to accomodate for the struggles of our stakeholders.'},
  ]

  const actions = actionList.map((action) => (
    <div
      key={`IM-${action.title}`}
      className="justify-top flex w-[30vw] flex-1 flex-col items-center text-balance rounded-lg bg-skin-pnlAltBG text-skin-prim p-3"
      onMouseEnter={() =>
        handleMouseEnter(action.title + "\n" + action.description)
      }
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={action.image}
        alt={action.image}
        className="h-[200px] w-full"
      />
      <h3 className="text-center font-display text-lg">{action.title}</h3>
      <p className="text-center">{action.description}</p>
    </div>
  ));

  return (
    <div className="box-border h-full w-full px-10 py-10 bg-skin-pageBG">
      <header
        className="w-full rounded-2xl bg-skin-pnlAltBG p-10"
        onMouseEnter={() =>
          handleMouseEnter(
            "It's so nice to meet you! Our organization aims to help every person living with disabilities to achieve the accomodations they need.",
          )
        }
        onMouseLeave={handleMouseLeave}
      >
        <h1 className="w-[30vw] text-balance font-display text-6xl text-skin-prim">
          It's so nice to meet you!
        </h1>
        <p className="mb-10 w-[50%] text-balance text-skin-mute">
          Our organization aims to help every person living with disabilities to
          achieve the accomodations they need.
        </p>
        <Link
          to="/land"
          className="rounded-lg px-4 py-3 bg-skin-btnBG text-skin-invr transition-colors hover:bg-skin-btnBGhov hover:text-skin-invrHov"
          onMouseEnter={() => handleMouseEnter("Navigate to Get Started page.")}
          onMouseLeave={handleMouseLeave}
        >
          Get Started
        </Link>
      </header>
      <main className="my-10 w-full text-green-950">
        <section className="items-top flex w-full justify-around gap-20 text-balance px-20">
          {steps}
        </section>
        <section className="m-10 flex flex-col items-center">
          <h2 className="font-display text-3xl text-skin-prim">What we do:</h2>
          <div className="flex justify-around gap-10">{actions}</div>
        </section>
      </main>
    </div>
  );
};

export default Landing;
