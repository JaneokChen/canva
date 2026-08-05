import { NextRequest, NextResponse } from "next/server";

export const GET = (
  request: NextRequest,
  { params }: { params: { projectName: string } }
) => {
  const projectName = params.projectName;

  return Response.json({ projectName });
};
