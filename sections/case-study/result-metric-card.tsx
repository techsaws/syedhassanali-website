"use client";

import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  type ChartOptions,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import { useReducedMotion } from "framer-motion";

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip);

type Metric = { value: string; label: string; context?: string | null };
const tones = [
  { surface: "bg-blue-50/50", color: "#2563eb", soft: "#dbeafe" },
  { surface: "bg-rose-50/50", color: "#e11d48", soft: "#ffe4e6" },
  { surface: "bg-violet-50/50", color: "#7c3aed", soft: "#ede9fe" },
];

export default function ResultMetricCard({ metric, index }: { metric: Metric; index: number }) {
  const reducedMotion = useReducedMotion();
  const tone = tones[index % tones.length];
  const match = /^\s*([<>??~?]?)\s*(-?\d[\d,]*(?:\.\d+)?)\s*(.*?)\s*$/.exec(metric.value);
  const value = match ? Number(match[2].replaceAll(",", "")) : null;
  const qualifier = match?.[1] || "";
  const unit = match?.[3] || "";
  const percentage = unit === "%" && !qualifier && value !== null && value >= 0 && value <= 100;
  const timing = /(?:time|latency|duration|speed|response)/i.test(metric.label) || /^(?:ms|s|sec|seconds?|min|minutes?|h|hrs?|hours?)$/i.test(unit);
  const bound = qualifier === "<" || qualifier === "?" ? "Upper bound" : qualifier === ">" || qualifier === "?" ? "Lower bound" : "Measured value";
  const chartLabel = `${bound}${unit ? ` (${unit})` : ""}`;
  const description = `${metric.label}: ${metric.value}`;
  const animation = reducedMotion ? false as const : { duration: 800 };
  const barOptions: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    animation,
    indexAxis: timing ? "x" : "y",
    plugins: {
      legend: { display: false },
      tooltip: { displayColors: false, callbacks: { label: () => `${metric.label}: ${metric.value}` } },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: { display: !timing, color: "rgba(20,24,20,0.07)" },
        border: { display: false },
        ticks: { color: "#64748b", font: { size: 10 }, maxTicksLimit: 4, ...(timing ? {} : { precision: 0 }) },
      },
      y: {
        beginAtZero: true,
        grid: { display: timing, color: "rgba(20,24,20,0.07)" },
        border: { display: false },
        ticks: { display: timing, color: "#64748b", font: { size: 10 }, maxTicksLimit: 4 },
      },
    },
  };

  return (
    <div className={`flex min-w-0 flex-col rounded-2xl border border-border p-5 sm:p-6 ${tone.surface}`}>
      <dt className="text-sm leading-relaxed font-medium text-sub-heading">{metric.label}</dt>
      <dd className="mt-2 break-words font-heading text-[clamp(2rem,3.4vw,3rem)] leading-tight font-semibold tracking-[-0.04em] text-heading">{metric.value}</dd>
      <dd className="mt-5">
        <div className="relative h-40 w-full sm:h-44">
          {percentage ? (
            <Doughnut
              role="img"
              aria-label={description}
              data={{ labels: [metric.label, "Remainder"], datasets: [{ data: [value, 100 - value!], backgroundColor: [tone.color, tone.soft], borderWidth: 0, borderRadius: 8, hoverOffset: 3 }] }}
              options={{ responsive: true, maintainAspectRatio: false, cutout: "74%", animation, plugins: { legend: { display: false }, tooltip: { callbacks: { label: (context) => `${context.label}: ${context.raw}%` } } } }}
            />
          ) : value !== null && Number.isFinite(value) ? (
            <Bar
              role="img"
              aria-label={`${description}. ${chartLabel}.`}
              data={{ labels: [chartLabel], datasets: [{ label: metric.label, data: [value], backgroundColor: tone.color, hoverBackgroundColor: tone.color, borderRadius: 12, borderSkipped: false, maxBarThickness: timing ? 52 : 36 }] }}
              options={barOptions}
            />
          ) : (
            <div className="flex h-full items-center justify-center rounded-xl bg-card/70 p-4 text-center text-xs text-sub-heading">A numeric measurement is needed to draw this chart.</div>
          )}
        </div>
        {!percentage && value !== null && <p className="mt-3 text-xs text-sub-heading">{chartLabel}{value === 0 ? " ? 0 recorded" : ""}</p>}
      </dd>
      {metric.context && <dd className="mt-4 text-sm leading-relaxed text-foreground">{metric.context}</dd>}
    </div>
  );
}
