/* eslint-disable react/prop-types */



const SectionTitle = ({ heading, subHeading }) => {


    return (
        <div className="text-center lg:w-fit mx-auto mb-10 capitalize" >
            <p className="text-lg lg:text-xl text-[#D99904] italic mb-3 ">--/-- {subHeading} --/--</p>
            <h2 className="text-xl lg:text-3xl font-bold text-[#151515] p-5 border-y-2 ">{heading}</h2>
        </div>
    );
};

export default SectionTitle;