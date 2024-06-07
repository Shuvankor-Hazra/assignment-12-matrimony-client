/* eslint-disable react/prop-types */



const SectionTitle = ({ heading, subHeading }) => {


    return (
        <div className="text-center lg:w-fit mx-auto mb-10 capitalize" >
            <p className="text-lg text-[#f99417] mb-3">--/- {subHeading} -/--</p>
            <h2 className="text-xl lg:text-2xl font-bold text-[#151515] p-5 border-y-2 border-[#f99417]">{heading}</h2>
        </div>
    );
};

export default SectionTitle;