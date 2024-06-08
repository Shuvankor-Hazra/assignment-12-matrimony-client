import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const SuccessCounter = () => {
    return (
        <div className="my-20">
            <SectionTitle heading={'Success Counter'} subHeading={'Our total activity'} />
            <div>
                <div className="w-full text-2xl border-2 stats stats-vertical lg:stats-horizontal shadow">

                    <div className="stat text-center">
                        <div className="stat-title">Brides</div>
                        <div className="stat-value">1.3k</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>

                    <div className="stat text-center">
                        <div className="stat-title">Grooms</div>
                        <div className="stat-value">1.4k</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat text-center">
                        <div className="stat-title">New Couple</div>
                        <div className="stat-value">0.8k</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SuccessCounter;