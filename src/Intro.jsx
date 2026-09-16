import ResumeAndArticleRow from "./ResumeAndArticleRow";

function Intro() {
  const description = "A passionate problem-solver who dives deeper than the obvious, exploring dimensions of knowledge others overlook."
  const luck = '“In the art of manifestation, consistent effort attracts luck, and luck transforms into success.”'
  return (
    <div className="w-full h-fit flex flex-col bg-transparent gap-[50px]">
      <div className="w-full h-fit flex flex-col text-[50px] md:text-[90px] font-bold leading-[50px] md:leading-[90px] gap-0 text-center lg:text-left">
        <div className="text-foreground">SOFTWARE</div>
        <div className="text-faded-foreground">ENGINEER</div>
        <div className="flex flex-col items-center lg:items-start">
          <div className="max-w-[480px] w-full h-fit text-[18px] leading-[20px] font-normal text-muted-foreground lg:px-1 pt-2">{description}</div>
        </div>
      </div>
      <div className="flex flex-col items-center lg:items-start">
        <div className="max-w-[480px] w-full h-fit text-[18px] leading-[20px] font-normal text-muted-foreground lg:px-2 italic text-center lg:text-left lg:border-l-2">{luck}</div>
      </div>
      <ResumeAndArticleRow />
    </div>
  );
}

export default Intro;