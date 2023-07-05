import { NextResponse } from 'next/server'
import rawData from '../data/artwork.json'

export async function GET(request: Request, ) {

    return NextResponse.json(rawData, {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        }
      })
}
