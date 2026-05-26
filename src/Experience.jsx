const experienceData = [
  {
    designation: "Software Engineer",
    description: "Working on AI Systems, to accelerate content creation.",
    dateRangeString: "March, 2026 - Present",
    company: "Dashverse"
  },
  {
    designation: "Software Engineer 2",
    description: "Led the team as Fullstack Developer, working closely with Management and CXO's to build the ERPnext and Finance Account Receivables Product right from scratch.",
    dateRangeString: "Jan, 2024 - Feb, 2026",
    company: "Juspay"
  },
  {
    designation: "Software Engineer",
    description: "Got chance to work on various projects during this period including HyperCredit, Namma Yatri, Payment Page and in-house frontend framework - Presto.",
    dateRangeString: "July, 2022 - Dec, 2023",
    company: "Juspay"
  },
  {
    designation: "SDE Intern",
    description: "Started with development on frontend in HyperCredit when the product was in inital stage.",
    dateRangeString: "July, 2022 - Dec, 2023",
    company: "Juspay"
  }
]

function ExperienceDetails({ data }) {
  const designation = data.designation;
  const description = data.description;
  const dateRangeString = data.dateRangeString;
  const company = data.company;

  return (
    <div key="" className="w-full h-fit flex flex-col gap-[20px] py-[24px] px-[16px] bg-transparent hover:bg-white/3 hover:cursor-pointer rounded-[16px]">
      <div className="w-full h-fit flex flex-row gap-[4px] justify-between">
        <div className="w-full h-fit max-w-[420px] flex flex-col gap-[14px]">
          <div className="w-full h-fit text-[26px] leading-[28px] font-semibold text-white">
            {designation}
          </div>
          <div className="w-full h-fit text-[16px] leading-[18px] text-[#998F8F] font-normal whitespace-pre-line">
            {description}
          </div>
        </div>
        {/* <div></div> for arrow */}
      </div>
      <div className="w-full h-fit flex flex-row gap-[4px] justify-between">
        <div className="w-fit h-fit text-[16px] leading-[18px] text-[#998F8F] font-normal">
          {company}
        </div>
        <div className="w-fit h-fit text-[16px] leading-[18px] text-[#998F8F] font-normal">
          {dateRangeString}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <div className="w-full h-fit flex flex-col gap-[20px]">
      <div className="w-full h-fit flex flex-col text-[50px] md:text-[90px] font-bold leading-[50px] md:leading-[90px] gap-0 text-center lg:text-left">
        <div className="text-white">4+ YEARS OF</div>
        <div className="text-[rgba(182,180,189,0.2)]">EXPERIENCE</div>
      </div>
      <div className="w-full h-fit flex flex-col gap-0">
        {
          experienceData.map(data => <ExperienceDetails data={data} />)
        }
      </div>
    </div>
  );
}
