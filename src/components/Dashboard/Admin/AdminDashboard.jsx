import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { PieChart, Pie, Cell, Legend } from 'recharts';



const AdminDashboard = () => {



    const axiosSecure = useAxiosSecure();

    const { data } = useQuery({
        queryKey: ['adminData'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats')
            return res.data
        }
    })
    console.log(data);

    const { data: biodata } = useQuery({
        queryKey: ['biodata'],
        queryFn: async () => {
            const res = await axiosSecure.get('/bioData')
            return res.data
        }
    })
    console.log(biodata);

    const maleBiodata = biodata?.filter(bio => bio.gender === 'male')
    console.log(maleBiodata);

    const femaleBiodata = biodata?.filter(bio => bio.gender === 'female')
    console.log(femaleBiodata);

    const totalRevenue = data?.contactRequest * 5;
    console.log(totalRevenue);

    const piData = [
        { name: 'Total biodata', value: biodata?.length },
        { name: 'Total male biodata', value: maleBiodata?.length },
        { name: 'Total female biodata', value: femaleBiodata?.length },
        { name: 'Premium biodata', value: data?.makePremium },
        { name: 'Total revenue', value: totalRevenue },
    ];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#a06060'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };


    return (
        <div>
            <Helmet title="Shaddi.com | Admin Dashboard" />
            <SectionTitle heading={'Admin Dashboard'} subHeading={'Dashboard'} />

            <div className="flex flex-col lg:flex-row gap-5 justify-evenly border p-5 text-2xl font-semibold text-center">
                <div className="border p-10 bg-green-200">Total biodata: {biodata?.length}</div>
                <div className="border p-10 bg-orange-200">Total male biodata: {maleBiodata?.length}</div>
                <div className="border p-10 bg-blue-200">Total female biodata: {femaleBiodata?.length}</div>
                <div className="border p-10 bg-red-200">Total revenue: ${totalRevenue}</div>
            </div>
            <div className="flex items-center justify-center">
                <PieChart width={300} height={300}>
                    <Pie
                        data={piData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {piData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Legend/>
                </PieChart>
            </div>
        </div>
    );
};

export default AdminDashboard;