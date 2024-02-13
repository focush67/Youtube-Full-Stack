"use client";

interface AnalyticsSummaryItemsProps {
  value: string;
  subtitle: string;
}

const AnalyticsSummaryItems: React.FC<AnalyticsSummaryItemsProps> = ({
  value,
  subtitle,
}) => {
  return (
    <div className="h-full flex flex-col justify-between p-5 rounded-lg bg-neutral-900">
      <h1 className="text-sm md:text-lg lg:text-xl xl:text-2xl lg:text-stone-400 text-md rak-words">
        {value}
      </h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default AnalyticsSummaryItems;
