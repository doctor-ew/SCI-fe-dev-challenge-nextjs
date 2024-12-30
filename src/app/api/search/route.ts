import { NextResponse } from "next/server";

export async function GET(mockRequest: Request) {
    try {
        const url = new URL(mockRequest.url);
        const hp = url.searchParams.get("hp") || "";
        const range = url.searchParams.get("range") || "";
        const hpDecoded = decodeURIComponent(hp);
        const rangeDecoded = decodeURIComponent(range);

        console.log("Received hp parameter:", hp);
        console.log("Decoded hp parameter:", hpDecoded);
        console.log("Received range parameter:", range);
        console.log("Decoded range parameter:", rangeDecoded);

        let query = "";
        if (range) {
            // If range is provided, build a range query
            const [minHp, maxHp] = rangeDecoded.split("-").map(Number);
            if (isNaN(minHp) || isNaN(maxHp)) {
                throw new Error("Invalid range format");
            }
            query = `h>=${minHp}&h<=${maxHp}`;
        } else if (hp) {
            // If a single hp value is provided, use it
            query = `h=${hpDecoded}`;
        } else {
            // If neither hp nor range is provided, return an error
            return NextResponse.json({ error: "No valid query parameter provided" }, { status: 400 });
        }

        console.log("Constructed query:", query);

        const res = await fetch(`https://api.swu-db.com/cards/search?q=${query}&pretty=true`);
        console.log("Upstream API status:", res.status);

        if (!res.ok) {
            const errorText = await res.text();
            console.error("Upstream API Error:", errorText);
            throw new Error(`Failed to fetch upstream: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error("Search API Error:", error);
        return NextResponse.json({ error: "Failed to fetch card data" }, { status: 500 });
    }
}
