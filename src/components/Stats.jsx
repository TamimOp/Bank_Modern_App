import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat, index) => (
      <div
        key={stat.id}
        className="flex-1 flex justify-start items-center flex-row m-3"
      >
        <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient ml-3 uppercase">
          {stat.title}
        </p>
        <div
          className={`bg-white rotate-90 ${
            index === stats.length - 1
              ? "w-0 border-0"
              : "w-[13.63px] border-[1.7px] ml-[3.5rem] "
          }`}
        />
      </div>
    ))}
  </section>
);
export default Stats;
