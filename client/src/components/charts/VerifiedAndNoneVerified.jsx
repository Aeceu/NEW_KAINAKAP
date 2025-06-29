import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const VerifiedAndNoneVerified = ({ users = [] }) => {
  const verifiedCount = users.filter(
    (user) => user.verificationStatus === "verified",
  ).length;

  const nonVerifiedCount = users.filter(
    (user) => user.verificationStatus === "not verified",
  ).length;

  const data = [
    { name: "Verified", count: verifiedCount },
    { name: "Non-Verified", count: nonVerifiedCount },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar
          dataKey="count"
          fill="#8884d8"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default VerifiedAndNoneVerified;
