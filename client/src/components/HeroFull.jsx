import HeroBottom from "./HeroBottom";
import HeroLeft from "./HeroLeft"
import HeroRight from "./HeroRight"

const HeroFull=()=>{
    return(
        <>
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-8">
        <HeroLeft />
        <HeroRight />
        

      </div>
      <div className="mt-12 px-4 md:px-16">
  <HeroBottom />
</div>
</>

      
    )

}
export default HeroFull;