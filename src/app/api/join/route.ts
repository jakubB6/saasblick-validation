import { NextRequest, NextResponse } from "next/server";

const joinNewsletter = async (
  email: string,
  listId: string,
  eoApiKey: string
) => {
  const url = ` https://emailoctopus.com/api/1.6/lists/${listId}/contacts `;
  const headers = {
    "Content-Type": "application/json",
  };
  const data = {
    api_key: eoApiKey,
    email_address: email,
  };

  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  });

  return response;
};

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Invalid email format" },
      { status: 400 }
    );
  }

  const eoApiKey = process.env.EO_API_KEY;
  const listId = process.env.LIST_ID;

  if (!eoApiKey || !listId) {
    return NextResponse.json(
      { error: "Missing required environment variables" },
      { status: 500 }
    );
  }

  const response = await joinNewsletter(email, listId, eoApiKey);

  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to join newsletter" },
      { status: 500 }
    );
  }

  return NextResponse.json({
    message: `Email ${email} received successfully`,
  });
}
