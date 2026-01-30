
import { NextResponse } from 'next/server';
import { ASSETS } from '@/lib/mock-data';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> } // Params are a Promise in Next.js 15+
) {
    const { id } = await params;
    const asset = ASSETS.find((a) => a.id === id);

    if (!asset) {
        return NextResponse.json({ error: 'Asset not found' }, { status: 404 });
    }

    return NextResponse.json(asset);
}
