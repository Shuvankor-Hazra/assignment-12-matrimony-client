import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const SuccessCounter = () => {
    return (
        <div className="my-20">
            <SectionTitle heading={'Success Counter'} subHeading={'Our total activity'} />
            <div>
                <div className="w-full py-20 text-2xl border-2 stats stats-vertical lg:stats-horizontal shadow bg-gray-100">

                    <div className="stat text-center">
                        <h2 className="stat-title">Brides</h2>
                        <div className="stat-value">1.3k</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>

                    <div className="stat text-center">
                        <h2 className="stat-title">Grooms</h2>
                        <div className="stat-value">1.4k</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat text-center">
                        <h2 className="stat-title">New Couple</h2>
                        <div className="stat-value">0.8k</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SuccessCounter;