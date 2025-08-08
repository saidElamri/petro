import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const stockTrendData = [
  { date: "Jan", stock: 400 },
  { date: "Feb", stock: 380 },
  { date: "Mar", stock: 450 },
  { date: "Apr", stock: 420 },
  { date: "May", stock: 480 },
  { date: "Jun", stock: 500 },
];

const stockDistributionData = [
  { name: "Gasoline", value: 400 },
  { name: "Diesel", value: 300 },
  { name: "Kerosene", value: 200 },
  { name: "Lubricants", value: 100 },
];

const COLORS = ["#00B4D8", "#F6C85F", "#132636", "#0B1522"];

const alerts = [
  { id: 1, message: "Leak detected at Station 4", severity: "high" },
  { id: 2, message: "Stock below minimum at Station 2", severity: "medium" },
  { id: 3, message: "Scheduled maintenance tomorrow", severity: "low" },
];

export default function Dashboard() {
  return (
    <main className="container-custom pt-24 pb-12 min-h-screen bg-bg">
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold text-primary mb-2">
          Tableau de bord
        </h1>
        <p className="text-muted text-lg max-w-xl">
          Suivez l’état de vos stocks et la distribution en temps réel.
        </p>
      </header>

      {/* Summary cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="card flex flex-col p-6">
          <h2 className="text-lg font-semibold mb-2 text-secondary">
            Stations Totales
          </h2>
          <p className="text-3xl font-bold text-primary">12</p>
        </div>
        <div className="card flex flex-col p-6">
          <h2 className="text-lg font-semibold mb-2 text-secondary">
            Stock Actuel (Litres)
          </h2>
          <p className="text-3xl font-bold text-primary">15,300</p>
        </div>
        <div className="card flex flex-col p-6">
          <h2 className="text-lg font-semibold mb-2 text-secondary">
            Alertes
          </h2>
          <p className="text-3xl font-bold text-primary">{alerts.length}</p>
        </div>
      </section>

      {/* Charts */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        {/* Stock Trend Line Chart */}
        <div className="card p-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">
            Tendance du stock (6 mois)
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={stockTrendData}>
              <XAxis
                dataKey="date"
                stroke="#132636"
                tickLine={false}
                fontWeight="600"
              />
              <YAxis
                stroke="#132636"
                tickLine={false}
                fontWeight="600"
                domain={["auto", "auto"]}
              />
              <Tooltip
                contentStyle={{ backgroundColor: "#fff", borderRadius: 8 }}
              />
              <Line
                type="monotone"
                dataKey="stock"
                stroke="#00B4D8"
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Stock Distribution Pie Chart */}
        <div className="card p-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">
            Répartition du stock
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={stockDistributionData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={90}
                fill="#8884d8"
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
              >
                {stockDistributionData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend
                verticalAlign="bottom"
                height={36}
                wrapperStyle={{ fontWeight: "600", color: "#132636" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Alerts list */}
      <section className="max-w-3xl mx-auto">
        <h3 className="text-xl font-semibold mb-6 text-primary">
          Alertes récentes
        </h3>
        <ul className="space-y-4">
          {alerts.map(({ id, message, severity }) => (
            <li
              key={id}
              className={`p-4 rounded-lg shadow-soft border-l-4 ${
                severity === "high"
                  ? "border-red-600 bg-red-50 text-red-800"
                  : severity === "medium"
                  ? "border-yellow-400 bg-yellow-50 text-yellow-800"
                  : "border-blue-400 bg-blue-50 text-blue-800"
              }`}
            >
              {message}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
