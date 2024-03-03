import { Meteors } from './animations/Meteors';

function ColorAssociations() {
  return (
    <div className="">
      <div className=" relative m-auto w-full max-w-xs">
        <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
        <div className="relative flex h-full flex-col items-start  justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">
          <div className="mb-4 flex h-5 w-5 items-center justify-center rounded-full border border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h2>Common color associations</h2>

          <p>
            The below color associations can be used as a reference guide as you
            consider which colors would best represent a particular brand. How
            should the target audience feel when they encounter the brand's
            website? What actions should they take? With the right context,
            color could make the difference between an engaged potential
            customer and a disinterested passerby.
          </p>
          <ul>
            <li>
              <span>Red: </span>passion, power, love, danger, excitement
            </li>
            <li>
              <span>Blue: </span>calm, trust, competence, peace, logic,
              reliability
            </li>
            <li>
              <span>Green: </span>health, nature, abundance, prosperity
            </li>
            <li>
              <span>Yellow: </span>happiness, optimism, creativity, friendliness
            </li>
            <li>
              <span>Orange: </span>fun, freedom, warmth, comfort, playfulness
            </li>
            <li>
              <span>Purple: </span>luxury, mystery, sophistication, loyalty,
              creativity
            </li>
            <li>
              <span>Pink: </span>nurturing, gentleness, sincerity, warmth
            </li>
            <li>
              <span>Brown: </span>security, protection, support
            </li>
            <li>
              <span>Black: </span>elegance, power, control, sophistication,
              depression
            </li>
            <li>
              <span>White: </span>purity, peace, clarity, cleanliness
            </li>
          </ul>
          <button className="rounded-lg border border-gray-500 px-4  py-1 text-gray-300">
            Explore
          </button>

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}

export default ColorAssociations;
