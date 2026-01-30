
import { NextResponse } from 'next/server';
import { ASSETS } from '@/lib/mock-data';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const assetId = searchParams.get('asset_id');

    if (!assetId) {
        return NextResponse.json({ error: 'Asset ID is required' }, { status: 400 });
    }

    const asset = ASSETS.find((a) => a.id === assetId);

    if (!asset) {
        return NextResponse.json({ error: 'Asset not found' }, { status: 404 });
    }

    // Generate synthetic 7-day history (hourly points = 7 * 24 = 168 points)
    // This is just a mock generator to creating a realistic looking chart
    const history = [];
    const now = new Date();
    let currentPrice = asset.price_usd;

    // Work backwards from now
    for (let i = 0; i < 168; i++) {
        const time = new Date(now.getTime() - i * 60 * 60 * 1000); // Subtract hours

        // Add some random noise and trend influence
        // If trend_7d is positive, we expect lower prices in the past
        // The daily trend factor helps shape the curve
        const randomChange = (Math.random() - 0.5) * 0.02; // +/- 1% vol per hour

        // Reverse the calculation: prevPrice = currentPrice / (1 + change)
        // simplifying for mock: push price then adjust 'currentPrice' for the next iteration (which is further in the past)

        history.push({
            time: time.toISOString(),
            value: currentPrice
        });

        // Update currentPrice for the previous hour (backwards)
        // If 7d trend is +10%, we want the price 7 days ago to be roughly 10% less.
        // 10% over 168 hours is roughly 0.06% per hour.
        // We adjust by subtracting the trend component + random noise

        const trendFactor = (asset.trend_7d / 100) / 168;

        // If trend is positive, price was lower in past. So currentPrice (for next loop i.e. past) should be lower.
        // current (t) = past (t-1) * (1 + change)
        // past (t-1) = current (t) / (1 + change)

        currentPrice = currentPrice / (1 + trendFactor + randomChange);
    }

    return NextResponse.json(history.reverse());
}
