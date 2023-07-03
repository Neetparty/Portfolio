import { NextResponse } from 'next/server'
import rawData from '../data/artwork.json'

export async function GET(request: Request, ) {

    return NextResponse.json(rawData)
}
