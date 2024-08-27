import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const contentFilePath = path.join(process.cwd(), 'public', 'assets', 'content', 'content.json');

export async function POST(request: Request) {
  try {
    const content = await request.json();

    // Validate content structure here if needed

    fs.writeFileSync(contentFilePath, JSON.stringify(content, null, 2));
    return NextResponse.json({ message: 'Content updated successfully' });
  } catch (error) {
    console.error('Failed to update content:', error);
    return NextResponse.json({ message: 'Failed to update content' }, { status: 500 });
  }
}
