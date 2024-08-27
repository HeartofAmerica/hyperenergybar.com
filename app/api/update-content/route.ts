import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import fs from 'fs';
import path from 'path';

const contentFilePath = path.join(process.cwd(), 'public', 'assets', 'content', 'content.json');

export async function GET() {
  try {
    const content = fs.readFileSync(contentFilePath, 'utf8');
    return NextResponse.json(JSON.parse(content));
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch content' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { home } = await req.json();
    const updatedContent = {
      home: {
        heroTitle: home.heroTitle,
      },
    };

    fs.writeFileSync(contentFilePath, JSON.stringify(updatedContent, null, 2), 'utf8');

    return NextResponse.json({ message: 'Content updated successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update content' }, { status: 500 });
  }
}
