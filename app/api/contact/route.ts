import { NextRequest, NextResponse } from "next/server";
import { pool, ensureTables } from "@/lib/db";

// CORS headers for browser compatibility
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

// Handle preflight requests
export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

// Direct insert into PostgreSQL leads table
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const databaseUrl = process.env.DATABASE_URL;

    if (!databaseUrl) {
      console.error("Database configuration missing");
      return NextResponse.json(
        { error: "Database not configured" },
        { status: 500, headers: corsHeaders }
      );
    }

    // Ensure the tables exist (idempotent)
    await ensureTables();

    // Build notes from form data
    const notes: string[] = [];
    if (body.companySize) notes.push(`Company Size: ${body.companySize}`);
    if (body.currentSystems?.length) notes.push(`Current Systems: ${body.currentSystems.join(", ")}`);
    if (body.biggestChallenge) notes.push(`Biggest Challenge: ${body.biggestChallenge}`);
    if (body.hearAboutUs) notes.push(`How they heard about us: ${body.hearAboutUs}`);
    if (body.sourceUrl) notes.push(`Source URL: ${body.sourceUrl}`);
    if (body.message) notes.push(`Message: ${body.message}`);

    // Build tags
    const tags: string[] = ["odoo-showcase"];
    if (body.companySize) tags.push(`size:${body.companySize}`);
    if (body.biggestChallenge) tags.push(`challenge:${body.biggestChallenge.toLowerCase().replace(/\s+/g, "-")}`);

    const insertQuery = `
      INSERT INTO leads (name, email, phone, company, status, source, notes, tags)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING id
    `;

    const values = [
      body.contactName || body.name || "Unknown",
      body.email,
      body.phone || null,
      body.companyName || body.company || null,
      "new",
      "odoo-showcase",
      notes.join("\n\n"),
      tags,
    ];

    const result = await pool.query(insertQuery, values);

    if (result.rows.length === 0) {
      throw new Error("Failed to insert lead");
    }

    return NextResponse.json(
      { success: true, leadId: result.rows[0].id },
      { status: 201, headers: corsHeaders }
    );
  } catch (error) {
    console.error("Error in POST /api/contact:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500, headers: corsHeaders }
    );
  }
}
