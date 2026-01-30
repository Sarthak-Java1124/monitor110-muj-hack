
import { NextResponse } from 'next/server';
import { ASSETS } from '@/lib/mock-data';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search')?.toLowerCase();
    const type = searchParams.get('type');
    const category = searchParams.get('category');

    let filteredAssets = ASSETS;

    if (search) {
        filteredAssets = filteredAssets.filter(
            (asset) =>
                asset.asset_symbol.toLowerCase().includes(search) ||
                asset.asset_name.toLowerCase().includes(search) ||
                asset.description.toLowerCase().includes(search) ||
                asset.topic.toLowerCase().includes(search)
        );
    }

    if (type) {
        filteredAssets = filteredAssets.filter((asset) => asset.asset_type === type);
    }

    if (category) {
        filteredAssets = filteredAssets.filter((asset) => asset.category === category);
    }

    return NextResponse.json(filteredAssets);
}
