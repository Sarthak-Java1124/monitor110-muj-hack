'use client';

import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { date: 'Jun 5', value: 2400 },
  { date: 'Jun 10', value: 1398 },
  { date: 'Jun 15', value: 9800 },
  { date: 'Jun 20', value: 3908 },
  { date: 'Jun 25', value: 4800 },
  { date: 'Jun 30', value: 3800 },
  { date: 'Jul 5', value: 4300 },
  { date: 'Jul 10', value: 7300 },
  { date: 'Jul 12', value: 6400 },
];

export function ActivityChart() {
  return (
    <Card className="col-span-12 md:col-span-6 lg:col-span-5 bg-[#14141A] border-white/5 shadow-lg">
      <CardHeader>
        <CardTitle className="text-white text-lg font-medium">Show your money flow</CardTitle>
      </CardHeader>
      <CardContent className="h-[250px] w-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#7C3AED" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="date" 
              stroke="#475569" 
              fontSize={12} 
              tickLine={false} 
              axisLine={false}
              padding={{ left: 10, right: 10 }}
            />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1E1E26', border: 'none', borderRadius: '8px', color: '#fff' }}
              itemStyle={{ color: '#fff' }}
              cursor={{ stroke: '#7C3AED', strokeWidth: 1, strokeDasharray: '4 4' }}
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#7C3AED" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorValue)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
