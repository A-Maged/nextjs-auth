import { jwtVerify } from "jose";

export async function verifyAccessToken(accessToken: string) {
  if (!accessToken) {
    return null;
  }

  const encodedSecret = new TextEncoder().encode(process.env.JWT_ACCESS_TOKEN_SECRET!);

  try {
    const { payload } = await jwtVerify(accessToken, encodedSecret);

    return payload as AuthTokenPayload;
  } catch (error) {
    console.log(error);

    return null;
  }
}

export type AuthTokenPayload = {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
};
