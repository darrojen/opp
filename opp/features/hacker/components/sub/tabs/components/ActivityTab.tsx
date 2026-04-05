
import ActivityChart, {
  ActivityDataPoint,
} from '@/features/hacker/components/sub/tabs/components/ActivityChart';
import { ActivityTabProps } from '../types/types';

export default function ActivityTab({ profile }: ActivityTabProps) {
  /* ── Transform your old data → new multi-series format ── */
  const data: ActivityDataPoint[] = profile.activity.map((d) => ({
    month: d.month,
    values: {
      hackathon: d.value,
      grant: 4,
      internship: 1,
      fellowship: 2,
      job: 0,
    },
  }));

  const maxVal = Math.max(
    ...data.flatMap((d) => Object.values(d.values)),
    10
  );

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">
        Activity Overview
      </h3>

      <ActivityChart data={data} maxVal={maxVal} />
    </div>
  );
}