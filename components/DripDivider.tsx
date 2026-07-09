type DripDividerProps = {
  color?: "red" | "gold" | "navy" | "primer";
  flip?: boolean;
};

const fills: Record<string, string> = {
  red: "#E63329",
  gold: "#F5A623",
  navy: "#2B3990",
  primer: "#F6F2E9",
};

/**
 * A drip-edged divider between sections, echoing the paint drips in the
 * Magna Finishes mark. Widths/heights of each drip are irregular on
 * purpose so it reads as poured paint rather than a repeating pattern.
 */
export default function DripDivider({ color = "gold", flip = false }: DripDividerProps) {
  const fill = fills[color];
  return (
    <div className={`drip-divider ${flip ? "rotate-180" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 1200 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill={fill}
          d="M0,0 H1200 V18 C1150,18 1140,50 1110,50 C1085,50 1078,26 1055,26 C1032,26 1026,44 1000,44
             C978,44 972,20 946,20 C918,20 912,58 884,58 C860,58 854,30 828,30
             C804,30 798,14 772,14 C748,14 742,38 716,38 C692,38 686,22 660,22
             C634,22 628,48 602,48 C580,48 574,24 548,24 C522,24 516,40 490,40
             C466,40 460,16 434,16 C410,16 404,34 378,34 C354,34 348,20 322,20
             C296,20 290,46 264,46 C242,46 236,28 210,28 C186,28 180,12 154,12
             C130,12 124,32 98,32 C76,32 70,20 44,20 C26,20 14,22 0,20 Z"
        />
      </svg>
    </div>
  );
}
