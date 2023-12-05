"use client";
export function getImageUrl({
  ownerEmail,
  fileCategory,
  fileName,
}: {
  ownerEmail: string;
  fileCategory: string;
  fileName: string;
}) {
  return `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users/images/${ownerEmail}/${fileCategory}/${fileName}`;
}
