'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const transactions = [
    { name: 'PlayStation Store', date: 'Jun 12', amount: '-$120.50', icon: '🎮', type: 'expense' },
    { name: 'Salary (Nipro)', date: 'Jun 11', amount: '+$3,250.00', icon: '💼', type: 'income' },
    { name: 'Netflix Premium', date: 'Jun 10', amount: '-$15.99', icon: '🎬', type: 'expense' },
    { name: 'James Transfer', date: 'Jun 09', amount: '+$205.99', icon: '👤', type: 'income' },
];

export function TransactionsList() {
  return (
    <Card className="col-span-12 md:col-span-4 lg:col-span-4 bg-[#14141A] border-white/5 h-full">
        <CardHeader>
            <CardTitle className="text-white text-lg">Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="space-y-4">
                {transactions.map((tx, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-lg shadow-sm border border-white/5 group-hover:border-purple-500/30 transition-colors">
                                {tx.icon}
                            </div>
                            <div>
                                <div className="text-white font-medium text-sm">{tx.name}</div>
                                <div className="text-slate-500 text-xs">{tx.date}</div>
                            </div>
                        </div>
                        <div className={`font-semibold text-sm ${tx.type === 'income' ? 'text-green-400' : 'text-white'}`}>
                            {tx.amount}
                        </div>
                    </div>
                ))}
            </div>
        </CardContent>
    </Card>
  );
}
